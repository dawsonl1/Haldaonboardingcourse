import React, { useState } from 'react';
import { ChevronRight, Plus, X, Image, FileText, CheckCircle2, ChevronLeft } from 'lucide-react';

interface BrandingPageProps {
  onNext: (driveLink: string, features: string[]) => void;
  onBack: () => void;
  initialDriveLink?: string;
  initialFeatures?: string[];
}

export function BrandingPage({ onNext, onBack, initialDriveLink = '', initialFeatures = [] }: BrandingPageProps) {
  const [driveLink, setDriveLink] = useState(initialDriveLink);
  const [currentFeature, setCurrentFeature] = useState('');
  const [features, setFeatures] = useState<string[]>(initialFeatures);

  const visualCues = [
    'Familiar imagery',
    'Clear headlines',
    'A clean, school-aligned feel'
  ];

  const featureExamples = [
    'Small class sizes',
    'Signature academic programs',
    'Faith-based education',
    'College counseling',
    'Arts or athletics'
  ];

  const handleAddFeature = () => {
    if (currentFeature.trim()) {
      setFeatures([...features, currentFeature.trim()]);
      setCurrentFeature('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddFeature();
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Page Title */}
        <h1 className="text-center mb-10 text-4xl">
          Branding and appearance
        </h1>

        {/* Main Content Card */}
        <div className="bg-white rounded-lg p-10 mb-6">
          {/* Primary Goal Section - Floating accent */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#907fff' }}></div>
              <h2 className="mb-4 text-3xl" style={{ color: '#0e1016' }}>
                Primary goal
              </h2>
              <p className="text-gray-700 text-lg">
                Establish a basic visual baseline so forms and experiences feel trustworthy, without slowing down setup.
              </p>
            </div>
          </div>

          {/* Intro Copy */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="inline-block rounded-lg p-6" style={{ backgroundColor: '#907fff22', border: '1px solid #907fff44' }}>
              <p className="text-gray-700 mb-4 text-lg">
                <strong>Everything on this page is optional.</strong>
              </p>

              <p className="text-gray-700 mb-4 text-lg">
                We start simple and refine after launch. The goal here is not to design anything, but to give us a sense of your school's look and what matters most visually.
              </p>

              <p className="text-gray-700 text-lg">
                If you skip this page, we'll still be able to launch.
              </p>
            </div>
          </div>

          {/* What Matters Visually Section - Light background on one side */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-6">
                <h2 className="mb-4 text-3xl" style={{ color: '#0e1016' }}>
                  What matters visually
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <p className="text-gray-700 mb-6 text-lg">
                    When families see a form or experience on your website, small visual cues help build trust.
                  </p>
                  <p className="text-gray-700 text-lg">
                    You don't need to provide anything perfect. Even a little guidance helps.
                  </p>
                </div>

                <div className="rounded-lg p-6" style={{ backgroundColor: '#4fabff33' }}>
                  <p className="mb-4" style={{ color: '#0e1016' }}>Things like:</p>
                  <ul className="space-y-2">
                    {visualCues.map((cue, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0e1016' }} />
                        <span className="text-gray-700">{cue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* Share Branding Assets Section - Integrated form */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="mb-6 text-3xl" style={{ color: '#0e1016' }}>
              Share branding assets <span className="text-gray-400 text-xl">(optional)</span>
            </h2>

            <p className="text-gray-700 mb-8 text-lg">
              If you have assets ready, you can share them here.
            </p>

            <div className="rounded-lg p-8" style={{ backgroundColor: '#ffdf4433', border: '2px solid #ffdf4466' }}>
              <div className="mb-4">
                <label htmlFor="drive-link" className="block mb-3 text-lg" style={{ color: '#0e1016' }}>
                  Google Drive link for logos, photos, or videos
                </label>
                <div className="flex gap-3 items-center">
                  <Image className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <input
                    id="drive-link"
                    type="url"
                    value={driveLink}
                    onChange={(e) => setDriveLink(e.target.value)}
                    placeholder="https://drive.google.com/..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                    style={{ focusRingColor: '#0e1016' }}
                  />
                </div>
                <p className="text-gray-600 text-sm mt-3">
                  This can be a folder with any materials you're comfortable sharing. It does not need to be organized or complete.
                </p>
              </div>
            </div>
          </div>

          {/* Features or Programs Section - Integrated form with accent */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="mb-4 text-3xl" style={{ color: '#0e1016' }}>
                  Features or programs to highlight <span className="text-gray-400 text-xl">(optional)</span>
                </h2>
                <p className="text-gray-700 text-lg max-w-3xl">
                  Are there any programs, features, or qualities of your school you'd like us to keep in mind?
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="mb-6">
                    <label htmlFor="feature-input" className="block mb-3" style={{ color: '#0e1016' }}>
                      Add a feature or program (one at a time)
                    </label>
                    <div className="flex gap-3">
                      <input
                        id="feature-input"
                        type="text"
                        value={currentFeature}
                        onChange={(e) => setCurrentFeature(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="e.g., Small class sizes"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                        style={{ focusRingColor: '#0e1016' }}
                      />
                      <button
                        onClick={handleAddFeature}
                        className="px-6 py-3 rounded-lg text-white transition-all hover:opacity-90 flex items-center gap-2"
                        style={{ backgroundColor: '#0e1016' }}
                      >
                        <Plus className="w-5 h-5" />
                        Add
                      </button>
                    </div>

                    {features.length > 0 && (
                      <div className="mt-6 space-y-2">
                        {features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between px-4 py-3 rounded-lg border"
                            style={{ backgroundColor: '#ffffff99', borderColor: '#0e101666' }}
                          >
                            <span className="text-gray-700">{feature}</span>
                            <button
                              onClick={() => handleRemoveFeature(index)}
                              className="text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="text-gray-600 text-sm mt-4">
                      You can add as many or as few as you like.
                    </p>
                  </div>
                </div>

                <div className="rounded-lg p-6" style={{ backgroundColor: '#4fabff22' }}>
                  <p className="text-gray-700 mb-3">Examples:</p>
                  <div className="flex flex-col gap-2">
                    {featureExamples.map((example, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentFeature(example)}
                        className="px-4 py-2 rounded-lg text-sm border transition-colors hover:opacity-80 text-left"
                        style={{ backgroundColor: '#ffffff', borderColor: '#0e101633', color: '#0e1016' }}
                      >
                        {example}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* If You Don't Provide Anything Section - Simple callout */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#fe857633', borderLeft: '4px solid #fe8576' }}>
              <h2 className="mb-4 text-2xl" style={{ color: '#0e1016' }}>
                If you don't provide anything
              </h2>
              <p className="text-gray-700 mb-3 text-lg">
                If no assets or notes are provided, we'll source imagery and visual cues directly from your website so everything still feels consistent.
              </p>
              <p className="text-gray-700 text-lg">
                You don't need to track anything down just for this step.
              </p>
            </div>
          </div>

          {/* Before You Continue Section - Minimal style */}
          <div className="mb-12 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#907fff' }}></div>
              <h2 className="mb-4 text-2xl" style={{ color: '#0e1016' }}>
                Before you continue
              </h2>
              <p className="text-gray-700 mb-3 text-lg">
                This information applies across everything you build later, including forms, the AI Hub, and landing pages.
              </p>
              <p className="text-gray-700 text-lg">
                You can update or expand this at any time.
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
                  onClick={() => onNext(driveLink, features)}
                  className="text-white px-8 py-3 rounded transition-all inline-flex items-center gap-2 text-lg hover:opacity-90"
                  style={{ backgroundColor: '#0e1016' }}
                >
                  Continue to form setup
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-600 text-sm text-center">
                You can skip this step and come back later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}