import React from 'react';
import { CheckCircle2, Sparkles, Calendar, Users, Mail } from 'lucide-react';

export function EndingPage() {
  const nextSteps = [
    'Your selected forms will be built and reviewed by our team',
    'Integrations will be finalized and tested',
    'Your AI Hub and content cards will be prepared',
    'AI training resources will be made available to you',
    'You\'ll receive a notification when everything is ready to review or go live'
  ];

  const whatToExpect = [
    {
      title: 'Build phase',
      description: 'Our team builds your forms, AI Hub, and landing pages based on your selections',
      icon: Sparkles,
      color: '#4fabff'
    },
    {
      title: 'Review & refinement',
      description: 'You\'ll have a chance to review everything before it goes live',
      icon: CheckCircle2,
      color: '#907fff'
    },
    {
      title: 'Launch & support',
      description: 'Your account manager will guide you through launch and ongoing optimization',
      icon: Users,
      color: '#ffdf44'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Page Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 mx-auto" style={{ backgroundColor: '#4fabff99' }}>
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl mb-4">
            Onboarding complete!
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Thank you for completing your Halda onboarding. Your selections have been recorded and our team is ready to begin building your experience.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-lg p-10 mb-6">
          {/* Celebration Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="rounded-xl p-8 text-center" style={{ backgroundColor: '#4fabff22', border: '2px solid #4fabff66' }}>
              <Sparkles className="w-16 h-16 mx-auto mb-4" style={{ color: '#4fabff' }} />
              <h2 className="mb-4 text-3xl" style={{ color: '#0e1016' }}>
                You've taken the first step
              </h2>
              <p className="text-gray-700 text-lg mb-3">
                Completing this onboarding course means our team has everything we need to start building your forms, AI Hub, integrations, and landing pages.
              </p>
              <p className="text-gray-700 text-lg">
                We'll handle the technical details from here.
              </p>
            </div>
          </div>

          {/* What Happens Next Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <h2 className="mb-8 text-3xl text-center" style={{ color: '#0e1016' }}>
              What happens next
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {whatToExpect.map((step, index) => (
                <div 
                  key={index} 
                  className="rounded-lg p-6 border-2 transition-all hover:shadow-lg"
                  style={{ borderColor: `${step.color}66` }}
                >
                  <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ backgroundColor: `${step.color}33` }}>
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <h3 className="mb-3 text-xl" style={{ color: '#0e1016' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-700">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-lg p-6" style={{ backgroundColor: '#907fff22' }}>
              <h3 className="mb-4 text-xl" style={{ color: '#0e1016' }}>
                Next steps:
              </h3>
              <ul className="space-y-3">
                {nextSteps.map((step, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#907fff' }} />
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* Timeline Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#ffdf44' }}></div>
              <h2 className="mb-4 text-2xl" style={{ color: '#0e1016' }}>
                Estimated timeline
              </h2>
              <p className="text-gray-700 text-lg mb-3">
                Most partners see their first forms live in 1-2 weeks as long as the script is installed successfully.
              </p>
              <p className="text-gray-700 text-lg mb-3">
                Your account manager will keep you updated throughout the process and will reach out if we need any additional information.
              </p>
              <p className="text-gray-700 text-lg">
                In the meantime, you don't need to do anything else. We'll be in touch soon.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#fe857633', borderLeft: '4px solid #fe8576' }}>
              <div className="flex items-start gap-4">
                <Mail className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: '#fe8576' }} />
                <div>
                  <h2 className="mb-3 text-2xl" style={{ color: '#0e1016' }}>
                    Questions or concerns?
                  </h2>
                  <p className="text-gray-700 text-lg mb-2">
                    If you have any questions about what happens next, or if you need to update any of your selections, please reach out to your account manager.
                  </p>
                  <p className="text-gray-700 text-lg">
                    We're here to help make this process as smooth as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-lg p-8 text-center" style={{ backgroundColor: '#4fabff99' }}>
              <h3 className="mb-3 text-2xl text-white">
                Thank you for choosing Halda
              </h3>
              <p className="text-white text-lg mb-4">
                We're excited to partner with you and help you capture more inquiries, engage families better, and grow enrollment.
              </p>
              <p className="text-white">
                You'll hear from us soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}