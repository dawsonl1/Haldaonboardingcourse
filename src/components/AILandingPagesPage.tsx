import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

import type { LandingPageRequest } from '../onboarding/types';

interface AILandingPagesPageProps {
  onNext: (landingPageRequest: LandingPageRequest) => void;
  onBack: () => void;
  initialLandingPageRequest?: LandingPageRequest;
}

export function AILandingPagesPage({ onNext, onBack, initialLandingPageRequest = null }: AILandingPagesPageProps) {
  const [landingPageRequest, setLandingPageRequest] = useState<LandingPageRequest>(initialLandingPageRequest);

  const useCases = [
    'Paid media advertising',
    'Event promotion',
    'Open house or tour campaigns',
    'Targeted outreach efforts'
  ];

  const includedBenefits = [
    'Test how a focused entry point performs',
    'See how visitors engage when distractions are removed',
    'Capture inquiries in a controlled environment'
  ];

  const landingPageFeatures = [
    'Keep visitors focused on a single goal',
    'Present only the most relevant information',
    'Include a form ready for completion'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Page Title */}
        <h1 className="text-center mb-10 text-4xl">
          AI Landing Pages
        </h1>

        {/* Main Content Card */}
        <div className="bg-white rounded-lg p-10 mb-6">
          {/* Primary Goal Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#907fff' }}></div>
              <h2 className="mb-4 text-3xl" style={{ color: '#0e1016' }}>
                Primary goal
              </h2>
              <p className="text-gray-700 text-lg">
                Introduce AI Landing Pages as a focused entry point for campaigns and allow partners to request their included landing page.
              </p>
            </div>
          </div>

          {/* Intro Video Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden border-2" style={{ borderColor: '#4fabff66', backgroundColor: '#ffffff' }}>
              <div className="aspect-video flex items-center justify-center" style={{ backgroundColor: '#0e101611' }}>
                <div className="text-center px-8">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#4fabff99' }}>
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-600">
                    Intro video: What AI Landing Pages are and how they work
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-3 max-w-4xl mx-auto">
              <strong>Video covers:</strong> What AI Landing Pages are, why focused entry points perform better than sending traffic to a homepage, how schools commonly use them with paid media and outreach, and what is included by default.
            </p>
          </div>

          {/* Intro Copy */}
          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4 text-lg">
              In addition to forms on your website and the AI Hub, Halda offers AI Landing Pages.
            </p>

            <p className="text-gray-700 mb-4 text-lg">
              AI Landing Pages are simple, focused pages designed to receive visitors from advertising and outreach. They create a controlled experience where visitors can learn, engage, and complete a form without distractions.
            </p>

            <p className="text-gray-700 text-lg">
              This page explains how AI Landing Pages work and gives you the option to request one.
            </p>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* What is an AI Landing Page Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#907fff22', borderLeft: '4px solid #907fff' }}>
              <h2 className="mb-6 text-2xl" style={{ color: '#0e1016' }}>
                What is an AI Landing Page?
              </h2>

              <p className="text-gray-700 mb-6 text-lg">
                An AI Landing Page is a standalone page built for a specific purpose.
              </p>

              <p className="mb-4" style={{ color: '#0e1016' }}>Instead of sending visitors from an ad or email to your homepage, AI Landing Pages:</p>
              <ul className="space-y-2 mb-6">
                {landingPageFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-gray-700">• {feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg">
                This approach often leads to clearer engagement and higher-quality inquiries.
              </p>
            </div>
          </div>

          {/* Common use cases Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="mb-6 text-2xl" style={{ color: '#0e1016' }}>
              Common use cases
            </h2>

            <p className="mb-4" style={{ color: '#0e1016' }}>Schools commonly use AI Landing Pages for:</p>
            <ul className="space-y-2 mb-6">
              {useCases.map((useCase, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="text-gray-700 text-lg">• {useCase}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700 text-lg">
              Each landing page is designed around a specific message and audience.
            </p>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* What's included Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#ffdf44' }}></div>
              <h2 className="mb-6 text-2xl" style={{ color: '#0e1016' }}>
                What's included
              </h2>

              <p className="text-gray-700 mb-6 text-lg">
                Each partner receives <strong>one AI Landing Page</strong> to experience the value of a focused gateway for visitors coming from advertising or outreach.
              </p>

              <p className="mb-4" style={{ color: '#0e1016' }}>This included landing page allows you to:</p>
              <ul className="space-y-2 mb-6">
                {includedBenefits.map((benefit, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-gray-700">• {benefit}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg">
                Your account manager can share guidance on how to use this page effectively.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* Request your AI Landing Page Section */}
          <div className="mb-16">
            <div className="max-w-5xl mx-auto">
              <h2 className="mb-6 text-2xl" style={{ color: '#0e1016' }}>
                Request your AI Landing Page
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Would you like us to build your included AI Landing Page?
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Yes Option */}
                <button
                  onClick={() => setLandingPageRequest('yes')}
                  className={`text-left p-6 rounded-lg border-2 transition-all ${
                    landingPageRequest === 'yes' 
                      ? 'shadow-md' 
                      : 'hover:border-gray-400'
                  }`}
                  style={{
                    borderColor: landingPageRequest === 'yes' ? '#4fabff' : '#d1d5db',
                    backgroundColor: landingPageRequest === 'yes' ? '#4fabff11' : '#ffffff'
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl" style={{ color: '#0e1016' }}>Yes, build my AI Landing Page</h3>
                    {landingPageRequest === 'yes' && (
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 ml-2" style={{ color: '#4fabff' }} />
                    )}
                  </div>
                </button>

                {/* No Option */}
                <button
                  onClick={() => setLandingPageRequest('no')}
                  className={`text-left p-6 rounded-lg border-2 transition-all ${
                    landingPageRequest === 'no' 
                      ? 'shadow-md' 
                      : 'hover:border-gray-400'
                  }`}
                  style={{
                    borderColor: landingPageRequest === 'no' ? '#4fabff' : '#d1d5db',
                    backgroundColor: landingPageRequest === 'no' ? '#4fabff11' : '#ffffff'
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl" style={{ color: '#0e1016' }}>No, I'll request this later</h3>
                    {landingPageRequest === 'no' && (
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 ml-2" style={{ color: '#4fabff' }} />
                    )}
                  </div>
                </button>
              </div>

              <p className="text-gray-600 text-sm">
                If you're not running campaigns yet, it's completely fine to skip this for now.
              </p>
            </div>
          </div>

          {/* Additional landing pages Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="mb-6 text-2xl" style={{ color: '#0e1016' }}>
              Additional landing pages
            </h2>

            <p className="text-gray-700 mb-4 text-lg">
              If you're interested in additional landing pages beyond the one included, your account manager can walk you through options for upgrading your plan to support expanded landing page functionality.
            </p>

            <p className="text-gray-700 text-lg">
              There's no need to decide on that now.
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
              <p className="text-gray-700 mb-4 text-lg">
                AI Landing Pages are optional and can be added at any time.
              </p>
              <p className="text-gray-700 text-lg">
                Whether you request one now or later, your forms and AI Hub will continue to work as expected.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg p-8" style={{ backgroundColor: '#907fff99' }}>
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
                  onClick={() => onNext(landingPageRequest)}
                  className="text-white px-8 py-3 rounded transition-all inline-flex items-center gap-2 text-lg hover:opacity-90"
                  style={{ backgroundColor: '#0e1016' }}
                >
                  Continue to script installation
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