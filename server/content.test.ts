import { describe, expect, it } from "vitest";

// Test content data integrity by importing the data modules
// These are client-side modules but we can validate their structure

describe("Content Data Integrity", () => {
  it("deepBasicContent exports 33 sections (B1-B33)", async () => {
    const mod = await import("../client/src/lib/deepBasicContent");
    expect(mod.deepBasicSections).toBeDefined();
    expect(Array.isArray(mod.deepBasicSections)).toBe(true);
    expect(mod.deepBasicSections.length).toBeGreaterThanOrEqual(33);

    // Verify chapter numbering
    mod.deepBasicSections.forEach((section: any, index: number) => {
      expect(section.chapterNum).toBe(`B${index + 1}`);
      expect(section.id).toBeTruthy();
      expect(section.title).toBeTruthy();
    });
  });

  it("deepAdvancedContent exports 20 sections total (A1-A10 + A11-A20 extra)", async () => {
    const mod = await import("../client/src/lib/deepAdvancedContent");
    // A1-A10 in deepAdvancedSections, A11-A20 in deepAdvancedSectionsExtra
    expect(mod.deepAdvancedSections).toBeDefined();
    expect(Array.isArray(mod.deepAdvancedSections)).toBe(true);
    expect(mod.deepAdvancedSections.length).toBeGreaterThanOrEqual(10);

    expect(mod.deepAdvancedSectionsExtra).toBeDefined();
    expect(Array.isArray(mod.deepAdvancedSectionsExtra)).toBe(true);
    expect(mod.deepAdvancedSectionsExtra.length).toBeGreaterThanOrEqual(10);

    // Combined total should be 20
    const allSections = [...mod.deepAdvancedSections, ...mod.deepAdvancedSectionsExtra];
    expect(allSections.length).toBeGreaterThanOrEqual(20);

    // Verify A1-A10 chapter numbering
    mod.deepAdvancedSections.forEach((section: any, index: number) => {
      expect(section.chapterNum).toBe(`A${index + 1}`);
      expect(section.id).toBeTruthy();
      expect(section.title).toBeTruthy();
    });
  });

  it("practiceContent exports practice section with tools", async () => {
    const mod = await import("../client/src/lib/practiceContent");
    expect(mod.practiceSection).toBeDefined();
    expect(mod.practiceSection.tools).toBeDefined();
    expect(Array.isArray(mod.practiceSection.tools)).toBe(true);
    expect(mod.practiceSection.tools.length).toBeGreaterThanOrEqual(10);
  });

  it("tweetContent exports tweet cards and thinkers", async () => {
    const mod = await import("../client/src/lib/tweetContent");
    expect(mod.tweetCards).toBeDefined();
    expect(Array.isArray(mod.tweetCards)).toBe(true);
    expect(mod.tweetCards.length).toBeGreaterThan(0);

    expect(mod.thinkers).toBeDefined();
    expect(Array.isArray(mod.thinkers)).toBe(true);
    expect(mod.thinkers.length).toBeGreaterThanOrEqual(18);
  });

  it("content.ts exports CDN assets and navItems", async () => {
    const mod = await import("../client/src/lib/content");
    expect(mod.CDN).toBeDefined();
    expect(mod.CDN.heroBg).toBeTruthy();
    expect(mod.CDN.heroRobot).toBeTruthy();

    expect(mod.navItems).toBeDefined();
    expect(Array.isArray(mod.navItems)).toBe(true);
    expect(mod.navItems.length).toBeGreaterThanOrEqual(8);

    // Verify nav items have correct structure
    mod.navItems.forEach((item: any) => {
      expect(item.label).toBeTruthy();
      expect(item.href).toMatch(/^#/);
    });
  });

  it("basic sections B1-B33 have quiz data", async () => {
    const mod = await import("../client/src/lib/deepBasicContent");
    // All sections now have quiz (B1-B4 were added, B25-B33 are new)
    const sectionsWithQuiz = mod.deepBasicSections.filter((s: any) => s.quiz);
    expect(sectionsWithQuiz.length).toBe(mod.deepBasicSections.length); // All sections

    sectionsWithQuiz.forEach((section: any) => {
      expect(Array.isArray(section.quiz)).toBe(true);
      expect(section.quiz.length).toBeGreaterThan(0);

      // Verify quiz structure
      section.quiz.forEach((q: any) => {
        expect(q.question).toBeTruthy();
        expect(Array.isArray(q.options)).toBe(true);
        expect(q.options.length).toBeGreaterThanOrEqual(3);
        expect(typeof q.correct).toBe("number");
      });
    });
  });

  it("all advanced sections have quiz data", async () => {
    const mod = await import("../client/src/lib/deepAdvancedContent");
    mod.deepAdvancedSections.forEach((section: any) => {
      expect(section.quiz).toBeDefined();
      expect(Array.isArray(section.quiz)).toBe(true);
      expect(section.quiz.length).toBeGreaterThan(0);
    });
  });

  it("all CDN image URLs are valid HTTPS URLs", async () => {
    const mod = await import("../client/src/lib/content");
    const cdnValues = Object.values(mod.CDN);
    cdnValues.forEach((url) => {
      expect(typeof url).toBe("string");
      expect(url).toMatch(/^https:\/\//);
    });
  });

  it("glossaryContent exports at least 30 terms with valid structure", async () => {
    const mod = await import("../client/src/lib/glossaryContent");
    expect(mod.glossaryTerms).toBeDefined();
    expect(Array.isArray(mod.glossaryTerms)).toBe(true);
    expect(mod.glossaryTerms.length).toBeGreaterThanOrEqual(30);

    const categories = new Set<string>();
    mod.glossaryTerms.forEach((term: any) => {
      expect(term.id).toBeTruthy();
      expect(term.term).toBeTruthy();
      expect(term.termEn).toBeTruthy();
      expect(term.definition).toBeTruthy();
      expect(term.example).toBeTruthy();
      expect(term.category).toBeTruthy();
      categories.add(term.category);
    });

    // All 4 categories should be represented
    expect(categories.size).toBe(4);
    expect(categories.has("基础概念")).toBe(true);
    expect(categories.has("技术术语")).toBe(true);
    expect(categories.has("应用概念")).toBe(true);
    expect(categories.has("商业/生态")).toBe(true);
  });
});
