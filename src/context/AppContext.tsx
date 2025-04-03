import { createContext } from "react";

interface AppContextType {
  user: object | null;
  wallet: object | null;
  transactions: Array<object> | null;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
