export interface SystemModule {
  icon: string;
  name: string;
  description: string;
  features: string[];
}

export interface HexaSystem {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  shortDescription: string;
  icon: string;
  accentColor: string;
  features: string[];
  modules: SystemModule[];
}
