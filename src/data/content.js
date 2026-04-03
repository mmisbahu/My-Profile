export const provinces = [
  'Ontario',
  'Quebec',
  'British Columbia',
  'Alberta',
  'Manitoba',
  'Saskatchewan',
  'Nova Scotia',
  'New Brunswick',
  'Newfoundland and Labrador',
  'Prince Edward Island',
  'Yukon',
  'Northwest Territories',
  'Nunavut',
];

export const sections = [
  {
    id: 'airport',
    title: 'Airport Arrival Guide',
    lastUpdated: '2026-03-01',
    summary: 'What to expect at the border, documents, baggage, and ground transportation.',
    details: [
      {
        title: 'What to expect at CBSA',
        description: 'Prepare your passport, COPR, PR card, and invitation letter. Expect questions about your arrival, plans, and family.',
        links: [
          { label: 'CBSA traveller information', url: 'https://www.cbsa-asfc.gc.ca/travel-voyage/' },
        ],
      },
      {
        title: 'Documents to have ready',
        description: 'Keep passport, COPR, PR card, and proof of funds handy. Declare all goods and currency over CAD 10,000.',
        links: [
          { label: 'What to declare', url: 'https://www.cbsa-asfc.gc.ca/travel-voyage/declaration-eng.html' },
        ],
      },
      {
        title: 'Transportation from major airports',
        description: 'Review shuttle, transit, taxi and ride-share options for Pearson, YVR, Trudeau and Calgary airports.',
        links: [
          { label: 'Toronto Pearson arrivals', url: 'https://www.torontopearson.com/en' },
          { label: 'Vancouver YVR arrivals', url: 'https://www.yvr.ca/' },
        ],
      },
    ],
  },
  {
    id: 'checklist',
    title: 'First 30 Days Checklist',
    lastUpdated: '2026-03-01',
    summary: 'Daily tasks that guide newcomers from day one through the first month.',
    details: [
      {
        title: 'Week 1',
        description: 'Register for a phone plan, exchange money, meet settlement agency, open a bank account, locate nearby grocery and transit routes.',
      },
      {
        title: 'Week 2',
        description: 'Apply for SIN, provincial health card, and start exploring housing options. Enroll in a language class if needed.',
      },
      {
        title: 'Weeks 3-4',
        description: 'Search for work, confirm your PR card process, register for school, and start building a local support network.',
      },
    ],
  },
  {
    id: 'documents',
    title: 'Government Documents & ID',
    lastUpdated: '2026-03-01',
    summary: 'Apply for SIN, health card, PR card, driver’s license, bank account, and CRA access.',
    details: [
      {
        title: 'SIN (Social Insurance Number)',
        description: 'Apply online or in person to work and access government services. Keep your SIN confidential.',
        links: [
          { label: 'Service Canada SIN', url: 'https://www.canada.ca/en/employment-social-development/services/sin.html' },
        ],
      },
      {
        title: 'Provincial health card',
        description: 'Each province has its own process: OHIP, BC Services Card, RAMQ, etc. Check local wait times and required documents.',
        links: [
          { label: 'Health care in Canada', url: 'https://www.canada.ca/en/health-canada/services/health-care-system.html' },
        ],
      },
      {
        title: 'Driver’s license conversion',
        description: 'Learn how to convert your foreign driver’s license and what documents each province accepts.',
      },
    ],
  },
  {
    id: 'housing',
    title: 'Housing & Settlement',
    lastUpdated: '2026-03-01',
    summary: 'Find temporary housing, rent without credit history, and understand tenant rights.',
    details: [
      {
        title: 'Temporary housing',
        description: 'Use Airbnb, hostels, newcomer shelters and short-term rentals while you search for a longer-term home.',
      },
      {
        title: 'Renting without credit history',
        description: 'Offer references, proof of income, and first/last month rent. Consider co-signers or newcomer rental programs.',
      },
      {
        title: 'Lease agreement basics',
        description: 'Understand rent, utilities, notice periods, subletting, and tenant responsibilities.',
      },
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    lastUpdated: '2026-03-01',
    summary: 'How Canada’s health system works, waiting periods, primary care, and emergencies.',
    details: [
      {
        title: 'Overview of healthcare',
        description: 'Canada has publicly funded healthcare. Some services may require a provincial health card or wait up to 3 months.',
      },
      {
        title: 'Finding a family doctor',
        description: 'Search provincial registries, walk-in clinics, and newcomer clinic directories to connect with a GP.',
      },
      {
        title: 'Emergency services',
        description: 'Call 911 for emergencies. Use walk-in clinics for urgent non-life-threatening issues.',
        links: [
          { label: 'Health Canada emergency info', url: 'https://www.canada.ca/en/services/health.html' },
        ],
      },
    ],
  },
  {
    id: 'employment',
    title: 'Employment',
    lastUpdated: '2026-03-01',
    summary: 'Canadian resumes, job search, pay stub basics, and worker rights.',
    details: [
      {
        title: 'Canadian-style resume',
        description: 'Use a simple format, highlight skills, and keep the resume one to two pages without a photo.',
      },
      {
        title: 'Job search resources',
        description: 'Use job boards, settlement agencies, and networking groups tailored for newcomers.',
      },
      {
        title: 'Understanding pay stubs',
        description: 'Review CPP, EI, income tax deductions, and net pay to understand your earnings clearly.',
      },
    ],
  },
  {
    id: 'education',
    title: 'Education & Language',
    lastUpdated: '2026-03-01',
    summary: 'LINC classes, child enrollment, and credential recognition.',
    details: [
      {
        title: 'LINC classes',
        description: 'Find free English or French language instruction through local settlement organizations.',
        links: [
          { label: 'LINC program', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/new-immigrants/new-life-canada/language-instruction.html' },
        ],
      },
      {
        title: 'Enroll children in school',
        description: 'Contact your local school board with proof of address and immigration documents to register children.',
      },
      {
        title: 'Credential recognition',
        description: 'Learn how to assess and recognize international qualifications for college, university, and employment.',
      },
    ],
  },
  {
    id: 'community',
    title: 'Community & Services',
    lastUpdated: '2026-03-01',
    summary: 'Find settlement agencies, food banks, places of worship, and newcomer groups.',
    details: [
      {
        title: 'Settlement agencies',
        description: 'Search by city for government-funded services that help with housing, jobs, and language support.',
      },
      {
        title: 'Community resources',
        description: 'Locate food banks, newcomer service centres, and support groups for your community.',
      },
      {
        title: 'Community forums',
        description: 'Join newcomer Facebook groups and local forums to ask questions and find peers.',
      },
    ],
  },
  {
    id: 'directory',
    title: 'Settlement Agency Directory',
    lastUpdated: '2026-03-01',
    summary: 'Search local settlement agencies by city and province for newcomer support.',
    details: [
      {
        title: 'How to use the directory',
        description: 'Search by city or province to find a nearby service provider for language, housing, employment and newcomer support.',
      },
    ],
  },
  {
    id: 'help',
    title: 'Consult & Help',
    lastUpdated: '2026-03-01',
    summary: 'Legal aid, immigration consultants, government helplines, and FAQ support.',
    details: [
      {
        title: 'Legal support',
        description: 'Find RCIC consultants and free legal aid resources for immigration questions by province.',
      },
      {
        title: 'Government helplines',
        description: 'Use official government contact pages for IRCC, CRA and provincial services.',
      },
      {
        title: 'Quick FAQ',
        description: 'Use the built-in FAQ and local support links for immediate answers to common newcomer questions.',
      },
    ],
  },
];

export const directoryAgencies = [
  {
    name: 'Immigrant Services Toronto',
    city: 'Toronto',
    province: 'Ontario',
    service: 'Settlement, employment, language support',
    phone: '416-123-4567',
    website: 'https://www.immigrantservicesto.ca',
  },
  {
    name: 'West Coast Newcomer Hub',
    city: 'Vancouver',
    province: 'British Columbia',
    service: 'Housing, legal aid, community orientation',
    phone: '604-987-6543',
    website: 'https://www.westcoastnewcomerhub.ca',
  },
  {
    name: 'Montreal Welcome Centre',
    city: 'Montreal',
    province: 'Quebec',
    service: 'Language classes and family settlement services',
    phone: '514-555-0192',
    website: 'https://www.montrealwelcomecentre.ca',
  },
  {
    name: 'Calgary Newcomer Network',
    city: 'Calgary',
    province: 'Alberta',
    service: 'Employment and education guidance',
    phone: '403-321-7890',
    website: 'https://www.calgarynewcomernetwork.ca',
  },
  {
    name: 'Halifax Settlement Services',
    city: 'Halifax',
    province: 'Nova Scotia',
    service: 'Housing support and community programs',
    phone: '902-123-9876',
    website: 'https://www.halifaxsettlement.ca',
  },
];
