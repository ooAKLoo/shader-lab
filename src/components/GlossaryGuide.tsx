import React, { useState, useMemo } from "react";
import {
  GLOSSARY_TERMS,
  GLOSSARY_TABS,
  PARENT_DESCRIPTIONS,
  type GlossaryTab,
  type GlossaryTerm,
} from "../data/glossaryTerms";
import { EFFECT_REGISTRY } from "../data/effectThumbnailRegistry";
import { EffectThumbnail } from "./EffectThumbnail";
import type { Category } from "../data/shaderTypes";

interface GlossaryGuideProps {
  onNavigate?: (category: Category, id: string) => void;
}

const TermCard: React.FC<{
  term: GlossaryTerm;
  onNavigate?: (category: Category, id: string) => void;
}> = ({ term, onNavigate }) => {
  // Filter usedIn to only those with a registered effect (skip generic labels)
  const navigableEffects = useMemo(
    () => (term.usedIn || []).filter((name) => EFFECT_REGISTRY[name]),
    [term.usedIn]
  );
  const appliedFor = term.appliedFor || [];

  return (
    <div className="bg-neutral-50 rounded-xl p-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-1">
        <div>
          <span className="text-[11px] font-semibold text-neutral-700">
            {term.term}
          </span>
          <span className="text-[10px] text-neutral-400 ml-2">{term.cn}</span>
        </div>
      </div>
      <span className="inline-block text-[8px] font-mono px-1.5 py-0.5 rounded bg-neutral-200 text-neutral-500 mb-3">
        {term.label}
      </span>

      {/* SVG Visual — conceptual diagram */}
      {term.visual && (
        <div className="bg-white rounded-lg p-3 mb-3 h-[60px] flex items-center justify-center">
          <term.visual />
        </div>
      )}

      {/* Description blocks */}
      <div className="space-y-2 mb-3">
        <div>
          <div className="text-[8px] font-medium text-neutral-400 mb-1">
            专业定义
          </div>
          <p className="text-[10px] text-neutral-500 leading-relaxed">
            {term.desc}
          </p>
        </div>

        {term.descIntuitive && (
          <div>
            <div className="text-[8px] font-medium text-neutral-400 mb-1">
              形象理解
            </div>
            <p className="text-[10px] text-neutral-500 leading-relaxed">
              {term.descIntuitive}
            </p>
          </div>
        )}

        {appliedFor.length > 0 && (
          <div>
            <div className="text-[8px] font-medium text-neutral-400 mb-1">
              可以用它做
            </div>
            <div className="flex flex-wrap gap-1">
              {appliedFor.map((item) => (
                <span
                  key={item}
                  className="text-[8px] bg-neutral-200 text-neutral-500 px-1.5 py-0.5 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Live Effect Thumbnails */}
      {navigableEffects.length > 0 && (
        <div className="mb-2">
          <div className="text-[8px] font-medium text-neutral-400 uppercase tracking-wide mb-1.5">
            Live Examples
          </div>
          <div className="flex gap-1.5 overflow-x-auto">
            {navigableEffects.slice(0, 3).map((name) => {
              const entry = EFFECT_REGISTRY[name];
              return (
                <EffectThumbnail
                  key={name}
                  effectName={name}
                  onClick={
                    onNavigate
                      ? () => onNavigate(entry.category, entry.id)
                      : undefined
                  }
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Used In — remaining effects as text pills */}
      {term.usedIn && term.usedIn.length > 0 && (
        <div className="flex flex-wrap gap-1">
          <span className="text-[8px] text-neutral-400 mr-0.5 leading-[18px]">
            Used in:
          </span>
          {term.usedIn.map((name) => {
            const entry = EFFECT_REGISTRY[name];
            if (entry && onNavigate) {
              return (
                <button
                  key={name}
                  onClick={() => onNavigate(entry.category, entry.id)}
                  className="text-[8px] bg-neutral-200 text-neutral-500 hover:bg-neutral-800 hover:text-white px-1.5 py-0.5 rounded transition-colors"
                >
                  {name}
                </button>
              );
            }
            return (
              <span
                key={name}
                className="text-[8px] bg-neutral-200 text-neutral-500 px-1.5 py-0.5 rounded"
              >
                {name}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const GlossaryGuide: React.FC<GlossaryGuideProps> = ({
  onNavigate,
}) => {
  const [activeTab, setActiveTab] = useState<GlossaryTab>("all");

  const filtered = useMemo(() => {
    if (activeTab === "all") return GLOSSARY_TERMS;
    return GLOSSARY_TERMS.filter((t) => t.type === activeTab);
  }, [activeTab]);

  // Always group by parent for structured display with descriptions
  const grouped = useMemo(() => {
    const groups: Record<string, GlossaryTerm[]> = {};
    for (const term of filtered) {
      const key = term.parent || "Other";
      if (!groups[key]) groups[key] = [];
      groups[key].push(term);
    }
    return groups;
  }, [filtered]);

  const tabCounts = useMemo(() => {
    const counts: Record<string, number> = { all: GLOSSARY_TERMS.length };
    for (const tab of GLOSSARY_TABS) {
      if (tab.id !== "all") {
        counts[tab.id] = GLOSSARY_TERMS.filter(
          (t) => t.type === tab.id
        ).length;
      }
    }
    return counts;
  }, []);

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-5 py-3 flex-shrink-0">
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-[13px] font-medium text-neutral-700">
            Shader Glossary
          </span>
          <span className="text-[10px] text-neutral-400">图形学知识库</span>
        </div>

        {/* Tabs */}
        <div className="flex gap-1.5 flex-wrap">
          {GLOSSARY_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[8px] font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-neutral-800 text-white"
                  : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
              }`}
            >
              {tab.label}
              <span
                className={`text-[7px] px-1 py-0.5 rounded ${
                  activeTab === tab.id
                    ? "bg-neutral-600 text-neutral-300"
                    : "bg-neutral-200 text-neutral-400"
                }`}
              >
                {tabCounts[tab.id]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content — always grouped by parent with descriptions */}
      <div className="flex-1 overflow-y-auto min-h-0 px-5 pb-5">
        <div className="flex flex-col gap-5">
          {Object.entries(grouped).map(([group, terms]) => (
            <div key={group}>
              <div className="mb-3">
                <div className="text-[9px] font-medium text-neutral-400 uppercase tracking-wide">
                  {group}
                </div>
                {PARENT_DESCRIPTIONS[group] && (
                  <p className="text-[10px] text-neutral-500 leading-relaxed mt-1">
                    {PARENT_DESCRIPTIONS[group]}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {terms.map((term) => (
                  <TermCard
                    key={term.term}
                    term={term}
                    onNavigate={onNavigate}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
