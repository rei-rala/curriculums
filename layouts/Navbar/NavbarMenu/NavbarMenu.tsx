import Link from "next/link";
import React, { useContext, useMemo } from "react";

import styles from "./NavbarMenu.module.css";
import { useRouter } from "next/router";
import { UserCtx } from "@/contexts/UserContext";

export type NavLinkType = {
  to: string;
  text: string;
};

const baseLink: NavLinkType[] = [{ to: "/cv", text: "Perfiles" }];

interface NavbarMenuProps {
  open: boolean;
  setOpen: any;
}

const NavbarMenu: ExtendedFC<NavbarMenuProps> = ({ open, setOpen }) => {
  const { loggedUser } = useContext(UserCtx);
  const router = useRouter();
  const navLinks = useMemo(() => {
    let nvLinks = baseLink;

    if (loggedUser && !nvLinks.find((link) => link.text === "Cerrar sesión")) {
      nvLinks = nvLinks.filter((link) => link.to !== "Iniciar sesión");

      // logout with callback url
      nvLinks.push({
        to: `/logout?callBackUrl=${router.asPath}`,
        text: "Cerrar sesión",
      });

      if (loggedUser.userType === "candidate")
        nvLinks.unshift({ to: "/cv/me", text: "Mi curriculum" });
      return nvLinks;
    }
    return [
      { to: `/login?callBackUrl=${router.asPath}`, text: "Iniciar sesión" },
      ...nvLinks,
    ];
  }, [loggedUser, router]);

  if (!open) return null;

  return (
    <ul className={"dropdown-menu " + styles.openMenu}>
      {navLinks.map((nl) => (
        <li onClick={() => setOpen(false)} key={nl.text}>
          <Link className={`dropdown-item ${styles.dropdownItem}`} href={nl.to}>
            {nl.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
