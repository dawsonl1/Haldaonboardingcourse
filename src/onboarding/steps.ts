export const onboardingSteps = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'how-halda-works', label: 'How Halda Works' },
  { id: 'branding', label: 'Branding' },
  { id: 'form-setup', label: 'Form Setup' },
  { id: 'ai-hub', label: 'AI Hub' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'ai-landing-pages', label: 'AI Landing Pages' },
  { id: 'script-installation', label: 'Script Installation' },
  { id: 'ai-training', label: 'AI Training' },
  { id: 'account-management', label: 'Account Management' },
  { id: 'review', label: 'Review & Submit' },
  { id: 'ending', label: 'Complete!' },
] as const;

export type OnboardingStepId = (typeof onboardingSteps)[number]['id'];
