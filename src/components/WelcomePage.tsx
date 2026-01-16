import React from 'react';
import { ChevronRight, Check, X, Clock, Code, Zap, MessageSquare, Database, Globe, Sparkles, GraduationCap } from 'lucide-react';

interface WelcomePageProps {
  onNext: () => void;
}

export function WelcomePage({ onNext }: WelcomePageProps) {
  const courseTopics = [
    { label: 'AI Forms and how they capture inquiries on your website', icon: MessageSquare },
    { label: 'The AI Hub and content cards', icon: Sparkles },
    { label: 'Integrations and where your data goes', icon: Database },
    { label: 'AI Landing Pages and when they\'re useful', icon: Globe },
    { label: 'AI Training and best practices', icon: GraduationCap },
    { label: 'Script installation and next steps', icon: Code }
  ];

  const doNotNeed = [
    'Any technical or coding experience',
    'To set up integrations on your own',
    'To have every decision finalized'
  ];

  const willBeAsked = [
    'Select which forms you want to start with',
    'Share where captured leads should be sent',
    'Complete a few required setup steps so we can move forward'
  ];

  const asYouProgress = [
    'Internal setup tasks are created for our team',
    'Your selected forms are queued for build',
    'Integration work begins once your first form is ready'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Page Title */}
        <h1 className="text-center mb-10 text-4xl">
          Welcome to your Halda onboarding course
        </h1>

        {/* Main Content Card */}
        <div className="bg-white rounded-lg p-10 mb-6">
          {/* Intro Video Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg aspect-video flex items-center justify-center mb-6" style={{ backgroundColor: '#000000' }}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-white/80 text-sm">Welcome video</p>
                </div>
              </div>
              <div className="text-gray-600 text-sm space-y-1">
                <p className="text-center">The video will:</p>
                <ul className="max-w-2xl mx-auto space-y-1">
                  <li>• Welcome you as a partner</li>
                  <li>• Explain what Halda does at a high level</li>
                  <li>• Explain that this is a structured onboarding course</li>
                  <li>• Set expectations for time and pacing</li>
                  <li>• Mention script installation as critical, but coming later</li>
                  <li>• Reassure support throughout the process</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Welcome Copy */}
          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4 text-lg">
              Welcome! We're excited to get you set up.
            </p>

            <p className="text-gray-700 mb-4 text-lg">
              This onboarding course will walk you through how Halda works, help you choose which forms to launch first, and collect the information we need to begin building and integrating everything for you.
            </p>

            <p className="text-gray-700 text-lg">
              You don't need any technical background to complete this course. We'll guide you step by step, and our team is here to help whenever questions come up.
            </p>
          </div>

          {/* What This Course Includes Section */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="mb-8 text-3xl" style={{ color: '#000000' }}>
                What this course includes
              </h2>

              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2">
                  <p className="text-gray-700 mb-6 text-lg">
                    This onboarding course is broken into a series of short sections. Each one focuses on a specific part of the platform so you can move forward with confidence.
                  </p>

                  <div className="rounded-lg p-6 mb-6" style={{ backgroundColor: '#4fabff22' }}>
                    <p className="mb-4" style={{ color: '#000000' }}>You'll learn about:</p>
                    <ul className="space-y-3">
                      {courseTopics.map((topic, index) => {
                        const Icon = topic.icon;
                        return (
                          <li key={index} className="flex gap-3 items-start">
                            <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#000000' }} />
                            <span className="text-gray-700">{topic.label}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <p className="text-gray-700 text-lg">
                    You can move through the course at your own pace.
                  </p>
                </div>

                <div className="rounded-lg p-6" style={{ backgroundColor: '#907fff33', border: '2px solid #907fff66' }}>
                  <div className="flex items-start gap-3">
                    <Clock className="w-7 h-7 flex-shrink-0 mt-1" style={{ color: '#000000' }} />
                    <div>
                      <p className="mb-3" style={{ color: '#000000' }}>How long this takes</p>
                      <p className="text-gray-700 mb-3">Most partners complete the course in about 30–45 minutes total.</p>
                      <p className="text-gray-600">
                        You don't need to do it all at once. You can pause at any time and come back later right where you left off.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#00000022' }}></div>
          </div>

          {/* What You Do and Don't Need Section */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="mb-8 text-3xl" style={{ color: '#000000' }}>
                What you do and don't need
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="rounded-lg p-6 mb-4" style={{ backgroundColor: '#fe857622', borderLeft: '4px solid #fe8576' }}>
                    <div className="flex items-center gap-2 mb-4">
                      <X className="w-5 h-5" style={{ color: '#000000' }} />
                      <p style={{ color: '#000000' }}>You do not need:</p>
                    </div>
                    <ul className="space-y-2">
                      {doNotNeed.map((item, index) => (
                        <li key={index} className="flex gap-3 items-start">
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="rounded-lg p-6 mb-4" style={{ backgroundColor: '#4fabff22', borderLeft: '4px solid #4fabff' }}>
                    <div className="flex items-center gap-2 mb-4">
                      <Check className="w-5 h-5" style={{ color: '#000000' }} />
                      <p style={{ color: '#000000' }}>You will be asked to:</p>
                    </div>
                    <ul className="space-y-2">
                      {willBeAsked.map((item, index) => (
                        <li key={index} className="flex gap-3 items-start">
                          <span className="text-gray-600">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="max-w-4xl mx-auto mt-6">
                <p className="text-gray-700 text-lg text-center">
                  We'll take care of the technical work with you.
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#00000022' }}></div>
          </div>

          {/* Script Installation Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#ffdf4422', borderLeft: '4px solid #ffdf44' }}>
              <div className="flex items-start gap-4 mb-6">
                <Code className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#000000' }} />
                <div>
                  <h2 className="mb-4 text-2xl" style={{ color: '#000000' }}>
                    Script installation (important)
                  </h2>
                  <p className="text-gray-700 text-lg mb-4">
                    One of the most important steps in this onboarding course is installing the Halda script on your website.
                  </p>
                  <p className="text-gray-700 text-lg mb-6">
                    This script allows forms, content, and integrations to work correctly. Without it, nothing can go live.
                  </p>

                  <div className="border-t pt-6" style={{ borderColor: '#00000033' }}>
                    <p className="text-gray-700 text-lg mb-4">
                      You won't be asked to install the script right now. Clear instructions and guidance will be provided later in the course, and our team is happy to help when you reach that step.
                    </p>
                    <p className="text-gray-700 text-lg">
                      We recommend completing script installation as soon as possible once you get there so we can move forward quickly with your setup.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens As You Move Through Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#907fff' }}></div>
              <h2 className="mb-6 text-3xl" style={{ color: '#000000' }}>
                What happens as you move through the course
              </h2>

              <p className="text-gray-700 mb-6 text-lg">
                As you complete sections of this course:
              </p>

              <ul className="space-y-3 mb-6">
                {asYouProgress.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#907fff' }} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg border-t pt-6" style={{ borderColor: '#00000033' }}>
                Completing the course helps us move faster on your setup.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg p-8 text-center" style={{ backgroundColor: '#4fabff99' }}>
              <button 
                onClick={onNext}
                className="text-white px-8 py-3 rounded transition-all inline-flex items-center gap-2 mb-3 text-lg hover:opacity-90"
                style={{ backgroundColor: '#000000' }}
              >
                Begin onboarding
                <ChevronRight className="w-5 h-5" />
              </button>

              <p className="text-gray-600 text-sm">
                You can pause and return at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}