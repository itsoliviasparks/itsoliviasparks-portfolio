import colorVariables from "../assets/colorVariables";


const navLinks = [
    {
        id: 1,
        name: "about",
        i: "fa-solid fa-user",
        color: colorVariables.green,
        link:"/about"
    },
    {
        id: 2,
        name: "projects",
        i: "fa-solid fa-laptop-code",
        color: colorVariables.orange,
        link: "/projects"
    },
    {
        id: 3,
        name: "contact",
        i: "fa-solid fa-envelope",
        color: colorVariables.peaGreen,
        link: "/contact"
    },
    {
        id: 4,
        name: "github",
        i: "fa-brands fa-github",
        color: colorVariables.pink,
        link: "/github"
    },
    {
        id: 5,
        name: "linkedin",
        i: "fa-brands fa-linkedin",
        color: colorVariables.blue,
        link: "/linkedin"
    },
];

export default navLinks;