import React, { useEffect } from 'react';
import { Menu } from 'lucide-react';

import { AILandingPagesPage } from '../components/AILandingPagesPage';
import { AIHubPage } from '../components/AIHubPage';
import { AITrainingPage } from '../components/AITrainingPage';
import { AccountManagementPage } from '../components/AccountManagementPage';
import { BrandingPage } from '../components/BrandingPage';
import { EndingPage } from '../components/EndingPage';
import { FormSetupPage } from '../components/FormSetupPage';
import { HowHaldaWorksPage } from '../components/HowHaldaWorksPage';
import { IntegrationsPage } from '../components/IntegrationsPage';
import { NavigationSidebar } from '../components/NavigationSidebar';
import { ReviewPage } from '../components/ReviewPage';
import { ScriptInstallationPage } from '../components/ScriptInstallationPage';
import { WelcomePage } from '../components/WelcomePage';

import { useOnboardingCourse } from './useOnboardingCourse';

export function OnboardingCourse() {
  const {
    state,
    navigate,
    openSidebar,
    closeSidebar,

    handleWelcomeNext,
    handleHowHaldaWorksNext,
    handleHowHaldaWorksBack,
    handleBrandingNext,
    handleBrandingBack,
    handleFormSetupNext,
    handleFormSetupBack,
    handleAIHubNext,
    handleAIHubBack,
    handleIntegrationsNext,
    handleIntegrationsBack,
    handleAILandingPagesNext,
    handleAILandingPagesBack,
    handleScriptInstallationNext,
    handleScriptInstallationBack,
    handleAITrainingNext,
    handleAITrainingBack,
    handleAccountManagementNext,
    handleAccountManagementBack,
    handleReviewBack,
    handleReviewEdit,
    handleFinishOnboarding,
  } = useOnboardingCourse();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [state.currentStep]);

  return (
    <>
      <button
        onClick={openSidebar}
        className="fixed top-6 left-6 z-30 p-3 rounded-lg transition-all hover:bg-opacity-20"
        style={{ backgroundColor: '#4fabff99' }}
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      <NavigationSidebar
        isOpen={state.isSidebarOpen}
        onClose={closeSidebar}
        currentPage={state.currentStep}
        onNavigate={navigate}
      />

      {state.currentStep === 'welcome' && <WelcomePage onNext={handleWelcomeNext} />}

      {state.currentStep === 'how-halda-works' && (
        <HowHaldaWorksPage onNext={handleHowHaldaWorksNext} onBack={handleHowHaldaWorksBack} />
      )}

      {state.currentStep === 'branding' && (
        <BrandingPage
          onNext={handleBrandingNext}
          onBack={handleBrandingBack}
          initialDriveLink={state.driveLink}
          initialFeatures={state.features}
        />
      )}

      {state.currentStep === 'form-setup' && (
        <FormSetupPage
          onNext={handleFormSetupNext}
          onBack={handleFormSetupBack}
          initialSelectedForms={state.selectedForms}
          initialFormConfigs={state.formConfigs}
        />
      )}

      {state.currentStep === 'ai-hub' && (
        <AIHubPage onNext={handleAIHubNext} onBack={handleAIHubBack} initialContentCards={state.contentCards} />
      )}

      {state.currentStep === 'integrations' && (
        <IntegrationsPage
          onNext={handleIntegrationsNext}
          onBack={handleIntegrationsBack}
          initialDeliveryDestination={state.deliveryDestination}
          initialCrmProvider={state.crmProvider}
          initialOtherCrmName={state.otherCrmName}
          initialGoogleEmail={state.googleEmail}
        />
      )}

      {state.currentStep === 'ai-landing-pages' && (
        <AILandingPagesPage
          onNext={handleAILandingPagesNext}
          onBack={handleAILandingPagesBack}
          initialLandingPageRequest={state.landingPageRequest}
        />
      )}

      {state.currentStep === 'script-installation' && (
        <ScriptInstallationPage onNext={handleScriptInstallationNext} onBack={handleScriptInstallationBack} />
      )}

      {state.currentStep === 'ai-training' && <AITrainingPage onNext={handleAITrainingNext} onBack={handleAITrainingBack} />}

      {state.currentStep === 'account-management' && (
        <AccountManagementPage onNext={handleAccountManagementNext} onBack={handleAccountManagementBack} />
      )}

      {state.currentStep === 'review' && (
        <ReviewPage
          onBack={handleReviewBack}
          onFinish={handleFinishOnboarding}
          onEdit={handleReviewEdit}
          driveLink={state.driveLink}
          features={state.features}
          selectedForms={state.selectedForms}
          formConfigs={state.formConfigs}
          contentCards={state.contentCards}
          deliveryDestination={state.deliveryDestination}
          crmProvider={state.crmProvider}
          otherCrmName={state.otherCrmName}
          googleEmail={state.googleEmail}
          landingPageRequest={state.landingPageRequest}
        />
      )}

      {state.currentStep === 'ending' && <EndingPage />}
    </>
  );
}
