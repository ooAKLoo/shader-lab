import React, { useEffect } from "react";
import type { ShaderGuide } from "../data/shaderGuides";

interface TechModalProps {
  guide: ShaderGuide;
  onClose: () => void;
}

export const TechModal: React.FC<TechModalProps> = ({ guide, onClose }) => {
  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-[640px] max-h-[85vh] bg-white rounded-3xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-4 flex-shrink-0">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold text-neutral-800">
                {guide.title}
              </span>
              <span className="text-[10px] text-neutral-400">{guide.subtitle}</span>
            </div>
            <p className="text-[11px] text-neutral-500 mt-0.5">{guide.oneLiner}</p>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-600 transition-colors flex-shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path
                d="M2 2L10 10M10 2L2 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto min-h-0 px-6 pb-6">
          {/* What you see */}
          <div className="bg-neutral-100 rounded-2xl p-4 mb-3">
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-2">
              What You See
            </div>
            <p className="text-[11px] text-neutral-600 leading-[1.7]">
              {guide.whatYouSee}
            </p>
          </div>

          {/* Pipeline */}
          <div className="bg-neutral-100 rounded-2xl p-4 mb-3">
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
              Rendering Pipeline
            </div>
            <div className="flex flex-col gap-2">
              {guide.pipeline.map((step) => (
                <div key={step.step} className="bg-white rounded-xl p-3">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[9px] font-semibold text-neutral-300 mt-px flex-shrink-0 w-4">
                      {step.step}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-semibold text-neutral-700 mb-1">
                        {step.title}
                      </div>
                      <p className="text-[10px] text-neutral-500 leading-[1.6]">
                        {step.description}
                      </p>
                      {step.glsl && (
                        <pre className="mt-2 bg-neutral-50 rounded-lg px-2.5 py-1.5 overflow-x-auto">
                          <code className="text-[9px] font-mono text-neutral-500 leading-relaxed whitespace-pre">
                            {step.glsl}
                          </code>
                        </pre>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Concepts */}
          <div className="bg-neutral-100 rounded-2xl p-4 mb-3">
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
              Core Concepts
            </div>
            <div className="flex flex-col gap-2">
              {guide.concepts.map((concept) => (
                <div key={concept.nameEN} className="bg-white rounded-xl p-3">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-[10px] font-semibold text-neutral-700">
                      {concept.name}
                    </span>
                    <span className="text-[8px] px-1 py-0.5 rounded bg-neutral-100 text-neutral-400 font-mono">
                      {concept.nameEN}
                    </span>
                  </div>
                  <div className="bg-neutral-50 rounded-lg px-2.5 py-2 mb-2">
                    <p className="text-[10px] text-neutral-600 leading-[1.6] italic">
                      {concept.analogy}
                    </p>
                  </div>
                  <p className="text-[10px] text-neutral-500 leading-[1.6] mb-1.5">
                    {concept.explanation}
                  </p>
                  <div className="flex items-start gap-1">
                    <span className="text-[9px] font-medium text-neutral-400 flex-shrink-0">
                      Why:
                    </span>
                    <span className="text-[9px] text-neutral-500 leading-[1.5]">
                      {concept.whyItMatters}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="bg-neutral-100 rounded-2xl p-4 mb-3">
            <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide mb-3">
              Real-World Applications
            </div>
            <div className="grid grid-cols-2 gap-2">
              {guide.applications.map((app) => (
                <div key={app.field} className="bg-white rounded-xl p-3">
                  <div className="text-[10px] font-semibold text-neutral-700 mb-1">
                    {app.field}
                  </div>
                  <p className="text-[9px] text-neutral-500 leading-[1.5]">
                    {app.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insight */}
          <div className="bg-neutral-800 rounded-2xl p-4">
            <div className="text-[9px] font-medium text-neutral-500 uppercase tracking-wide mb-2">
              Key Insight
            </div>
            <p className="text-[11px] text-neutral-300 leading-[1.7]">
              {guide.keyInsight}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
