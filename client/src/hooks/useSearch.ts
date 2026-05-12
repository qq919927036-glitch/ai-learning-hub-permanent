import { useMemo, useCallback } from "react";
import { deepBasicSections } from "@/lib/deepBasicContent";
import { deepAdvancedSections, deepAdvancedSectionsExtra } from "@/lib/deepAdvancedContent";
import { glossaryTerms } from "@/lib/glossaryContent";
import { tweetCards } from "@/lib/tweetContent";
import { practiceSection } from "@/lib/practiceContent";

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  sectionId: string;
}

interface SearchIndexEntry {
  id: string;
  title: string;
  searchableText: string;
  category: string;
  sectionId: string;
}

const MAX_RESULTS = 20;
const EXCERPT_LENGTH = 80;

function getExcerpt(text: string, query: string): string {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);
  if (index === -1) return text.slice(0, EXCERPT_LENGTH);

  const start = Math.max(0, index - 20);
  const end = Math.min(text.length, index + query.length + 60);
  let excerpt = text.slice(start, end);
  if (start > 0) excerpt = "..." + excerpt;
  if (end < text.length) excerpt = excerpt + "...";
  return excerpt;
}

export function useSearch() {
  const index = useMemo<SearchIndexEntry[]>(() => {
    const entries: SearchIndexEntry[] = [];

    // Basic sections
    for (const section of deepBasicSections) {
      const textParts = [section.title, section.subtitle, section.lead];
      if (section.body) textParts.push(...section.body);
      if (section.keyTakeaways) textParts.push(...section.keyTakeaways);
      entries.push({
        id: `basic-${section.id}`,
        title: `${section.chapterNum}: ${section.title}`,
        searchableText: textParts.join(" "),
        category: "基础篇",
        sectionId: section.id,
      });
    }

    // Advanced sections
    for (const section of deepAdvancedSections) {
      const textParts = [section.title, section.subtitle];
      if (section.paragraphs) textParts.push(...section.paragraphs);
      entries.push({
        id: `advanced-${section.id}`,
        title: `${section.chapterNum}: ${section.title}`,
        searchableText: textParts.join(" "),
        category: "进阶篇",
        sectionId: section.id,
      });
    }

    // Advanced extra sections
    for (const section of deepAdvancedSectionsExtra) {
      const textParts = [section.title, section.subtitle || ""];
      if (section.paragraphs) textParts.push(...section.paragraphs);
      entries.push({
        id: `advanced-extra-${section.id}`,
        title: `${section.chapterNum}: ${section.title}`,
        searchableText: textParts.join(" "),
        category: "进阶篇",
        sectionId: section.id,
      });
    }

    // Glossary terms
    for (const term of glossaryTerms) {
      entries.push({
        id: `glossary-${term.id}`,
        title: `${term.term} (${term.termEn})`,
        searchableText: `${term.term} ${term.termEn} ${term.definition} ${term.example}`,
        category: "术语表",
        sectionId: term.id,
      });
    }

    // Tweet cards
    for (const tweet of tweetCards) {
      entries.push({
        id: `tweet-${tweet.id}`,
        title: `${tweet.author}: ${tweet.insight}`,
        searchableText: `${tweet.author} ${tweet.content} ${tweet.translation} ${tweet.insight}`,
        category: "大佬说",
        sectionId: tweet.id,
      });
    }

    // Practice tools
    for (const tool of practiceSection.tools) {
      entries.push({
        id: `practice-${tool.name}`,
        title: tool.name,
        searchableText: `${tool.name} ${tool.tagline} ${tool.description} ${tool.bestFor}`,
        category: "实践工具",
        sectionId: "practice",
      });
    }

    return entries;
  }, []);

  const search = useCallback(
    (query: string): SearchResult[] => {
      if (!query.trim()) return [];

      const lowerQuery = query.toLowerCase().trim();
      const results: SearchResult[] = [];

      for (const entry of index) {
        if (results.length >= MAX_RESULTS) break;

        const lowerText = entry.searchableText.toLowerCase();
        if (lowerText.includes(lowerQuery)) {
          results.push({
            id: entry.id,
            title: entry.title,
            excerpt: getExcerpt(entry.searchableText, query),
            category: entry.category,
            sectionId: entry.sectionId,
          });
        }
      }

      return results;
    },
    [index],
  );

  return { search };
}
