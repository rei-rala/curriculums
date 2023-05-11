import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { loginWithCredentials } from "@/services/auth.services";

let defaultUserCtx: IUser | null = null;

type UserContextType = {
  loggedUser: IUser | null;
  setLoggedUser: Dispatch<SetStateAction<IUser | null>>;
  logIn: (credentials: Credentials) => Promise<{ user: IUser } | null>;
  logOut: () => void;
};

export const UserCtx = createContext<UserContextType>({
  loggedUser: defaultUserCtx,
  setLoggedUser: () => {},
  logIn: async () => null,
  logOut: () => {},
});

export const UserContext: DefaultFC = (props) => {
  const [loggedUser, setLoggedUser] = useState(defaultUserCtx);

  async function logIn(credentials: Credentials) {
    return loginWithCredentials(credentials);
  }

  async function logOut() {
    setLoggedUser(null);
  }

  return (
    <UserCtx.Provider
      value={{
        loggedUser,
        setLoggedUser,
        logIn,
        logOut,
      }}
    >
      {props.children}
    </UserCtx.Provider>
  );
};
