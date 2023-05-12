import React, { createContext, useContext, useEffect } from "react";
import { UserCtx } from "./UserContext";

type Theme = "theme-candidate" | "theme-recruiter";
type ThemeContextType = {};
export const ThemeCtx = createContext<ThemeContextType>({});

export const ThemeContext: DefaultFC = (props) => {
  const { userType } = useContext(UserCtx);

  useEffect(() => {
    let themes: Theme[] = ["theme-recruiter", "theme-candidate"];
    if (userType === "candidate") {
      themes = themes.reverse();
    }
    document.body.classList.add(themes[0]);
    document.body.classList.remove(themes[1]);
  }, [userType]);

  return <ThemeCtx.Provider value={{}}>{props.children}</ThemeCtx.Provider>;
};
