import React from 'react';
import { ChevronRight, ArrowRight, Layers, Globe, Sparkles, Target, CheckCircle2, X, ChevronLeft } from 'lucide-react';

interface HowHaldaWorksPageProps {
  onNext: () => void;
  onBack: () => void;
}

export function HowHaldaWorksPage({ onNext, onBack }: HowHaldaWorksPageProps) {
  const [selectedFormExample, setSelectedFormExample] = React.useState(0);

  const formUseCases = [
    {
      label: 'Best Fit Assessments',
      gifUrl: 'https://placeholder-gif-url.com/best-fit-assessment.gif',
      liveUrl: 'https://example-school.edu/best-fit-assessment'
    },
    {
      label: 'Financial Aid information or affordability guidance',
      gifUrl: 'https://placeholder-gif-url.com/financial-aid.gif',
      liveUrl: 'https://example-school.edu/financial-aid'
    },
    {
      label: 'Event or open house signups',
      gifUrl: 'https://placeholder-gif-url.com/event-signup.gif',
      liveUrl: 'https://example-school.edu/open-house'
    },
    {
      label: 'General contact or questions',
      gifUrl: 'https://placeholder-gif-url.com/contact-form.gif',
      liveUrl: 'https://example-school.edu/contact'
    },
    {
      label: 'Single page event or deadline promotion',
      gifUrl: 'https://placeholder-gif-url.com/event-promotion.gif',
      liveUrl: 'https://example-school.edu/event-promotion'
    }
  ];

  const aiHubCapabilities = [
    'Learn more about your school',
    'Browse helpful information',
    'Select and complete forms when they are ready'
  ];

  const landingPageUses = [
    'Digital advertising',
    'Email campaigns',
    'Event promotion',
    'Targeted outreach'
  ];

  const setupStages = [
    'Establishing a visual baseline',
    'Choosing forms and content',
    'Setting up data delivery',
    'Training and launch'
  ];

  const successOutcomes = [
    'Visitors have a clear and helpful experience',
    'Forms and content feel like part of your school',
    'Inquiries are sent directly to your chosen system',
    'Your team can respond quickly and confidently'
  ];

  const notDecidingYet = [
    'Which forms to launch',
    'How the AI Hub is structured',
    'Whether you want AI Landing Pages'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Page Title */}
        <h1 className="text-center mb-10 text-4xl">
          How Halda works
        </h1>

        {/* Main Content Card */}
        <div className="bg-white rounded-lg p-10 mb-6">
          {/* Intro Video Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg aspect-video flex items-center justify-center" style={{ backgroundColor: '#000000' }}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-white/80 text-sm">How Halda works</p>
                </div>
              </div>
            </div>
          </div>

          {/* Intro Copy */}
          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4 text-lg">
              Before making any setup decisions, it helps to understand how Halda works at a high level.
            </p>

            <p className="text-gray-700 mb-4 text-lg">
              Halda helps schools capture interest from visitors and send those inquiries directly to the systems their teams already use. It works across your website and outreach efforts without adding manual work for your staff.
            </p>

            <p className="text-gray-700 text-lg">
              You do not need to configure anything on this page.
            </p>
          </div>

          {/* The Big Picture Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#907fff22', borderLeft: '4px solid #907fff' }}>
              <h2 className="mb-6 text-2xl" style={{ color: '#000000' }}>
                The big picture
              </h2>

              <p className="text-gray-700 mb-4 text-lg">
                Halda supports several ways visitors interact with your school online.
              </p>

              <p className="text-gray-700 mb-6 text-lg">
                A visitor may arrive by browsing your website or by clicking a link from an email or advertisement. From there, Halda helps guide them and capture their information at the right moment.
              </p>

              <p className="mb-4" style={{ color: '#000000' }}>Conceptually, it works like this:</p>

              {/* Flow Diagram */}
              <div className="rounded-lg p-8" style={{ backgroundColor: '#ffffff99', border: '2px solid #00000033' }}>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <div className="px-6 py-4 rounded-lg text-center" style={{ backgroundColor: '#ffffff', border: '2px solid #00000033' }}>
                    <p style={{ color: '#000000' }}>Visitor</p>
                  </div>
                  <ArrowRight className="w-6 h-6 flex-shrink-0" style={{ color: '#000000' }} />
                  <div className="px-6 py-4 rounded-lg text-center" style={{ backgroundColor: '#ffffff', border: '2px solid #00000033' }}>
                    <p style={{ color: '#000000' }}>Website page or<br />campaign link</p>
                  </div>
                  <ArrowRight className="w-6 h-6 flex-shrink-0" style={{ color: '#000000' }} />
                  <div className="px-6 py-4 rounded-lg text-center" style={{ backgroundColor: '#ffffff', border: '2px solid #00000033' }}>
                    <p style={{ color: '#000000' }}>Form, AI Hub, or<br />AI Landing Page</p>
                  </div>
                  <ArrowRight className="w-6 h-6 flex-shrink-0" style={{ color: '#000000' }} />
                  <div className="px-6 py-4 rounded-lg text-center" style={{ backgroundColor: '#ffffff', border: '2px solid #00000033' }}>
                    <p style={{ color: '#000000' }}>Your selected<br />system</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-lg mt-6">
                Everything happens automatically once it is set up.
              </p>
            </div>
          </div>

          {/* Forms on Your Website Section */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="mb-8 text-3xl" style={{ color: '#000000' }}>
                Forms on your website
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-gray-700 mb-4 text-lg">
                    Forms can appear directly on pages of your website to capture interest when a visitor is ready to reach out.
                  </p>

                  <p className="text-gray-700 text-lg">
                    These forms feel like part of your site and are designed to be helpful, not disruptive.
                  </p>
                </div>

                <div className="rounded-lg p-6" style={{ backgroundColor: '#4fabff22' }}>
                  <p className="mb-4" style={{ color: '#000000' }}>Common form use cases include:</p>
                  <div className="space-y-2">
                    {formUseCases.map((useCase, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedFormExample(index)}
                        className="w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3"
                        style={{
                          backgroundColor: selectedFormExample === index ? '#4fabff' : 'transparent',
                          color: selectedFormExample === index ? '#ffffff' : '#000000'
                        }}
                      >
                        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{
                          backgroundColor: selectedFormExample === index ? '#ffffff' : '#000000'
                        }}></span>
                        <span>{useCase.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form Example Preview */}
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg overflow-hidden border-2" style={{ borderColor: '#4fabff66', backgroundColor: '#ffffff' }}>
                  <div className="aspect-video flex items-center justify-center" style={{ backgroundColor: '#00000011' }}>
                    <img 
                      src={formUseCases[selectedFormExample].gifUrl}
                      alt={`${formUseCases[selectedFormExample].label} example`}
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>

                  <div className="p-6 text-center" style={{ backgroundColor: '#4fabff11' }}>
                    <a
                      href={formUseCases[selectedFormExample].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:opacity-90"
                      style={{ backgroundColor: '#4fabff', color: '#ffffff' }}
                    >
                      <Globe className="w-5 h-5" />
                      See it live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#00000022' }}></div>
          </div>

          {/* The AI Hub Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#907fff' }}></div>
              <h2 className="mb-6 text-3xl" style={{ color: '#000000' }}>
                The AI Hub
              </h2>

              <p className="text-gray-700 mb-6 text-lg">
                In addition to individual forms, Halda includes a built-in hub that gives visitors a guided place to explore information and take action.
              </p>

              <p className="mb-4" style={{ color: '#000000' }}>From the AI Hub, visitors can:</p>
              <ul className="space-y-2 mb-6">
                {aiHubCapabilities.map((capability, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <Sparkles className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#907fff' }} />
                    <span className="text-gray-700">{capability}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg mb-4">
                The AI Hub creates a self-serve experience that helps families move forward with confidence.
              </p>

              <p className="text-gray-700 text-lg border-t pt-6" style={{ borderColor: '#00000033' }}>
                We will walk through configuring the AI Hub later in this onboarding.
              </p>
            </div>

            {/* AI Hub Preview Card */}
            <div className="mt-8">
              <div className="rounded-lg overflow-hidden border-2" style={{ borderColor: '#907fff66', backgroundColor: '#ffffff' }}>
                <div className="aspect-video flex items-center justify-center" style={{ backgroundColor: '#00000011' }}>
                  <img 
                    src="https://placeholder-gif-url.com/ai-hub.gif"
                    alt="AI Hub example"
                    className="w-full h-full object-cover"
                    style={{ imageRendering: 'auto' }}
                  />
                </div>

                <div className="p-6 text-center" style={{ backgroundColor: '#907fff11' }}>
                  <a
                    href="https://example-school.edu/ai-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:opacity-90"
                    style={{ backgroundColor: '#907fff', color: '#ffffff' }}
                  >
                    <Globe className="w-5 h-5" />
                    See it live
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* AI Landing Pages Section */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="mb-8 text-3xl" style={{ color: '#000000' }}>
                AI Landing Pages
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="rounded-lg p-6" style={{ backgroundColor: '#4fabff22' }}>
                  <p className="mb-4" style={{ color: '#000000' }}>Schools commonly use AI Landing Pages for:</p>
                  <ul className="space-y-2">
                    {landingPageUses.map((use, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <Target className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#000000' }} />
                        <span className="text-gray-700">{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-gray-700 mb-6 text-lg">
                    Halda also supports simple, focused landing pages designed for advertising and outreach.
                  </p>

                  <p className="text-gray-700 text-lg">
                    These pages bring visitors into a controlled environment where information and a form are ready for them, without distractions.
                  </p>
                </div>
              </div>

              {/* AI Landing Page Preview Card */}
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg overflow-hidden border-2" style={{ borderColor: '#ffdf4466', backgroundColor: '#ffffff' }}>
                  <div className="aspect-video flex items-center justify-center" style={{ backgroundColor: '#00000011' }}>
                    <img 
                      src="https://placeholder-gif-url.com/ai-landing-page.gif"
                      alt="AI Landing Page example"
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>

                  <div className="p-6 text-center" style={{ backgroundColor: '#ffdf4411' }}>
                    <a
                      href="https://example-school.edu/landing-page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:opacity-90"
                      style={{ backgroundColor: '#ffdf44', color: '#000000' }}
                    >
                      <Globe className="w-5 h-5" />
                      See it live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#00000022' }}></div>
          </div>

          {/* How Setup Will Work Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#ffdf4422', borderLeft: '4px solid #ffdf44' }}>
              <h2 className="mb-6 text-2xl" style={{ color: '#000000' }}>
                How setup will work
              </h2>

              <p className="text-gray-700 mb-6 text-lg">
                Setup happens in clear stages so nothing feels overwhelming.
              </p>

              <p className="mb-4" style={{ color: '#000000' }}>You will move through:</p>
              <ul className="space-y-2 mb-6">
                {setupStages.map((stage, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span style={{ color: '#000000' }}>{index + 1}.</span>
                    <span className="text-gray-700">{stage}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg">
                Each step builds on the last.
              </p>
            </div>
          </div>

          {/* What Success Looks Like Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#fe8576' }}></div>
              <h2 className="mb-6 text-3xl" style={{ color: '#000000' }}>
                What success looks like
              </h2>

              <p className="mb-4" style={{ color: '#000000' }}>When everything is set up:</p>
              <ul className="space-y-3 mb-6">
                {successOutcomes.map((outcome, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#fe8576' }} />
                    <span className="text-gray-700">{outcome}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg border-t pt-6" style={{ borderColor: '#00000033' }}>
                The goal is clarity for families and efficiency for your team.
              </p>
            </div>
          </div>

          {/* What This Page Is Not Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="inline-block rounded-lg p-6" style={{ backgroundColor: '#ffffff99', border: '1px solid #00000033' }}>
              <h2 className="mb-4 text-2xl" style={{ color: '#000000' }}>
                What this page is not
              </h2>

              <p className="text-gray-700 mb-6 text-lg">
                This page is not about setup or configuration.
              </p>

              <p className="mb-4" style={{ color: '#000000' }}>You do not need to decide:</p>
              <ul className="space-y-2 mb-6">
                {notDecidingYet.map((item, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg">
                Those decisions come next.
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
                  style={{ backgroundColor: '#000000' }}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>

                <button 
                  onClick={onNext}
                  className="text-white px-8 py-3 rounded transition-all inline-flex items-center gap-2 text-lg hover:opacity-90"
                  style={{ backgroundColor: '#000000' }}
                >
                  Continue to branding and appearance
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-600 text-sm text-center">
                No setup required on this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}