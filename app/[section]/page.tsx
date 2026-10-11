import Site from '@/components/Site';
export function generateStaticParams(){return ['dashboard','explorer','solutions','actions','innovation','project-builder','learn','research','profile','menu'].map(section=>({section}));}
export default async function SectionPage({params}:{params:Promise<{section:string}>}){const {section}=await params;return <Site section={section}/>}
