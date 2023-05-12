import Link from "next/link";
import React, { useContext, useRef, useState } from "react";

import NavbarMenu from "./NavbarMenu/NavbarMenu";

import { ProfileAvatar } from "@components/ProfileAvatar/ProfileAvatar";
import AppTooltip from "@components/AppTooltip/AppTooltip";

import styles from "./Navbar.module.css";
import { UserCtx } from "@/contexts/UserContext";


const Navbar: DefaultFC = () => {
  const { loggedUser } = useContext(UserCtx);
  const [isNavbarMenuOpen, setNavbarMenuOpen] = useState(false);

  const avatarRef = useRef<HTMLElement | null>(null);
  const [showAvatarTooltip, setShowAvatarTooltip] = useState(false);

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
          aria-label="Abrir menú"
        >
          <ProfileAvatar profile={loggedUser} />
        </span>
        <NavbarMenu
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
