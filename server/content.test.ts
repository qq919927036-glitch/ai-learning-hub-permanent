import { describe, expect, it } from "vitest";

// Test content data integrity by importing the data modules
// These are client-side modules but we can validate their structure

describe("Content Data Integrity", () => {
  it("deepBasicContent exports 24 sections (B1-B24)", async () => {
    const mod = await import("../client/src/lib/deepBasicContent");
    expect(mod.deepBasicSections).toBeDefined();
    expect(Array.isArray(mod.deepBasicSections)).toBe(true);
    expect(mod.deepBasicSections.length).toBe(24);

    // Verify chapter numbering
    mod.deepBasicSections.forEach((section: any, index: number) => {
      expect(section.chapterNum).toBe(`B${index + 1}`);
      expect(section.id).toBeTruthy();
      expect(section.title).toBeTruthy();
    });
  });

  it("deepAdvancedContent exports 10 sections (A1-A10)", async () => {
    const mod = await import("../client/src/lib/deepAdvancedContent");
    expect(mod.deepAdvancedSections).toBeDefined();
    expect(Array.isArray(mod.deepAdvancedSections)).toBe(true);
    expect(mod.deepAdvancedSections.length).toBe(10);

    // Verify chapter numbering
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
    expect(mod.practiceSection.tools.length).toBe(5);
  });

  it("tweetContent exports tweet cards and thinkers", async () => {
    const mod = await import("../client/src/lib/tweetContent");
    expect(mod.tweetCards).toBeDefined();
    expect(Array.isArray(mod.tweetCards)).toBe(true);
    expect(mod.tweetCards.length).toBeGreaterThan(0);

    expect(mod.thinkers).toBeDefined();
    expect(Array.isArray(mod.thinkers)).toBe(true);
    expect(mod.thinkers.length).toBe(8);
  });

  it("content.ts exports CDN assets and navItems", async () => {
    const mod = await import("../client/src/lib/content");
    expect(mod.CDN).toBeDefined();
    expect(mod.CDN.heroBg).toBeTruthy();
    expect(mod.CDN.heroRobot).toBeTruthy();

    expect(mod.navItems).toBeDefined();
    expect(Array.isArray(mod.navItems)).toBe(true);
    expect(mod.navItems.length).toBe(6);

    // Verify nav items have correct structure
    mod.navItems.forEach((item: any) => {
      expect(item.label).toBeTruthy();
      expect(item.href).toMatch(/^#/);
    });
  });

  it("basic sections B5-B24 have quiz data", async () => {
    const mod = await import("../client/src/lib/deepBasicContent");
    // B1-B4 are legacy sections without quiz, B5+ have quiz
    const sectionsWithQuiz = mod.deepBasicSections.filter((s: any) => s.quiz);
    expect(sectionsWithQuiz.length).toBe(20); // B5-B24

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
});
