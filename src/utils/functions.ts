import {acceptableLanguages, defaultLanguage} from "./constants";

export const checkLanguageAvailability=(lang='en')=>{
    return acceptableLanguages.includes(lang) ? lang : defaultLanguage
}
export const getCurrentLang=(currentLang:string)=>{
    return checkLanguageAvailability(currentLang)
}
