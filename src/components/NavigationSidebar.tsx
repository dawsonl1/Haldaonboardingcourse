import React from 'react';
import { X } from 'lucide-react';

import { onboardingSteps, type OnboardingStepId } from '../onboarding/steps';

interface NavigationSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: OnboardingStepId;
  onNavigate: (page: OnboardingStepId) => void;
}

export function NavigationSidebar({ isOpen, onClose, currentPage, onNavigate }: NavigationSidebarProps) {
  const [dotPositions, setDotPositions] = React.useState<{ x: number; y: number }[]>([]);
  const dotRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const positions = dotRefs.current.map((dotRef) => {
      if (!dotRef || !containerRef.current) return { x: 0, y: 0 };
      
      const dotRect = dotRef.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      
      return {
        x: dotRect.left - containerRect.left + dotRect.width / 2,
        y: dotRect.top - containerRect.top + dotRect.height / 2,
      };
    });

    setDotPositions(positions);
  }, [isOpen]);

  const handleNavigate = (page: OnboardingStepId) => {
    onNavigate(page);
    onClose();
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-96 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200" style={{ backgroundColor: '#4fabff22' }}>
          <h2 className="text-xl" style={{ color: '#0e1016' }}>Onboarding Journey</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg transition-colors hover:bg-white hover:bg-opacity-50"
            style={{ backgroundColor: '#4fabff33' }}
          >
            <X className="w-5 h-5" style={{ color: '#4fabff' }} />
          </button>
        </div>

        {/* Navigation Steps */}
        <div className="px-8 py-10 overflow-y-auto h-[calc(100%-80px)]" style={{ backgroundColor: '#f8f9fa' }}>
          <div className="relative" ref={containerRef}>
            {/* SVG for connecting lines */}
            <svg 
              className="absolute top-0 left-0 w-full h-full pointer-events-none" 
              style={{ overflow: 'visible' }}
            >
              {dotPositions.length > 0 && (
                <>
                  {/* Single vertical line through all dots */}
                  <line
                    x1={dotPositions[0]?.x || 0}
                    y1={dotPositions[0]?.y || 0}
                    x2={dotPositions[0]?.x || 0}
                    y2={dotPositions[dotPositions.length - 1]?.y || 0}
                    stroke="#d1d5db"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                  
                  {/* Colored line for completed steps */}
                  {(() => {
                    const currentIndex = onboardingSteps.findIndex(s => s.id === currentPage);
                    if (currentIndex > 0 && dotPositions[currentIndex]) {
                      return (
                        <line
                          x1={dotPositions[0].x}
                          y1={dotPositions[0].y}
                          x2={dotPositions[0].x}
                          y2={dotPositions[currentIndex].y}
                          stroke="#907fff"
                          strokeWidth="2"
                        />
                      );
                    }
                    return null;
                  })()}
                </>
              )}
            </svg>

            {/* Steps with staggered layout */}
            <div className="relative space-y-4">
              {onboardingSteps.map((step, index) => {
                const isActive = currentPage === step.id;
                const isPast = onboardingSteps.findIndex(s => s.id === currentPage) > index;

                // Determine dot color
                let dotColor = '#d1d5db'; // gray for future steps
                if (isActive) {
                  dotColor = '#4fabff';
                } else if (isPast) {
                  dotColor = '#907fff';
                }

                return (
                  <div key={step.id}>
                    <button
                      onClick={() => handleNavigate(step.id)}
                      className="relative flex items-center w-full px-4 py-3 rounded-xl transition-all group"
                      style={{
                        backgroundColor: isActive ? '#4fabff22' : 'transparent',
                        border: '2px solid transparent',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = '#ffffff';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      {/* Content container with offset */}
                      <div className="flex items-center gap-3" style={{ marginLeft: '0px' }}>
                        {/* Dot indicator on the left */}
                        <div className="relative z-10 flex-shrink-0">
                          <div
                            className={`w-4 h-4 rounded-full transition-all ${
                              isActive ? 'scale-125' : 'scale-100'
                            }`}
                            style={{
                              backgroundColor: dotColor,
                              boxShadow: isActive ? `0 0 12px ${dotColor}88` : 'none'
                            }}
                            ref={(el) => dotRefs.current[index] = el}
                          />
                        </div>

                        {/* Step label */}
                        <span
                          className="text-left transition-colors"
                          style={{
                            color: isActive ? '#0e1016' : isPast ? '#4a5568' : '#9ca3af'
                          }}
                        >
                          {step.label}
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}