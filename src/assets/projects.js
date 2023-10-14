import externalLinks from "../assets/externalLinks";
import techStack from "../assets/techStack";

import collabLab from "../assets/photos/projects/predict-a-buy.jpg";
import creative from "../assets/photos/projects/creative-pdf-conversion.jpg";
import goVegan from "../assets/photos/projects/go-vegan.jpg";
import meditationMinute from "../assets/photos/projects/meditation-minute.jpg";
import techDesignWork from "../assets/photos/hollister/261375916_4505634319532859_5557319768276982720_n.jpg";
import touchGrass from "../assets/photos/projects/touch-grass.jpg";

const tech = x => techStack.filter(stack => {
    return stack.name === x;
});

const projects = [
    {
        id: 1,
        headerPhoto: touchGrass,
        name: "Touch Grass",
        desc: "A U.S. National Park Search & Plan Tool.",
        tech: [
            {
                name: tech("React")[0].name,
                i: tech("React")[0].i,

            },
            {
                name: tech("Firebase")[0].name,
                i: tech("Firebase")[0].i,
            },
            {
                name: tech("Restful APIs")[0].name,
                i: tech("Restful APIs")[0].i,
            },
            {
                name: tech("SASS")[0].name,
                i: tech("SASS")[0].i,
            },
        ],
        links: [
            { name: "Project Info & Repo", link: externalLinks.touchGrassRepo, color: "pink" },
            { name: "Live Site", link: externalLinks.touchGrass, color: "orange" }
        ],
        done: true
    },
    {
        id: 2,
        headerPhoto: collabLab,
        name: "PREDICT-A-BUY",
        desc: "This app makes shopping a journey through time by anticipating your needs while guiding you through the aisles!",
        tech: [
            {
                name: tech("React")[0].name,
                i: tech("React")[0].i,

            },
            {
                name: tech("Firebase")[0].name,
                i: tech("Firebase")[0].i,
            },
            {
                name: tech("Figma")[0].name,
                i: tech("Figma")[0].i,
            },
            {
                name: tech("Pair Programming")[0].name,
                i: tech("Pair Programming")[0].i,
            },
        ],
        links: [
            { name: "Project Info & Repo", link: externalLinks.collabLabRepo, color: "pink" },
            { name: "Live Site", link: externalLinks.collabLab, color: "orange" },
            { name: "The Collab Lab Info", link: "/the-collab-lab-info", color: "blue" }
        ],
        done: true
    },
    {
        id: 3,
        headerPhoto: meditationMinute,
        name: "Meditation Minute",
        desc: "Never meditated before? Don't worry! All the heavy meditation lifting is done for you with this app.",
        tech: [
            {
                name: tech("Pair Programming")[0].name,
                i: tech("Pair Programming")[0].i,
            },
            {
                name: tech("JavaScript")[0].name,
                i: tech("JavaScript")[0].i,
            },
            {
                name: tech("Restful APIs")[0].name,
                i: tech("Restful APIs")[0].i,
            },
            {
                name: tech("SASS")[0].name,
                i: tech("SASS")[0].i,
            },
        ],
        links: [
            { name: "Project Info & Repo", link: externalLinks.meditationMinuteRepo, color: "pink" },
            { name: "Live Site", link: externalLinks.meditationMinute, color: "orange" }
        ],
        done: true
    },
    {
        id: 4,
        headerPhoto: goVegan,
        name: "Go Vegan",
        desc: "This guilt-inducing app encourages the user to go vegan by sharing animal facts, photos, and vegan recipes.",
        tech: [
            {
                name: tech("jQuery")[0].name,
                i: tech("jQuery")[0].i,
            },
            {
                name: tech("JavaScript")[0].name,
                i: tech("JavaScript")[0].i,
            },
            {
                name: tech("Restful APIs")[0].name,
                i: tech("Restful APIs")[0].i,
            },
            {
                name: tech("CSS")[0].name,
                i: tech("CSS")[0].i,
            },
        ],
        links: [
            { name: "Project Info & Repo", link: externalLinks.goVeganRepo, color: "pink" },
            { name: "Live Site", link: externalLinks.goVegan, color: "orange" }
        ],
        done: true
    },
    {
        id: 5,
        headerPhoto: creative,
        name: "Creative PDF Conversion",
        desc: "Creative was an exercise in taking a given design deck and translating it into HTML & CSS using Sass.",
        tech: [
            {
                name: tech("Responsive Design")[0].name,
                i: tech("Responsive Design")[0].i,
            },
            {
                name: tech("SASS")[0].name,
                i: tech("SASS")[0].i,
            },
            {
                name: tech("HTML")[0].name,
                i: tech("HTML")[0].i,
            },
        ],
        links: [
            { name: "Project Info & Repo", link: externalLinks.creativeRepo, color: "pink" },
            { name: "Live Site", link: externalLinks.creative, color: "orange" }
        ],
        done: true
    },
    {
        id: 6,
        headerPhoto: techDesignWork,
        name: "What is a Technical Apparel Developer?",
        desc: "Before I began my coding career, I spent half a decade working in the fashion industry as a Technical Apparel Developer.",
        links: [
            { name: "Learn More", link: "/tech-design-work", color: "blue" },
        ],
        notTech: true,
        imgDesc: "Nine mens winter jackets hung up in rainbow order",
        done: true
    }
];

export default projects;