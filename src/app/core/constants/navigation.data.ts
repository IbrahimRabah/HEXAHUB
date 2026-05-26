import { NavItem, FooterSection } from '../models/navigation.model';

/**
 * ═══════════════════════════════════════════════════════════════════
 *  HEXA HUB — NAVIGATION DATA
 * ═══════════════════════════════════════════════════════════════════
 */

// ── Header Navigation ─────────────────────────────────────────────

export const NAV_ITEMS: readonly NavItem[] = [
  {
    label: 'Home',
    routerLink: '/',
    icon: 'pi pi-home',
  },
  {
    label: 'About',
    routerLink: '/about',
    icon: 'pi pi-info-circle',
  },
  {
    label: 'Systems',
    icon: 'pi pi-th-large',
    children: [
      { label: 'All Systems',    routerLink: '/systems',              icon: 'pi pi-th-large' },
      { label: 'Hexa Core',      routerLink: '/systems/hexa-core',    icon: 'pi pi-users' },
      { label: 'Hexa Commerce',  routerLink: '/systems/hexa-commerce',icon: 'pi pi-shopping-cart' },
      { label: 'Hexa Care',      routerLink: '/systems/hexa-care',    icon: 'pi pi-heart' },
      { label: 'Hexa Campus',    routerLink: '/systems/hexa-campus',  icon: 'pi pi-graduation-cap' },
      { label: 'Hexa Craft',     routerLink: '/systems/hexa-craft',   icon: 'pi pi-briefcase' },
      { label: 'Hexa Console',   routerLink: '/systems/hexa-console', icon: 'pi pi-server' },
    ],
  },
  {
    label: 'Contact',
    routerLink: '/contact',
    icon: 'pi pi-envelope',
  },
];

// ── Footer Sections ───────────────────────────────────────────────

export const FOOTER_SECTIONS: readonly FooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home',     routerLink: '/' },
      { label: 'About',    routerLink: '/about' },
      { label: 'Systems',  routerLink: '/systems' },
      { label: 'Contact',  routerLink: '/contact' },
    ],
  },
  {
    title: 'Our Systems',
    links: [
      { label: 'Hexa Core',     routerLink: '/systems/hexa-core' },
      { label: 'Hexa Commerce', routerLink: '/systems/hexa-commerce' },
      { label: 'Hexa Care',     routerLink: '/systems/hexa-care' },
      { label: 'Hexa Campus',   routerLink: '/systems/hexa-campus' },
      { label: 'Hexa Craft',    routerLink: '/systems/hexa-craft' },
      { label: 'Hexa Console',  routerLink: '/systems/hexa-console' },
    ],
  },
  {
    title: 'Contact Info',
    links: [
      { label: '6 of October City, Egypt' },
      { label: 'info@hexa-hub.com',   href: 'mailto:info@hexa-hub.com' },
      { label: '+20 10 444 22 88 1',  href: 'tel:+201044422881' },
      { label: 'www.hexa-hub.com',    href: 'https://www.hexa-hub.com' },
    ],
  },
];
