import { useCallback, useMemo, useReducer } from 'react';

import type {
  ContentCard,
  CRMProvider,
  DeliveryDestination,
  FormConfig,
  LandingPageRequest,
} from './types';
import type { OnboardingStepId } from './steps';

interface OnboardingCourseState {
  currentStep: OnboardingStepId;
  isSidebarOpen: boolean;

  driveLink: string;
  features: string[];

  selectedForms: string[];
  formConfigs: Record<string, FormConfig>;

  contentCards: ContentCard[];

  deliveryDestination: DeliveryDestination;
  crmProvider: CRMProvider;
  otherCrmName: string;
  googleEmail: string;

  landingPageRequest: LandingPageRequest;
}

type Action =
  | { type: 'navigate'; step: OnboardingStepId }
  | { type: 'sidebar/open' }
  | { type: 'sidebar/close' }
  | { type: 'branding/set'; driveLink: string; features: string[] }
  | { type: 'forms/set'; selectedForms: string[]; formConfigs: Record<string, FormConfig> }
  | { type: 'contentCards/set'; contentCards: ContentCard[] }
  | {
      type: 'integrations/set';
      deliveryDestination: DeliveryDestination;
      crmProvider: CRMProvider;
      otherCrmName: string;
      googleEmail: string;
    }
  | { type: 'landingPageRequest/set'; request: LandingPageRequest };

const initialState: OnboardingCourseState = {
  currentStep: 'welcome',
  isSidebarOpen: false,

  driveLink: '',
  features: [],

  selectedForms: [],
  formConfigs: {},

  contentCards: [],

  deliveryDestination: null,
  crmProvider: '',
  otherCrmName: '',
  googleEmail: '',

  landingPageRequest: null,
};

function reducer(state: OnboardingCourseState, action: Action): OnboardingCourseState {
  switch (action.type) {
    case 'navigate':
      return { ...state, currentStep: action.step };
    case 'sidebar/open':
      return { ...state, isSidebarOpen: true };
    case 'sidebar/close':
      return { ...state, isSidebarOpen: false };
    case 'branding/set':
      return {
        ...state,
        driveLink: action.driveLink,
        features: action.features,
      };
    case 'forms/set':
      return {
        ...state,
        selectedForms: action.selectedForms,
        formConfigs: action.formConfigs,
      };
    case 'contentCards/set':
      return {
        ...state,
        contentCards: action.contentCards,
      };
    case 'integrations/set':
      return {
        ...state,
        deliveryDestination: action.deliveryDestination,
        crmProvider: action.crmProvider,
        otherCrmName: action.otherCrmName,
        googleEmail: action.googleEmail,
      };
    case 'landingPageRequest/set':
      return {
        ...state,
        landingPageRequest: action.request,
      };
    default:
      return state;
  }
}

export function useOnboardingCourse() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useCallback((step: OnboardingStepId) => {
    dispatch({ type: 'navigate', step });
  }, []);

  const openSidebar = useCallback(() => {
    dispatch({ type: 'sidebar/open' });
  }, []);

  const closeSidebar = useCallback(() => {
    dispatch({ type: 'sidebar/close' });
  }, []);

  const handleWelcomeNext = useCallback(() => {
    navigate('how-halda-works');
  }, [navigate]);

  const handleHowHaldaWorksNext = useCallback(() => {
    navigate('branding');
  }, [navigate]);

  const handleHowHaldaWorksBack = useCallback(() => {
    navigate('welcome');
  }, [navigate]);

  const handleBrandingNext = useCallback(
    (driveLink: string, features: string[]) => {
      dispatch({ type: 'branding/set', driveLink, features });
      navigate('form-setup');
    },
    [navigate]
  );

  const handleBrandingBack = useCallback(() => {
    navigate('how-halda-works');
  }, [navigate]);

  const handleFormSetupNext = useCallback(
    (selectedForms: string[], formConfigs: Record<string, FormConfig>) => {
      dispatch({ type: 'forms/set', selectedForms, formConfigs });
      navigate('ai-hub');
    },
    [navigate]
  );

  const handleFormSetupBack = useCallback(() => {
    navigate('branding');
  }, [navigate]);

  const handleAIHubNext = useCallback(
    (contentCards: ContentCard[]) => {
      dispatch({ type: 'contentCards/set', contentCards });
      navigate('integrations');
    },
    [navigate]
  );

  const handleAIHubBack = useCallback(() => {
    navigate('form-setup');
  }, [navigate]);

  const handleIntegrationsNext = useCallback(
    (
      destination: DeliveryDestination,
      crmProvider: CRMProvider,
      otherCrmName: string,
      googleEmail: string
    ) => {
      dispatch({
        type: 'integrations/set',
        deliveryDestination: destination,
        crmProvider,
        otherCrmName,
        googleEmail,
      });
      navigate('ai-landing-pages');
    },
    [navigate]
  );

  const handleIntegrationsBack = useCallback(() => {
    navigate('ai-hub');
  }, [navigate]);

  const handleAILandingPagesNext = useCallback(
    (request: LandingPageRequest) => {
      dispatch({ type: 'landingPageRequest/set', request });
      navigate('script-installation');
    },
    [navigate]
  );

  const handleAILandingPagesBack = useCallback(() => {
    navigate('integrations');
  }, [navigate]);

  const handleScriptInstallationNext = useCallback(() => {
    navigate('ai-training');
  }, [navigate]);

  const handleScriptInstallationBack = useCallback(() => {
    navigate('ai-landing-pages');
  }, [navigate]);

  const handleAITrainingNext = useCallback(() => {
    navigate('account-management');
  }, [navigate]);

  const handleAITrainingBack = useCallback(() => {
    navigate('script-installation');
  }, [navigate]);

  const handleAccountManagementNext = useCallback(() => {
    navigate('review');
  }, [navigate]);

  const handleAccountManagementBack = useCallback(() => {
    navigate('ai-training');
  }, [navigate]);

  const handleReviewBack = useCallback(() => {
    navigate('account-management');
  }, [navigate]);

  const handleReviewEdit = useCallback(
    (step: OnboardingStepId) => {
      navigate(step);
    },
    [navigate]
  );

  const handleFinishOnboarding = useCallback(() => {
    navigate('ending');
  }, [navigate]);

  const api = useMemo(
    () => ({
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
    }),
    [
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
    ]
  );

  return api;
}
