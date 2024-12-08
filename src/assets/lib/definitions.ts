export type translationType = {
	hero: {
		title: string;
		job: string;
	};
	navbar: {
		about: string;
		skills: string;
		projects: string;
		contact: string;
	};
	about: {
		aboutTitle: string;
		aboutText: string;
		skillTitle: string;
		skillArray: string[];
		hobbiesTitle: string;
		hobbiesText: string;
	};
	project: {
		croustiEatAlt: string;
		croustiEatText: string;
		croustiEatUrl: string;
		buyAPlanetAlt: string;
		buyAPlanetText: string;
		buyAPlanetUrl: string;
		boarderlineAlt: string;
		boarderlineText: string;
		boarderlineUrl: string;
	};
	contact: {
		contactTitle: string;
		contactMail: string;
		contactLinkedin: string;
		contactGithub: string;
	};
	footer: {
		copyrigthText: string;
		copyrigthLink: string;
	};
};

export type languageType = {
	language: string;
	toggleLanguage: () => void;
	translations: translationType;
};
