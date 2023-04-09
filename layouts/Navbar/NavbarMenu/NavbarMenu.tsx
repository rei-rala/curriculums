import Link from "next/link";
import React from "react";

import styles from "./NavbarMenu.module.css";
import { NavLinkType } from "../Navbar";

interface NavbarMenuProps {
  open: boolean;
  setOpen: any;
  links: NavLinkType[];
}

const NavbarMenu: ExtendedFC<NavbarMenuProps> = ({ links, open, setOpen }) => {
  if (!open) return null;

  return (
    <ul className={"dropdown-menu " + styles.openMenu}>
      {links.map((nl) => (
        <li onClick={() => setOpen(false)} key={nl.text}>
          <Link className="dropdown-item" href={nl.to}>
            {nl.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
