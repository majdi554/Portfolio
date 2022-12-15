// import images
import Hero_person from "./assets/images/Hero/moi.png";


import Laravel from "./assets/images/Skills/Laravel.png";
import js from "./assets/images/Skills/js.png";
import htmlcss from "./assets/images/Skills/htmlcss.png";
import PHP from "./assets/images/Skills/PHP.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import Bootstrap from "./assets/images/Skills/Bootstrap.png";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import rea1 from "./assets/images/projects/rea1.png";
import portfolio from "./assets/images/projects/portfolio.png";
import project3 from "./assets/images/projects/img3.png";
import moi2_project from "./assets/images/projects/moi2.png";



import Hireme_perso2 from "./assets/images/Hireme/perso2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";



export const content = {
    nav: [{
            link: "#home",
            icon: TbSmartHome,
        },
        {
            link: "#skills",
            icon: BiUser,
        },
        {
            link: "#services",
            icon: RiServiceLine,
        },
        {
            link: "#projects",
            icon: RiProjectorLine,
        },
        {
            link: "#contact",
            icon: MdOutlinePermContactCalendar,
        },
    ],
    hero: {
        title: "Hi, I'm a Web Developer",
        firstName: "MAJDI ",
        LastName: "ESSID",
        btnText: "Hire Me",
        image: Hero_person,
        hero_content: [{
                count: "2+",
                text: "Years of Experience in Web development",
            },
            {
                count: "12+",
                text: "Projects Worked in my career",
            },
        ],
    },
    skills: {
        title: "Skills",
        subtitle: "MY TOP SKILLS",
        skills_content: [{
                name: "React js",
                para: "React is a JavaScript library ",
                logo: reactjs,
            },
            {
                name: "Laravel",
                para: "Laravel is a PHP framework",
                logo: Laravel,
            },
            {
                name: "Bootstrap",
                para: "Bootstrap is a CSS framework",
                logo: Bootstrap,
            },
            {
                name: "HTML / CSS",
                para: "Hypertext Markup Language and Cascading Style Sheets",
                logo: htmlcss,
            },

            {
                name: "JavaScript",
                para: "JavaScript is a dynamic programming language",
                logo: js,
            },
            {
                name: "PHP",
                para: "PHP is a server-side scripting language",
                logo: PHP,
            },

            {
                name: "Adobe Photoshop",
                para: "Photoshop is a photo editing and raster graphic design software",
                logo: ps,
            },


        ],
        icon: MdArrowForward,
    },
    services: {
        title: "Services",
        subtitle: "WHAT I OFFER",
        service_content: [{
                title: "Web Development",
                para: "I specialize in website  development services. My web experiences are high-performing, feature-packed and digitally transformative, designed to be user-friendly, fully functional, very secure and able to scale as your enterprise grows. ",
                logo: services_logo1,
            },
            {
                title: "UI / UX DESIGNING",
                para: "I offer designing complex interfaces for disruptive web applications as well as user experience (UX) services. I will help you crystalize a myriad of user flows in a product that has a convenient, user-friendly and intuitive UX and UI, following proven best practices in usability, compatibility, and accessibility.",
                logo: services_logo2,
            },
            {
                title: "PhotoShop Editing",
                para: "I specialize in portrait photo editing in Photoshop and offered basic image retouching services and the widest range of professional online retouching services of the highest level. I make any kind of Photoshop work for all photography genres and of any level of complexity.",
                logo: services_logo3,
            },
        ],
    },
    Projects: {
        title: "Projects",
        subtitle: "MY CREATION",
        image: moi2_project,
        project_content: [{
                title: "Web Application",
                image: rea1,
                text: "View On GitHub",
                link: "https://github.com/majdi554/Marchand-card-manager/tree/master",
            },
            {
                title: "Portfolio",
                image: portfolio,
                text: "View On GitHub",
                link: "https://github.com/majdi554/Portfolio",
            },
            {
                title: "Creative Website",
                image: project3,
                text: "View On GitHub",
                link: "https://github.com/majdi554/Creative-website",
            },
        ],
    },

    Hireme: {
        title: "Hire Me",
        subtitle: "FOR YOUR PROJECTS",
        image1: Hireme_perso2,
        image2: Hireme_perso2,
        para: "Looking forward to new challenges, I would like to inform you that I am a serious person, flexible in terms of schedules, motivated and dynamic. I know how to adapt easily with a smile and kindness by responding to requests. Convinced that I have the necessary skills and opportunity, I know that my knowledge andrecent experience as a web developer will make me an excellent candidate",
        btnText: "Hire Me",
    },
    Contact: {
        title: "Contact Me",
        subtitle: "GET IN TOUCH",
        social_media: [{
                text: "essid.mohamed.majdi@gmail.com",
                icon: GrMail,
                link: "mailto:essid.mohamed.majdi@gmail.com",
            },
            {
                text: "+216 51 730 548",
                icon: MdCall,
                link: "https://wa.me/1234567890",
            },
            {
                text: "Majdi Essid",
                icon: BsLinkedin,
                link: "https://www.linkedin.com/in/majdi-essid/",
            },
            {
                text: "Majdi Essid",
                icon: BsGithub,
                link: "https://github.com/majdi554",
            },
            {
                text: "Majdi Essid",
                icon: BsInstagram,
                link: "https://www.instagram.com/majdi_essid/",
            },
        ],
    },
    Footer: {
        text: "All © Copy Right Reserved ",
    },
};