import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

import styles from "./Navbar.module.css";
import { ProfileAvatar } from "@/components/ProfileAvatar/ProfileAvatar";
import NavbarMenu from "./NavbarMenu/NavbarMenu";

export type NavLinkType = {
  to: string;
  text: string;
};

const baseLink: NavLinkType[] = [{ to: "/cv", text: "Perfiles" }];

const Navbar: DefaultFC = () => {
  const [loggedUser, setLoggedUser] = useState<IProfile | null>(null);
  const [isNavbarMenuOpen, setNavbarMenuOpen] = useState(false);

  const navLinks = useMemo(() => {
    let nvLinks = baseLink;

    if (loggedUser) {
      nvLinks.unshift({ to: "/cv/me", text: "Mi curriculum" });
      nvLinks.push({ to: "/logout", text: "Cerrar sesión" });
      return nvLinks;
    }
    return [{ to: "/login", text: "Iniciar sesión" }, ...nvLinks];
  }, [loggedUser]);

  function toggleNavbarMenu() {
    setNavbarMenuOpen(!isNavbarMenuOpen);
  }

  return (
    <nav className={"container " + styles.navbar}>
      <Link className="navbar-brand my-auto" href="/">
        Loguito
      </Link>

      <div className={`${styles.dropdownBtn}`}>
        <span
          className="d-flex align-items-center fa-2x"
          role="button"
          onClick={toggleNavbarMenu}
        >
          <ProfileAvatar profile={loggedUser} />
        </span>
        <NavbarMenu
          links={navLinks}
          open={isNavbarMenuOpen}
          setOpen={setNavbarMenuOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
