export interface IProperty {
  name: string;
  value: number;
  result: string;
  extensions?: IProperty[];
}

export interface ISkill {
  type: string;
  properties: IProperty[];
}

export const skills: ISkill[] = [
  {
    type: "Languages",
    properties: [
      {
        name: "Portuguese",
        value: 100,
        result: "Fluent",
      },
      {
        name: "English",
        value: 100,
        result: "Fluent",
      },
    ],
  },
  {
    type: "Technologies",
    properties: [
      {
        name: "CSS",
        value: 100,
        result: "Excelent",
        extensions: [
          {
            name: "Sass",
            value: 100,
            result: "Excelent",
          },
        ],
      },
      {
        name: "WebPack",
        value: 70,
        result: "Good",
      },
      {
        name: "Javascript",
        value: 100,
        result: "Excelent",
        extensions: [
          {
            name: "React.js",
            value: 100,
            result: "Excelent",
          },
          {
            name: "Next.js",
            value: 70,
            result: "Good",
          },
          {
            name: "VTK.js",
            value: 70,
            result: "Good",
          },
          {
            name: "Vue.js",
            value: 50,
            result: "Average",
          },
          {
            name: "Express.js",
            value: 70,
            result: "Good",
          },
        ],
      },

      {
        name: "HTML",
        value: 100,
        result: "Excelent",
      },
      {
        name: "MySQL",
        value: 100,
        result: "Excelent",
      },
      {
        name: "Python",
        value: 70,
        result: "Good",
        extensions: [
          {
            name: "Pycharm.js",
            value: 50,
            result: "Average",
          },
          {
            name: "Flask.js",
            value: 70,
            result: "Good",
          },
        ],
      },
    ],
  },
];
