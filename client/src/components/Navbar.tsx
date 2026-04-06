// Knowledge Atlas Design: Fixed top navigation with forest green accent
// Playfair Display for brand name, DM Mono for nav items
import { useState, useEffect } from "react";
import { navItems } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

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
          ? "rgba(250, 250, 247, 0.95)"
          : "rgba(250, 250, 247, 0.7)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid rgba(26, 61, 43, 0.12)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 16px rgba(26, 61, 43, 0.06)" : "none",
      }}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Brand */}
        <button
          onClick={() => handleNavClick("#hero")}
          className="flex items-center gap-2.5 group"
        >
          <div
            className="w-8 h-8 rounded-sm flex items-center justify-center text-[#FAFAF7] text-sm font-bold transition-transform group-hover:scale-105"
            style={{ background: "#1A3D2B", fontFamily: "'Playfair Display', serif" }}
          >
            AI
          </div>
          <span
            className="text-lg font-semibold tracking-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1A3D2B",
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
                  color: isActive ? "#1A3D2B" : "#4A4A45",
                  background: isActive ? "rgba(26, 61, 43, 0.08)" : "transparent",
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              background: "#1A3D2B",
              transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              background: "#1A3D2B",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-0.5 transition-all duration-200"
            style={{
              background: "#1A3D2B",
              transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            background: "rgba(250, 250, 247, 0.98)",
            borderColor: "rgba(26, 61, 43, 0.12)",
          }}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-6 py-3 text-sm border-b transition-colors hover:bg-[rgba(26,61,43,0.04)]"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                color: "#1A3D2B",
                borderColor: "rgba(26, 61, 43, 0.06)",
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
