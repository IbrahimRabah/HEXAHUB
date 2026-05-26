/**
 * HexaHub Navigation Models
 */

/** Header / sidebar navigation item (supports nested children for dropdowns) */
export interface NavItem {
  readonly label: string;
  readonly routerLink?: string;
  readonly children?: NavItem[];
  readonly icon?: string;   // PrimeIcons class
}

/** A single link inside a footer section */
export interface FooterLink {
  readonly label: string;
  readonly routerLink?: string;
  readonly href?: string;
  readonly icon?: string;
}

/** A titled group of links rendered in the footer */
export interface FooterSection {
  readonly title: string;
  readonly links: FooterLink[];
}
