import Link from "next/link";
import React, { useEffect, useMemo, useRef, useState } from "react";

import NavbarMenu from "./NavbarMenu/NavbarMenu";

import { ProfileAvatar } from "@components/ProfileAvatar/ProfileAvatar";
import AppTooltip from "@components/AppTooltip/AppTooltip";

import styles from "./Navbar.module.css";

export type NavLinkType = {
  to: string;
  text: string;
};

const baseLink: NavLinkType[] = [{ to: "/cv", text: "Perfiles" }];

const Navbar: DefaultFC = () => {
  const [loggedUser, setLoggedUser] = useState<IProfile | null>(null);
  const [isNavbarMenuOpen, setNavbarMenuOpen] = useState(false);

  const avatarRef = useRef<HTMLElement | null>(null);
  const [showAvatarTooltip, setShowAvatarTooltip] = useState(false);

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
    setShowAvatarTooltip(false);
  }

  function handleAvatarHover(event: React.SyntheticEvent) {
    if (event.type === "mouseenter")
      !isNavbarMenuOpen && setShowAvatarTooltip(true);
    if (event.type === "mouseleave") setShowAvatarTooltip(false);
  }

  return (
    <nav
      className={`row p-1 d-flex justify-content-space-between ${styles.navbar}`}
    >
      <div className="col-6 navbar-brand d-flex align-items-center">
        <Link href="/">Loguito</Link>
      </div>

      <div
        className={`col-6 d-flex justify-content-end align-items-center ${styles.dropdownBtn}`}
      >
        <span
          ref={avatarRef}
          onClick={toggleNavbarMenu}
          onMouseEnter={handleAvatarHover}
          onMouseLeave={handleAvatarHover}
          className="d-flex align-items-center fa-2x"
          role="button"
        >
          <ProfileAvatar profile={loggedUser} />
        </span>
        <NavbarMenu
          links={navLinks}
          open={isNavbarMenuOpen}
          setOpen={setNavbarMenuOpen}
        />
      </div>
      <AppTooltip
        text="Opciones"
        show={showAvatarTooltip}
        targetRef={avatarRef}
        placement="bottom"
      />
    </nav>
  );
};

export default Navbar;
