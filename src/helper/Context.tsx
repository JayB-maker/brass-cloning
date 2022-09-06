import { createContext } from "react";

interface ContextState {
    mobileMenu?: boolean;
    setMobileMenu?: any;
    clicked?: any;
    setClicked?: any;
}

export const mobileMenuContext = createContext({} as ContextState);
export const everythingYouNeedContext = createContext({} as ContextState);
export const TestimonialsContext = createContext({} as ContextState);
