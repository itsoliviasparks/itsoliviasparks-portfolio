import externalLinks from "../assets/externalLinks";
import techStack from "../assets/techStack";

import collabLab from "../assets/photos/projects/predict-a-buy.jpg";
import creative from "../assets/photos/projects/creative-pdf-conversion.jpg";
import goVegan from "../assets/photos/projects/go-vegan.jpg";
import meditationMinute from "../assets/photos/projects/meditation-minute.jpg";
import techDesignWork from "../assets/photos/hollister/261375916_4505634319532859_5557319768276982720_n.jpg";
import touchGrass from "../assets/photos/projects/touch-grass.jpg";

const projects = [
    {
        id: 1,
        headerPhoto: touchGrass,
        name: "Touch Grass",
        desc: "A U.S. National Park Search & Plan Tool.",
        tech: [
            {
                name: techStack[0].name,
                i: techStack[0].i,

            },
            {
                name: techStack[1].name,
                i: techStack[1].i,
            },
            {
                name: techStack[5].name,
                i: techStack[5].i,
            },
            {
                name: techStack[7].name,
                i: techStack[7].i,
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
                name: techStack[0].name,
                i: techStack[0].i,

            },
            {
                name: techStack[1].name,
                i: techStack[1].i,
            },
            {
                name: techStack[14].name,
                i: techStack[14].i,
            },
            {
                name: techStack[13].name,
                i: techStack[13].i,
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
                name: techStack[13].name,
                i: techStack[13].i,
            },
            {
                name: techStack[2].name,
                i: techStack[2].i,
            },
            {
                name: techStack[5].name,
                i: techStack[5].i,
            },
            {
                name: techStack[7].name,
                i: techStack[7].i,
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
                name: techStack[4].name,
                i: techStack[4].i,
            },
            {
                name: techStack[2].name,
                i: techStack[2].i,
            },
            {
                name: techStack[5].name,
                i: techStack[5].i,
            },
            {
                name: techStack[8].name,
                i: techStack[8].i,
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
                name: techStack[6].name,
                i: techStack[6].i,
            },
            {
                name: techStack[7].name,
                i: techStack[7].i,
            },
            {
                name: techStack[9].name,
                i: techStack[9].i,
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