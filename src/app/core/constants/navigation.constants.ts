export interface NavLink {
  label: string;
  route: string;
  isDropdown?: boolean;
  children?: NavLink[];
  accentColor?: string;
}

export const NAVIGATION_LINKS: NavLink[] = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  {
    label: 'Systems',
    route: '/systems',
    isDropdown: true,
    children: [
      { label: 'All Systems',    route: '/systems',               accentColor: '#4f7df9' },
      { label: 'Hexa Core',      route: '/systems/hexa-core',     accentColor: '#4f7df9' },
      { label: 'Hexa Commerce',  route: '/systems/hexa-commerce', accentColor: '#22d3ee' },
      { label: 'Hexa Care',      route: '/systems/hexa-care',     accentColor: '#10b981' },
      { label: 'Hexa Campus',    route: '/systems/hexa-campus',   accentColor: '#a855f7' },
      { label: 'Hexa Craft',     route: '/systems/hexa-craft',    accentColor: '#f97316' },
      { label: 'Hexa Console',   route: '/systems/hexa-console',  accentColor: '#ef4444' },
    ],
  },
  { label: 'Contact', route: '/contact' },
];

export const CONTACT_INFO = {
  email: 'info@hexa-hub.com',
  phone: '+20 10 444 22 88 1',
  whatsapp: '201044422881',
  address: '6 of October City, Egypt',
};
