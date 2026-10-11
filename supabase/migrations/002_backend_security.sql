-- Apply after the initial schema.sql in Supabase SQL Editor.
-- Keeps users from granting themselves roles or approving their own submissions.
create or replace function public.is_climatelens_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = (select auth.uid()) and p.role = 'admin'::public.app_role
  );
$$;

create or replace function public.guard_profile_role()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.role is distinct from old.role
     and auth.uid() is not null
     and not public.is_climatelens_admin() then
    raise exception 'Only an administrator can change profile roles';
  end if;
  return new;
end;
$$;
drop trigger if exists protect_profile_role on public.profiles;
create trigger protect_profile_role before update on public.profiles
for each row execute function public.guard_profile_role();

create or replace function public.guard_project_status()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.status is distinct from old.status
     and auth.uid() is not null
     and not public.is_climatelens_admin() then
    if not (old.user_id = auth.uid() and old.status = 'draft' and new.status = 'submitted') then
      raise exception 'Only an administrator can review a submitted project';
    end if;
  end if;
  return new;
end;
$$;
drop trigger if exists project_status_guard on public.project_ideas;
create trigger project_status_guard before update on public.project_ideas
for each row execute function public.guard_project_status();

-- Remove/recreate policies so this migration can be safely re-applied.
drop policy if exists "Admins can read all profiles" on public.profiles;
create policy "Admins can read all profiles" on public.profiles
for select to authenticated using (public.is_climatelens_admin());
drop policy if exists "Admins can update profiles" on public.profiles;
create policy "Admins can update profiles" on public.profiles
for update to authenticated using (public.is_climatelens_admin()) with check (public.is_climatelens_admin());

drop policy if exists "Public can read verified activities" on public.climate_activities;
create policy "Public can read verified activities" on public.climate_activities
for select to anon, authenticated using (verification_status = 'verified');
drop policy if exists "Admins can read all activities" on public.climate_activities;
create policy "Admins can read all activities" on public.climate_activities
for select to authenticated using (public.is_climatelens_admin());
drop policy if exists "Admins can review activities" on public.climate_activities;
create policy "Admins can review activities" on public.climate_activities
for update to authenticated using (public.is_climatelens_admin()) with check (public.is_climatelens_admin());

drop policy if exists "Admins can read all projects" on public.project_ideas;
create policy "Admins can read all projects" on public.project_ideas
for select to authenticated using (public.is_climatelens_admin());
drop policy if exists "Admins can review projects" on public.project_ideas;
create policy "Admins can review projects" on public.project_ideas
for update to authenticated using (public.is_climatelens_admin()) with check (public.is_climatelens_admin());

grant select on public.climate_activities to anon;
