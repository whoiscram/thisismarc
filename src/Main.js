import me from "./assets/me.jpeg";
import inabel from "./assets/inabel.png";
import quickCash from "./assets/quick_cash.jpg";
import docker from "./assets/Docker.png";
import git from "./assets/Git.png";
import sql from "./assets/MySQL.png";
import op from "./assets/openproject-icon-white-blue-background-ade9a3a9.png";
import postman from "./assets/Postman.png";
import github from "./assets/GitHub.png";
import vs from "./assets/Visual Studio Code (VS Code).png";
import wamp from "./assets/wamp.png";

const logotext = "CRAM";
const meta = {
  title: "WhoisCram/thisisCram",
  description: "I’m Marc Justine Torres Full stack devloper",
};

const introdata = {
  title: "I’m Marc",
  animated: {
    first: "I write code for a living",
    second: "I develop web applications",
  },
  description:
    "I'm an enthusiastic programmer / developer who thrives on solving problems and building quirky apps. Always eager to learn, I write clean code, leveling up and exploring new technologies.",
  your_img_url: me,
};

const dataabout = {
  title:
    " Junior Programmer | Full Stack Develoepr",
  aboutme: "Helloo, my name is Marc! I like to write clean code for a living, practicing coding standards like it’s a sport. I’m the kind of person who gets excited about refactoring / innovating like it’s a Friday night party – except it’s me, my desktop, and a perfectly organized opened stack overflow tabs. Throw in some coffee, and I’m ready to debug the universe!",
};

const worktimeline = [
  {
    jobtitle: "Programmer [Part time]",
    where: "SAVAS",
    date: "September 2024 - Present",
  },
  {
    jobtitle: "Junior Programmer",
    where: "New Media Services",
    date: "March 2024 - September 2024",
  },
  {
    jobtitle: "Quality Assurance Intern",
    where: "NOAH Business Applications",
    date: "January 2023 - May 2023",
  },
];

const skills = [
  "Javascript",
  "Laravel",
  "React.js",
  "PHP",
  "Tailwind",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "Python",
  "HTML",
  "CSS",
];

const techTools = [docker, git, sql, op, postman, github, vs, wamp];

const dataportfolio = [
  {
    img: quickCash,
    description: "Anita Quick Cash Loaning System.",
    link: "#",
  },
  {
    img: inabel,
    description: "Inabel's Online Ordering System",
    link: "#",
  },
];

const contactConfig = {
  email: "torresmarc501@gmail.com",
  phone: "🇵🇭 +63 999 458 0043",
};

const socialprofils = {
  github: "https://github.com/whoiscram",
  facebook: "https://www.facebook.com/profile.php?id=100009033611131",
  linkedin: "https://www.linkedin.com/in/marc-torres-918b03280/",
};

const education = [
  {
    date: "2019 - 2023",
    degree: "Bachelor of Science in Information Technology (BSIT)",
    name: "Saint Louis University",
  },
  {
    date: "2017-2019",
    degree: "Science, technology, engineering, and mathematics (STEM)",
    name: "Saint Louis School Center (SHS)",
  },
];

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  education,
  techTools,
};
