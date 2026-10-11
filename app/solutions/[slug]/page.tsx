import Link from 'next/link';
import { notFound } from 'next/navigation';

const solutions: Record<string, {
  title: string;
  description: string;
  benefits: string[];
  steps: string[];
}> = {
  'solar-energy': {
    title: 'Solar Energy',
    description: 'Explore how solar power can provide cleaner electricity for homes, schools, businesses and communities.',
    benefits: [
      'Reduce dependence on fuel-powered generators.',
      'Support access to electricity in underserved communities.',
      'Reduce emissions from fossil-fuel electricity.'
    ],
    steps: [
      'Assess the electricity needs of your home or community.',
      'Check available sunlight, roof condition and installation space.',
      'Compare reputable installers, equipment quality and total costs.',
      'Choose suitable panels, an inverter and batteries if needed.',
      'Use a qualified installer and arrange regular maintenance.'
    ]
  },
  'sustainable-agriculture': {
    title: 'Sustainable Agriculture',
    description: 'Discover farming practices that protect soil, conserve water and help communities adapt to changing weather.',
    benefits: [
      'Improve soil health and protect farmland.',
      'Use water more efficiently.',
      'Support resilient food production.'
    ],
    steps: [
      'Identify local soil conditions, crops and seasonal weather patterns.',
      'Use compost or other appropriate soil-improvement methods.',
      'Practise crop rotation and consider suitable cover crops.',
      'Use water-saving irrigation where practical.',
      'Monitor crop health and seek advice from local agricultural experts.'
    ]
  },
  'waste-to-energy': {
    title: 'Waste-to-Energy',
    description: 'Learn how suitable organic waste can be converted into useful energy through properly managed systems.',
    benefits: [
      'Recover energy from suitable waste materials.',
      'Reduce some waste sent to disposal sites.',
      'Create opportunities for local waste-management projects.'
    ],
    steps: [
      'Assess the types and quantities of waste available locally.',
      'Separate organic waste from plastics, metals and hazardous materials.',
      'Consult qualified experts to assess suitable conversion technologies.',
      'Check environmental permits, costs and community safety requirements.',
      'Operate and monitor the system under trained supervision.'
    ]
  },
  'forest-restoration': {
    title: 'Forest Restoration',
    description: 'Support the recovery of forests and other natural habitats using locally appropriate approaches.',
    benefits: ['Restore habitat for wildlife.', 'Protect soil and water systems.', 'Support carbon storage.'],
    steps: ['Identify degraded areas with community permission.', 'Select suitable native species.', 'Prepare a planting and maintenance plan.', 'Protect young trees from damage.', 'Monitor survival and replace failed seedlings when appropriate.']
  },
  'water-conservation': {
    title: 'Water Conservation',
    description: 'Explore practical ways to reduce water waste and protect local water resources.',
    benefits: ['Reduce avoidable water loss.', 'Improve water availability.', 'Support healthier ecosystems.'],
    steps: ['Check where water is used and wasted.', 'Repair leaks and use water-efficient equipment.', 'Consider safe rainwater collection where appropriate.', 'Protect waterways from waste and pollution.', 'Monitor water use and local water quality.']
  },
  'clean-transport': {
    title: 'Clean Transport',
    description: 'Explore transport choices and planning that can reduce emissions and improve local air quality.',
    benefits: ['Reduce transport-related emissions.', 'Support cleaner urban air.', 'Encourage more efficient journeys.'],
    steps: ['Review common local travel routes.', 'Consider walking, cycling or public transport where safe.', 'Improve trip planning and vehicle sharing.', 'Assess electric vehicles against local charging access and costs.', 'Maintain vehicles to the manufacturer’s recommendations.']
  },
  'circular-economy': {
    title: 'Circular Economy',
    description: 'Keep products and materials in use for longer through repair, reuse and responsible recycling.',
    benefits: ['Reduce waste.', 'Conserve materials.', 'Create opportunities for repair and reuse businesses.'],
    steps: ['Identify materials frequently thrown away.', 'Reduce unnecessary purchases and packaging.', 'Repair or reuse items where practical.', 'Separate recyclable materials for reliable collection.', 'Track how much waste is diverted from disposal.']
  },
  'green-buildings': {
    title: 'Green Buildings',
    description: 'Improve buildings to use energy and water efficiently while providing comfortable indoor spaces.',
    benefits: ['Reduce energy consumption.', 'Improve indoor comfort.', 'Lower avoidable operating costs.'],
    steps: ['Assess sunlight, ventilation and heat entering the building.', 'Improve shading and suitable insulation.', 'Use efficient lighting and appliances.', 'Fix leaks and consider water-efficient fittings.', 'Measure energy and water use after improvements.']
  },
  'air-quality': {
    title: 'Air Quality',
    description: 'Understand local air pollution sources and practical ways to reduce exposure and emissions.',
    benefits: ['Increase awareness of pollution sources.', 'Support better community decisions.', 'Encourage cleaner household and transport choices.'],
    steps: ['Identify likely local pollution sources.', 'Consult reliable air-quality measurements where available.', 'Reduce open burning and improve waste collection.', 'Consider cleaner cooking and transport options.', 'Share verified information with the community.']
  },
  'climate-education': {
    title: 'Climate Education',
    description: 'Help people understand climate change, local environmental risks and practical responses.',
    benefits: ['Build climate knowledge.', 'Support informed community decisions.', 'Encourage responsible environmental action.'],
    steps: ['Identify the audience and learning needs.', 'Use reliable, clearly sourced educational materials.', 'Connect lessons to local environmental examples.', 'Organise discussions or practical activities.', 'Gather feedback and improve future sessions.']
  },
  'biodiversity': {
    title: 'Biodiversity',
    description: 'Protect native plants, animals and the habitats that support healthy ecosystems.',
    benefits: ['Protect wildlife habitats.', 'Support ecosystem resilience.', 'Preserve natural resources.'],
    steps: ['Identify local habitats and native species.', 'Avoid disturbing sensitive areas.', 'Plant appropriate native species where suitable.', 'Reduce pollution and invasive-species risks.', 'Work with local conservation groups and monitor results.']
  },
  'coastal-resilience': {
    title: 'Coastal Resilience',
    description: 'Explore approaches that help coastal communities prepare for erosion, flooding and other coastal risks.',
    benefits: ['Improve risk awareness.', 'Support better community preparedness.', 'Protect suitable natural coastal habitats.'],
    steps: ['Consult official local flood and coastal-risk information.', 'Identify exposed people, infrastructure and ecosystems.', 'Develop community preparedness and evacuation plans.', 'Assess nature-based options with qualified local experts.', 'Review plans as risks and conditions change.']
  },
  'clean-cooking': {
    title: 'Clean Cooking',
    description: 'Explore safer and cleaner household cooking options suited to local needs and resources.',
    benefits: ['Reduce smoke exposure when cleaner systems are used correctly.', 'Improve cooking efficiency.', 'Reduce demand for some traditional fuels.'],
    steps: ['Assess household cooking needs and available fuels.', 'Compare suitable clean cooking technologies and running costs.', 'Choose equipment that meets relevant safety standards.', 'Ensure safe installation, ventilation and use.', 'Maintain equipment and follow manufacturer guidance.']
  },
  'flood-resilience': {
    title: 'Flood Resilience',
    description: 'Help households and communities prepare for flooding using local risk information and practical planning.',
    benefits: ['Improve preparedness.', 'Reduce avoidable damage.', 'Help communities respond more safely.'],
    steps: ['Check official flood warnings and local hazard information.', 'Keep drains and waterways clear without entering dangerous areas.', 'Prepare emergency contacts and essential supplies.', 'Plan safe evacuation routes with local authorities.', 'Avoid walking or driving through floodwater.']
  }
};

export function generateStaticParams() {
  return Object.keys(solutions).map(slug => ({ slug }));
}

export default async function SolutionDetail({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const solution = solutions[slug];

  if (!solution) notFound();

  return (
    <main style={{maxWidth: 850, margin: '0 auto', padding: '32px 20px 100px'}}>
      <Link href="/solutions" style={{color: '#267a51'}}>← Back to Solutions Hub</Link>
      <p style={{marginTop: 32, color: '#267a51', fontWeight: 700}}>CLIMATELENS AFRICA · SOLUTIONS</p>
      <h1 style={{fontSize: 'clamp(32px, 6vw, 48px)', marginBottom: 12}}>{solution.title}</h1>
      <p style={{fontSize: 18, lineHeight: 1.7}}>{solution.description}</p>

      <h2 style={{marginTop: 32}}>Potential benefits</h2>
      <ul style={{lineHeight: 2}}>
        {solution.benefits.map(item => <li key={item}>{item}</li>)}
      </ul>

      <h2 style={{marginTop: 32}}>Practical steps</h2>
      <ol style={{lineHeight: 2}}>
        {solution.steps.map(item => <li key={item}>{item}</li>)}
      </ol>

      <p style={{marginTop: 28, padding: 16, background: '#f0f6f1', borderRadius: 12, lineHeight: 1.7}}>
        <strong>Important:</strong> These are general educational suggestions, not a site-specific engineering or safety assessment. Check local conditions, regulations, costs and expert advice before implementation.
      </p>

      <Link href="/actions" style={{display: 'inline-block', marginTop: 20, padding: '12px 18px', background: '#267a51', color: '#fff', borderRadius: 10, textDecoration: 'none'}}>
        Record a community action →
      </Link>
    </main>
  );
}
