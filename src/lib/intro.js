import { createContext, useContext } from 'react';

// True once the opening greeting has finished, so the first screen can start
// its entrance when the visitor can actually see it.
export const IntroContext = createContext(true);
export const useIntroDone = () => useContext(IntroContext);
