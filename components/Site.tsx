'use client';
import Link from 'next/link';
import LiveClimate from '@/components/LiveClimate';
import {useEffect,useState} from 'react';
import {Leaf,House,Compass,HandHeart,BookOpen,Menu,X,Bell,Search,ArrowRight,ArrowUpRight,Wind,CloudSun,TreePine,Recycle,Lightbulb,MapPin,ChevronDown,CheckCircle2,Activity,Users,FlaskConical,Globe2, Sprout, ShieldCheck, CircleHelp, ChevronRight, Plus, Filter, Download, BookMarked, Sun, Droplets, Waves, Factory, HeartHandshake} from 'lucide-react';
const nav=[['Home','/','home'],['Explore','/explorer','compass'],['Actions','/actions','actions'],['Learn','/learn','learn']];
const states=['Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno','Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','FCT Abuja','Gombe','Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos','Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto','Taraba','Yobe','Zamfara'];
const cats=[['Solar Energy','Clean, renewable power','☀'],['Sustainable Agriculture','Climate-smart farming','♧'],['Waste-to-Energy','Turn waste into resources','♻'],['Forest Restoration','Reforestation & conservation','♣'],['Water Conservation','Protect local water systems','≈'],['Clean Transport','Lower-emission mobility','↗'],['Circular Economy','Reuse, repair and recycle','⟳'],['Green Buildings','Cooler, efficient homes','⌂'],['Air Quality','Monitor and reduce pollution','◉'],['Climate Education','Learn and share knowledge','▤'],['Biodiversity','Protect native species','❋'],['Coastal Resilience','Adapt to coastal risks','⌁'],['Clean Cooking','Safer, cleaner household energy','♨'],['Flood Resilience','Prepare communities for floods','⌑']];
const img={forest:'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85',solar:'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85',wind:'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=85',plant:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=85',river:'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1200&q=85',farm:'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',air:'https://s3.us-east-2.amazonaws.com/afriset-publication-files/519212f1-5587-4446-a887-113b32cf462a/1752145958510_IMG_4697%203-2.jpg'};
function Brand(){return <Link href="/" className="brand"><span className="brand-mark"><Leaf size={19}/></span><span>ClimateLens <small>AFRICA</small></span></Link>}
function Header(){const [open,setOpen]=useState(false);const [notifications,setNotifications]=useState(false);return <><header className="topbar"><Brand/><div className="top-actions"><button aria-label="Notifications" aria-expanded={notifications} className="icon-btn" onClick={()=>setNotifications(!notifications)}><Bell size={19}/><i/></button><Link className="avatar" href="/profile">G</Link><button className="icon-btn mobile-menu" onClick={()=>setOpen(!open)} aria-label="Open menu">{open?<X/>:<Menu/>}</button></div></header>{notifications&&<div className="notification-panel" role="dialog" aria-label="Notifications"><div className="notification-panel-head"><strong>Notifications</strong><button onClick={()=>setNotifications(false)} aria-label="Close notifications"><X size={17}/></button></div><p>You’re all caught up.</p><small>Climate updates and community activity will appear here.</small></div>}{open&&<div className="mobile-drawer"><button className="drawer-close" onClick={()=>setOpen(false)}><X/></button>{[['Home','/'],['Climate Dashboard','/dashboard'],['Climate Explorer','/explorer'],['Solutions Hub','/solutions'],['Community Actions','/actions'],['Innovation Lab','/innovation'],['Project Builder','/project-builder'],['Learning Centre','/learn'],['Research Centre','/research'],['Profile & Account','/profile']].map(x=><Link key={x[1]} href={x[1]} onClick={()=>setOpen(false)}>{x[0]}<ChevronRight size={16}/></Link>)}</div>}</>}
function Bottom(){return <nav className="bottom-nav">{nav.map(([name,url,icon])=>{const I=icon==='home'?House:icon==='compass'?Compass:icon==='actions'?HandHeart:icon==='learn'?BookOpen:Menu;return <Link key={url} href={url}><I size={19}/><span>{name}</span></Link>})}</nav>}
function Shell({children,title,eyebrow}:{children:React.ReactNode,title:string,eyebrow?:string}){return <><Header/><main className="page"><div className="page-heading">{eyebrow&&<div className="eyebrow">{eyebrow}</div>}<h1>{title}</h1></div>{children}</main><Bottom/></>}
function Card({children,className=''}:{children:React.ReactNode,className?:string}){return <section className={'card '+className}>{children}</section>}
function Pill({children}:{children:React.ReactNode}){return <span className="pill">{children}</span>}
function Home(){return <><Header/><main className="home-page"><section className="hero" style={{backgroundImage:`linear-gradient(90deg,rgba(7,48,34,.93),rgba(7,48,34,.24)),url(${img.forest})`}}><div className="hero-kicker"><span className="live-dot"/> CLIMATE KNOWLEDGE · COMMUNITY ACTION</div><h1>See the Change.<br/>Understand the Climate.<br/><em>Shape the Future.</em></h1><p>ClimateLens Africa connects climate knowledge, environmental innovation and community action to help build a more sustainable future.</p><div className="hero-buttons"><Link href="/dashboard" className="btn btn-lime">Explore Data <ArrowRight size={17}/></Link><Link href="/solutions" className="btn btn-glass">Solutions Hub</Link></div><div className="hero-note"><ShieldCheck size={16}/> Evidence-led. Community-powered.</div></section><section className="section-block"><div className="section-title"><div><span className="eyebrow">WHY CLIMATELENS</span><h2>Knowledge into action</h2></div><Link href="/research" className="text-link">Our approach <ArrowUpRight size={15}/></Link></div><div className="pillar-grid"><Link href="/dashboard" className="pillar"><span className="pillar-icon"><Activity/></span><b>Climate Intelligence</b><small>Explore indicators</small></Link><Link href="/explorer" className="pillar"><span className="pillar-icon coral"><CloudSun/></span><b>Regional Challenges</b><small>Understand local risk</small></Link><Link href="/innovation" className="pillar"><span className="pillar-icon blue"><Lightbulb/></span><b>Innovation Projects</b><small>Build solutions</small></Link><Link href="/actions" className="pillar"><span className="pillar-icon"><TreePine/></span><b>Community Actions</b><small>Track real impact</small></Link></div><div className="integrity"><ShieldCheck size={21}/><div><b>Our commitment to integrity</b><p>We separate observed data, open research and community submissions so you can explore, learn and build with confidence.</p></div></div></section><section className="section-block"><div className="section-title"><div><span className="eyebrow">CLIMATE SNAPSHOT</span><h2>Signals worth watching</h2></div><Link href="/dashboard" className="text-link">Full dashboard <ArrowRight size={15}/></Link></div><div className="metric-grid"><Metric label="Temperature anomaly" value="+0.8°C" sub="Illustrative example" tone="orange"/><Metric label="Rainfall" value="1,240 mm" sub="Annual example" tone="blue"/><Metric label="Drought index" value="0.32" sub="Method-dependent" tone="green"/><Metric label="Air quality PM2.5" value="28 µg/m³" sub="Illustrative example" tone="purple"/></div><p className="data-note">Preview figures are illustrative UI data, not live verified measurements.</p></section><section className="section-block"><div className="section-title"><div><span className="eyebrow">EXPLORE SOLUTIONS</span><h2>Small steps. Lasting change.</h2></div><Link href="/solutions" className="text-link">All solutions <ArrowRight size={15}/></Link></div><div className="feature-grid"><Link href="/solutions" className="feature-card"><img src={img.solar} alt="Solar panels in sunlight"/><div><Pill>Renewable energy</Pill><h3>Make clean energy practical</h3><span className="arrow-circle"><ArrowUpRight size={17}/></span></div></Link><Link href="/solutions" className="feature-card"><img src={img.plant} alt="Young plants growing"/><div><Pill>Nature positive</Pill><h3>Restore green spaces</h3><span className="arrow-circle"><ArrowUpRight size={17}/></span></div></Link></div></section><section className="cta-band"><div className="cta-icon"><Sprout/></div><h2>Your community can be part of the change.</h2><p>Record an activity, develop an idea or learn something new today.</p><Link href="/actions" className="btn btn-lime">Take action <ArrowRight size={16}/></Link></section></main><Bottom/></>}
function Metric({label,value,sub,tone='green'}:{label:string,value:string,sub:string,tone?:string}){return <div className={'metric '+tone}><small>{label}</small><strong>{value}</strong><span>{sub}</span><div className="sparkline"><svg viewBox="0 0 120 28" preserveAspectRatio="none"><polyline points="0,23 12,18 24,20 36,10 48,14 60,8 72,13 84,4 96,9 108,3 120,6" fill="none" stroke="currentColor" strokeWidth="2"/></svg></div></div>}
function Dashboard(){
  const [country,setCountry]=useState('Nigeria');
  const [state,setState]=useState('All states');
  const [period,setPeriod]=useState('7D');
  const [customOpen,setCustomOpen]=useState(false);
  const [customStart,setCustomStart]=useState('');
  const [customEnd,setCustomEnd]=useState('');
  const location=state==='All states'?country:state;
  const supported=period==='7D';

  return <Shell title="Climate Intelligence Dashboard" eyebrow="CLIMATE DATA · NIGERIA & AFRICA">
    <p className="intro">Explore current weather and a real seven-day forecast for your selected location.</p>

    <div className="filter-row">
      <label><span>Country</span><select value={country} onChange={e=>{setCountry(e.target.value);setState('All states')}}>
        <option>Nigeria</option><option>Ghana</option><option>Kenya</option><option>South Africa</option>
      </select></label>
      <label><span>State / region</span><select value={state} onChange={e=>setState(e.target.value)}>
        <option>All states</option>
        {(country==='Nigeria'?states:country==='Ghana'?['Accra','Kumasi','Tamale']:country==='Kenya'?['Nairobi','Mombasa','Kisumu']:['Cape Town','Johannesburg','Durban']).map(s=><option key={s}>{s}</option>)}
      </select></label>
    </div>

    <div className="chip-row scroll-chips" aria-label="Forecast period">
      {['7D','30D','90D','1Y','5Y'].map(p=><button type="button" key={p} className={'filter-chip '+(period===p?'active':'')} onClick={()=>{setPeriod(p);setCustomOpen(false)}}>{p}</button>)}
      <button type="button" className={'filter-chip '+(customOpen?'active':'')} onClick={()=>setCustomOpen(!customOpen)}>Custom dates</button>
    </div>

    {customOpen&&<Card><h3>Choose date range</h3>
      <label className="field-label">Start date<input type="date" value={customStart} onChange={e=>setCustomStart(e.target.value)} max={customEnd||undefined}/></label>
      <label className="field-label">End date<input type="date" value={customEnd} onChange={e=>setCustomEnd(e.target.value)} min={customStart||undefined}/></label>
      <p className="data-note">Historical dates need a historical weather-data endpoint; custom dates are not yet connected.</p>
    </Card>}

    <LiveClimate location={location}/>

    {supported?<ForecastChart location={location}/>:<Card>
      <div className="card-head"><div><h3>{period==='Custom dates'?'Custom date range':period+' climate history'}</h3><p>{location}</p></div><span className="chart-tag">Not connected</span></div>
      <p className="muted">This period needs historical weather data. The live seven-day forecast remains available above; no historical values are fabricated.</p>
      <button type="button" className="btn btn-primary full" onClick={()=>setPeriod('7D')}>Return to 7-day forecast</button>
    </Card>}

    <Card>
      <div className="card-head"><h3>Data availability</h3><ShieldCheck size={18} color="#267a51"/></div>
      <div className="source-row"><span>Current weather and 7-day forecast</span><b>Open-Meteo</b></div>
      <div className="source-row"><span>Long-term temperature anomaly</span><b>Not connected</b></div>
      <div className="source-row"><span>Drought, air quality, renewable capacity</span><b>Not connected</b></div>
      <p className="data-note">Forecast values are weather data, not long-term climate trends. Source: <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo</a>.</p>
    </Card>
  </Shell>;
}

function ForecastChart({location}:{location:string}){
  const [data,setData]=useState<any>(null);
  const [error,setError]=useState('');
  const [busy,setBusy]=useState(false);

  useEffect(()=>{
    let active=true;
    setBusy(true);
    setError('');
    fetch('/api/climate?location='+encodeURIComponent(location))
      .then(async r=>{const d=await r.json();if(!r.ok)throw new Error(d.error||'Forecast unavailable');return d})
      .then(d=>{if(active)setData(d)})
      .catch(e=>{if(active)setError(e instanceof Error?e.message:'Forecast unavailable')})
      .finally(()=>{if(active)setBusy(false)});
    return ()=>{active=false};
  },[location]);

  const daily=data?.data?.daily;
  const highs=daily?.temperature_2m_max||[];
  const lows=daily?.temperature_2m_min||[];
  const dates=daily?.time||[];
  const valid=dates.length>0&&highs.length===dates.length&&lows.length===dates.length;
  const all=[...highs,...lows].filter((n:number)=>Number.isFinite(n));
  const min=Math.floor(Math.min(...all)-2);
  const max=Math.ceil(Math.max(...all)+2);
  const x=(i:number)=>dates.length<2?160:12+i*296/(dates.length-1);
  const y=(v:number)=>118-(v-min)/(max-min||1)*94;
  const points=(values:number[])=>values.map((v:number,i:number)=>`${x(i)},${y(v)}`).join(' ');

  return <Card>
    <div className="card-head"><div><h3>7-day temperature forecast</h3><p>{location} · daily highs and lows</p></div><span className="chart-tag">{busy?'Loading':valid?'Live forecast':'Unavailable'}</span></div>
    {valid?<>
      <div className="chart">
        <svg viewBox="0 0 320 135" role="img" aria-label={'Seven-day temperature forecast for '+location}>
          {[25,50,75,100,125].map(v=><path key={v} d={`M0 ${v}H320`} stroke="#e6eee7" strokeWidth="1" fill="none"/>)}
          <polyline points={points(highs)} fill="none" stroke="#e58b48" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
          <polyline points={points(lows)} fill="none" stroke="#409ac0" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
          {highs.map((v:number,i:number)=><circle key={'h'+i} cx={x(i)} cy={y(v)} r="3" fill="#e58b48"/>)}
          {lows.map((v:number,i:number)=><circle key={'l'+i} cx={x(i)} cy={y(v)} r="3" fill="#409ac0"/>)}
        </svg>
        <div className="axis-labels">{dates.map((d:string)=><span key={d}>{new Date(d+'T12:00:00').toLocaleDateString(undefined,{weekday:'short'})}</span>)}</div>
      </div>
      <div className="chip-row"><Pill>🟠 Daily high °C</Pill><Pill>🔵 Daily low °C</Pill></div>
      <div className="source-row"><span>Expected temperature range</span><b>{Math.min(...lows)}°C – {Math.max(...highs)}°C</b></div>
      <p className="data-note">Forecast fetched {data?.fetchedAt?new Date(data.fetchedAt).toLocaleString():'from provider'} · Source: <a href="https://open-meteo.com/" target="_blank" rel="noreferrer">Open-Meteo</a>.</p>
    </>:<p className="data-note">{error||(busy?'Loading forecast…':'Forecast data is not available.')}</p>}
  </Card>;
}
function Explorer(){
const [q,setQ]=useState('');
const [selected,setSelected]=useState('Lagos');
const filtered=states.filter(s=>s.toLowerCase().includes(q.toLowerCase()));
return <Shell title="Climate Explorer" eyebrow="LIVE LOCAL CLIMATE DATA">
<p className="intro">Explore current weather and the 7-day forecast for Nigerian states. Hazard classifications are not available yet.</p>
<div className="searchbox"><Search size={18}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search states (e.g. Lagos, Kano)…"/></div>
<div className="map-toggle"><button className="active" type="button">Location list</button></div>
<Card>
<div className="card-head"><div><span className="eyebrow">SELECT A LOCATION</span><h3>{selected}</h3></div><MapPin color="#267a51"/></div>
<div className="state-list">{filtered.map(s=><button key={s} onClick={()=>setSelected(s)} className={selected===s?'chosen':''}><span>{s}</span><ChevronRight size={16}/></button>)}</div>
</Card>
<LiveClimate location={selected}/>
<ForecastChart location={selected}/>
<Card><h3>Climate risk information</h3><p className="muted">Official state-level flood, drought and heat-risk datasets are not connected yet. Current weather and forecasts should not be treated as verified hazard classifications.</p><Link className="btn btn-primary full" href="/research">Browse research resources <ArrowRight size={16}/></Link></Card>
</Shell>
}
function Solutions(){const [q,setQ]=useState('');const [filter,setFilter]=useState('All');const filtered=cats.filter(c=>(c[0]+c[1]).toLowerCase().includes(q.toLowerCase())&&(filter==='All'||(filter==='Energy'&&['Solar Energy','Clean Transport','Clean Cooking'].includes(c[0]))||(filter==='Nature'&&['Forest Restoration','Biodiversity','Sustainable Agriculture','Water Conservation'].includes(c[0]))||(filter==='Waste'&&['Waste-to-Energy','Circular Economy'].includes(c[0]))));return <Shell title="Solutions Hub" eyebrow="PRACTICAL SUSTAINABILITY"><p className="intro">Search, explore and implement practical climate solutions.</p><div className="searchbox"><Search size={18}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search solutions (e.g. solar, agriculture)…"/></div><div className="chip-row scroll-chips">{['All','Energy','Nature','Waste'].map(f=><button className={'filter-chip '+(filter===f?'active':'')} key={f} onClick={()=>setFilter(f)}>{f}</button>)}</div><div className="solution-grid">{filtered.map((c,i)=><Card key={c[0]} className="solution-card"><span className="solution-symbol">{c[2]}</span><h3>{c[0]}</h3><p>{c[1]}</p><Link href={'/solutions/'+c[0].toLowerCase().replaceAll(' ','-')} className="text-link">Explore steps <ArrowRight size={15}/></Link></Card>)}</div><div className="integrity"><ShieldCheck size={20}/><div><b>Practical guidance, responsibly framed</b><p>Check local rules, resource requirements, safety guidance and community needs before implementation.</p></div></div></Shell>}
function Actions(){
 const [items,setItems]=useState<any[]>([]);const [show,setShow]=useState(false);const [title,setTitle]=useState('');const [category,setCategory]=useState('tree_planting');const [state,setState]=useState('Lagos');const [quantity,setQuantity]=useState('');const [unit,setUnit]=useState('trees');const [busy,setBusy]=useState(false);const [notice,setNotice]=useState('');
 async function load(){try{const r=await fetch('/api/activities');const d=await r.json();if(r.ok)setItems(d.activities||[]);else if(r.status===401)setNotice('Sign in to save and view your activities.')}catch{setNotice('Could not connect to the server.')}}
 useEffect(()=>{void load()},[]);
 async function add(){if(!title.trim())return;setBusy(true);setNotice('');try{const r=await fetch('/api/activities',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,category,state,quantity,unit,participants:1})});const d=await r.json();if(!r.ok){setNotice(d.error||'Could not save activity.');return}setItems([d.activity,...items]);setTitle('');setQuantity('');setShow(false);setNotice('Activity submitted for verification.')}catch{setNotice('Network error. Try again.')}finally{setBusy(false)}}
 const categoryLabel=(v:string)=>({'tree_planting':'Tree planting','clean_up':'Clean-up','waste_recycling':'Waste recycling','environmental_education':'Environmental education','other':'Other'} as Record<string,string>)[v]||v;
 return <Shell title="Community Actions" eyebrow="RECORD · TRACK · VERIFY"><p className="intro">Record, track and verify your environmental activities.</p><button className="btn btn-primary full" onClick={()=>setShow(!show)}><Plus size={17}/> Add activity</button>{show&&<Card><h3>Record an activity</h3><label className="field-label">Activity title<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g. Tree planting at community school"/></label><label className="field-label">Category<select value={category} onChange={e=>setCategory(e.target.value)}><option value="tree_planting">Tree planting</option><option value="clean_up">Clean-up</option><option value="waste_recycling">Waste recycling</option><option value="environmental_education">Environmental education</option><option value="other">Other</option></select></label><label className="field-label">State / location<select value={state} onChange={e=>setState(e.target.value)}>{states.map(s=><option key={s}>{s}</option>)}</select></label><div className="form-row"><label className="field-label">Quantity<input value={quantity} onChange={e=>setQuantity(e.target.value)} placeholder="0" inputMode="decimal"/></label><label className="field-label">Unit<select value={unit} onChange={e=>setUnit(e.target.value)}><option>trees</option><option>kg</option><option>bags</option><option>people</option><option>events</option></select></label></div><button disabled={busy} className="btn btn-primary full" onClick={add}>{busy?'Saving…':'Submit for verification'}</button></Card>}{notice&&<p role="status" className="data-note">{notice} {notice.toLowerCase().includes('sign in')&&<Link href="/auth?next=%2Factions" className="text-link">Sign in / create account</Link>}</p>}<div className="action-metrics"><div className="action-stat"><TreePine/><span>Verified trees</span><b>{items.filter(i=>i.category==='tree_planting'&&i.verification_status==='verified').reduce((n,i)=>n+(Number(i.quantity)||0),0).toLocaleString()}</b><small>Verified records only</small></div><div className="action-stat"><Recycle/><span>Verified waste</span><b>{items.filter(i=>i.category==='waste_recycling'&&i.verification_status==='verified').reduce((n,i)=>n+(Number(i.quantity)||0),0).toLocaleString()} kg</b><small>Quantity as submitted</small></div><div className="action-stat"><Users/><span>Your activities</span><b>{items.length}</b><small>Personal records</small></div></div><div className="section-title compact"><h2>Your activities</h2><button className="subtle-btn" onClick={()=>void load()}><Filter size={15}/> Refresh</button></div><div className="activity-list">{items.map((i)=><div className="activity-row" key={i.id}><span className="activity-icon"><Sprout/></span><div className="activity-copy"><b>{i.title}</b><small>{i.state||i.country} · {categoryLabel(i.category)}</small><span>{i.quantity??'—'} {i.unit||''}</span></div><Pill>{i.verification_status||'pending'}</Pill></div>)}{items.length===0&&<Card><p className="muted">No activities loaded yet. Sign in and submit an activity to start your record.</p></Card>}</div><p className="data-note">Community impact totals must be based on verified records. Your own list includes pending submissions.</p></Shell>}
function Innovation(){const [stage,setStage]=useState(0);const stages=['Problem','Research','Concept','Prototype','Testing','Validation','Deployment'];return <Shell title="Innovation Lab" eyebrow="FROM IDEAS TO IMPACT"><p className="intro">From ideas to impact. Build solutions for a greener tomorrow.</p><Card><h3>Innovation pathway</h3><div className="stage-track">{stages.map((s,i)=><button key={s} className={stage===i?'selected':''} onClick={()=>setStage(i)}><span>{i+1}</span><small>{s}</small></button>)}</div><div className="stage-detail"><b>{stages[stage]}</b><p>{['Define the community problem and who is affected.','Gather credible evidence and learn from existing work.','Develop a practical, testable solution concept.','Build a prototype using appropriate resources.','Test safely and document what happens.','Validate results against measurable success criteria.','Plan responsible delivery, maintenance and learning.'][stage]}</p></div></Card><h2 className="subheading">Featured projects</h2><Card className="project-card"><img src={img.air} alt="Air quality monitoring equipment"/><div className="project-content"><Pill>Air quality · Prototype</Pill><h3>Smart PM2.5 Air Quality Detection & Response System</h3><p>Low-cost sensors, calibration and hotspot mapping for better community awareness.</p><div className="tag-row"><Pill>Sensor calibration</Pill><Pill>Hotspot mapping</Pill></div><Link className="btn btn-primary full" href="/project-builder">Develop this idea <ArrowRight size={16}/></Link></div></Card><Card className="project-card"><img src={img.solar} alt="Solar energy equipment"/><div className="project-content"><Pill>Bioenergy · Concept</Pill><h3>Animal Waste-to-Energy & Organic Briquette Innovation</h3><p>Explore anaerobic digestion and biomass carbonization with appropriate expert supervision and safety controls.</p><div className="tag-row"><Pill>Biogas safety</Pill><Pill>Resource planning</Pill></div><Link className="text-link" href="/project-builder">Start a project brief <ArrowRight size={15}/></Link></div></Card></Shell>}
const steps=[['Basic information','Give your idea a clear title and project type.'],['Problem definition','Describe the climate or environmental problem.'],['Target group','Who is affected and who will benefit?'],['Location & impact','Choose a state and describe the local context.'],['Evidence & research','Add observations, sources and research questions.'],['Proposed solution','Explain how your idea will work.'],['Resources','List people, materials, budget and partners.'],['Implementation plan','Break the work into realistic stages.'],['Metrics & outcomes','Define what success looks like and how to measure it.'],['Risk mitigation','Identify safety, environmental and delivery risks.'],['Maintenance & inclusion','Plan upkeep, accessibility and community ownership.'],['Review & submit','Review the full project brief before sharing.']];
function Builder(){const [step,setStep]=useState(0);const [answers,setAnswers]=useState<string[]>(Array(12).fill(''));const [title,setTitle]=useState('');function update(v:string){const a=[...answers];a[step]=v;setAnswers(a)}function download(){const content='ClimateLens Africa — Project Idea Brief\n\nTitle: '+title+'\n\n'+steps.map((s,i)=>`${i+1}. ${s[0]}\n${answers[i]||'Not completed'}`).join('\n\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([content],{type:'text/plain'}));a.download='climatelens-project-brief.txt';a.click();URL.revokeObjectURL(a.href)}async function saveProject(submit=false){if(!title.trim()){alert('Add a project title first.');return}try{const r=await fetch('/api/projects',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,answers:Object.fromEntries(steps.map((s,i)=>[s[0],answers[i]])),submit})});const d=await r.json();if(!r.ok){alert(d.error||'Could not save. Please sign in.');return}alert(submit?'Project submitted for review.':'Draft saved to your account.')}catch{alert('Network error. Try again.')}}return <Shell title="Project Builder" eyebrow="GUIDED 12-STEP WIZARD"><p className="intro">Turn an environmental challenge into a structured project idea.</p><Card><div className="progress-head"><span>Step {step+1} of 12</span><b>{Math.round((step+1)/12*100)}%</b></div><div className="progress"><span style={{width:`${(step+1)/12*100}%`}}/></div><div className="builder-steps">{steps.map((s,i)=><button key={s[0]} onClick={()=>setStep(i)} className={step===i?'active':answers[i]?'done':''}><span>{answers[i]?<CheckCircle2 size={17}/>:i+1}</span><b>{s[0]}</b><ChevronRight size={16}/></button>)}</div><div className="builder-question"><span className="eyebrow">STEP {step+1}</span><h2>{steps[step][0]}</h2><p>{steps[step][1]}</p>{step===0&&<label className="field-label">Project title<input value={title} onChange={e=>setTitle(e.target.value)} placeholder="e.g. Community tree planting initiative"/></label>}<label className="field-label">Your response<textarea rows={5} value={answers[step]} onChange={e=>update(e.target.value)} placeholder="Describe your idea…"/></label><div className="form-row"><button className="btn btn-outline" disabled={step===0} onClick={()=>setStep(step-1)}>Back</button>{step<11?<button className="btn btn-primary" onClick={()=>setStep(step+1)}>Next step <ArrowRight size={16}/></button>:<button className="btn btn-primary" onClick={download}><Download size={16}/> Download brief</button>}</div><div className="form-row"><button className="btn btn-outline" onClick={()=>saveProject(false)}>Save to account</button><button className="btn btn-outline" onClick={()=>saveProject(true)}>Submit project</button></div><button className="text-link save-link" onClick={download}><Download size={15}/> Download current draft</button></div></Card><div className="integrity"><ShieldCheck/><div><b>Your idea stays a draft</b><p>Drafts and submissions are saved to your account when you are signed in. Download a copy as backup.</p></div></div></Shell>}
function Learn(){
 const [q,setQ]=useState('');
 const [filter,setFilter]=useState('All');
 const [active,setActive]=useState<number|null>(null);
 const [answers,setAnswers]=useState<Record<number,number>>({});
 const [submitted,setSubmitted]=useState(false);
 const [completed,setCompleted]=useState<number[]>([]);
 const courses=[
  {title:'Climate Change Fundamentals',category:'Climate basics',level:'Beginner · 45–60 minutes',image:img.forest,description:'Explore climate science, greenhouse gases, evidence and impacts.',source:'NASA Climate Change',url:'https://science.nasa.gov/climate-change/',lessons:[
   'Climate is the long-term pattern of temperature, rainfall and other atmospheric conditions. Weather describes conditions over shorter periods. A single cold day does not disprove a long-term warming trend.',
   'Earth’s natural greenhouse effect keeps the planet warm enough for life. Greenhouse gases absorb and re-emit heat. Human activities, especially burning coal, oil and gas, have increased concentrations of these gases.',
   'Climate evidence comes from several sources, including thermometer records, ocean measurements, satellites, ice cores and changes in glaciers. Scientists compare multiple lines of evidence rather than relying on one unusual event.',
   'Climate impacts differ by region. Communities may experience heat stress, changing rainfall, floods, droughts, coastal risks and pressure on food and water supplies. Local exposure and preparedness influence the consequences.',
   'Mitigation reduces the causes of climate change, especially greenhouse gas emissions. Adaptation prepares people and ecosystems for actual or expected impacts. Communities often need both approaches.',
   'A good climate claim should identify its source, date, geographic coverage and method. Distinguish a measured observation from a projection, and avoid claiming that one event alone proves a long-term trend.'
  ],quiz:[
   ['A town records an unusually cold week. Someone concludes that global warming has stopped. Which response best reflects climate science?',['One cold week is enough to establish a global trend','Long-term global patterns require evidence across many years and regions','Local weather always matches global averages','Climate records are unnecessary'],1,'Climate describes long-term patterns. A short local cold spell cannot establish the direction of the global trend.'],
   ['A power station burns coal to generate electricity. Which process most directly contributes to human-caused warming?',['Coal removes all carbon dioxide from the air','Combustion releases carbon dioxide that adds to atmospheric greenhouse gases','Electricity production stops the greenhouse effect','Coal changes Earth’s gravity'],1,'Burning coal releases carbon dioxide, a greenhouse gas that contributes to additional warming.'],
   ['Researchers compare satellite observations, ocean measurements and temperature records. Why is using several evidence sources valuable?',['It guarantees every estimate is identical','Independent lines of evidence help test and strengthen conclusions','It removes the need to check data quality','It proves every local storm has the same cause'],1,'Multiple independent observations help scientists evaluate consistency and uncertainty.'],
   ['A community plants heat-tolerant crops and improves its flood warning system. These actions are mainly examples of what?',['Adaptation to climate risks','The complete elimination of global emissions','Proof that climate change has ended','A replacement for all climate research'],0,'Changing crops and improving warnings help people prepare for climate impacts, which is adaptation.'],
   ['A government improves public transport and replaces fossil-fuel electricity with low-carbon energy. What is the main climate purpose?',['Increase exposure to heat','Mitigate greenhouse gas emissions','Measure rainfall without changing emissions','Prevent every natural hazard'],1,'Cleaner transport and electricity can reduce greenhouse gas emissions.'],
   ['A report gives a future rainfall estimate for one region. What should a careful reader check?',['Only the report title','The date, geographic coverage, method and uncertainty','Whether the estimate matches a personal guess','Whether the report avoids all numbers'],1,'Those details help readers understand what a projection represents and its limitations.'],
   ['Which statement best distinguishes weather from climate?',['Weather is short-term atmospheric conditions; climate describes long-term patterns','Weather and climate always mean exactly the same thing','Climate changes every minute but weather never changes','Climate applies only to oceans'],0,'Weather refers to short-term conditions, while climate is assessed over longer periods.'],
   ['A coastal community faces rising sea levels and more damaging coastal flooding. Which plan is most sensible?',['Ignore exposure because every coast has identical risks','Assess local hazards, exposed people and infrastructure before selecting measures','Choose a solution without studying the coastline','Assume one warning system removes every risk'],1,'Risk planning should account for local hazards, exposure and vulnerability before choosing interventions.'],
   ['A single photograph shows a dry reservoir. What conclusion is best supported by that photograph alone?',['It proves the global climate has changed permanently','It documents the reservoir’s appearance at that moment, but more evidence is needed for a trend','It proves drought has no connection to climate','It establishes rainfall patterns across every country'],1,'One image documents a particular observation, not a long-term or global trend by itself.'],
   ['Which combination is most useful for responsible climate action?',['Reliable evidence, emission reduction and locally appropriate adaptation','Unverified claims and no monitoring','One identical plan for every community','Ignoring community needs and maintenance'],0,'Good climate action combines credible evidence with mitigation, adaptation and local planning.']
  ]},
  {title:'Renewable Energy Basics',category:'Solutions',level:'Beginner · 45–60 minutes',image:img.solar,description:'Understand solar, wind, energy storage and practical energy choices.',source:'International Renewable Energy Agency',url:'https://www.irena.org/',lessons:[
   'Renewable energy comes from sources replenished naturally, such as sunlight, wind and flowing water. Renewable does not mean every project has zero environmental impact; location, materials and design still matter.',
   'Solar photovoltaic panels convert sunlight directly into electricity. Their output changes with sunlight, shade, panel orientation, weather and system condition.',
   'Wind turbines convert the energy of moving air into electricity. A suitable site needs appropriate wind resources, access, grid or storage arrangements, and attention to wildlife and nearby communities.',
   'Solar and wind output can vary. Batteries, flexible demand, stronger grids and a mix of electricity sources can help maintain reliable supply.',
   'When comparing an energy project, consider the upfront cost, operating costs, maintenance, lifespan, local skills, safety and the needs of the people who will use it.',
   'Energy efficiency reduces the energy needed to deliver a service. Efficient appliances, insulation where suitable and good maintenance can reduce bills and ease pressure on energy systems.'
  ],quiz:[
   ['A school wants electricity for lights during the day. The roof receives strong sunlight and has little shade. Which technology is a logical option to assess first?',['Solar photovoltaic panels','A coal mine on the roof','A tidal turbine far inland','A system that requires permanent darkness'],0,'Solar photovoltaic panels can convert available sunlight into electricity; a site assessment is still needed.'],
   ['A solar installation produces less electricity on a cloudy afternoon than on a clear afternoon. What is the most likely explanation?',['Clouds can reduce sunlight reaching the panels','Solar panels require coal to absorb sunlight','Clouds permanently destroy every panel','Electricity cannot be stored anywhere'],0,'Solar output depends partly on the sunlight reaching the panels.'],
   ['A community wants to install wind turbines. What should planners investigate before selecting a site?',['Wind resources, access, grid needs and local environmental effects','Only the colour of the turbine','Whether the site has no residents anywhere nearby','The number of sunny days alone'],0,'Wind projects depend on site-specific wind conditions, infrastructure and environmental and community considerations.'],
   ['A solar mini-grid produces more electricity at midday than at night. Which approach can help balance supply and demand?',['Suitable battery storage and demand management','Disconnecting every user at sunset without planning','Removing all safety equipment','Assuming panels produce equal power all night'],0,'Storage and demand management can help balance variable generation and electricity use.'],
   ['Two solar systems have similar purchase prices. One has accessible technicians and spare parts nearby. Why does this matter?',['Maintenance affects reliability and long-term operating costs','Maintenance is unrelated to system performance','Spare parts make sunlight unnecessary','Technicians eliminate every possible fault'],0,'Access to maintenance and spare parts can affect uptime, costs and system life.'],
   ['Which statement about renewable energy is most accurate?',['Every renewable project has zero environmental impact','Renewable sources replenish naturally, but projects still require careful planning','Renewable energy can only be generated from coal','Renewable energy never needs maintenance'],1,'Renewable sources replenish naturally, but equipment, land use and project design still matter.'],
   ['A household replaces inefficient bulbs with efficient LED bulbs. What is the direct benefit?',['Less electricity is needed for similar lighting','The household generates wind automatically','All power outages end permanently','The household no longer needs any energy'],0,'Efficient lighting provides similar service using less electricity.'],
   ['A clinic needs reliable electricity for essential equipment. What should its energy plan prioritise?',['Reliability, load requirements, backup, maintenance and safety','The lowest price without checking capacity','A system too small for the equipment','An installation with no maintenance plan'],0,'Critical facilities need a properly sized and maintained system with a realistic reliability plan.'],
   ['Why might an energy project combine solar generation, storage and grid supply?',['Different components can complement one another and improve reliability','Combining technologies always removes every cost','Batteries generate unlimited energy from nothing','Grid connections make safety checks unnecessary'],0,'A suitable mix can help manage variability and meet demand, depending on the local system.'],
   ['Which comparison gives the fairest picture of an energy option over time?',['Purchase price alone','Upfront cost, operating costs, lifespan, maintenance and service needs','The company logo alone','Peak output without considering actual demand'],1,'Life-cycle and operating considerations provide a more useful comparison than purchase price alone.']
  ]},
  {title:'Sustainable Agriculture',category:'Adaptation',level:'Intermediate · 45–60 minutes',image:img.farm,description:'Learn about soil health, water management and climate-resilient farming.',source:'FAO Climate-Smart Agriculture',url:'https://www.fao.org/climate-smart-agriculture/',lessons:[
   'Healthy soil supports roots, organisms, nutrient cycling and water storage. Soil condition differs by location, so farmers should select practices suited to their crops and local conditions.',
   'Bare soil can be vulnerable to erosion from heavy rain and wind. Suitable ground cover, contour practices and other locally appropriate measures may help protect soil.',
   'Climate-resilient farming uses information about rainfall, temperature, soils, pests and crop needs. No single crop or technique works equally well in every region.',
   'Water planning can include monitoring soil moisture, improving irrigation efficiency, protecting water sources and collecting rainwater where safe and permitted.',
   'Diversifying crops or income can reduce dependence on one harvest, but the right approach depends on land, markets, labour, seed availability and community priorities.',
   'Farm interventions should be evaluated using practical indicators such as yield, soil condition, water use, costs and effects on farmers’ livelihoods.'
  ],quiz:[
   ['After repeated heavy rainfall, a farm loses fertile topsoil. Which response is most relevant to investigate?',['Suitable ground cover and erosion-control practices','Leaving the soil bare throughout the year','Removing every plant from sloping land','Increasing runoff without assessment'],0,'Ground cover and suitable erosion controls can help protect soil, depending on the site.'],
   ['A farmer chooses a crop because a neighbour grows it successfully, but the neighbour farms in a different climate and soil type. What should happen next?',['Assess local rainfall, soil, crop needs and available resources','Assume every farm has identical conditions','Ignore the crop’s water needs','Choose only by the colour of the seed bag'],0,'Crop suitability depends on local conditions and available resources.'],
   ['A farm experiences water shortages during dry periods. Which approach is most useful?',['Assess water availability and crop needs, then improve water-use efficiency','Irrigate without considering supply','Pollute nearby water sources','Ignore seasonal rainfall records'],0,'Planning should start with local supply, demand and efficient use.'],
   ['Why can crop diversification help some farming households?',['It may reduce dependence on a single crop, though results depend on local conditions','It guarantees every crop will succeed','It removes all pest risks','It makes market access unnecessary'],0,'Diversification can spread some risks, but benefits depend on crop suitability and practical constraints.'],
   ['A farmer wants to know whether a soil-conservation practice works. Which evidence is most useful?',['Compare soil loss, soil condition and costs over a suitable period','Count only the number of tools purchased','Use a single observation without context','Ignore differences in rainfall between seasons'],0,'Relevant measurements and context help assess outcomes more reliably.'],
   ['What is one important reason to protect water sources near farms?',['To reduce pollution risks and support safe water availability','To guarantee rain every day','To prevent all seasonal changes','To remove the need for sanitation'],0,'Protecting water sources helps reduce contamination and supports people and ecosystems.'],
   ['A new farming method increases yield but requires unaffordable equipment. What should an evaluation consider?',['Yield alongside cost, accessibility and long-term feasibility','Yield alone under every circumstance','Only the equipment brand','Whether the method sounds modern'],0,'A method must be practical and affordable as well as potentially productive.'],
   ['Which information can help farmers make climate-aware planting decisions?',['Seasonal forecasts, local observations and crop requirements','An unrelated city’s weather only','A single rumour without a source','The date of a machine’s manufacture alone'],0,'Relevant forecasts and local knowledge can inform decisions when interpreted carefully.'],
   ['A project introduces irrigation. What environmental issue should planners also consider?',['Water availability, competing uses and possible effects on nearby ecosystems','Only the colour of irrigation pipes','Whether water can be used without limits','Ignoring downstream communities'],0,'Irrigation planning must consider the source, sustainability and other users.'],
   ['Which approach best supports learning from an agricultural pilot?',['Set measurable indicators, record results and compare them with baseline conditions','Report success before collecting evidence','Change all methods at once without records','Measure only the number of meetings held'],0,'Defined indicators and baseline comparisons help evaluate whether an intervention achieved its aims.']
  ]},
  {title:'Adaptation & Resilience',category:'Adaptation',level:'Beginner · 45–60 minutes',image:img.river,description:'Assess local climate risks and prepare practical community responses.',source:'UN Environment Programme',url:'https://www.unep.org/',lessons:[
   'Climate risk is shaped by hazards, exposure and vulnerability. A hazard can cause different levels of harm depending on where people live, the condition of infrastructure and their resources to prepare.',
   'Community risk assessments identify likely hazards, affected people, essential services and existing strengths. Local residents should be included because they understand local conditions and needs.',
   'Early warning systems work best when information is trusted, understandable, timely and connected to actions people can take.',
   'Preparedness may involve safe routes, emergency contacts, drainage maintenance, protection of essential services and plans for people who need additional assistance.',
   'Nature-based approaches, such as restoring suitable wetlands or protecting mangroves, can provide benefits in appropriate locations. They must be designed for local ecosystems and should not replace necessary safety measures.',
   'After a flood, heatwave or other event, communities can review what worked, identify gaps and update plans. Monitoring helps ensure resources are used effectively.'
  ],quiz:[
   ['Two communities face the same heavy rainfall. One has safe drainage and warning systems; the other has homes in flood-prone areas and limited evacuation options. Why may the impacts differ?',['Exposure, vulnerability and preparedness differ','Rainfall always causes identical damage','Warnings make rainfall impossible','Population needs never affect risk'],0,'Risk depends on more than the hazard: exposure, vulnerability and preparedness influence impacts.'],
   ['A flood warning is technically accurate but arrives after roads are already underwater. What is the main weakness?',['The warning was not timely enough to support protective action','The warning used too much local information','Every warning must be delivered only after flooding','Accuracy makes timing irrelevant'],0,'Warnings need to arrive early enough for people to act.'],
   ['A community maps flood-prone roads and identifies safe shelters. What is the main purpose?',['Improve preparedness and support safer decisions','Guarantee floods never occur','Replace all weather monitoring','Ensure every road remains open during a flood'],0,'Mapping hazards and safe locations supports emergency planning.'],
   ['Who should contribute to a local climate risk assessment?',['Residents, relevant local services and people affected by the risks','Only visitors unfamiliar with the area','Only people who own large buildings','No one outside a central office'],0,'Inclusive planning can reveal local knowledge, barriers and needs that might otherwise be missed.'],
   ['A town is considering restoring mangroves along a suitable coast. What should planners do?',['Assess local ecology, community needs and long-term maintenance','Plant any species anywhere along the coast','Assume restoration removes every coastal hazard','Ignore nearby livelihoods'],0,'Nature-based measures must fit the local ecosystem and community context.'],
   ['A heat action plan is being prepared. Which group may need particular attention during extreme heat?',['People with limited access to cooling, water or timely information','Only people who work indoors with reliable cooling','People who are never exposed to heat','No one, because heat affects everyone identically'],0,'Resources and exposure differ; planning should identify people who may face greater risk.'],
   ['After a flood, a community reviews which warnings reached households and which roads failed. Why is this useful?',['It helps identify gaps and improve future preparedness','It proves future floods cannot happen','It removes the need to maintain infrastructure','It replaces all future risk assessments'],0,'Reviewing outcomes helps communities update plans based on experience and evidence.'],
   ['A project proposes clearing a natural wetland to reduce flood risk elsewhere. What should happen first?',['Assess the wetland’s role and evaluate environmental and social consequences','Assume wetlands have no useful functions','Proceed without studying downstream effects','Measure success only by construction speed'],0,'Wetlands can provide ecosystem services, so proposed changes require careful assessment.'],
   ['A warning is issued, but some households cannot read the language used. What improvement is most appropriate?',['Provide accessible messages through trusted channels and suitable languages','Send the same unreadable message repeatedly','Assume everyone has identical communication access','Stop issuing warnings'],0,'Warnings need to be understandable and accessible to the people who must act.'],
   ['Which measure best indicates whether a preparedness programme is improving?',['Track warning reach, response readiness and identified gaps over time','Count posters without checking who received them','Assume one meeting proves success','Avoid collecting feedback'],0,'Monitoring meaningful indicators helps determine whether preparedness is improving.']
  ]},
  {title:'Biodiversity & Forests',category:'Nature',level:'Beginner · 45–60 minutes',image:img.plant,description:'Explore ecosystems, biodiversity, forests and responsible restoration.',source:'UN Environment Programme',url:'https://www.unep.org/',lessons:[
   'Biodiversity includes variation among living organisms, genes and ecosystems. It supports food production, pollination, water regulation and other ecological functions that people and communities rely on.',
   'Forests store carbon in vegetation and soils, but they also support habitats, livelihoods and water cycles. Protecting existing natural ecosystems is an important part of responsible climate action.',
   'Tree planting is not automatically successful restoration. Species choice, soil and water conditions, land rights, long-term survival and community participation all matter.',
   'Native species are often adapted to local ecological conditions, but restoration decisions should be informed by qualified local expertise and the specific site.',
   'Monitoring should measure survival and ecosystem condition over time, not only how many seedlings were planted on the first day.',
   'Conservation plans work better when they consider local livelihoods, land tenure, community participation and potential unintended effects.'
  ],quiz:[
   ['A group plants 1,000 seedlings but does not monitor them afterward. Why is this insufficient to demonstrate restoration success?',['The number planted does not show how many survived or whether the ecosystem recovered','Every seedling is guaranteed to survive','Restoration has no relationship to ecosystems','Seedling counts always measure biodiversity completely'],0,'Planting counts alone do not show survival, ecosystem condition or long-term outcomes.'],
   ['Why can protecting an existing forest be important for climate action?',['Forests store carbon and support ecosystems and livelihoods','Forests only affect the colour of landscapes','Forest protection guarantees no natural disasters','Trees contain no stored carbon'],0,'Forests hold carbon and provide ecological and social benefits.'],
   ['A restoration project plans to use one fast-growing tree species across very different habitats. What should it do?',['Assess site conditions, ecological suitability and potential impacts first','Assume one species suits every ecosystem','Ignore native biodiversity','Select species based only on seedling price'],0,'Species selection should fit local conditions and account for biodiversity and potential impacts.'],
   ['What does biodiversity include?',['Variation among living organisms and ecosystems','Only the number of buildings in a forest','Only daily weather changes','Only the height of the tallest tree'],0,'Biodiversity covers living organisms and variation within and among ecosystems.'],
   ['A forest provides food and income for nearby residents. What should conservation planners consider?',['Community livelihoods, participation and access rights','Only satellite images, never local people','Removing residents from every discussion','The project logo rather than local effects'],0,'Conservation needs to account for people, livelihoods and rights as well as ecological goals.'],
   ['Which indicator is most useful for a tree-planting project after one year?',['Seedling survival and site condition alongside the original planting count','The number of shovels bought only','The length of the launch ceremony','The number of social media likes alone'],0,'Survival and ecological condition provide evidence beyond initial planting totals.'],
   ['A wetland supports birds, fish and floodwater storage. Why might protecting it be valuable?',['It can support biodiversity and provide ecosystem services','It has value only when drained','It prevents every possible flood','It makes water monitoring unnecessary'],0,'Wetlands can support species and provide benefits such as water storage, depending on the site.'],
   ['A proposed tree-planting site is naturally a grassland with specialised native species. What is the most responsible first step?',['Assess the original ecosystem and consult local ecological expertise','Plant trees immediately without assessment','Assume every open area is degraded forest','Ignore the existing species'],0,'Not every open landscape is degraded forest; restoration should fit the original ecosystem.'],
   ['How can a conservation project check whether it is working over several years?',['Monitor habitat condition, species indicators and community outcomes','Count only launch-day attendance','Avoid comparing results over time','Assume success because funding was received'],0,'Long-term monitoring helps establish ecological and social outcomes.'],
   ['Why is community involvement useful in ecosystem restoration?',['Residents can contribute local knowledge and help shape workable, lasting plans','It guarantees every species will thrive immediately','It removes the need for scientific assessment','It makes maintenance unnecessary'],0,'Local knowledge and participation can improve relevance, ownership and long-term care.']
  ]},
  {title:'Air Quality & Health',category:'Research',level:'Intermediate · 45–60 minutes',image:img.air,description:'Understand particulate pollution, monitoring quality and exposure reduction.',source:'World Health Organization',url:'https://www.who.int/health-topics/air-pollution',lessons:[
   'Air pollution includes gases and particles that can harm health. Sources may include traffic, industry, open burning, power generation and household fuels, depending on the location.',
   'PM2.5 describes airborne particles with an aerodynamic diameter of 2.5 micrometres or less. These fine particles can penetrate deeply into the respiratory system.',
   'Air pollution levels vary by time and place. Wind, weather, local sources, traffic patterns and indoor activities can influence exposure.',
   'Sensors need appropriate placement, maintenance and quality checks. Low-cost sensors can be useful for local awareness, but their readings may require comparison with reference instruments and careful interpretation.',
   'Reducing pollution at its source is important for protecting public health. Individual protective actions can help in some circumstances, but they do not replace broader emission controls.',
   'Good research records the measurement location, time, units, instrument, method and limitations. Do not compare readings blindly if the instruments or conditions differ.'
  ],quiz:[
   ['A monitoring team records PM2.5 near a busy road. What does PM2.5 refer to?',['Fine airborne particles with an aerodynamic diameter of 2.5 micrometres or less','A measure of daily rainfall','A unit for wind direction','The number of cars per hour'],0,'PM2.5 refers to fine particulate matter defined by particle size.'],
   ['Two air-quality sensors at different locations report different values. What is the best next step?',['Check timing, placement, calibration and local conditions before comparing','Assume one sensor must be dishonest','Average the values without checking units','Ignore all measurements permanently'],0,'Differences may reflect real local variation or differences in methods and instrument performance.'],
   ['A low-cost sensor is used to map pollution hotspots. What improves confidence in its data?',['Suitable placement, maintenance and comparison with reliable reference measurements where possible','Hiding the measurement method','Changing units without recording the change','Assuming every sensor is perfectly accurate'],0,'Quality checks and clear methods help assess the reliability of sensor measurements.'],
   ['A city wants to reduce long-term exposure to traffic-related air pollution. Which strategy addresses the source?',['Reduce vehicle emissions through appropriate transport and emission measures','Move the monitoring display indoors','Stop recording pollution levels','Add more open burning near roads'],0,'Reducing emissions from vehicles addresses an important source of traffic-related pollution.'],
   ['A report compares two PM2.5 readings but gives no units or measurement times. Why is this a problem?',['The comparison lacks context needed to interpret the measurements','Units and timing never matter for air quality','Every reading is valid for every time period','A larger number always means a safer atmosphere'],0,'Units, timing and context are needed to interpret and compare measurements responsibly.'],
   ['Which can contribute to outdoor air pollution in some communities?',['Open waste burning and vehicle exhaust','Only clean drinking water','Reading a printed report','Measuring tree height'],0,'Open burning and vehicle exhaust can release pollutants into outdoor air.'],
   ['A community receives an official alert about severe pollution. What is a reasonable response?',['Follow trusted local health guidance and consider reducing strenuous outdoor activity','Assume the alert cannot affect health','Create more smoke to test the alert','Ignore the time and location of the warning'],0,'Following reliable local guidance can help people reduce exposure during severe pollution episodes.'],
   ['Why should a monitoring report state where and when a sample was collected?',['Pollution can vary by place and time','Every location has identical air quality','The sampling location never affects results','Time is unrelated to environmental measurements'],0,'Air quality changes with location, time and conditions, so this context matters.'],
   ['A school wants to understand indoor air quality. Which approach is most useful?',['Assess indoor sources, ventilation and relevant measurements','Use a reading from another country as the only evidence','Ignore cooking and combustion sources','Measure only the colour of the walls'],0,'Indoor sources, ventilation and appropriate measurements help explain indoor air conditions.'],
   ['Which approach offers the strongest long-term public-health benefit?',['Reduce pollution emissions while monitoring air quality and protecting exposed groups','Rely only on personal masks and permit unlimited emissions','Stop collecting evidence about pollution','Move all monitors away from polluted areas'],0,'Source reduction, monitoring and protection of exposed groups work together to address air pollution.']
  ]}
 ];
 const shown=courses.map((c,i)=>({...c,id:i})).filter(c=>(c.title+' '+c.description+' '+c.category).toLowerCase().includes(q.toLowerCase())&&(filter==='All'||c.category===filter));
 const course=active===null?null:courses[active];
 const score=course?course.quiz.reduce((n,item,i)=>n+(answers[i]===item[2]?1:0),0):0;
 function openCourse(i:number){setActive(i);setAnswers({});setSubmitted(false)}
 function closeCourse(){setActive(null);setAnswers({});setSubmitted(false)}
 return <Shell title="Learning Centre" eyebrow="LEARN · QUESTION · GROW">
  <p className="intro">Explore climate science, learn practical skills and test your knowledge with scenario-based quizzes.</p>
  <div className="action-metrics">
   <div className="action-stat"><BookOpen/><span>Courses</span><b>{courses.length}</b><small>Climate learning paths</small></div>
   <div className="action-stat"><CheckCircle2/><span>Completed</span><b>{completed.length}</b><small>On this device</small></div>
   <div className="action-stat"><Activity/><span>Progress</span><b>{Math.round(completed.length/courses.length*100)}%</b><small>Courses completed</small></div>
  </div>
  {course?<Card>
   <button className="subtle-btn" onClick={closeCourse}>← All courses</button>
   <Pill>{course.category}</Pill><h2 className="subheading">{course.title}</h2>
   <p className="muted">Course reading · {course.lessons.length} sections · 10-question assessment</p>
   {course.lessons.map((body,i)=><section key={i} style={{marginTop:20}}><h3>{i+1}. {['Core concepts','How the system works','Evidence and observation','Understanding local impacts','Planning practical responses','Measuring results'][i]}</h3><p>{body}</p></section>)}
   <div className="stage-detail" style={{marginTop:24}}>
    <div className="progress-head"><b>Knowledge assessment</b><span>{submitted?'Results':'10 questions'}</span></div>
    <p>Read each scenario carefully. Choose the best answer. Your result and explanations will appear after you submit the assessment.</p>
    {course.quiz.map((item,i)=><div key={i} style={{padding:'18px 0',borderTop:'1px solid #dce5dd'}}>
     <b>{i+1}. {item[0]}</b>
     <div style={{display:'grid',gap:8,marginTop:12}}>
      {(item[1] as string[]).map((option: string,j: number)=><button key={j} disabled={submitted} onClick={()=>setAnswers(prev=>({...prev,[i]:j}))} className="btn btn-outline" style={{justifyContent:'flex-start',textAlign:'left',whiteSpace:'normal',height:'auto',padding:'12px',background:submitted&&j===item[2]?'#e5f4e8':answers[i]===j?'#edf2ff':'white',borderColor:submitted&&j===item[2]?'#267a51':answers[i]===j?'#5675bd':'#d5dfd7'}}>{String.fromCharCode(65+j)}. {option}</button>)}
     </div>
     {submitted&&<p style={{marginTop:10,lineHeight:1.6}}><b>{answers[i]===item[2]?'Your answer is correct.':`Correct answer: ${(item[1] as string[])[Number(item[2])]}.`}</b> {item[3]}</p>}
    </div>)}
    {submitted?<><h3>Your score: {score}/10 ({score*10}%)</h3><p>{score>=8?'Excellent work. You have a strong grasp of this course.':score>=5?'Good start. Review the explanations above and strengthen the areas you missed.':'Keep learning. Revisit the course sections and try the assessment again.'}</p><button className="btn btn-primary full" onClick={()=>openCourse(active!)}>Retake assessment</button><button className="btn btn-outline full" style={{marginTop:8}} onClick={closeCourse}>Back to courses</button></>:<button disabled={Object.keys(answers).length!==course.quiz.length} className="btn btn-primary full" onClick={()=>{setSubmitted(true);if(active!==null&&!completed.includes(active))setCompleted(prev=>[...prev,active])}}>Submit all answers ({Object.keys(answers).length}/10)</button>}
   </div>
   <p className="data-note">Progress is currently kept in this open session. Course material is educational; check local evidence and official guidance before making decisions.</p>
   <p className="data-note">Further reading: <a href={course.url} target="_blank" rel="noreferrer" className="text-link">{course.source} ↗</a></p>
  </Card>:<>
   <div className="searchbox"><Search size={18}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search climate courses…"/></div>
   <div className="chip-row scroll-chips">{['All','Climate basics','Adaptation','Solutions','Nature','Research'].map(f=><button key={f} onClick={()=>setFilter(f)} className={'filter-chip '+(filter===f?'active':'')}>{f}</button>)}</div>
   <div className="course-list">{shown.map(c=><Card className="course-card" key={c.title}><img src={c.image} alt={c.title}/><div><Pill>{c.category}</Pill><h3>{c.title}</h3><small>{c.level} · 6 learning sections</small><p>{c.description}</p><p><b>Assessment:</b> 10 scenario-based questions with explanations.</p>{completed.includes(c.id)&&<p style={{color:'#267a51',fontWeight:700}}>✓ Assessment submitted</p>}<button className="btn btn-primary" onClick={()=>openCourse(c.id)}>{completed.includes(c.id)?'Study again':'Start learning'} <ArrowRight size={15}/></button></div></Card>)}</div>
   {shown.length===0&&<Card><p>No courses match your search. Try another keyword or category.</p></Card>}
  </>}
  <p className="data-note">Learning references include NASA, IRENA, FAO, UNEP and WHO. This course content is a learning aid; consult the linked organisations and relevant local authorities for current guidance.</p>
 </Shell>
}
function Research(){const [q,setQ]=useState('');const resources=[['Climate change fundamentals','NASA Climate Change','https://climate.nasa.gov/'],['Climate information for Africa','World Meteorological Organization','https://wmo.int/'],['Nigeria climate information','Nigerian Meteorological Agency (NiMet)','https://nimet.gov.ng/'],['Climate adaptation & resilience','UN Environment Programme','https://www.unep.org/'],['Research methods & evidence','NASA Earthdata','https://www.earthdata.nasa.gov/'],['Renewable energy data','International Renewable Energy Agency','https://www.irena.org/'],['Global climate indicators','Copernicus Climate Change Service','https://climate.copernicus.eu/']];const shown=resources.filter(r=>(r[0]+r[1]).toLowerCase().includes(q.toLowerCase()));return <Shell title="Research Centre" eyebrow="SOURCES · EVIDENCE · QUESTIONS"><p className="intro">Explore climate knowledge, source material and research tools.</p><div className="searchbox"><Search size={18}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search topics, sources or keywords…"/></div><Card><div className="card-head"><h3>Research starting points</h3><BookMarked color="#267a51"/></div>{shown.map(r=><a className="resource-row" key={r[0]} href={r[2]} target="_blank" rel="noreferrer"><span className="resource-icon"><Globe2/></span><span><b>{r[0]}</b><small>{r[1]}</small><em>{r[2].replace('https://','')}</em></span><ArrowUpRight size={17}/></a>)}</Card><ResearchNotes/><div className="integrity"><ShieldCheck/><div><b>Check the source before using it</b><p>Record publication dates, methods, units, geographic coverage and limitations. These links are starting points, not endorsements of every claim.</p></div></div></Shell>}
function ResearchNotes(){const [note,setNote]=useState('');return <Card><h3>Research notes</h3><p className="muted">Capture a question, source or key finding for this session.</p><textarea rows={4} value={note} onChange={e=>setNote(e.target.value)} placeholder="Research question, source, evidence…"/><button className="btn btn-outline full" onClick={()=>{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([note],{type:'text/plain'}));a.download='climatelens-research-notes.txt';a.click();URL.revokeObjectURL(a.href)}}><Download size={16}/> Download notes</button></Card>}
function Profile(){
 const [user,setUser]=useState<any>(null);
 const [profile,setProfile]=useState({display_name:'',country:'Nigeria',role:'registered'});
 const [loading,setLoading]=useState(true);
 const [saving,setSaving]=useState(false);
 const [notice,setNotice]=useState('');
 const [error,setError]=useState('');

 useEffect(()=>{
  let active=true;
  async function load(){
   try{
    const {createClient}=await import('@/lib/supabase/client');
    const sb=createClient();
    const {data:{user},error:authError}=await sb.auth.getUser();
    if(authError)throw authError;
    if(!user){if(active){setUser(null);setLoading(false)}return}
    const {data,error}=await sb.from('profiles').select('display_name,country,role').eq('id',user.id).maybeSingle();
    if(error)throw error;
    if(active){
     setUser(user);
     setProfile({
      display_name:data?.display_name||user.user_metadata?.display_name||'',
      country:data?.country||'Nigeria',
      role:data?.role||'registered'
     });
    }
   }catch(e){
    if(active)setError(e instanceof Error?e.message:'Could not load your profile.');
   }finally{if(active)setLoading(false)}
  }
  void load();
  return ()=>{active=false};
 },[]);

 async function save(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault();
  if(!user)return;
  setSaving(true);setError('');setNotice('');
  try{
   const {createClient}=await import('@/lib/supabase/client');
   const sb=createClient();
   const name=profile.display_name.trim();
   if(!name)throw new Error('Please enter your name.');
   const {error}=await sb.from('profiles').update({
    display_name:name,
    country:profile.country,
    updated_at:new Date().toISOString()
   }).eq('id',user.id);
   if(error)throw error;
   const {error:metaError}=await sb.auth.updateUser({data:{display_name:name}});
   if(metaError)throw metaError;
   setNotice('Profile saved successfully.');
  }catch(e){setError(e instanceof Error?e.message:'Could not save your profile.')}
  finally{setSaving(false)}
 }

 async function signOut(){
  setError('');setNotice('');
  try{
   const {createClient}=await import('@/lib/supabase/client');
   const {error}=await createClient().auth.signOut();
   if(error)throw error;
   window.location.href='/auth';
  }catch(e){setError(e instanceof Error?e.message:'Could not sign out.')}
 }

 return <Shell title="Profile & Account" eyebrow="YOUR CLIMATELENS">
  {loading?<Card><p className="muted">Loading your account…</p></Card>:!user?
   <Card className="profile-hero">
    <div className="profile-avatar">G</div>
    <div><h3>Guest Explorer</h3><p>Sign in to manage your profile and save your climate work.</p>
     <Link href="/auth?next=%2Fprofile" className="btn btn-primary">Sign in / Create account</Link>
    </div>
   </Card>:
   <>
    <Card className="profile-hero">
     <div className="profile-avatar">{(profile.display_name||user.email||'U').charAt(0).toUpperCase()}</div>
     <div><h3>{profile.display_name||'Climate Explorer'}</h3><p>{user.email}</p><Pill>{profile.role.replace('_',' ')}</Pill></div>
    </Card>
    <Card>
     <h3>Personal information</h3>
     <p className="muted">Update the details associated with your account.</p>
     <form onSubmit={save}>
      <label className="field-label">Full name
       <input required maxLength={100} value={profile.display_name} onChange={e=>setProfile({...profile,display_name:e.target.value})} placeholder="Your full name"/>
      </label>
      <label className="field-label">Country
       <select value={profile.country} onChange={e=>setProfile({...profile,country:e.target.value})}>
        {['Nigeria','Ghana','Kenya','South Africa','Uganda','Tanzania','Rwanda','Ethiopia','Senegal','Cameroon','Other'].map(c=><option key={c}>{c}</option>)}
       </select>
      </label>
      <label className="field-label">Email address
       <input type="email" value={user.email||''} readOnly aria-readonly="true"/>
      </label>
      <button disabled={saving} className="btn btn-primary full">{saving?'Saving…':'Save profile'}</button>
     </form>
    </Card>
    <Card>
     <h3>Your ClimateLens</h3>
     <Link className="settings-row" href="/actions"><span><b>My activities</b><small>View your submitted community actions</small></span><ChevronRight/></Link>
     <Link className="settings-row" href="/project-builder"><span><b>My projects</b><small>Continue developing climate ideas</small></span><ChevronRight/></Link>
     <Link className="settings-row" href="/learn"><span><b>Learning centre</b><small>Explore climate learning resources</small></span><ChevronRight/></Link>
    </Card>
    <Card>
     <h3>Account security</h3>
     <Link href="/auth" className="settings-row"><span><b>Password help</b><small>Sign in or request a password reset</small></span><ChevronRight/></Link>
     <button type="button" className="btn full" onClick={signOut}>Sign out</button>
    </Card>
   </>
  }
  {error&&<p role="alert" className="data-note">{error}</p>}
  {notice&&<p role="status" className="data-note">{notice}</p>}
  <div className="integrity"><ShieldCheck/><div><b>Your account, your data</b><p>Your profile is loaded from your signed-in account. Your role is read-only here and cannot be changed from this page.</p></div></div>
 </Shell>
}
function MenuPage(){return <Shell title="Explore ClimateLens" eyebrow="ALL MODULES"><p className="intro">Your climate knowledge and action workspace.</p><div className="menu-list">{[['Climate Dashboard','/dashboard','Climate indicators and trends',Activity],['Climate Explorer','/explorer','Explore Nigeria’s states',Compass],['Solutions Hub','/solutions','14 sustainability categories',Lightbulb],['Community Actions','/actions','Record and track activities',HandHeart],['Innovation Lab','/innovation','Move ideas toward deployment',FlaskConical],['Project Builder','/project-builder','Create a structured project brief',Sprout],['Learning Centre','/learn','Courses and climate fundamentals',BookOpen],['Research Centre','/research','Sources and research notes',Globe2],['Profile & Account','/profile','Account settings and projects',Users]].map(([t,u,d,I]:any)=><Link key={u} href={u} className="menu-row"><span className="menu-icon"><I size={20}/></span><span><b>{t}</b><small>{d}</small></span><ChevronRight size={18}/></Link>)}</div></Shell>}
export default function Site({section}:{section:string}){switch(section){case 'home':return <Home/>;case 'dashboard':return <Dashboard/>;case 'explorer':return <Explorer/>;case 'solutions':return <Solutions/>;case 'actions':return <Actions/>;case 'innovation':return <Innovation/>;case 'project-builder':return <Builder/>;case 'learn':return <Learn/>;case 'research':return <Research/>;case 'profile':return <Profile/>;case 'menu':return <MenuPage/>;default:return <Shell title="Page not found"><Link href="/" className="btn btn-primary">Return home</Link></Shell>}}
