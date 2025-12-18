import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Plus, X, Link as LinkIcon, AlertCircle, CheckCircle2 } from 'lucide-react';

import type { ContentCard } from '../onboarding/types';

interface AIHubPageProps {
  onNext: (contentCards: ContentCard[]) => void;
  onBack: () => void;
  initialContentCards?: ContentCard[];
}

export function AIHubPage({ onNext, onBack, initialContentCards = [] }: AIHubPageProps) {
  const [contentCards, setContentCards] = useState<ContentCard[]>(initialContentCards);

  const addContentCard = () => {
    if (contentCards.length < 5) {
      setContentCards([
        ...contentCards,
        {
          id: `card-${Date.now()}`,
          headline: '',
          subheadline: '',
          callToAction: '',
          link: ''
        }
      ]);
    }
  };

  const removeContentCard = (id: string) => {
    setContentCards(contentCards.filter(card => card.id !== id));
  };

  const updateContentCard = (id: string, field: keyof ContentCard, value: string) => {
    setContentCards(contentCards.map(card => 
      card.id === id ? { ...card, [field]: value } : card
    ));
  };

  const aiHubCapabilities = [
    'Learn more about your school',
    'Browse key topics',
    'Click into pages or resources for more detail',
    'Choose a form to complete when they\'re ready'
  ];

  const cardComponents = [
    'A photo or visual',
    'A short headline',
    'A brief subheadline',
    'A call to action button'
  ];

  const exampleCards = [
    'Admissions overview',
    'Tuition and financial aid',
    'Academic programs',
    'Student life',
    'Campus visits'
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Page Title */}
        <h1 className="text-center mb-10 text-4xl">
          AI Hub and content cards
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
                Introduce the AI Hub as a guided experience for visitors and capture a small set of content cards that help families explore key information.
              </p>
            </div>
          </div>

          {/* Intro Video Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="rounded-lg aspect-video flex items-center justify-center" style={{ backgroundColor: '#0e1016' }}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-white/80 text-sm">What the AI Hub is and how families use it</p>
                </div>
              </div>
            </div>
          </div>

          {/* Intro Copy */}
          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4 text-lg">
              Earlier, you saw that Halda includes more than just individual forms.
            </p>

            <p className="text-gray-700 mb-4 text-lg">
              The AI Hub is a guided space where families can explore important information about your school and decide what to do next. It gives visitors a clear place to learn more, rather than leaving them to search or navigate on their own.
            </p>

            <p className="text-gray-700 text-lg">
              On this page, you'll share a small set of content we can use to populate the AI Hub.
            </p>
          </div>

          {/* What is the AI Hub Section */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#907fff22', borderLeft: '4px solid #907fff' }}>
              <h2 className="mb-6 text-2xl" style={{ color: '#0e1016' }}>
                What is the AI Hub?
              </h2>

              <p className="text-gray-700 mb-6 text-lg">
                The AI Hub is a central place visitors can open from your website to explore information at their own pace.
              </p>

              <p className="mb-4" style={{ color: '#0e1016' }}>From the AI Hub, visitors can:</p>
              <ul className="space-y-2 mb-6">
                {aiHubCapabilities.map((capability, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-gray-700">• {capability}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg">
                The goal of the AI Hub is to guide visitors, not overwhelm them.
              </p>

              {/* AI Hub GIF Preview */}
              <div className="mt-8">
                <div className="rounded-lg overflow-hidden border-2" style={{ borderColor: '#907fff66', backgroundColor: '#ffffff' }}>
                  <div className="aspect-video flex items-center justify-center" style={{ backgroundColor: '#0e101611' }}>
                    <img 
                      src="https://placeholder-gif-url.com/ai-hub-example.gif"
                      alt="AI Hub example"
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-sm text-center mt-3">
                  Example of the AI Hub in action
                </p>
              </div>
            </div>
          </div>

          {/* What are content cards Section */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="mb-6 text-3xl" style={{ color: '#0e1016' }}>
                What are content cards?
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 mb-6 text-lg">
                    Content cards are eye-catching cards displayed inside the AI Hub.
                  </p>

                  <p className="text-gray-700 text-lg">
                    When a visitor clicks a card, they're taken to a page or resource with more information.
                  </p>
                </div>

                <div className="rounded-lg p-6" style={{ backgroundColor: '#4fabff22' }}>
                  <p className="mb-4" style={{ color: '#0e1016' }}>Each card includes:</p>
                  <ul className="space-y-2">
                    {cardComponents.map((component, index) => (
                      <li key={index} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#4fabff' }} />
                        <span className="text-gray-700">{component}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 text-lg mt-6">
                Content cards help highlight the most important things you want families to see, without requiring them to navigate your full website.
              </p>

              {/* Content Cards GIF Preview */}
              <div className="mt-8 max-w-4xl mx-auto">
                <div className="rounded-lg overflow-hidden border-2" style={{ borderColor: '#4fabff66', backgroundColor: '#ffffff' }}>
                  <div className="aspect-video flex items-center justify-center" style={{ backgroundColor: '#0e101611' }}>
                    <img 
                      src="https://placeholder-gif-url.com/content-cards-example.gif"
                      alt="Content cards example"
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>
                </div>
                <p className="text-gray-600 text-sm text-center mt-3">
                  Example of content cards inside the AI Hub
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* How Many Cards Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="inline-block rounded-lg p-6" style={{ backgroundColor: '#ffdf4433', border: '2px solid #ffdf4466' }}>
              <h2 className="mb-4 text-2xl" style={{ color: '#0e1016' }}>
                How many cards should you add?
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                To keep things simple, you can add up to <strong>five content cards</strong>.
              </p>
              <p className="text-gray-700 text-lg">
                Most schools start with a few high-priority topics and add more later. You don't need to cover everything right now.
              </p>
            </div>
          </div>

          {/* Add Your Content Cards Section */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="mb-6 text-3xl" style={{ color: '#0e1016' }}>
                Add your content cards
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Add up to five content cards you'd like families to see in the AI Hub.
              </p>

              <div className="space-y-6 mb-6">
                {contentCards.map((card, index) => (
                  <div
                    key={card.id}
                    className="rounded-lg border-2 p-6"
                    style={{ borderColor: '#907fff66', backgroundColor: '#ffffff' }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl" style={{ color: '#0e1016' }}>
                        Content card {index + 1}
                      </h3>
                      <button
                        onClick={() => removeContentCard(card.id)}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-4">
                      {/* Headline */}
                      <div>
                        <label className="block mb-2" style={{ color: '#0e1016' }}>
                          Headline
                        </label>
                        <p className="text-gray-600 text-sm mb-3">
                          A short, clear headline for the card.
                        </p>
                        <input
                          type="text"
                          value={card.headline}
                          onChange={(e) => updateContentCard(card.id, 'headline', e.target.value)}
                          placeholder="e.g., Admissions Overview"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                        />
                      </div>

                      {/* Subheadline */}
                      <div>
                        <label className="block mb-2" style={{ color: '#0e1016' }}>
                          Subheadline
                        </label>
                        <p className="text-gray-600 text-sm mb-3">
                          One sentence that explains what visitors will find if they click.
                        </p>
                        <input
                          type="text"
                          value={card.subheadline}
                          onChange={(e) => updateContentCard(card.id, 'subheadline', e.target.value)}
                          placeholder="e.g., Learn about our application process and important dates"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                        />
                      </div>

                      {/* Call to Action */}
                      <div>
                        <label className="block mb-2" style={{ color: '#0e1016' }}>
                          Call to action
                        </label>
                        <p className="text-gray-600 text-sm mb-3">
                          The text for the button that encourages visitors to click.
                        </p>
                        <input
                          type="text"
                          value={card.callToAction}
                          onChange={(e) => updateContentCard(card.id, 'callToAction', e.target.value)}
                          placeholder="e.g., Learn More"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                        />
                      </div>

                      {/* Link */}
                      <div>
                        <label className="block mb-2" style={{ color: '#0e1016' }}>
                          Link
                        </label>
                        <p className="text-gray-600 text-sm mb-3">
                          Paste the URL you want visitors to go to when they click the card.
                        </p>
                        <div className="flex gap-3 items-center">
                          <LinkIcon className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          <input
                            type="url"
                            value={card.link}
                            onChange={(e) => updateContentCard(card.id, 'link', e.target.value)}
                            placeholder="https://yourschool.edu/admissions"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {contentCards.length < 5 && (
                <button
                  onClick={addContentCard}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all hover:opacity-80"
                  style={{ backgroundColor: '#ffffff', borderColor: '#907fff', color: '#907fff' }}
                >
                  <Plus className="w-5 h-5" />
                  Add content card ({contentCards.length}/5)
                </button>
              )}

              {contentCards.length === 0 && (
                <div className="flex items-start gap-2 p-4 rounded-lg mb-6" style={{ backgroundColor: '#4fabff22' }}>
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#4fabff' }} />
                  <p className="text-sm text-gray-700">
                    Add at least one content card to help families explore information in the AI Hub.
                  </p>
                </div>
              )}

              <p className="text-gray-600 text-sm mt-6">
                If you're not sure what to include, think about the pages families visit most or the questions you're asked most often.
              </p>

              <p className="text-gray-600 text-sm mt-2">
                You can add, remove, or update content cards later.
              </p>
            </div>
          </div>

          {/* Examples of content cards Section */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="relative pl-8">
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full" style={{ backgroundColor: '#4fabff' }}></div>
              <h2 className="mb-6 text-3xl" style={{ color: '#0e1016' }}>
                Examples of content cards
              </h2>

              <p className="mb-4" style={{ color: '#0e1016' }}>Examples might include:</p>
              <ul className="space-y-2 mb-6">
                {exampleCards.map((example, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <span className="text-gray-700">• {example}</span>
                  </li>
                ))}
              </ul>

              <p className="text-gray-700 text-lg border-t pt-6" style={{ borderColor: '#0e101633' }}>
                These are just examples. Your cards should reflect what's most important for your school.
              </p>
            </div>
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
              <p className="text-gray-700 mb-3 text-lg">
                These content cards help shape the AI Hub experience for visitors.
              </p>
              <p className="text-gray-700 text-lg">
                Once you continue, our team will begin setting these up as part of your overall configuration.
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
                  onClick={() => onNext(contentCards)}
                  className="text-white px-8 py-3 rounded transition-all inline-flex items-center gap-2 text-lg hover:opacity-90"
                  style={{ backgroundColor: '#0e1016' }}
                >
                  Continue to integrations
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