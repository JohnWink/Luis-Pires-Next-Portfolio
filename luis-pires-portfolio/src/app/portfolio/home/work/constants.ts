const skillList = {
  html: {
    name: "HTML",
    color: "#b8fe92",
  },
  sass: {
    name: "Sass",
    color: "#87c7f0",
  },
  js: {
    name: "Javascript",
    color: "#f389b2",
  },
};
interface ISkillProperties {
  name: string;
  color: string;
}
export interface IWorkHistoryProperty {
  position: string;
  location: string;
  description: string;
  company: {
    name: string;
    websiteUrl?: string;
    linkedinUrl?: string;
  };
  fromDate: Date;
  toDate: Date;
  isOnGoing?: String;
  skills: ISkillProperties[];
}

export const workHistory: IWorkHistoryProperty[] = [
  {
    position: "Full Stack Developer",
    location: "Braga",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing \n\
      Ut enim ad minim veniam, quis nostrud exercitation \n\
      ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\
      Duis aute irure dolor in reprehenderit in voluptate velit esse \n\
      cillum dolore eu fugiat nulla pariatur. \n\
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \n\
      officia deserunt mollit anim id est laborum.",
    company: {
      name: "PeekMed",
      websiteUrl: "https://www.peekmed.com/",
      linkedinUrl: "https://www.linkedin.com/company/peekmed",
    },
    fromDate: new Date(2021, 4),
    toDate: new Date(Date.now()),
    isOnGoing: "Is Ongoing",
    skills: [skillList.html, skillList.sass],
  },
  {
    position: "Full Stack Developer",
    location: "Braga",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing \n\
      Ut enim ad minim veniam, quis nostrud exercitation \n\
      ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\
      Duis aute irure dolor in reprehenderit in voluptate velit esse \n\
      cillum dolore eu fugiat nulla pariatur. \n\
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \n\
      officia deserunt mollit anim id est laborum.",
    company: {
      name: "PeekMed",
      websiteUrl: "https://www.peekmed.com/",
      linkedinUrl: "https://www.linkedin.com/company/peekmed",
    },
    fromDate: new Date(2021, 4),
    toDate: new Date(Date.now()),
    isOnGoing: "Is Ongoing",
    skills: [skillList.html, skillList.sass, skillList.js],
  },
  {
    position: "Full Stack Developer",
    location: "Braga",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing \n\
      Ut enim ad minim veniam, quis nostrud exercitation \n\
      ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\
      Duis aute irure dolor in reprehenderit in voluptate velit esse \n\
      cillum dolore eu fugiat nulla pariatur. \n\
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \n\
      officia deserunt mollit anim id est laborum.",
    company: {
      name: "PeekMed",
      websiteUrl: "https://www.peekmed.com/",
      linkedinUrl: "https://www.linkedin.com/company/peekmed",
    },
    fromDate: new Date(2021, 4),
    toDate: new Date(Date.now()),
    isOnGoing: "Is Ongoing",
    skills: [skillList.html, skillList.sass, skillList.js],
  },
];
