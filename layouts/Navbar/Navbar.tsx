import { PartialProfileAvatar } from "@/components/ProfileAvatar/ProfileAvatar";
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
];

const Navbar: DefaultFC = () => {

  const loggedUser = null;

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

            <Link href={`/cv/me`}>
              <PartialProfileAvatar profile={loggedUser} width={50} height={50} />
            </Link>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
