import { createContext, useReducer } from "react";
import LanguageReducer from "./LanguageReducer";
import SpanishContent from "../config/ES";

const INITIAL_STATE = {
  content: SpanishContent,
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