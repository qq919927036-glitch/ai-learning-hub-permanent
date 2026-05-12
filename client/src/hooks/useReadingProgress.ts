import { useState, useEffect, useCallback } from "react";
import { deepBasicSections } from "@/lib/deepBasicContent";
import { deepAdvancedSections, deepAdvancedSectionsExtra } from "@/lib/deepAdvancedContent";
import { practiceSection } from "@/lib/practiceContent";

const STORAGE_KEY = "ai-hub-reading-progress";

export interface ReadingProgress {
  basicRead: string[];
  advancedRead: string[];
  practiceRead: string[];
  lastRead?: { type: "basic" | "advanced" | "practice"; id: string; timestamp: number };
}

const defaultProgress: ReadingProgress = {
  basicRead: [],
  advancedRead: [],
  practiceRead: [],
};

// Valid IDs for reconciliation (filter out stale entries on load)
const validBasicIds = new Set(deepBasicSections.map((s) => s.id));
const validAdvancedIds = new Set([
  ...deepAdvancedSections.map((s) => s.id),
  ...deepAdvancedSectionsExtra.map((s) => s.id),
]);
const validPracticeIds = new Set(practiceSection.tools.map((t) => t.name));

function loadProgress(): ReadingProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);

      // Validate that read arrays are actually arrays; fall back to [] if corrupted
      const basicRead = Array.isArray(parsed.basicRead) ? parsed.basicRead : [];
      const advancedRead = Array.isArray(parsed.advancedRead) ? parsed.advancedRead : [];
      const practiceRead = Array.isArray(parsed.practiceRead) ? parsed.practiceRead : [];

      // Reconcile: remove IDs that no longer exist in the current content
      return {
        basicRead: basicRead.filter((id: string) => validBasicIds.has(id)),
        advancedRead: advancedRead.filter((id: string) => validAdvancedIds.has(id)),
        practiceRead: practiceRead.filter((id: string) => validPracticeIds.has(id)),
        lastRead: parsed.lastRead,
      };
    }
  } catch {
    // ignore parse errors
  }
  return defaultProgress;
}

function saveProgress(progress: ReadingProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // ignore quota errors
  }
}

export function useReadingProgress() {
  const [progress, setProgress] = useState<ReadingProgress>(loadProgress);

  // Persist to localStorage whenever progress changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  // Listen for cross-tab storage events
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          setProgress(JSON.parse(e.newValue));
        } catch {
          // ignore
        }
      }
    };
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  const markAsRead = useCallback((type: "basic" | "advanced" | "practice", id: string) => {
    setProgress((prev) => {
      const key = type === "basic" ? "basicRead" : type === "advanced" ? "advancedRead" : "practiceRead";
      if (prev[key].includes(id)) return prev;
      return {
        ...prev,
        [key]: [...prev[key], id],
        lastRead: { type, id, timestamp: Date.now() },
      };
    });
  }, []);

  const isRead = useCallback(
    (type: "basic" | "advanced" | "practice", id: string): boolean => {
      const key = type === "basic" ? "basicRead" : type === "advanced" ? "advancedRead" : "practiceRead";
      return progress[key].includes(id);
    },
    [progress]
  );

  const getStats = useCallback(() => {
    const allAdvanced = deepAdvancedSections.length + deepAdvancedSectionsExtra.length;
    return {
      basic: { read: progress.basicRead.length, total: deepBasicSections.length },
      advanced: { read: progress.advancedRead.length, total: allAdvanced },
      practice: { read: progress.practiceRead.length, total: practiceSection.tools.length },
    };
  }, [progress]);

  const resetProgress = useCallback(() => {
    setProgress(defaultProgress);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  return {
    progress,
    markAsRead,
    isRead,
    getStats,
    lastRead: progress.lastRead,
    resetProgress,
  };
}
