import techStack from "../assets/techStack";

import touchGrass from "../assets/photos/projects/touch-grass.jpg";
import collabLab from "../assets/photos/projects/the-collab-lab.jpg";
import meditationMinute from "../assets/photos/projects/meditation-minute.jpg";
import goVegan from "../assets/photos/projects/go-vegan.jpg";
import creative from "../assets/photos/projects/creative-pdf-conversion.jpg";
import techDesignWork from "../assets/photos/hollister/261375916_4505634319532859_5557319768276982720_n.jpg";

const projects = [
    {
        id: 1,
        headerPhoto: touchGrass,
        name: "Touch Grass",
        desc: "A U.S. National Park Search & Plan Tool",
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
                name: techStack[4].name,
                i: techStack[4].i,
            },
            {
                name: techStack[6].name,
                i: techStack[6].i,
            },
        ],
        links: [
            {name: "Project Info & Repo", link: "/touch-grass-repo"},
            {name: "Live Site", link: "/touch-grass"}
        ],
        done: true
    },
    {
        id: 2,
        headerPhoto: collabLab,
        name: "The Collab Lab",
        desc: "I am collaborating with three other early-career devs to build a Smart Shopping List.",
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
                name: techStack[12].name,
                i: techStack[12].i,
            },
            {
                name: techStack[11].name,
                i: techStack[11].i,
            },
        ],
        links: [
            {name: "Repo", link: "/the-collab-lab-repo"},
            {name: "Live Site", link: "/the-collab-lab"},
            {name: "Learn More", link: "/the-collab-lab-info"}
        ],
        done: false
    },
    {
        id: 3,
        headerPhoto: meditationMinute,
        name: "Meditation Minute",
        desc: "Never meditated before? Don't worry! All the heavy meditation lifting is done for you with this app.",
        tech: [
            {
                name: techStack[12].name,
                i: techStack[12].i,
            },
            {
                name: techStack[3].name,
                i: techStack[3].i,
            },
            {
                name: techStack[4].name,
                i: techStack[4].i,
            },
            {
                name: techStack[6].name,
                i: techStack[6].i,
            },
        ],
        links: [
            {name: "Project Info & Repo", link: "/meditation-minute-repo"},
            {name: "Live Site", link: "/meditation-minute"}
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
                name: techStack[2].name,
                i: techStack[2].i,
            },
            {
                name: techStack[3].name,
                i: techStack[3].i,
            },
            {
                name: techStack[4].name,
                i: techStack[4].i,
            },
            {
                name: techStack[6].name,
                i: techStack[6].i,
            },
        ],
        links: [
            {name: "Project Info & Repo", link: "/go-vegan-repo"},
            {name: "Live Site", link: "/go-vegan"}
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
                name: techStack[5].name,
                i: techStack[5].i,
            },
            {
                name: techStack[6].name,
                i: techStack[6].i,
            },
            {
                name: techStack[8].name,
                i: techStack[8].i,
            },
        ],
        links: [
            {name: "Project Info & Repo", link: "/creative-repo"},
            {name: "Live Site", link: "/creative"}
        ],
        done: true
    },
    {
        id: 6,
        headerPhoto: techDesignWork,
        name: "What is a Technical Apparel Developer?",
        desc: "Before I began my coding career, I spent half a decade working in the fashion industry as a Technical Apparel Developer.",
        links: [
            {name: "Learn More", link: "/tech-design-work"},
        ],
        done: true
    }
];

export default projects;