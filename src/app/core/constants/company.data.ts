/**
 * ═══════════════════════════════════════════════════════════════════
 *  HEXA HUB — COMPANY DATA
 *  Brand, values, milestones, industries, differentiators.
 * ═══════════════════════════════════════════════════════════════════
 */

// ── Shared shape interfaces (used only in this file) ──────────────

export interface CompanyInfo {
  readonly name: string;
  readonly slogan: string;
  readonly description: string;
  readonly email: string;
  readonly phone: string;
  readonly whatsapp: string;
  readonly website: string;
  readonly location: string;
  readonly social: { icon: string; url: string }[];
}

export interface CoreValue {
  readonly title: string;
  readonly icon: string;
  readonly description: string;
}

export interface Milestone {
  readonly year: number;
  readonly title: string;
  readonly events: string[];
}

export interface Industry {
  readonly title: string;
  readonly icon: string;
  readonly description: string;
}

export interface KeyBenefit {
  readonly title: string;
  readonly icon: string;
  readonly description: string;
}

export interface Differentiator {
  readonly icon: string;
  readonly text: string;
}

// ── Company Info ──────────────────────────────────────────────────

export const COMPANY_INFO: CompanyInfo = {
  name: 'HexaHub',
  slogan: 'Six Systems. One Ecosystem. Infinite Possibilities.',
  description:
    'HexaHub is a premium SaaS ecosystem that unifies six powerful enterprise systems — HR & CRM, Commerce, Healthcare, Education, Project Management, and IT Service Management — into a single, seamlessly integrated platform.',
  email: 'info@hexa-hub.com',
  phone: '+20 10 444 22 88 1',
  whatsapp: '201044422881',
  website: 'https://www.hexa-hub.com',
  location: '6 of October City, Egypt',
  social: [
    { icon: 'pi-facebook', url: '#' },
    { icon: 'pi-twitter', url: '#' },
    { icon: 'pi-linkedin', url: '#' },
    { icon: 'pi-instagram', url: '#' }
  ]
};

// ── Core Values ───────────────────────────────────────────────────

export const CORE_VALUES: readonly CoreValue[] = [
  {
    title: 'Innovation',
    icon: 'pi pi-bolt',
    description:
      'We continuously push the boundaries of technology to deliver cutting-edge solutions that keep our clients ahead of the curve.',
  },
  {
    title: 'Integrity',
    icon: 'pi pi-shield',
    description:
      'We operate with transparency, honesty, and accountability in every interaction — earning trust through consistent action.',
  },
  {
    title: 'Customer Focus',
    icon: 'pi pi-heart',
    description:
      'Our clients\' success is our north star. Every feature, decision, and release is guided by real user needs and feedback.',
  },
  {
    title: 'Integration',
    icon: 'pi pi-link',
    description:
      'We believe in the power of connected systems. Our ecosystem is designed so every module works seamlessly with every other.',
  },
  {
    title: 'Excellence',
    icon: 'pi pi-star',
    description:
      'We hold ourselves to the highest standards of quality — in code, design, support, and every touchpoint with our clients.',
  },
  {
    title: 'Security',
    icon: 'pi pi-lock',
    description:
      'Enterprise-grade security is non-negotiable. We protect data with industry-leading encryption, access controls, and compliance practices.',
  },
  {
    title: 'Flexibility',
    icon: 'pi pi-sliders-h',
    description:
      'Our platform adapts to you — not the other way around. Customisable workflows, modular deployment, and scalable architecture.',
  },
];

// ── Milestones / Timeline ─────────────────────────────────────────

export const MILESTONES: readonly Milestone[] = [
  {
    year: 2024,
    title: 'Foundation & Vision',
    events: [
      'Establishment of HexaHub vision',
      'Brand identity design & creation',
      'Market analysis & competitive research',
      'Integrated architecture design',
    ],
  },
  {
    year: 2025,
    title: 'Core Platform Development',
    events: [
      'Core platform infrastructure build-out',
      'Hexa Core (HR & CRM) launch',
      'Hexa Commerce (Commerce & Retail) launch',
    ],
  },
  {
    year: 2026,
    title: 'Full Ecosystem Launch',
    events: [
      'Hexa Care (Healthcare) launch',
      'Hexa Campus (Education) launch',
      'Hexa Craft (Project Management) launch',
      'Hexa Console (IT Service Management) launch',
    ],
  },
];

// ── Industries Served ─────────────────────────────────────────────

export const INDUSTRIES: readonly Industry[] = [
  {
    title: 'Commerce & Distribution',
    icon: 'pi pi-shopping-cart',
    description:
      'Retailers, wholesalers, and distributors who need end-to-end sales, inventory, and e-commerce management.',
  },
  {
    title: 'Healthcare',
    icon: 'pi pi-heart',
    description:
      'Hospitals, clinics, and medical centres seeking integrated clinical, administrative, and financial workflows.',
  },
  {
    title: 'Education & Training',
    icon: 'pi pi-graduation-cap',
    description:
      'Universities, schools, nurseries, and training academies requiring academic, administrative, and e-learning solutions.',
  },
  {
    title: 'Accounting & Finance',
    icon: 'pi pi-wallet',
    description:
      'Finance departments and firms that demand accurate billing, invoicing, and comprehensive financial reporting.',
  },
  {
    title: 'IT Support',
    icon: 'pi pi-server',
    description:
      'IT teams and managed-service providers needing asset tracking, help desk, monitoring, and automation.',
  },
  {
    title: 'All Business Sectors',
    icon: 'pi pi-globe',
    description:
      'Any organisation looking for a unified, scalable, and secure enterprise ecosystem to digitalise operations.',
  },
];

// ── Key Benefits ──────────────────────────────────────────────────

export const KEY_BENEFITS: readonly KeyBenefit[] = [
  {
    title: 'Integrated',
    icon: 'pi pi-link',
    description:
      'All six systems share a unified data layer, eliminating silos and enabling cross-module insights.',
  },
  {
    title: 'Reliable',
    icon: 'pi pi-check-circle',
    description:
      'Enterprise-grade uptime, automated backups, and disaster-recovery architecture you can count on.',
  },
  {
    title: 'Scalable',
    icon: 'pi pi-arrows-alt',
    description:
      'Cloud-ready architecture that grows with your business — from a single branch to a global enterprise.',
  },
  {
    title: 'Secure',
    icon: 'pi pi-lock',
    description:
      'Role-based access, data encryption at rest and in transit, and compliance with international standards.',
  },
  {
    title: 'Innovative',
    icon: 'pi pi-bolt',
    description:
      'Continuously evolving with smart analytics, AI-assisted features, and modern user experiences.',
  },
  {
    title: 'Intelligent',
    icon: 'pi pi-chart-bar',
    description:
      'Built-in dashboards, predictive analytics, and smart reporting that turn data into actionable decisions.',
  },
];

// ── What Makes HexaHub Different ──────────────────────────────────

export const DIFFERENTIATORS: readonly Differentiator[] = [
  {
    icon: 'pi pi-th-large',
    text: 'Multiple enterprise systems in one ecosystem',
  },
  {
    icon: 'pi pi-database',
    text: 'Centralized data and operations',
  },
  {
    icon: 'pi pi-chart-bar',
    text: 'Smart analytics and reporting',
  },
  {
    icon: 'pi pi-cloud',
    text: 'Scalable cloud-ready architecture',
  },
  {
    icon: 'pi pi-palette',
    text: 'Modern user-friendly interfaces',
  },
  {
    icon: 'pi pi-shield',
    text: 'Enterprise-grade security',
  },
  {
    icon: 'pi pi-sliders-h',
    text: 'Flexible customization options',
  },
  {
    icon: 'pi pi-sync',
    text: 'Seamless integration between modules',
  },
];

// ── Company Mission & Vision ───────────────────────────────────────

export const COMPANY_VISION =
  'To be the leading integrated digital ecosystem trusted by organisations worldwide to unify their operations, accelerate growth, and achieve complete digital transformation.';

export const COMPANY_MISSION =
  'To empower organisations of every size with a seamlessly connected suite of enterprise software systems that simplify complexity, automate workflows, and deliver measurable results — all from one intelligent platform.';

export const FOUNDER_MESSAGE = {
  quote:
    'We built HexaHub with one conviction: that powerful enterprise software should be simple to use, seamlessly connected, and accessible to every organisation. Our mission is to give businesses — regardless of size or sector — the digital tools they need to thrive in a fast-changing world.',
  name: 'HexaHub Founding Team',
  title: 'Founders & Leadership',
};
