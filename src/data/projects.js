import lonewolf from "../assets/lonewolf.png";
import exodus from "../assets/exodus.png";
import llamacornIsland from "../assets/llamacorn-island.png";
import scout19 from "../assets/scout19.png";
import eatDaBurger from "../assets/eat-da-burger.png";
import weatherDashboard from "../assets/weather-dashboard.png";

export const projects = [
  {
    name: "Weather Dashboard",
    deployedUrl: "https://dilanli.github.io/Weather-Dashboard/",
    description:
      "Search for any city on the globe and save to a favorite list. Features a five day forecast.",
    keywords: "Bootstrap, Responsive/ Mobile Web Design, APIs",
    githubUrl: "https://github.com/DilanLi/Weather-Dashboard",
    png: weatherDashboard,
  },
  {
    name: "Llamacorn Resident Directory",
    deployedUrl: "https://dilanli.github.io/Employee-Directory/",
    description:
      "A React web application featuring Animal Crossing video game characters and their information such as species and personalities. The app gets information from a third party api and allows sorting and filtering functions of the characters.",
    keywords: "React, Third Party APIs, Responsive Web Designs",
    githubUrl: "https://github.com/DilanLi/Employee-Directory",
    png: llamacornIsland,
  },
  {
    name: "Lone Wolf",
    deployedUrl: null,
    description:
      "Group project of a 2-person crew. This is a mobile-first workout application built using MERN stack. Users can sign in, watch gif tutorials of exercises, build their customized workouts, and track their progress on a dashboard. I was responsible for login, database, server and routes, and the dashboard.",
    keywords: "MongoDB, Express, React, Node.js, Auth0, React-Vis",
    githubUrl: "https://github.com/corvus-cyber/LoneWolf",
    png: lonewolf,
  },
  {
    name: "Scout 19",
    deployedUrl: null,
    description:
      "Group project of a 4-person crew. The application shows up to date coivd-19 case counts on national and state levels. App includes a colored US map displaying state covid grade, as well as a 14 days positive cases chart on state level. I was responsible for the covid-data api and the line graphs.",
    keywords: "Third Party APIs, JavaScript",
    githubUrl: "https://github.com/corvus-cyber/SCOUT19",
    png: scout19,
  },
  {
    name: "Project Exodus",
    deployedUrl: null,
    description:
      "Group project of a 6-person crew. A text adventure game featuring an original horror story. Game incorporates background music, interactive user scenerios and a cloud database. I was responsible for server, routes and database.",
    keywords: "Heroku, MySQL Database, MVC development",
    githubUrl: "https://github.com/corvus-cyber/Project_Exodus",
    png: exodus,
  },
  {
    name: "Eat-Da-Burger",
    deployedUrl: null,
    description:
      "A simple web application allowing CRUD operations on a cloud MySQL database.",
    keywords: "Express Server, CRUD, MySQL, Handlebars Template Engine",
    githubUrl: "https://github.com/DilanLi/Eat-Da-Burger",
    png: eatDaBurger,
  },
];
