// Everything about you that appears on the home page lives here.
// Edit this file to update your bio, roles, education and links.

export const profile = {
  name: 'Shanavas Kavu',
  shortName: 'Shanavas',
  title: 'Sr. Director, Data Science',
  subtitle: 'Marketing Science & Applied AI',
  location: 'New York metro area',
  email: 'me@shanavasv.com',
  intro:
    'I lead data science teams that put AI into production: Bayesian marketing mix models, agentic AI systems, and pricing and supply chain optimization at enterprise scale.',
  bio: [
    'I have spent over 20 years turning hard quantitative problems into decisions. The first half was in theoretical physics, running classical and quantum simulations of functional materials on supercomputers at the Bhabha Atomic Research Centre, the University of Missouri and Oak Ridge National Laboratory.',
    'Since 2017 I have applied that toolkit to business. At Foot Locker and Macy’s I built dynamic pricing, personalization and supply chain systems, and today at Jellyfish I run the Cloud Americas data science practice, working with partners such as Google and Pencil on marketing measurement and generative AI.',
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shanavaskv' },
    { label: 'GitHub', href: 'https://github.com/shanavaskv' },
  ],
};

export const stats = [
  { value: '$54M+', label: 'business value delivered across retail and marketing' },
  { value: '$145M', label: 'in capital allocation informed by my models' },
  { value: '20+', label: 'years in quantitative research and data science' },
  { value: '1,300+', label: 'citations across 29 peer-reviewed papers' },
];

export const expertise = [
  {
    title: 'Marketing science',
    icon: 'chart',
    items: ['Bayesian marketing mix modeling (Google Meridian)', 'Incrementality and geo-experiments', 'A/B testing frameworks', 'Bid optimization, creative analytics, CRO'],
  },
  {
    title: 'Applied AI',
    icon: 'spark',
    items: ['Generative AI and LLMs', 'Agentic and computer-use agents (Google ADK, Gemini)', 'Deep learning (PyTorch, TensorFlow), NLP', 'Causal inference, forecasting, optimization'],
  },
  {
    title: 'Leadership',
    icon: 'people',
    items: ['Enterprise AI strategy and roadmaps', 'Building cross-functional teams', 'C-suite and client advisory', 'Strategic technology partnerships'],
  },
  {
    title: 'Platforms & MLOps',
    icon: 'stack',
    items: ['Python, SQL, Spark', 'BigQuery, Snowflake, Vertex AI, Cloud Run', 'SageMaker, Azure ML, MLflow', 'Model governance and validation on GCP, AWS, Azure'],
  },
];

// Highlights shown as cards under "Selected work".
export const work = [
  {
    title: 'Autonomous CRO agent',
    org: 'Jellyfish',
    metric: '4 days → 2 hours',
    text: 'A computer-use AI agent on Google ADK, Gemini and Cloud Run that audits websites against conversion best practices. It surfaced a 14% potential conversion lift across 250 client sites.',
    tags: ['Agents', 'Gemini', 'Cloud Run'],
  },
  {
    title: 'Creative Optics platform',
    org: 'Jellyfish',
    metric: '90% faster reviews',
    text: 'An automated Vertex AI pipeline with Gemini agents that tags creative elements and links them to performance, across 200K+ assets for 6 global brands.',
    tags: ['Vertex AI', 'Multimodal', 'Creative analytics'],
  },
  {
    title: 'Bayesian marketing mix modeling',
    org: 'Jellyfish',
    metric: '$25M reallocated',
    text: 'Baseline decomposition, controls and diagnostics for Bayesian MMM, guiding strategic media reallocation with a projected 20% ROI lift. Roadmap co-developed with Google (Meridian).',
    tags: ['Bayesian', 'Meridian', 'Measurement'],
  },
  {
    title: 'Enterprise dynamic pricing',
    org: 'Foot Locker',
    metric: '$40M markdown savings',
    text: 'Demand forecasting combined with real-time price optimization to cut markdown spend, alongside an A/B testing framework that doubled experiment velocity.',
    tags: ['Forecasting', 'Optimization', 'Experimentation'],
  },
  {
    title: 'Supply chain ML and MLOps',
    org: 'Macy’s',
    metric: '$14M value',
    text: '8 production ML applications on a shared MLOps platform, plus a network simulation platform that delivered $8M in annual logistics savings.',
    tags: ['MLOps', 'Simulation', 'Supply chain'],
  },
  {
    title: 'Segmentation and personalization',
    org: 'Foot Locker',
    metric: '+27% conversion',
    text: 'Customer segmentation and personalization algorithms worth $8M a year in marketing impact, and a market potential model behind $145M of store investment decisions.',
    tags: ['Personalization', 'Segmentation'],
  },
];

export const experience = [
  {
    org: 'Jellyfish',
    place: 'New York, NY',
    roles: [{ role: 'Sr. Director of Data Science, Marketing & AI', period: 'Mar 2024 – Present' }],
    points: [
      'Lead the Cloud Americas data science practice: 7 senior data scientists and engineers and a portfolio of 16 enterprise AI solutions.',
      'Technical pitches and points of view that won 8 major enterprise accounts.',
      'Lifetime value and retention models that identified churn drivers and lifted retention by 14%.',
    ],
  },
  {
    org: 'Macy’s',
    place: 'Secaucus, NJ',
    roles: [{ role: 'Director of Data Science, Supply Chain', period: 'Nov 2021 – Feb 2024' }],
    points: [
      'Defined the supply chain data science roadmap with C-suite leadership and launched 8 production ML applications.',
      'Built a centralized MLOps platform that cut model deployment from weeks to days.',
    ],
  },
  {
    org: 'Foot Locker',
    place: 'New York, NY',
    roles: [
      { role: 'Interim Director of Data Science', period: 'Jul 2020 – Nov 2021' },
      { role: 'Principal & Senior Data Scientist', period: 'Jul 2017 – Jul 2020' },
    ],
    points: [
      'Scaled and mentored a team of 12 data scientists and engineers.',
      'Predictive inventory positioning that raised service levels by 8% across 250 stores.',
      'MLOps and reproducibility standards that cut model validation time by 30%.',
    ],
  },
  {
    org: 'Research physicist',
    place: '',
    roles: [
      { role: 'Postdoctoral Fellow, Oak Ridge National Laboratory', period: '2014 – 2016' },
      { role: 'Postdoctoral Fellow, University of Missouri', period: '2011 – 2014' },
      { role: 'Staff Scientist, Bhabha Atomic Research Centre', period: '2002 – 2011' },
    ],
    points: [
      'Large-scale classical and quantum simulations of functional materials on HPC systems; 29 peer-reviewed papers with 1,300+ citations.',
    ],
  },
];

export const education = [
  { degree: 'PhD, Physics', org: 'Homi Bhabha National Institute, Mumbai', note: 'Thesis: Classical and quantum simulations of novel functional materials' },
  { degree: 'MSc, Physics', org: 'Indian Institute of Technology Madras', note: 'Thesis: Artificial neural networks' },
  { degree: 'Leadership Essentials', org: 'Cornell University', note: 'Certificate' },
];
