import { createContext, useContext, useState } from "react";

import type { ReactNode } from "react";
import type { languageType } from "../assets/lib/definitions";

//
import fr from "../locales/fr.json";
import en from "../locales/en.json";

// fusion des deux JSON en un objet
const translations = { en, fr };

// création du contexte
const LangContext = createContext<languageType>({
	language: "fr",
	toggleLanguage: () => undefined,
	translations: translations.fr,
});

// fournir le contexte
export function LangProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<"fr" | "en">("fr");

	const toggleLanguage = () => {
		setLanguage(language === "fr" ? "en" : "fr");
	};

	// creation d'un objet afin de faire passer les props
	const value = {
		language,
		toggleLanguage,
		translations: translations[language],
	};

	return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export const useTranslation = (): languageType => {
	return useContext(LangContext);
};
