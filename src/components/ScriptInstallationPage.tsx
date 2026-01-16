import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Copy, CheckCircle2, AlertCircle, Code } from 'lucide-react';

interface ScriptInstallationPageProps {
  onNext: () => void;
  onBack: () => void;
}

export function ScriptInstallationPage({ onNext, onBack }: ScriptInstallationPageProps) {
  const [scriptCopied, setScriptCopied] = useState(false);

  const scriptFunctions = [
    'Enables forms to appear on your website',
    'Allows visitors to open the AI Hub',
    'Ensures submissions are captured correctly',
    'Connects everything to your selected system'
  ];

  const whoCanInstall = [
    'Your web administrator',
    'Your IT team',
    'Your website provider',
    'Or anyone with access to edit your website\'s code'
  ];

  const installSteps = [
    'Copy the Halda script provided below',
    'Paste it into the <head> section of your website',
    'Publish or save your changes'
  ];

  const helpOptions = [
    'Loop in your IT or web team',
    'Share this page with your website provider',
    'Reach out to your account manager to schedule a quick call'
  ];

  const postInstallSteps = [
    'Our team is notified automatically',
    'We begin activating forms and the AI Hub',
    'Integration work continues in parallel'
  ];

  // Example script (placeholder)
  const haldaScript = `<script src="https://halda.io/script.js" data-school-id="YOUR_SCHOOL_ID"></script>`;

  const copyScript = () => {
    navigator.clipboard.writeText(haldaScript);
    setScriptCopied(true);
    setTimeout(() => setScriptCopied(false), 2000);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Page Title with Required Badge */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-2">
            <h1 className="text-4xl">Script installation</h1>
            <span className="px-3 py-1 rounded text-sm text-white" style={{ backgroundColor: '#fe8576' }}>
              REQUIRED
            </span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-lg p-10 mb-6">
          {/* Primary Goal Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#fe8576' }}></div>
              <h2 className="mb-4 text-3xl" style={{ color: '#000000' }}>
                Primary goal
              </h2>
              <p className="text-gray-700 text-lg">
                Ensure the Halda script is installed on the partner's website as soon as possible so forms, the AI Hub, and integrations can function.
              </p>
            </div>
          </div>

          {/* Intro Video Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden border-2" style={{ borderColor: '#fe857666', backgroundColor: '#ffffff' }}>
              <div className="aspect-video flex items-center justify-center" style={{ backgroundColor: '#00000011' }}>
                <div className="text-center px-8">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#fe857699' }}>
                    <div className="w-0 h-0 border-l-[16px] border-l-white border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-600">
                    Intro video: What the Halda script does and why it's required
                  </p>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm mt-3 max-w-4xl mx-auto">
              <strong>Video covers:</strong> What the Halda script does, why it is required, what happens once it's installed, and reassurance that help is available. Tone: Direct, calm, and supportive. Emphasize importance without creating anxiety.
            </p>
          </div>

          {/* Intro Copy */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="rounded-lg p-6" style={{ backgroundColor: '#fe857622', border: '2px solid #fe8576' }}>
              <p className="text-gray-700 mb-4 text-lg">
                <strong>This is the most important step in the onboarding process.</strong>
              </p>

              <p className="text-gray-700 mb-4 text-lg">
                The Halda script allows forms, the AI Hub, and integrations to work on your website. Without it, nothing can go live.
              </p>

              <p className="text-gray-700 text-lg">
                Once the script is installed, we can move forward quickly with building, testing, and launching your setup.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#00000022' }}></div>
          </div>

          {/* What the script does Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#4fabff22', borderLeft: '4px solid #4fabff' }}>
              <h2 className="mb-6 text-2xl" style={{ color: '#000000' }}>
                What the script does
              </h2>

              <p className="mb-4" style={{ color: '#000000' }}>The Halda script:</p>
              <ul className="space-y-2 mb-6">
                {scriptFunctions.map((func, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#4fabff' }} />
                    <span className="text-gray-700 text-lg">{func}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg">
                The script runs quietly in the background and does not change how your site looks or behaves for visitors.
              </p>
            </div>
          </div>

          {/* Who should complete this step Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="mb-6 text-2xl" style={{ color: '#000000' }}>
              Who should complete this step?
            </h2>

            <p className="mb-4" style={{ color: '#000000' }}>Script installation is usually completed by:</p>
            <ul className="space-y-2 mb-6">
              {whoCanInstall.map((person, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="text-gray-700 text-lg">• {person}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-lg p-4 mt-6" style={{ backgroundColor: '#ffdf4422', border: '1px solid #ffdf44' }}>
              <p className="text-gray-700 text-lg">
                If that's not you, we recommend sharing this page with the right person as soon as possible.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#00000022' }}></div>
          </div>

          {/* How to install the script Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="mb-6 text-2xl" style={{ color: '#000000' }}>
              How to install the script
            </h2>

            <p className="text-gray-700 mb-6 text-lg">
              Follow the steps below to install the Halda script.
            </p>

            <div className="space-y-4 mb-8">
              {installSteps.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#907fff', color: '#ffffff' }}>
                    {index + 1}
                  </div>
                  <p className="text-gray-700 text-lg pt-1">{step}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 mb-6 text-lg">
              Once installed, the script will automatically begin working.
            </p>

            {/* Script Code Box */}
            <div className="mt-8">
              <label className="block mb-3" style={{ color: '#000000' }}>
                Halda Script
              </label>
              <div className="relative">
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <code>{haldaScript}</code>
                </div>
                <button
                  onClick={copyScript}
                  className="absolute top-3 right-3 px-4 py-2 rounded text-sm transition-all flex items-center gap-2"
                  style={{ 
                    backgroundColor: scriptCopied ? '#4fabff' : '#ffffff',
                    color: scriptCopied ? '#ffffff' : '#000000',
                    border: '1px solid #d1d5db'
                  }}
                >
                  {scriptCopied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                Platform-specific installation guides for WordPress, Squarespace, and other platforms can be provided here.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#00000022' }}></div>
          </div>

          {/* Need help installing the script Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#4fabff' }}></div>
              <h2 className="mb-6 text-2xl" style={{ color: '#000000' }}>
                Need help installing the script?
              </h2>

              <p className="text-gray-700 mb-6 text-lg">
                If you're unsure how to install the script or don't have access to your website, we're happy to help.
              </p>

              <p className="mb-4" style={{ color: '#000000' }}>You can:</p>
              <ul className="space-y-2 mb-6">
                {helpOptions.map((option, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-gray-700 text-lg">• {option}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg">
                We regularly help schools with this step.
              </p>
            </div>
          </div>

          {/* What happens after installation Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="mb-6 text-2xl" style={{ color: '#000000' }}>
              What happens after installation
            </h2>

            <p className="mb-4" style={{ color: '#000000' }}>Once the script is installed:</p>
            <ul className="space-y-2 mb-6">
              {postInstallSteps.map((step, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#907fff' }} />
                  <span className="text-gray-700 text-lg">{step}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-700 text-lg">
              This step unlocks everything else in the platform.
            </p>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#00000022' }}></div>
          </div>

          {/* Important note Section */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="rounded-lg p-6" style={{ backgroundColor: '#fe857622', border: '2px solid #fe8576' }}>
              <div className="flex gap-4 items-start">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: '#fe8576' }} />
                <div>
                  <h2 className="mb-3 text-xl" style={{ color: '#000000' }}>
                    Important note
                  </h2>
                  <p className="text-gray-700 mb-3 text-lg">
                    We strongly recommend completing script installation as soon as possible.
                  </p>
                  <p className="text-gray-700 mb-3 text-lg">
                    <strong>Delays here will delay launch.</strong>
                  </p>
                  <p className="text-gray-700 text-lg">
                    If you're blocked or unsure, please reach out so we can help move things forward.
                  </p>
                </div>
              </div>
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
                  Continue to AI Training
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-600 text-sm text-center">
                You can return to this page at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}