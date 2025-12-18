import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

interface IntegrationsPageProps {
  onNext: (
    deliveryDestination: DeliveryDestination,
    crmProvider: CRMProvider,
    otherCrmName: string,
    googleEmail: string
  ) => void;
  onBack: () => void;
  initialDeliveryDestination?: DeliveryDestination;
  initialCrmProvider?: CRMProvider;
  initialOtherCrmName?: string;
  initialGoogleEmail?: string;
}

type DeliveryDestination = 'crm' | 'google-sheet' | null;
type CRMProvider = 'FACTS' | 'FinalSite' | 'Blackbaud' | 'HubSpot' | 'Insightly' | 'RenWeb' | 'Other' | '';

export function IntegrationsPage({ 
  onNext, 
  onBack, 
  initialDeliveryDestination = null, 
  initialCrmProvider = '', 
  initialOtherCrmName = '', 
  initialGoogleEmail = '' 
}: IntegrationsPageProps) {
  const [deliveryDestination, setDeliveryDestination] = useState<DeliveryDestination>(initialDeliveryDestination);
  const [crmProvider, setCrmProvider] = useState<CRMProvider>(initialCrmProvider);
  const [otherCrmName, setOtherCrmName] = useState(initialOtherCrmName);
  const [googleEmail, setGoogleEmail] = useState(initialGoogleEmail);

  const deliverySteps = [
    'Their information is captured securely',
    'It is sent directly to your selected system',
    'Your team can access it right away'
  ];

  const integrationSteps = [
    'A direct connection',
    'A secure webhook',
    'Or a short setup call to finalize details'
  ];

  const crmProviders = [
    'FACTS',
    'FinalSite',
    'Blackbaud',
    'HubSpot',
    'Insightly',
    'RenWeb',
    'Other'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Page Title */}
        <h1 className="text-center mb-10 text-4xl">
          Data and integrations
        </h1>

        {/* Main Content Card */}
        <div className="bg-white rounded-lg p-10 mb-6">
          {/* Primary Goal Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#4fabff' }}></div>
              <h2 className="mb-4 text-3xl" style={{ color: '#0e1016' }}>
                Primary goal
              </h2>
              <p className="text-gray-700 text-lg">
                Explain clearly how captured leads are delivered, collect where data should go, and set expectations for the integration process without overwhelming partners.
              </p>
            </div>
          </div>

          {/* Intro Copy */}
          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4 text-lg">
              When someone fills out a form, their information needs to go to the right place so your team can follow up quickly.
            </p>

            <p className="text-gray-700 mb-4 text-lg">
              Halda sends captured leads directly to the destination you choose. You don't need to export files or move data manually. Once everything is set up, this process happens automatically.
            </p>

            <p className="text-gray-700 text-lg">
              On this page, you'll tell us where you want form submissions to be sent.
            </p>
          </div>

          {/* How lead delivery works Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#4fabff22', borderLeft: '4px solid #4fabff' }}>
              <h2 className="mb-6 text-2xl" style={{ color: '#0e1016' }}>
                How lead delivery works
              </h2>

              <p className="mb-4" style={{ color: '#0e1016' }}>When a visitor submits a form:</p>
              <ul className="space-y-2 mb-6">
                {deliverySteps.map((step, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-gray-700">• {step}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg">
                You don't need to set up integrations yourself. We'll handle the technical work and guide you through the process if needed.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* Where should we send captured leads Section */}
          <div className="mb-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="mb-6 text-3xl" style={{ color: '#0e1016' }}>
                Where should we send captured leads?
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Choose where you would like form submissions to be delivered.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* CRM Option */}
                <button
                  onClick={() => setDeliveryDestination('crm')}
                  className={`text-left p-6 rounded-lg border-2 transition-all ${
                    deliveryDestination === 'crm' 
                      ? 'shadow-md' 
                      : 'hover:border-gray-400'
                  }`}
                  style={{
                    borderColor: deliveryDestination === 'crm' ? '#907fff' : '#d1d5db',
                    backgroundColor: deliveryDestination === 'crm' ? '#907fff11' : '#ffffff'
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl" style={{ color: '#0e1016' }}>CRM</h3>
                    {deliveryDestination === 'crm' && (
                      <CheckCircle2 className="w-6 h-6" style={{ color: '#907fff' }} />
                    )}
                  </div>
                  <p className="text-gray-700">
                    Send leads directly into your school's CRM.
                  </p>
                </button>

                {/* Google Sheet Option */}
                <button
                  onClick={() => setDeliveryDestination('google-sheet')}
                  className={`text-left p-6 rounded-lg border-2 transition-all ${
                    deliveryDestination === 'google-sheet' 
                      ? 'shadow-md' 
                      : 'hover:border-gray-400'
                  }`}
                  style={{
                    borderColor: deliveryDestination === 'google-sheet' ? '#907fff' : '#d1d5db',
                    backgroundColor: deliveryDestination === 'google-sheet' ? '#907fff11' : '#ffffff'
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl" style={{ color: '#0e1016' }}>Google Sheet</h3>
                    {deliveryDestination === 'google-sheet' && (
                      <CheckCircle2 className="w-6 h-6" style={{ color: '#907fff' }} />
                    )}
                  </div>
                  <p className="text-gray-700">
                    Send leads to a shared Google Sheet for easy access and review.
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Which CRM do you use Section (Conditional) */}
          {deliveryDestination === 'crm' && (
            <div className="mb-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="mb-6 text-2xl" style={{ color: '#0e1016' }}>
                  Which CRM do you use?
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                  Select the CRM your school currently uses.
                </p>

                <div className="mb-6">
                  <label className="block mb-3" style={{ color: '#0e1016' }}>
                    CRM provider
                  </label>
                  <select
                    value={crmProvider}
                    onChange={(e) => setCrmProvider(e.target.value as CRMProvider)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                    style={{ color: crmProvider ? '#0e1016' : '#9ca3af' }}
                  >
                    <option value="">Select a CRM provider</option>
                    {crmProviders.map((provider) => (
                      <option key={provider} value={provider}>
                        {provider}
                      </option>
                    ))}
                  </select>
                </div>

                {crmProvider === 'Other' && (
                  <div className="mt-6">
                    <label className="block mb-3" style={{ color: '#0e1016' }}>
                      Please tell us which CRM you use
                    </label>
                    <input
                      type="text"
                      value={otherCrmName}
                      onChange={(e) => setOtherCrmName(e.target.value)}
                      placeholder="Enter your CRM name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                    />
                  </div>
                )}

                <p className="text-gray-600 text-sm mt-4">
                  If you're unsure which CRM your school uses, that's okay. We can confirm this together later.
                </p>
              </div>
            </div>
          )}

          {/* Google Sheet setup Section (Conditional) */}
          {deliveryDestination === 'google-sheet' && (
            <div className="mb-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="mb-6 text-2xl" style={{ color: '#0e1016' }}>
                  Google Sheet setup
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                  We'll create or connect a Google Sheet where submissions will be delivered.
                </p>

                <div>
                  <label className="block mb-3" style={{ color: '#0e1016' }}>
                    Google account email
                  </label>
                  <input
                    type="email"
                    value={googleEmail}
                    onChange={(e) => setGoogleEmail(e.target.value)}
                    placeholder="email@yourschool.edu"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                  />
                  <p className="text-gray-600 text-sm mt-3">
                    This email will be given access to the sheet. You can share it with others later if needed.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Divider */}
          {deliveryDestination && (
            <div className="max-w-4xl mx-auto mb-16">
              <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
            </div>
          )}

          {/* What to expect with integrations Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#ffdf44' }}></div>
              <h2 className="mb-6 text-2xl" style={{ color: '#0e1016' }}>
                What to expect with integrations
              </h2>

              <p className="text-gray-700 mb-6 text-lg">
                Once your first form is built, we'll begin the integration process for your selected destination.
              </p>

              <p className="mb-4" style={{ color: '#0e1016' }}>Depending on the system you choose, this may involve:</p>
              <ul className="space-y-2 mb-6">
                {integrationSteps.map((step, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-gray-700">• {step}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg">
                We'll let you know exactly what's needed and help coordinate any next steps.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* Support and next steps Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="mb-6 text-2xl" style={{ color: '#0e1016' }}>
              Support and next steps
            </h2>

            <p className="text-gray-700 mb-4 text-lg">
              If you have questions or want to talk through your integration, we're happy to schedule a call when the time comes.
            </p>

            <p className="text-gray-700 text-lg">
              Our goal is to make sure submissions arrive where your team expects them, without adding extra work.
            </p>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* Before You Continue */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#fe8576' }}></div>
              <h2 className="mb-4 text-2xl" style={{ color: '#0e1016' }}>
                Before you continue
              </h2>
              <p className="text-gray-700 text-lg">
                Nothing on this page is permanent. The information you provide here gives us a starting point so we can prepare for integration once your first form is ready.
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
                  onClick={() => onNext(deliveryDestination, crmProvider, otherCrmName, googleEmail)}
                  className="text-white px-8 py-3 rounded transition-all inline-flex items-center gap-2 text-lg hover:opacity-90"
                  style={{ backgroundColor: '#0e1016' }}
                >
                  Continue to AI Landing Pages
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-600 text-sm text-center">
                You can pause and return at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}