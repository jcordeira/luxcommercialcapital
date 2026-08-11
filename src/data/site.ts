export const site = {
  name: 'LUX Commercial Capital',
  tagline: 'Commercial Real Estate Capital Advisory & Debt Placement',
  url: 'https://luxcommercialcapital.com',
  phone: '934-600-4438',
  email: 'contact@luxcommercialcapital.com',
  office: 'New York',
} as const;

export const nav = [
  { href: '/capital-solutions', label: 'Capital Solutions' },
  { href: '/property-types', label: 'Property Types' },
  { href: '/our-approach', label: 'Our Approach' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
] as const;

/** The 15 asset classes, in the order the design lists them. */
export const propertyTypeNames = [
  'Multifamily',
  'Mixed-Use',
  'Retail',
  'Office',
  'Industrial',
  'Self Storage',
  'Hospitality',
  'Healthcare',
  'Assisted Living',
  'Mobile Home Communities',
  'Commercial Owner-Occupied',
  'Special Purpose',
  'Land & Development',
  'Construction',
  'Portfolio Transactions',
] as const;

/** Select options differ from the display list on the last entry only. */
export const propertyTypeOptions = [
  ...propertyTypeNames.slice(0, 14),
  'Portfolio',
] as const;

export const transactionTypeOptions = [
  'Acquisition',
  'Refinance',
  'Cash-Out Refinance',
  'Construction',
  'Bridge',
  'Value-Add',
  'SBA',
  'Portfolio',
  'Special Situation',
] as const;

export const capitalNeedOptions = [
  'Acquisition',
  'Refinance',
  'Cash-Out',
  'Construction',
  'Bridge',
  'Not Sure Yet',
] as const;

export const propertyTypes = [
  {
    name: 'Multifamily',
    description:
      'Market-rate, affordable and value-add residential, from small-balance to institutional portfolios.',
  },
  {
    name: 'Mixed-Use',
    description:
      'Residential over retail and office, where lender appetite turns on the commercial component.',
  },
  {
    name: 'Retail',
    description: 'Single-tenant net lease, strip, grocery-anchored and unanchored centres.',
  },
  {
    name: 'Office',
    description:
      'Multi-tenant, medical and owner-occupied office, including transitional and repositioning plays.',
  },
  {
    name: 'Industrial',
    description: 'Warehouse, distribution, flex, manufacturing and last-mile logistics.',
  },
  {
    name: 'Self Storage',
    description: 'Stabilised facilities, expansions and certificate-of-occupancy lease-up.',
  },
  {
    name: 'Hospitality',
    description: 'Flagged and independent hotels, PIP-driven renovations and conversions.',
  },
  {
    name: 'Healthcare',
    description: 'Medical office, surgical, dialysis and behavioural health facilities.',
  },
  {
    name: 'Assisted Living',
    description: 'Independent living, assisted living and memory care, including HUD execution.',
  },
  {
    name: 'Mobile Home Communities',
    description: 'Manufactured housing communities and RV parks, agency and bank executions.',
  },
  {
    name: 'Commercial Owner-Occupied',
    description:
      'Business-occupied real estate where SBA and conventional structures compete directly.',
  },
  {
    name: 'Special Purpose',
    description: 'Car washes, marinas, entertainment, education and other single-use assets.',
  },
  {
    name: 'Land & Development',
    description:
      'Entitled and pre-entitlement land, horizontal development and predevelopment capital.',
  },
  {
    name: 'Construction',
    description: 'Ground-up projects across asset classes, from single assets to phased programmes.',
  },
  {
    name: 'Portfolio Transactions',
    description:
      'Multi-asset and multi-market facilities with release, substitution and expansion mechanics.',
  },
] as const;

/** The six solutions previewed on the home page. */
export const solutionsPreview = [
  {
    number: '01',
    name: 'Permanent Financing',
    description:
      'Long-term, fixed-rate debt on stabilised assets, sized to sustainable cash flow.',
  },
  {
    number: '02',
    name: 'Bridge & Transitional',
    description:
      'Short-term capital for assets in lease-up, repositioning or between capital events.',
  },
  {
    number: '03',
    name: 'Construction Financing',
    description:
      'Ground-up and vertical development capital, structured against budget and draw schedule.',
  },
  {
    number: '04',
    name: 'SBA 7(a) & SBA 504',
    description:
      'Government-backed financing for owner-occupied commercial real estate and business acquisition.',
  },
  {
    number: '05',
    name: 'Agency & Multifamily',
    description:
      'Fannie Mae, Freddie Mac and HUD execution alongside bank and life company alternatives.',
  },
  {
    number: '06',
    name: 'Private Credit',
    description:
      'Debt fund and specialty lender capital where speed, leverage or structure governs the outcome.',
  },
] as const;

/** The 15 products, in four families. */
export const solutionFamilies = [
  {
    eyebrow: 'Conventional',
    name: 'Permanent & Bank Financing',
    products: [
      {
        name: 'Permanent Financing',
        description:
          'Long-term fixed and floating debt on stabilised assets, sized to sustainable cash flow and structured for hold-period objectives.',
      },
      {
        name: 'Commercial Bank Financing',
        description:
          'Relationship-based balance sheet lending from regional banks and credit unions, often the most efficient execution for well-capitalised sponsors.',
      },
      {
        name: 'CMBS',
        description:
          'Non-recourse, fixed-rate securitised debt for stabilised income-producing assets where long-term leverage matters more than flexibility.',
      },
      {
        name: 'Cash-Out Refinancing',
        description:
          'Releasing trapped equity from appreciated or de-levered assets to fund acquisitions, capital projects or partner buyouts.',
      },
    ],
  },
  {
    eyebrow: 'Government-Backed & Agency',
    name: 'SBA, Agency & Multifamily',
    products: [
      {
        name: 'SBA 7(a) & SBA 504',
        description:
          'Government-guaranteed financing for owner-occupied commercial real estate, business acquisition and expansion, with lower equity requirements than conventional debt.',
      },
      {
        name: 'Agency Financing',
        description:
          'Fannie Mae, Freddie Mac and HUD programmes for multifamily and seniors housing, including small-balance and affordable executions.',
      },
      {
        name: 'Multifamily Financing',
        description:
          'Acquisition, refinance and recapitalisation debt across market-rate, affordable and value-add residential portfolios.',
      },
    ],
  },
  {
    eyebrow: 'Transitional',
    name: 'Bridge, Construction & Value-Add',
    products: [
      {
        name: 'Bridge & Transitional Loans',
        description:
          'Short-term capital for assets in lease-up, repositioning or between capital events, sized to a credible path to stabilisation.',
      },
      {
        name: 'Construction Financing',
        description:
          'Ground-up and vertical development capital structured against budget, draw schedule, guarantees and completion risk.',
      },
      {
        name: 'Value-Add Financing',
        description:
          'Debt with future funding for capital expenditure, unit renovation and re-tenanting programmes.',
      },
      {
        name: 'Land & Pre-Development',
        description:
          'Capital for entitled and pre-entitlement land, horizontal work and predevelopment costs ahead of a construction close.',
      },
    ],
  },
  {
    eyebrow: 'Private & Situational',
    name: 'Private Credit & Special Situations',
    products: [
      {
        name: 'Private Credit',
        description:
          'Debt fund and specialty lender capital where speed, leverage or structural flexibility governs the outcome.',
      },
      {
        name: 'Acquisition Financing',
        description:
          'Debt aligned to a purchase timeline, including structures built to perform under a firm closing deadline.',
      },
      {
        name: 'Special Situations',
        description:
          'Maturity defaults, partner disputes, note purchases, discounted payoffs and assets that do not fit a conventional credit box.',
      },
      {
        name: 'Portfolio Financing',
        description:
          'Cross-collateralised facilities and credit lines against multiple assets, with release and substitution mechanics.',
      },
    ],
  },
] as const;

export const approachSteps = [
  {
    number: '01',
    name: 'Underwrite',
    statement:
      'We evaluate the property, sponsorship, cash flow, business plan and capital requirements.',
    detail:
      'Before a single lender is approached, we underwrite the transaction the way the market will: rent roll and operating statements, trailing performance, market comparables, sponsor track record, liquidity and guarantee capacity.',
  },
  {
    number: '02',
    name: 'Structure',
    statement:
      'We determine the financing structure best aligned with the transaction and sponsor objectives.',
    detail:
      'Leverage, term, amortisation, recourse, prepayment, future funding and reserve mechanics are decisions, not defaults. Each one is set against the hold period and the exit.',
  },
  {
    number: '03',
    name: 'Position',
    statement:
      'We prepare and position the opportunity for the appropriate segment of the lending market.',
    detail:
      'The transaction goes to market as an institutional package with a clear credit narrative, addressed to the specific lenders whose mandate it fits.',
  },
  {
    number: '04',
    name: 'Place',
    statement: 'We identify, negotiate and coordinate with capital sources through closing.',
    detail:
      'Term sheets are compared on structure rather than headline rate. From application through third-party reports, legal and closing, the process stays managed.',
  },
] as const;

export const capitalSources = [
  'Banks',
  'Credit Unions',
  'SBA',
  'Agency',
  'CMBS',
  'Debt Funds',
  'Private Credit',
  'Specialty Finance',
] as const;

export const advisoryConcepts = [
  'Strategic Structuring',
  'Broad Capital Access',
  'Complex Deal Expertise',
  'Lender Positioning',
  'Term Negotiation',
  'Execution Management',
] as const;

/**
 * Layout placeholders. Replace with real closed transactions and remove the
 * `LAYOUT PLACEHOLDERS` tag on the home page when they arrive.
 */
export const selectedTransactions = [
  { amount: '$24,500,000', type: 'Multifamily Acquisition', location: 'New York' },
  { amount: '$8,750,000', type: 'Industrial Refinance', location: 'New Jersey' },
  { amount: '$17,000,000', type: 'Construction Financing', location: 'Florida' },
  { amount: '$3,250,000', type: 'SBA 504', location: 'New York' },
] as const;

/** Placeholder article slots. Copy to be supplied. */
export const insightSlots = [
  { category: 'Market Commentary' },
  { category: 'Structure' },
  { category: 'Property Types' },
] as const;
