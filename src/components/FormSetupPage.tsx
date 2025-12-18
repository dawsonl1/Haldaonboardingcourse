import React, { useState } from 'react';
import { ChevronRight, Plus, X, GripVertical, CheckCircle2, AlertCircle, Users, Globe, ChevronDown, ChevronUp, ChevronLeft } from 'lucide-react';

import type { FormConfig } from '../onboarding/types';

interface FormSetupPageProps {
  onNext: (selectedForms: string[], formConfigs: Record<string, FormConfig>) => void;
  onBack: () => void;
  initialSelectedForms?: string[];
  initialFormConfigs?: Record<string, FormConfig>;
}

interface FormType {
  id: string;
  name: string;
  description: string;
  required?: boolean;
  gifUrl?: string;
  liveUrl?: string;
}

export function FormSetupPage({ onNext, onBack, initialSelectedForms = [], initialFormConfigs = {} }: FormSetupPageProps) {
  const [selectedForms, setSelectedForms] = useState<string[]>(initialSelectedForms);
  const [priorityOrder, setPriorityOrder] = useState<string[]>([]);
  const [formConfigs, setFormConfigs] = useState<Record<string, FormConfig>>(initialFormConfigs);
  const [expandedForms, setExpandedForms] = useState<string[]>(initialSelectedForms);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [selectedPreview, setSelectedPreview] = useState(0);

  const formTypes: FormType[] = [
    {
      id: 'best-fit',
      name: 'Best Fit Assessments',
      description: 'Helps families understand whether your school may be a good fit based on grade level, interests, or goals.',
      gifUrl: 'https://placeholder-gif-url.com/best-fit-assessment.gif',
      liveUrl: 'https://example-school.edu/best-fit-assessment'
    },
    {
      id: 'financial-aid',
      name: 'Financial Aid information or affordability guidance',
      description: 'Used to share financial aid details or provide helpful affordability guidance.',
      gifUrl: 'https://placeholder-gif-url.com/financial-aid.gif',
      liveUrl: 'https://example-school.edu/financial-aid'
    },
    {
      id: 'event-signup',
      name: 'Event or open house signups',
      description: 'Used to capture interest and registrations for tours, open houses, or visits.',
      gifUrl: 'https://placeholder-gif-url.com/event-signup.gif',
      liveUrl: 'https://example-school.edu/open-house'
    },
    {
      id: 'general-contact',
      name: 'General contact or questions',
      description: 'Used to replace or improve an existing "Contact Us" or inquiry form.',
      gifUrl: 'https://placeholder-gif-url.com/contact-form.gif',
      liveUrl: 'https://example-school.edu/contact'
    },
    {
      id: 'event-promotion',
      name: 'Single page event or deadline promotion',
      description: 'Used for focused, time-sensitive campaigns or event promotions.',
      gifUrl: 'https://placeholder-gif-url.com/event-promotion.gif',
      liveUrl: 'https://example-school.edu/event-promotion'
    }
  ];

  const audiences = [
    'Prospective families',
    'Current families',
    'Middle school families',
    'High school families',
    'International families'
  ];

  const handleFormToggle = (formId: string) => {
    if (selectedForms.includes(formId)) {
      setSelectedForms(selectedForms.filter(id => id !== formId));
      setPriorityOrder(priorityOrder.filter(id => id !== formId));
      setExpandedForms(expandedForms.filter(id => id !== formId));
      const newConfigs = { ...formConfigs };
      delete newConfigs[formId];
      setFormConfigs(newConfigs);
    } else {
      if (selectedForms.length < 4) {
        setSelectedForms([...selectedForms, formId]);
        setFormConfigs({
          ...formConfigs,
          [formId]: { audiences: [], urls: [''], challenges: '' }
        });
        setExpandedForms([...expandedForms, formId]);
      }
    }
  };

  const toggleFormExpanded = (formId: string) => {
    if (expandedForms.includes(formId)) {
      setExpandedForms(expandedForms.filter(id => id !== formId));
    } else {
      setExpandedForms([...expandedForms, formId]);
    }
  };

  const handleAudienceToggle = (formId: string, audience: string) => {
    const config = formConfigs[formId];
    const newAudiences = config.audiences.includes(audience)
      ? config.audiences.filter(a => a !== audience)
      : [...config.audiences, audience];
    
    setFormConfigs({
      ...formConfigs,
      [formId]: { ...config, audiences: newAudiences }
    });
  };

  const handleAddUrl = (formId: string) => {
    const config = formConfigs[formId];
    setFormConfigs({
      ...formConfigs,
      [formId]: { ...config, urls: [...config.urls, ''] }
    });
  };

  const handleUrlChange = (formId: string, index: number, value: string) => {
    const config = formConfigs[formId];
    const newUrls = [...config.urls];
    newUrls[index] = value;
    setFormConfigs({
      ...formConfigs,
      [formId]: { ...config, urls: newUrls }
    });
  };

  const handleRemoveUrl = (formId: string, index: number) => {
    const config = formConfigs[formId];
    if (config.urls.length > 1) {
      setFormConfigs({
        ...formConfigs,
        [formId]: { ...config, urls: config.urls.filter((_, i) => i !== index) }
      });
    }
  };

  const handleChallengesChange = (formId: string, value: string) => {
    const config = formConfigs[formId];
    setFormConfigs({
      ...formConfigs,
      [formId]: { ...config, challenges: value }
    });
  };

  const handleDragStart = (formId: string) => {
    setDraggedItem(formId);
  };

  const handleDragOver = (e: React.DragEvent, formId: string) => {
    e.preventDefault();
    if (!draggedItem || draggedItem === formId) return;

    const currentOrder = priorityOrder.length > 0 ? priorityOrder : selectedForms;
    const draggedIndex = currentOrder.indexOf(draggedItem);
    const targetIndex = currentOrder.indexOf(formId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const newOrder = [...currentOrder];
    newOrder.splice(draggedIndex, 1);
    newOrder.splice(targetIndex, 0, draggedItem);
    setPriorityOrder(newOrder);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const isValid = selectedForms.length >= 2 && selectedForms.length <= 4;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Page Title */}
        <h1 className="text-center mb-10 text-4xl">
          Choose what to set up first
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
                Help partners confidently choose a small set of starting forms while keeping scope controlled and flexible.
              </p>
            </div>
          </div>

          {/* Intro Paragraph */}
          <div className="mb-16 max-w-4xl mx-auto">
            <p className="text-gray-700 mb-4 text-lg">
              You don't need to set everything up at once.
            </p>

            <p className="text-gray-700 mb-4 text-lg">
              Most schools start with a small set of core forms and expand over time. This helps get meaningful results quickly without overcomplicating setup.
            </p>

            <p className="text-gray-700 text-lg">
              On this page, you'll choose which forms you'd like us to start with.
            </p>
          </div>

          {/* How to Think About This Step */}
          <div className="mb-16 max-w-5xl mx-auto">
            <div className="rounded-xl p-8" style={{ backgroundColor: '#907fff22', borderLeft: '4px solid #907fff' }}>
              <h2 className="mb-4 text-2xl" style={{ color: '#0e1016' }}>
                How to think about this step
              </h2>
              <p className="text-gray-700 mb-3 text-lg">
                We recommend starting with the forms that matter most right now.
              </p>
              <p className="text-gray-700 text-lg">
                You can always add, remove, or adjust forms later. The goal here is to choose a focused starting set so we can begin building immediately.
              </p>
            </div>
          </div>

          {/* The Different Types of Forms */}
          <div className="mb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="mb-6 text-3xl" style={{ color: '#0e1016' }}>
                The different types of forms
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Here's a quick refresher on the most common forms schools start with. Click any form to see an example.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {formTypes.map((form, index) => (
                  <button
                    key={form.id}
                    onClick={() => setSelectedPreview(index)}
                    className="text-left rounded-lg p-6 border-2 transition-all"
                    style={{ 
                      backgroundColor: selectedPreview === index ? '#4fabff22' : '#ffffff',
                      borderColor: selectedPreview === index ? '#4fabff' : '#0e101622'
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl" style={{ color: '#0e1016' }}>
                        {form.name}
                      </h3>
                      {selectedPreview === index && (
                        <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: '#4fabff' }}></div>
                      )}
                    </div>
                    <p className="text-gray-700">
                      {form.description}
                    </p>
                  </button>
                ))}
              </div>

              {/* Form Preview Card */}
              <div className="max-w-5xl mx-auto">
                <div className="rounded-lg overflow-hidden border-2 mb-6" style={{ borderColor: '#4fabff66', backgroundColor: '#ffffff' }}>
                  {/* GIF/Video Container */}
                  <div className="aspect-video flex items-center justify-center" style={{ backgroundColor: '#0e101611' }}>
                    <img 
                      src={formTypes[selectedPreview].gifUrl}
                      alt={`${formTypes[selectedPreview].name} example`}
                      className="w-full h-full object-cover"
                      style={{ imageRendering: 'auto' }}
                    />
                  </div>

                  {/* See it Live Button */}
                  <div className="p-6 text-center" style={{ backgroundColor: '#4fabff11' }}>
                    <a
                      href={formTypes[selectedPreview].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:opacity-90"
                      style={{ backgroundColor: '#4fabff', color: '#ffffff' }}
                    >
                      <Globe className="w-5 h-5" />
                      See it live
                    </a>
                    <p className="text-gray-600 text-sm mt-3">
                      View this form in action on a live school website
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* How Many Forms */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="inline-block rounded-lg p-6" style={{ backgroundColor: '#ffdf4433', border: '2px solid #ffdf4466' }}>
              <h2 className="mb-4 text-2xl" style={{ color: '#0e1016' }}>
                How many forms should you choose?
              </h2>
              <p className="text-gray-700 mb-4 text-lg">
                To keep setup focused:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex gap-3 items-start">
                  <span className="text-gray-700">• You'll choose <strong>at least 2 forms</strong></span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-gray-700">• You can choose <strong>up to 4 forms</strong></span>
                </li>
              </ul>
              <p className="text-gray-700 text-lg">
                Most schools start with a Best Fit Assessment plus one or two additional forms.
              </p>
            </div>
          </div>

          {/* Which Forms Selection */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6 text-3xl" style={{ color: '#0e1016' }}>
                Which forms would you like to start with?
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                Select the forms you'd like us to begin building.
              </p>

              <div className="space-y-3 mb-4">
                {formTypes.map((form) => {
                  const isSelected = selectedForms.includes(form.id);
                  const isDisabled = form.required || (!isSelected && selectedForms.length >= 4);
                  
                  return (
                    <button
                      key={form.id}
                      onClick={() => handleFormToggle(form.id)}
                      disabled={isDisabled && !isSelected}
                      className="w-full text-left rounded-lg p-4 border-2 transition-all"
                      style={{
                        backgroundColor: isSelected ? '#4fabff22' : '#ffffff',
                        borderColor: isSelected ? '#4fabff' : '#0e101633',
                        opacity: isDisabled && !isSelected ? 0.5 : 1,
                        cursor: isDisabled && !isSelected ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          {isSelected ? (
                            <CheckCircle2 className="w-6 h-6" style={{ color: '#4fabff' }} />
                          ) : (
                            <div className="w-6 h-6 rounded-full border-2" style={{ borderColor: '#0e101633' }}></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-lg" style={{ color: '#0e1016' }}>
                            {form.name}
                            {form.required && <span className="text-sm text-gray-500 ml-2">(Required)</span>}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {!isValid && (
                <div className="flex items-start gap-2 p-3 rounded-lg" style={{ backgroundColor: '#fe857622' }}>
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#fe8576' }} />
                  <p className="text-sm text-gray-700">
                    Please select between 2 and 4 forms to continue.
                  </p>
                </div>
              )}

              <p className="text-gray-600 text-sm mt-4">
                You can adjust your selections later. For now, choose the forms that feel most important to launch first.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="h-px" style={{ backgroundColor: '#0e101622' }}></div>
          </div>

          {/* Form-Specific Configuration */}
          {selectedForms.length > 0 && (
            <div className="mb-16">
              <div className="max-w-6xl mx-auto">
                <h2 className="mb-6 text-3xl" style={{ color: '#0e1016' }}>
                  Configure each form
                </h2>
                <p className="text-gray-700 mb-8 text-lg">
                  For each form you've selected, tell us who it's for and where it should appear.
                </p>

                <div className="space-y-4">
                  {selectedForms.map((formId) => {
                    const form = formTypes.find(f => f.id === formId);
                    if (!form) return null;
                    
                    const isExpanded = expandedForms.includes(formId);
                    const config = formConfigs[formId];

                    return (
                      <div
                        key={formId}
                        className="rounded-lg border-2 overflow-hidden transition-all"
                        style={{ borderColor: '#4fabff66', backgroundColor: '#ffffff' }}
                      >
                        {/* Header */}
                        <button
                          onClick={() => toggleFormExpanded(formId)}
                          className="w-full px-6 py-4 flex items-center justify-between transition-all hover:bg-opacity-50"
                          style={{ backgroundColor: '#4fabff11' }}
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5" style={{ color: '#4fabff' }} />
                            <h3 className="text-xl" style={{ color: '#0e1016' }}>
                              {form.name}
                            </h3>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </button>

                        {/* Expandable Content */}
                        {isExpanded && (
                          <div className="px-6 py-6 space-y-8">
                            {/* Who is this form for? */}
                            <div>
                              <h4 className="mb-4 text-lg" style={{ color: '#0e1016' }}>
                                Who is this form for?
                              </h4>
                              <p className="text-gray-700 mb-4">
                                This helps us tailor form questions and messaging appropriately.
                              </p>
                              <div className="grid md:grid-cols-2 gap-3">
                                {audiences.map((audience) => {
                                  const isSelected = config.audiences.includes(audience);
                                  
                                  return (
                                    <button
                                      key={audience}
                                      onClick={() => handleAudienceToggle(formId, audience)}
                                      className="text-left rounded-lg px-4 py-3 border-2 transition-all flex items-center gap-3"
                                      style={{
                                        backgroundColor: isSelected ? '#907fff22' : '#ffffff',
                                        borderColor: isSelected ? '#907fff' : '#0e101633'
                                      }}
                                    >
                                      <div className="flex-shrink-0">
                                        {isSelected ? (
                                          <CheckCircle2 className="w-5 h-5" style={{ color: '#907fff' }} />
                                        ) : (
                                          <div className="w-5 h-5 rounded-full border-2" style={{ borderColor: '#0e101633' }}></div>
                                        )}
                                      </div>
                                      <span className="text-gray-700">{audience}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Where should this form appear? */}
                            <div>
                              <h4 className="mb-4 text-lg" style={{ color: '#0e1016' }}>
                                Where should this form appear on your website?
                              </h4>
                              <p className="text-gray-700 mb-4">
                                Share the page URLs where you'd like this form to appear.
                              </p>
                              
                              <div className="space-y-3 mb-4">
                                {config.urls.map((url, index) => (
                                  <div key={index} className="flex gap-3 items-center">
                                    <Globe className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    <input
                                      type="url"
                                      value={url}
                                      onChange={(e) => handleUrlChange(formId, index, e.target.value)}
                                      placeholder="https://yourschool.edu/admissions"
                                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white"
                                    />
                                    {config.urls.length > 1 && (
                                      <button
                                        onClick={() => handleRemoveUrl(formId, index)}
                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                      >
                                        <X className="w-5 h-5" />
                                      </button>
                                    )}
                                  </div>
                                ))}
                              </div>

                              <button
                                onClick={() => handleAddUrl(formId)}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:opacity-80"
                                style={{ backgroundColor: '#ffffff', borderColor: '#0e101633', color: '#0e1016' }}
                              >
                                <Plus className="w-4 h-4" />
                                Add another URL
                              </button>

                              <p className="text-gray-600 text-sm mt-4">
                                We can adjust or add more pages later.
                              </p>
                            </div>

                            {/* Specific challenges */}
                            <div>
                              <h4 className="mb-4 text-lg" style={{ color: '#0e1016' }}>
                                Are there specific challenges you're hoping this form will help overcome? <span className="text-gray-400 text-base">(optional)</span>
                              </h4>
                              <p className="text-gray-700 mb-4">
                                Share any context that would help us build this form with your goals in mind.
                              </p>
                              <textarea
                                value={config.challenges}
                                onChange={(e) => handleChallengesChange(formId, e.target.value)}
                                placeholder="e.g., We're seeing high bounce rates on our admissions page and want to give families a clearer path forward..."
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none"
                              />
                              <p className="text-gray-600 text-sm mt-2">
                                This helps us prioritize what matters most to you.
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Priority Order */}
          {selectedForms.length > 1 && (
            <div className="mb-16 max-w-4xl mx-auto">
              <h2 className="mb-4 text-2xl" style={{ color: '#0e1016' }}>
                Which form should we prioritize first? <span className="text-gray-400 text-xl">(optional)</span>
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                If one form is more important than the others, you can let us know here.
              </p>

              <div className="space-y-2 mb-4">
                {(priorityOrder.length > 0 ? priorityOrder : selectedForms).map((formId, index) => {
                  const form = formTypes.find(f => f.id === formId);
                  if (!form) return null;

                  return (
                    <div
                      key={formId}
                      draggable
                      onDragStart={() => handleDragStart(formId)}
                      onDragOver={(e) => handleDragOver(e, formId)}
                      onDragEnd={handleDragEnd}
                      className="flex items-center gap-3 p-4 rounded-lg border cursor-move transition-all"
                      style={{
                        backgroundColor: draggedItem === formId ? '#907fff22' : '#ffffff',
                        borderColor: '#0e101633'
                      }}
                    >
                      <GripVertical className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#907fff33', color: '#0e1016' }}>
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{form.name}</span>
                    </div>
                  );
                })}
              </div>

              <p className="text-gray-600 text-sm">
                If left blank, we'll prioritize based on common best practices.
              </p>
            </div>
          )}

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
                Nothing on this page is permanent. This step simply helps us create a clear starting plan so we can begin building your forms.
              </p>
              <p className="text-gray-700 text-lg">
                As soon as you submit this page, internal setup work begins for each selected form.
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
                  onClick={() => onNext(selectedForms, formConfigs)}
                  disabled={!isValid}
                  className="text-white px-8 py-3 rounded transition-all inline-flex items-center gap-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
                  style={{ backgroundColor: '#0e1016' }}
                >
                  Continue to AI Hub
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