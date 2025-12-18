import React from 'react';
import { ChevronLeft, Edit2, CheckCircle2 } from 'lucide-react';

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

interface ReviewPageProps {
  onBack: () => void;
  onFinish: () => void;
  onEdit: (page: string) => void;
  
  // Branding data
  driveLink: string;
  features: string[];
  
  // Form setup data
  selectedForms: string[];
  formConfigs: Record<string, FormConfig>;
  
  // AI Hub data
  contentCards: ContentCard[];
  
  // Integrations data
  deliveryDestination: 'crm' | 'google-sheet' | null;
  crmProvider: string;
  otherCrmName: string;
  googleEmail: string;
  
  // AI Landing Pages data
  landingPageRequest: 'yes' | 'no' | null;
}

export function ReviewPage({ 
  onBack, 
  onFinish, 
  onEdit,
  driveLink,
  features,
  selectedForms,
  formConfigs,
  contentCards,
  deliveryDestination,
  crmProvider,
  otherCrmName,
  googleEmail,
  landingPageRequest
}: ReviewPageProps) {
  
  const formTypeNames: Record<string, string> = {
    'best-fit': 'Best Fit Assessments',
    'financial-aid': 'Financial Aid information or affordability guidance',
    'event-signup': 'Event or open house signups',
    'general-contact': 'General contact or questions',
    'event-promotion': 'Single page event or deadline promotion'
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Page Title */}
        <h1 className="text-center mb-10 text-4xl">
          Review your onboarding selections
        </h1>

        {/* Main Content Card */}
        <div className="bg-white rounded-lg p-10 mb-6">
          {/* Intro Copy */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="inline-block rounded-lg p-6" style={{ backgroundColor: '#4fabff22', border: '1px solid #4fabff44' }}>
              <p className="text-gray-700 mb-4 text-lg">
                <strong>Review everything you've selected during onboarding.</strong>
              </p>
              <p className="text-gray-700 text-lg">
                You can go back and edit any section before finishing. Once you click "Finish Onboarding" below, your selections will be locked in and our team will begin building your Halda experience.
              </p>
            </div>
          </div>

          {/* Branding Section */}
          <div className="mb-12 max-w-6xl mx-auto">
            <div className="rounded-lg border-2 overflow-hidden" style={{ borderColor: '#907fff66' }}>
              <div className="p-6 flex items-center justify-between" style={{ backgroundColor: '#907fff22' }}>
                <h2 className="text-2xl" style={{ color: '#0e1016' }}>
                  Branding and appearance
                </h2>
                <button
                  onClick={() => onEdit('branding')}
                  className="px-4 py-2 rounded-lg text-white transition-all hover:opacity-90 flex items-center gap-2"
                  style={{ backgroundColor: '#907fff' }}
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="p-6 bg-white">
                {driveLink || features.length > 0 ? (
                  <>
                    {driveLink && (
                      <div className="mb-4">
                        <p className="text-gray-600 mb-2">Google Drive link:</p>
                        <p className="text-gray-800 break-all">{driveLink}</p>
                      </div>
                    )}
                    {features.length > 0 && (
                      <div>
                        <p className="text-gray-600 mb-2">Features to highlight:</p>
                        <ul className="space-y-2">
                          {features.map((feature, index) => (
                            <li key={index} className="flex gap-2 items-start">
                              <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#907fff' }} />
                              <span className="text-gray-800">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                ) : (
                  <p className="text-gray-500 italic">No branding assets provided - we'll use imagery from your website</p>
                )}
              </div>
            </div>
          </div>

          {/* Form Setup Section */}
          <div className="mb-12 max-w-6xl mx-auto">
            <div className="rounded-lg border-2 overflow-hidden" style={{ borderColor: '#4fabff66' }}>
              <div className="p-6 flex items-center justify-between" style={{ backgroundColor: '#4fabff22' }}>
                <h2 className="text-2xl" style={{ color: '#0e1016' }}>
                  Form setup
                </h2>
                <button
                  onClick={() => onEdit('form-setup')}
                  className="px-4 py-2 rounded-lg text-white transition-all hover:opacity-90 flex items-center gap-2"
                  style={{ backgroundColor: '#4fabff' }}
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="p-6 bg-white">
                {selectedForms.length > 0 ? (
                  <div className="space-y-6">
                    {selectedForms.map((formId) => (
                      <div key={formId} className="border-l-4 pl-4" style={{ borderColor: '#4fabff' }}>
                        <h3 className="text-lg mb-3" style={{ color: '#0e1016' }}>
                          {formTypeNames[formId]}
                        </h3>
                        {formConfigs[formId] && (
                          <div className="space-y-2 text-gray-700">
                            {formConfigs[formId].audiences.length > 0 && (
                              <div>
                                <span className="text-gray-600">Audiences: </span>
                                {formConfigs[formId].audiences.join(', ')}
                              </div>
                            )}
                            {formConfigs[formId].urls.some(url => url.trim()) && (
                              <div>
                                <span className="text-gray-600">URLs: </span>
                                {formConfigs[formId].urls.filter(url => url.trim()).join(', ')}
                              </div>
                            )}
                            {formConfigs[formId].challenges && (
                              <div>
                                <span className="text-gray-600">Challenges: </span>
                                {formConfigs[formId].challenges}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No forms selected</p>
                )}
              </div>
            </div>
          </div>

          {/* AI Hub Section */}
          <div className="mb-12 max-w-6xl mx-auto">
            <div className="rounded-lg border-2 overflow-hidden" style={{ borderColor: '#907fff66' }}>
              <div className="p-6 flex items-center justify-between" style={{ backgroundColor: '#907fff22' }}>
                <h2 className="text-2xl" style={{ color: '#0e1016' }}>
                  AI Hub and content cards
                </h2>
                <button
                  onClick={() => onEdit('ai-hub')}
                  className="px-4 py-2 rounded-lg text-white transition-all hover:opacity-90 flex items-center gap-2"
                  style={{ backgroundColor: '#907fff' }}
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="p-6 bg-white">
                {contentCards.length > 0 ? (
                  <div className="space-y-4">
                    {contentCards.map((card, index) => (
                      <div key={card.id} className="rounded-lg p-4" style={{ backgroundColor: '#f8f9fa', border: '1px solid #0e101622' }}>
                        <p className="text-sm text-gray-600 mb-2">Card {index + 1}</p>
                        {card.headline && <p className="text-gray-800 mb-1"><strong>Headline:</strong> {card.headline}</p>}
                        {card.subheadline && <p className="text-gray-700 mb-1"><strong>Subheadline:</strong> {card.subheadline}</p>}
                        {card.callToAction && <p className="text-gray-700 mb-1"><strong>CTA:</strong> {card.callToAction}</p>}
                        {card.link && <p className="text-gray-700 break-all"><strong>Link:</strong> {card.link}</p>}
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No content cards created</p>
                )}
              </div>
            </div>
          </div>

          {/* Integrations Section */}
          <div className="mb-12 max-w-6xl mx-auto">
            <div className="rounded-lg border-2 overflow-hidden" style={{ borderColor: '#ffdf4466' }}>
              <div className="p-6 flex items-center justify-between" style={{ backgroundColor: '#ffdf4422' }}>
                <h2 className="text-2xl" style={{ color: '#0e1016' }}>
                  Data and integrations
                </h2>
                <button
                  onClick={() => onEdit('integrations')}
                  className="px-4 py-2 rounded-lg text-white transition-all hover:opacity-90 flex items-center gap-2"
                  style={{ backgroundColor: '#ffdf44', color: '#0e1016' }}
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="p-6 bg-white">
                {deliveryDestination ? (
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-600">Delivery destination: </span>
                      <span className="text-gray-800">
                        {deliveryDestination === 'crm' ? 'CRM' : 'Google Sheet'}
                      </span>
                    </div>
                    {deliveryDestination === 'crm' && crmProvider && (
                      <div>
                        <span className="text-gray-600">CRM Provider: </span>
                        <span className="text-gray-800">
                          {crmProvider === 'Other' ? otherCrmName || 'Other' : crmProvider}
                        </span>
                      </div>
                    )}
                    {deliveryDestination === 'google-sheet' && googleEmail && (
                      <div>
                        <span className="text-gray-600">Google Email: </span>
                        <span className="text-gray-800">{googleEmail}</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No integration destination selected</p>
                )}
              </div>
            </div>
          </div>

          {/* AI Landing Pages Section */}
          <div className="mb-12 max-w-6xl mx-auto">
            <div className="rounded-lg border-2 overflow-hidden" style={{ borderColor: '#fe857666' }}>
              <div className="p-6 flex items-center justify-between" style={{ backgroundColor: '#fe857622' }}>
                <h2 className="text-2xl" style={{ color: '#0e1016' }}>
                  AI Landing Pages
                </h2>
                <button
                  onClick={() => onEdit('ai-landing-pages')}
                  className="px-4 py-2 rounded-lg text-white transition-all hover:opacity-90 flex items-center gap-2"
                  style={{ backgroundColor: '#fe8576' }}
                >
                  <Edit2 className="w-4 h-4" />
                  Edit
                </button>
              </div>
              <div className="p-6 bg-white">
                {landingPageRequest !== null ? (
                  <div>
                    <span className="text-gray-600">Landing page request: </span>
                    <span className="text-gray-800">
                      {landingPageRequest === 'yes' ? 'Yes, I would like an AI Landing Page' : 'No, not at this time'}
                    </span>
                  </div>
                ) : (
                  <p className="text-gray-500 italic">No selection made</p>
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* Final message */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#4fabff22', borderLeft: '4px solid #4fabff' }}>
              <h2 className="mb-4 text-2xl" style={{ color: '#0e1016' }}>
                Ready to finish?
              </h2>
              <p className="text-gray-700 text-lg mb-3">
                Once you click "Finish Onboarding," your selections will be locked in and our team will begin building your forms, AI Hub, and integrations.
              </p>
              <p className="text-gray-700 text-lg">
                If you need to make any changes, use the "Edit" buttons above before continuing.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg p-8" style={{ backgroundColor: '#4fabff99' }}>
              <div className="flex items-center justify-center gap-4 mb-3">
                <button 
                  onClick={onBack}
                  className="text-white px-8 py-3 rounded transition-all inline-flex items-center gap-2 text-lg hover:opacity-90"
                  style={{ backgroundColor: '#0e1016' }}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>

                <button 
                  onClick={onFinish}
                  className="text-white px-8 py-3 rounded transition-all inline-flex items-center gap-2 text-lg hover:opacity-90"
                  style={{ backgroundColor: '#0e1016' }}
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Finish Onboarding
                </button>
              </div>

              <p className="text-gray-600 text-sm text-center">
                This will finalize all your selections and begin the build process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
