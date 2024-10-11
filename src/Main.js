import me from "./assets/me.jpeg";
import inabel from "./assets/inabel.png";
import quickCash from "./assets/quick_cash.jpg";
const logotext = "CRAM";
const meta = {
  title: "Marc Justine Torres",
  description: "I’m Marc Justine Torres Full stack devloper",
};

const introdata = {
  title: "I’m Marc",
  animated: {
    first: "I write code for a living",
    second: "I develop web applications",
  },
  description:
    "A passionate coder who thrives on solving problems and building quirky apps. Always eager to learn, I write clean code and love leveling up.",
  your_img_url: me,
};

const dataabout = {
  title: "abit about my self",
  aboutme: "",
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
  "Python",
  "HTML",
  "CSS"
];


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
  YOUR_EMAIL: "torresmarc501@gmail.com",
  YOUR_FONE: "🇵🇭 +63 999 458 0043",
  // description:
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra. ",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/whoiscram",
  facebook: "https://www.facebook.com/profile.php?id=100009033611131",
  linkedin: "https://www.linkedin.com/in/marc-torres-918b03280/",
};

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
};
