export type translationType = {
	hero: {
		title: string;
		job: string;
	};
	navbar: {
		about: string;
		aboutLink: string;
		projects: string;
		projectsLink: string;
		contact: string;
		contactLink: string;
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
		eshopAlt: string;
		eshopText: string;
		eshopUrl: string;
		boarderlineAlt: string;
		boarderlineText: string;
		boarderlineUrl: string;
	};
	contact: {
		contactTitle: string;
		contactMail: string;
		contactLinkedin: string;
		contactLinkedinLink: string;
		contactGithub: string;
		contactGithubLink: string;
		contactDownloadCV: string;
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
