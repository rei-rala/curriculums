import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { loginWithCredentials } from "@/services/auth.services";
import { getLocalStorageItem, saveToLocalStorage } from "@/utils";

let defaultUserCtx: IUser | null = null;

type UserContextType = {
  userType: UserType;
  setUserType: Dispatch<SetStateAction<UserType>>;
  toggleUserType: () => void;
  loggedUser: IUser | null;
  setLoggedUser: Dispatch<SetStateAction<IUser | null>>;
  logIn: (credentials: Credentials) => Promise<{ user: IUser } | null>;
  logOut: () => Promise<void>;
};

export const UserCtx = createContext<UserContextType>({
  userType: "candidate",
  setUserType: () => {},
  toggleUserType: () => {},
  loggedUser: defaultUserCtx,
  setLoggedUser: () => {},
  logIn: async () => null,
  logOut: async () => {},
});

export const UserContext: DefaultFC = (props) => {
  const [userType, setUserType] = useState<UserType>("candidate");
  const [loggedUser, setLoggedUser] = useState(defaultUserCtx);

  async function logIn(credentials: Credentials) {
    return loginWithCredentials(credentials);
  }

  async function logOut() {
    return setLoggedUser(null);
  }

  function toggleUserType() {
    setUserType((curr) => curr === "candidate" ? "recruiter" : "candidate");
  }

  useEffect(()=>{
    saveToLocalStorage("userType", userType);
  }, [userType])

  useEffect(() => {
    setUserType(getLocalStorageItem<UserType>("userType", "candidate")!);
  }, []);

  return (
    <UserCtx.Provider
      value={{
        userType, setUserType, toggleUserType,
        loggedUser, setLoggedUser,
        logIn, logOut,
      }}
    >
      {props.children}
    </UserCtx.Provider>
  );
};
