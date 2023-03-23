import Link from "next/link";
import React from "react";

import styles from "./Navbar.module.css";

type NavLinkType = {
  to: string;
  text: string;
};

const navLinks: NavLinkType[] = [
  { to: "/", text: "Home" },
  { to: "/cv", text: "Curriculums" },
  { to: "/users", text: "Users" },
];

const Navbar: DefaultFC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div>Loguito</div>

        <nav>
          <ul>
            {navLinks.map((nl) => (
              <li key={`navlink-${nl.text}`}>
                <Link href={nl.to}>{nl.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
