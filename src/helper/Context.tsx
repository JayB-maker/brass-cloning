import { createContext } from "react";

interface ContextState {
    mobileMenu?: boolean;
    setMobileMenu?: any;
}

export const mobileMenuContext = createContext({} as ContextState);
