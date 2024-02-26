import { createContext } from "react";
export interface contextData {
  email: string;
  fun: () => void;
}
export const UserContext = createContext<contextData>({email: '', fun: ()=> {}})

