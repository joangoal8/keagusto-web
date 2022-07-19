import EnglishContent from "../config/EN";
import SpanishContent from "../config/ES";

const LanguageReducer = (state, action) => {

  switch (action.language) {
    case "en": {
      return {
        content: EnglishContent,
      }
    }
    case "es": {
      return {
        content: SpanishContent,
      }
    }
    default:
      return state;
  }
}

export default LanguageReducer;