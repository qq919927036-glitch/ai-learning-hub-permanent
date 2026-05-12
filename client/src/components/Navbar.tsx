// Knowledge Atlas Design: Fixed top navigation with forest green accent
// Playfair Display for brand name, DM Mono for nav items
import { useState, useEffect } from "react";
import { navItems } from "@/lib/content";
import { Sun, Moon, Search } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Read theme from localStorage on mount, fallback to system preference
    const saved = localStorage.getItem("ai-hub-theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("ai-hub-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("ai-hub-theme", "light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section
      const sections = navItems.map((n) => n.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "var(--hub-nav-bg)"
          : "var(--hub-nav-bg-blur)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid var(--hub-nav-border)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 16px rgba(0, 0, 0, 0.06)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Brand */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-2.5 group"
        >
          <div
            className="w-8 h-8 rounded-sm flex items-center justify-center text-sm font-bold transition-transform group-hover:scale-105"
            style={{ background: "var(--hub-forest)", color: "#FAFAF7", fontFamily: "'Playfair Display', serif" }}
          >
            AI
          </div>
          <span
            className="text-lg font-semibold tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "var(--hub-forest)",
            }}
          >
            Learning Hub
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-1.5 rounded text-sm transition-all duration-200"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.04em",
                  color: isActive ? "var(--hub-forest)" : "var(--hub-text-muted)",
                  background: isActive ? "rgba(128, 128, 128, 0.08)" : "transparent",
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Theme Toggle + Search + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Search Button */}
          <button
            onClick={() => window.dispatchEvent(new Event("open-search"))}
            className="p-2 rounded-md transition-colors flex items-center gap-1.5"
            style={{
              color: "var(--hub-text-muted)",
              background: "transparent",
            }}
            aria-label="Search"
            title="Search (Ctrl+K)"
          >
            <Search className="w-4 h-4" />
            <kbd
              className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono"
              style={{
                border: "1px solid var(--hub-card-border)",
                color: "var(--hub-text-muted)",
                fontSize: "10px",
                lineHeight: "1",
              }}
            >
              ⌘K
            </kbd>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md transition-colors"
            style={{
              color: "var(--hub-text-muted)",
              background: "transparent",
            }}
            aria-label="Toggle dark mode"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "var(--hub-forest)",
                transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "var(--hub-forest)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                background: "var(--hub-forest)",
                transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "var(--hub-nav-bg)",
            borderColor: "var(--hub-nav-border)",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-6 py-3 text-sm border-b transition-colors"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                color: "var(--hub-forest)",
                borderColor: "var(--hub-nav-border)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
