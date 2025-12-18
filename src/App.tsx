import React, { useState } from 'react';
import { WelcomePage } from './components/WelcomePage';
import { HowHaldaWorksPage } from './components/HowHaldaWorksPage';
import { BrandingPage } from './components/BrandingPage';
import { FormSetupPage } from './components/FormSetupPage';
import { AIHubPage } from './components/AIHubPage';
import { IntegrationsPage } from './components/IntegrationsPage';
import { AILandingPagesPage } from './components/AILandingPagesPage';
import { AITrainingPage } from './components/AITrainingPage';
import { ScriptInstallationPage } from './components/ScriptInstallationPage';
import { AccountManagementPage } from './components/AccountManagementPage';
import { ReviewPage } from './components/ReviewPage';
import { EndingPage } from './components/EndingPage';
import { NavigationSidebar } from './components/NavigationSidebar';
import { Menu } from 'lucide-react';

interface FormConfig {
  audiences: string[];
  urls: string[];
  challenges: string;
}

interface ContentCard {
  id: string;
  headline: string;
  subheadline: string;
  callToAction: string;
  link: string;
}

type PageType = 'welcome' | 'how-halda-works' | 'branding' | 'form-setup' | 'ai-hub' | 'integrations' | 'ai-landing-pages' | 'ai-training' | 'script-installation' | 'account-management' | 'review' | 'ending';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('welcome');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Branding data
  const [driveLink, setDriveLink] = useState('');
  const [features, setFeatures] = useState<string[]>([]);

  // Form setup data
  const [selectedForms, setSelectedForms] = useState<string[]>([]);
  const [formConfigs, setFormConfigs] = useState<Record<string, FormConfig>>({});

  // AI Hub data
  const [contentCards, setContentCards] = useState<ContentCard[]>([]);

  // Integrations data
  const [deliveryDestination, setDeliveryDestination] = useState<'crm' | 'google-sheet' | null>(null);
  const [crmProvider, setCrmProvider] = useState('');
  const [otherCrmName, setOtherCrmName] = useState('');
  const [googleEmail, setGoogleEmail] = useState('');

  // AI Landing Pages data
  const [landingPageRequest, setLandingPageRequest] = useState<'yes' | 'no' | null>(null);

  // Navigation handlers
  const handleWelcomeNext = () => {
    setCurrentPage('how-halda-works');
  };

  const handleHowHaldaWorksNext = () => {
    setCurrentPage('branding');
  };

  const handleHowHaldaWorksBack = () => {
    setCurrentPage('welcome');
  };

  const handleBrandingNext = (link: string, featuresList: string[]) => {
    setDriveLink(link);
    setFeatures(featuresList);
    setCurrentPage('form-setup');
  };

  const handleBrandingBack = () => {
    setCurrentPage('how-halda-works');
  };

  const handleFormSetupNext = (forms: string[], configs: Record<string, FormConfig>) => {
    setSelectedForms(forms);
    setFormConfigs(configs);
    setCurrentPage('ai-hub');
  };

  const handleFormSetupBack = () => {
    setCurrentPage('branding');
  };

  const handleAIHubNext = (cards: ContentCard[]) => {
    setContentCards(cards);
    setCurrentPage('integrations');
  };

  const handleAIHubBack = () => {
    setCurrentPage('form-setup');
  };

  const handleIntegrationsNext = (
    destination: 'crm' | 'google-sheet' | null,
    crm: string,
    otherCrm: string,
    email: string
  ) => {
    setDeliveryDestination(destination);
    setCrmProvider(crm);
    setOtherCrmName(otherCrm);
    setGoogleEmail(email);
    setCurrentPage('ai-landing-pages');
  };

  const handleIntegrationsBack = () => {
    setCurrentPage('ai-hub');
  };

  const handleAILandingPagesNext = (request: 'yes' | 'no' | null) => {
    setLandingPageRequest(request);
    setCurrentPage('script-installation');
  };

  const handleAILandingPagesBack = () => {
    setCurrentPage('integrations');
  };

  const handleScriptInstallationNext = () => {
    setCurrentPage('ai-training');
  };

  const handleScriptInstallationBack = () => {
    setCurrentPage('ai-landing-pages');
  };

  const handleAITrainingNext = () => {
    setCurrentPage('account-management');
  };

  const handleAITrainingBack = () => {
    setCurrentPage('script-installation');
  };

  const handleAccountManagementNext = () => {
    setCurrentPage('review');
  };

  const handleAccountManagementBack = () => {
    setCurrentPage('ai-training');
  };

  const handleReviewEdit = (page: string) => {
    setCurrentPage(page as PageType);
  };

  const handleReviewBack = () => {
    setCurrentPage('account-management');
  };

  const handleFinishOnboarding = () => {
    setCurrentPage('ending');
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-6 left-6 z-30 p-3 rounded-lg transition-all hover:bg-opacity-20"
        style={{ backgroundColor: '#4fabff99' }}
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Navigation Sidebar */}
      <NavigationSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page as PageType)}
      />

      {/* Page Content */}
      {currentPage === 'welcome' && <WelcomePage onNext={handleWelcomeNext} />}

      {currentPage === 'how-halda-works' && (
        <HowHaldaWorksPage onNext={handleHowHaldaWorksNext} onBack={handleHowHaldaWorksBack} />
      )}

      {currentPage === 'branding' && (
        <BrandingPage
          onNext={handleBrandingNext}
          onBack={handleBrandingBack}
          initialDriveLink={driveLink}
          initialFeatures={features}
        />
      )}

      {currentPage === 'form-setup' && (
        <FormSetupPage
          onNext={handleFormSetupNext}
          onBack={handleFormSetupBack}
          initialSelectedForms={selectedForms}
          initialFormConfigs={formConfigs}
        />
      )}

      {currentPage === 'ai-hub' && (
        <AIHubPage
          onNext={handleAIHubNext}
          onBack={handleAIHubBack}
          initialContentCards={contentCards}
        />
      )}

      {currentPage === 'integrations' && (
        <IntegrationsPage
          onNext={handleIntegrationsNext}
          onBack={handleIntegrationsBack}
          initialDeliveryDestination={deliveryDestination}
          initialCrmProvider={crmProvider}
          initialOtherCrmName={otherCrmName}
          initialGoogleEmail={googleEmail}
        />
      )}

      {currentPage === 'ai-landing-pages' && (
        <AILandingPagesPage
          onNext={handleAILandingPagesNext}
          onBack={handleAILandingPagesBack}
          initialLandingPageRequest={landingPageRequest}
        />
      )}

      {currentPage === 'ai-training' && (
        <AITrainingPage onNext={handleAITrainingNext} onBack={handleAITrainingBack} />
      )}

      {currentPage === 'script-installation' && (
        <ScriptInstallationPage onNext={handleScriptInstallationNext} onBack={handleScriptInstallationBack} />
      )}

      {currentPage === 'account-management' && (
        <AccountManagementPage onNext={handleAccountManagementNext} onBack={handleAccountManagementBack} />
      )}

      {currentPage === 'review' && (
        <ReviewPage
          onBack={handleReviewBack}
          onFinish={handleFinishOnboarding}
          onEdit={handleReviewEdit}
          driveLink={driveLink}
          features={features}
          selectedForms={selectedForms}
          formConfigs={formConfigs}
          contentCards={contentCards}
          deliveryDestination={deliveryDestination}
          crmProvider={crmProvider}
          otherCrmName={otherCrmName}
          googleEmail={googleEmail}
          landingPageRequest={landingPageRequest}
        />
      )}

      {currentPage === 'ending' && <EndingPage />}
    </>
  );
}