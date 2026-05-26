/**
 * HexaHub System Models
 * Core interfaces for the 6 HexaHub ecosystem systems.
 */

/** Represents a functional module within a HexaHub system */
export interface SystemModule {
  readonly name: string;
  readonly icon: string;        // PrimeIcons class (e.g. 'pi pi-users')
  readonly description: string;
  readonly features?: string[];
}

/** Represents a key feature / capability of a system */
export interface SystemFeature {
  readonly title: string;
  readonly icon: string;        // PrimeIcons class
  readonly description: string;
}

/** Full definition of a HexaHub system — single source of truth */
export interface HexaSystem {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly tagline: string;
  readonly heroSlogan: string;
  readonly shortDescription: string;
  readonly fullDescription: string;
  readonly icon: string;          // PrimeIcons class
  readonly accentColor: string;   // hex colour
  readonly accentGradient: string;
  readonly themeClass: string;    // CSS class, e.g. 'theme-care'
  readonly features: SystemFeature[];
  readonly modules: SystemModule[];
  readonly specializedModules?: SystemModule[];
  readonly benefits: string[];
  readonly heroImage?: string;
}
