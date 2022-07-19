import { createContext, useReducer } from "react";
import LanguageReducer from "./LanguageReducer";
import EnglishContent from "../config/EN";

const INITIAL_STATE = {
  content: EnglishContent,
};

export const LanguageContext = createContext(INITIAL_STATE);

export const LanguageContextProvider = ({ children }) => {

  const [state, dispatchLanguage] = useReducer(LanguageReducer, INITIAL_STATE);

  return (
      <LanguageContext.Provider value={{ content: state.content, dispatchLanguage }}>
        {children}
      </LanguageContext.Provider>
  );
}