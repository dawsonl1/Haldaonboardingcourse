import React from 'react';
import { ChevronRight, ChevronLeft, Users, Calendar, Edit3, ArrowRight } from 'lucide-react';

interface AccountManagementPageProps {
  onNext: () => void;
  onBack: () => void;
}

export function AccountManagementPage({ onNext, onBack }: AccountManagementPageProps) {
  const accountManagerSupport = [
    'Questions about forms, the AI Hub, or landing pages',
    'Guidance on AI Training and best practices',
    'Reviewing performance and usage',
    'Planning next steps or expansions'
  ];

  const supportOptions = [
    'Regular check-in calls',
    'Strategy conversations',
    'Email support for questions or requests',
    'Access to webinars or training sessions'
  ];

  const changeOptions = [
    'Add new forms',
    'Update content or messaging',
    'Request additional AI Landing Pages',
    'Adjust integrations or routing'
  ];

  const nextSteps = [
    'Your selected forms continue through build and review',
    'Integrations are finalized',
    'Your AI Hub and landing pages are prepared',
    'You\'ll be notified when everything is ready to review or go live'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Page Title */}
        <h1 className="text-center mb-10 text-4xl">
          Account management and next steps
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
                Explain how the partnership works after onboarding and set expectations for ongoing support, communication, and optimization.
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
                    Intro video: Your account team and ongoing support
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-3 max-w-4xl mx-auto">
              <strong>Video covers:</strong> Who the account team is, how partners are supported after launch, what ongoing success looks like, and how to get help when needed. Tone: Warm, confident, and supportive.
            </p>
          </div>

          {/* Intro Copy */}
          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4 text-lg">
              Once onboarding is complete, your account team is here to support you.
            </p>

            <p className="text-gray-700 mb-4 text-lg">
              Halda is not a set-it-and-forget-it tool. We work with you over time to help you improve performance, adjust strategy, and get the most value from the platform.
            </p>

            <p className="text-gray-700 text-lg">
              This page outlines what that ongoing support looks like.
            </p>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* Your account team Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#907fff22', borderLeft: '4px solid #907fff' }}>
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#907fff' }} />
                <h2 className="text-2xl" style={{ color: '#0e1016' }}>
                  Your account team
                </h2>
              </div>

              <p className="text-gray-700 mb-6 text-lg">
                You'll have an account manager who serves as your primary point of contact.
              </p>

              <p className="mb-4" style={{ color: '#0e1016' }}>Your account manager can help with:</p>
              <ul className="space-y-2 mb-6">
                {accountManagerSupport.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-gray-700 text-lg">• {item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg" style={{ color: '#0e1016' }}>
                You're never on your own.
              </p>
            </div>
          </div>

          {/* Ongoing check-ins and support Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#ffdf4422', borderLeft: '4px solid #ffdf44' }}>
              <div className="flex items-start gap-4 mb-6">
                <Calendar className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#ffdf44' }} />
                <h2 className="text-2xl" style={{ color: '#0e1016' }}>
                  Ongoing check-ins and support
                </h2>
              </div>

              <p className="text-gray-700 mb-4 text-lg">
                Depending on your plan and needs, support may include:
              </p>

              <ul className="space-y-2 mb-6">
                {supportOptions.map((option, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-gray-700 text-lg">• {option}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg">
                Your account manager will coordinate what makes the most sense for your school.
              </p>
            </div>
          </div>

          {/* Making changes and improvements Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#fe857622', borderLeft: '4px solid #fe8576' }}>
              <div className="flex items-start gap-4 mb-6">
                <Edit3 className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#fe8576' }} />
                <h2 className="text-2xl" style={{ color: '#0e1016' }}>
                  Making changes and improvements
                </h2>
              </div>

              <p className="text-gray-700 mb-6 text-lg">
                It's normal for needs to evolve over time.
              </p>

              <p className="mb-4" style={{ color: '#0e1016' }}>You can:</p>
              <ul className="space-y-2 mb-6">
                {changeOptions.map((option, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-gray-700 text-lg">• {option}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg">
                Your account manager will help prioritize and plan these changes.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* What happens next Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="mb-6 text-2xl" style={{ color: '#0e1016' }}>
              What happens next
            </h2>

            <p className="text-gray-700 mb-4 text-lg">
              As you finish onboarding:
            </p>

            <ul className="space-y-2 mb-6">
              {nextSteps.map((step, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <ArrowRight className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#4fabff' }} />
                  <span className="text-gray-700 text-lg">{step}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700 text-lg">
              This page marks the transition from setup to ongoing partnership.
            </p>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* Before You Continue */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#4fabff' }}></div>
              <h2 className="mb-4 text-2xl" style={{ color: '#0e1016' }}>
                Before you continue
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                Onboarding is just the beginning.
              </p>
              <p className="text-gray-700 text-lg">
                We're here to help you learn, adjust, and grow with Halda over time.
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
                  onClick={onNext}
                  className="text-white px-8 py-3 rounded transition-all inline-flex items-center gap-2 text-lg hover:opacity-90"
                  style={{ backgroundColor: '#0e1016' }}
                >
                  Continue to review
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-600 text-sm text-center">
                Review all your selections before finishing onboarding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}