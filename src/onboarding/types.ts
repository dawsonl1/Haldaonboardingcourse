export interface FormConfig {
  audiences: string[];
  urls: string[];
  challenges: string;
}

export interface ContentCard {
  id: string;
  headline: string;
  subheadline: string;
  callToAction: string;
  link: string;
}

export type DeliveryDestination = 'crm' | 'google-sheet' | null;

export type CRMProvider = 'FACTS' | 'FinalSite' | 'Blackbaud' | 'HubSpot' | 'Insightly' | 'RenWeb' | 'Other' | '';

export type LandingPageRequest = 'yes' | 'no' | null;
