import { ade, samsclub, tyler, walmart } from "../assets/images";
import {
  blog,
  contact,
  css,
  livedocs,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  game,
  react,
  redux,
  sass,
  video,
  calendar,
  tailwindcss,
  shirt,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Sams Club",
    icon: samsclub,
    iconBg: "#60a5eb",
    date: "August 2024 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Maintaining parent and child elements by using state and props in React JS.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Used JIRA as the bug tracking system to track and maintain the history of bugs/issues on everyday basis.",
    ],
  },
  {
    title: "Full Stack .NET Developer",
    company_name: "Tyler Technologies",
    icon: tyler,
    iconBg: "#d4db88",
    date: "Dec 2020 - July 2024",
    points: [
      "Design, develop and test HTML, CSS, Bootstrap, JavaScript, jQuery and React.js that meets accessibility and web browser standards for website.",
      "Implemented the Drag and Drop functionality using React-Draggable.",
      "Extensive experience in web-based page and site designs using HTML, CSS, JavaScript, Kendo UI, and React JS.",
      "Created Stored Procedures, Views, Triggers and Complex T-SQL queries in SQL Server.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack React.js Developer",
    company_name: "State of Arkansas (ADE)",
    icon: ade,
    iconBg: "#89cfe8",
    date: "Aug 2018 - Nov 2020",
    points: [
      "Worked on an Agile (Scrum) Development Team to deliver regular updates to business team and project managers.",
      "Worked on React JS Virtual Dom and React views, rendering using components which contains additional components called custom HTML tags.",
      "Implemented various screens for the front end using React.js and used various predefined components from NPM (Node Package Manager).",
      "Responsible for React UI and architecture. Building components library, including Tree, Slide-View and Table Grid. ",
      "Responsible for UI developments and custom views using MVC Razor, HTML, jQuery and CSS which interacts with Business layer objects and contents from external source",
      "Developed core functionality with the ASP.NET MVC Framework (C#.NET, Entity Framework 6.0)",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Walmart Stores",
    icon: walmart,
    iconBg: "#f0c975",
    date: "Oct 2017 - Jun 2018",
    points: [
      "Used Node JS commands to generate Components, and Services.",
      "Used Single Page Application (SPA) format using Angular-Router.",
      "Experience in creating loosely coupled classes using Dependency Injection.",
      "Created Typescript reusable components and services to consume API’s using Component based architecture provided by Angular 4.",
      "Implemented Two-way data-binding in Angular which helps the application handle the automatic synchronization of data between the model and view components using typescript and angular 4.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/abhijeetpalanki",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "www.linkedin.com/in/abhijeetpalanki",
  },
];

export const projects = [
  {
    iconUrl: game,
    theme: "btn-back-red",
    name: "2048 Animated",
    description: "Animated version of 2048 game",
    link: "https://abhijeetpalanki-2048.netlify.app/",
  },
  {
    iconUrl: shirt,
    theme: "btn-back-green",
    name: "Shirt Customizer",
    description:
      "Simply upload your own logo or create a design using our collection of fonts & artwork. Our customizable design templates make it easy to kickstart your idea.",
    link: "https://abhijeetpalanki-shirty.netlify.app/",
  },
  {
    iconUrl: blog,
    theme: "btn-back-blue",
    name: "Insights",
    description:
      "Easily the most user-friendly and lightweight app to quickly get the news you need. The app contains everything you expect from a news and blog app.",
    link: "https://abhijeetpalanki-insights.netlify.app/",
  },
  {
    iconUrl: video,
    theme: "btn-back-pink",
    name: "Whiz",
    description:
      "Whiz helps consolidate communications, connect people, and collaborate better together in the boardroom, classroom, operating room, and everywhere in between.",
    link: "https://abhijeetpalanki-whiz.netlify.app/",
  },
  {
    iconUrl: livedocs,
    theme: "btn-back-black",
    name: "Live Docs",
    description:
      "A new kind of notebook for data storytelling. Mix dynamic text in a fast, shareable, collaborative medium.",
    link: "https://abhijeetpalanki-livedocs.netlify.app/",
  },
  {
    iconUrl: calendar,
    theme: "btn-back-yellow",
    name: "Calendar",
    description:
      "Learn how Calendar helps you stay on top of your plans - at home, at work and everywhere in between.",
    link: "https://abhijeetpalanki-calendar.netlify.app/",
  },
];
