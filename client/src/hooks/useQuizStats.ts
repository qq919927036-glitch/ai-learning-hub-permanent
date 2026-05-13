// Quiz statistics hook - manages quiz history in localStorage
import { useCallback, useMemo, useState } from "react";

export interface QuizRecord {
  date: string; // ISO date string
  mode: "daily" | "full";
  totalQuestions: number;
  correctCount: number;
  percentage: number;
  timestamp: number;
}

const STORAGE_KEY = "ai-hub-quiz-stats";

function loadRecords(): QuizRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function saveRecords(records: QuizRecord[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch {
    // localStorage full or unavailable - silently fail
  }
}

export function useQuizStats() {
  // Refresh trigger to re-read localStorage after addRecord
  const [version, setVersion] = useState(0);

  // Parse localStorage once per render (or when version changes)
  const records = useMemo(() => loadRecords(), [version]);

  const getHistory = useCallback((): QuizRecord[] => {
    return [...records].sort((a, b) => b.timestamp - a.timestamp);
  }, [records]);

  const addRecord = useCallback(
    (record: Omit<QuizRecord, "timestamp">): void => {
      const current = loadRecords();
      current.push({ ...record, timestamp: Date.now() });
      saveRecords(current);
      setVersion(v => v + 1);
    },
    []
  );

  const getTodayAttempts = useCallback((): QuizRecord[] => {
    const today = new Date().toISOString().slice(0, 10);
    return records.filter(r => r.date === today);
  }, [records]);

  const getBestScore = useCallback((): number => {
    if (records.length === 0) return 0;
    return Math.max(...records.map(r => r.percentage));
  }, [records]);

  const getTotalAttempts = useCallback((): number => {
    return records.length;
  }, [records]);

  const getStreak = useCallback((): number => {
    if (records.length === 0) return 0;

    // Get unique dates sorted descending
    const dates = Array.from(new Set(records.map(r => r.date)))
      .sort()
      .reverse();
    if (dates.length === 0) return 0;

    // Check if the most recent date is today or yesterday
    const today = new Date().toISOString().slice(0, 10);
    const yesterday = new Date(Date.now() - 86400000)
      .toISOString()
      .slice(0, 10);
    if (dates[0] !== today && dates[0] !== yesterday) return 0;

    let streak = 1;
    for (let i = 1; i < dates.length; i++) {
      const prev = new Date(dates[i - 1]);
      const curr = new Date(dates[i]);
      const diff = (prev.getTime() - curr.getTime()) / 86400000;
      if (Math.round(diff) === 1) {
        streak++;
      } else {
        break;
      }
    }
    return streak;
  }, [records]);

  return {
    getHistory,
    addRecord,
    getTodayAttempts,
    getBestScore,
    getTotalAttempts,
    getStreak,
  };
}
