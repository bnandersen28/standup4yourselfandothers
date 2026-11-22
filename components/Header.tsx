"use client";

import Link from "next/link";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home", color: "yellow" },
  { href: "/about", label: "About Us", color: "purple" },
  { href: "/team", label: "Our Team", color: "red" },
  { href: "/projects", label: "Projects", color: "blue" },
  { href: "/books", label: "Book Catalog", color: "green" },
  { href: "/events", label: "Calendar", color: "orange" },
  { href: "/input", label: "Your Input", color: "pink" },
]

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerImage}>
          <Link href="/">
            <img
              src="/images/ink.png"
              alt="Stand Up stick figures logo"
              className={styles.stickLogo}
            />
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ""}`} />
        </button>

        <nav
          id="main-nav"
          className={`${styles.headerButtons} ${menuOpen ? styles.open : ""}`}
        >
          {navLinks.map(({ href, label, color }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={`btn btn-${color} ${isActive ? styles.active : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}