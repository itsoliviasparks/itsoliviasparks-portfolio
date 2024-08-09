import externalLinks from '../assets/externalLinks';
import techStack from '../assets/techStack';

const tech = x => techStack.filter(stack => {
    return stack.name === x;
});

const projects = [
    {
        name: 'Touch Grass',
        desc: [
            'A U.S. National Park Search & Plan Tool',
            `This app allows users to plan a trip outdoors by filtering through U.S. National Parks by location & outdoor activity`,
            `The Field Notes section uses persistent data, prompting users to create a to-do list of activities they're interested in & check them off as they are completed`
        ],
        tech: [
            {
                name: tech('React')[0].name,
                i: tech('React')[0].i,

            },
            {
                name: tech('Firebase')[0].name,
                i: tech('Firebase')[0].i,
            },
            {
                name: tech('Restful APIs')[0].name,
                i: tech('Restful APIs')[0].i,
            },
            {
                name: tech('SASS')[0].name,
                i: tech('SASS')[0].i,
            },
        ],
        links: [
            { name: 'project info & repo', link: externalLinks.touchGrassRepo },
            { name: 'live site', link: externalLinks.touchGrass }
        ],
        done: true
    },
    {
        name: 'PREDICT-A-BUY',
        desc: [
            'Built in collaboration with a bunch of other early-career developers through The Collab Lab (TCL), this app makes shopping a journey through time by anticipating your needs while guiding you through the aisles!',
            'PREDICT-A-BUY allows the user start a unique shopping list where they can add/delete items & can check/uncheck items as purchased',
            'Overtime, the app learns the user’s shopping habits, adjusting each item’s purchase frequency, letting the user know when next to buy each item',
        ],
        tech: [
            {
                name: tech('GitHub')[0].name,
                i: tech('GitHub')[0].i,
            },
            {
                name: tech('React')[0].name,
                i: tech('React')[0].i,

            },
            {
                name: tech('Firebase')[0].name,
                i: tech('Firebase')[0].i,
            },
            {
                name: tech('SASS')[0].name,
                i: tech('SASS')[0].i,
            },
            {
                name: tech('Pair Programming')[0].name,
                i: tech('Pair Programming')[0].i,
            },
            {
                name: tech('Figma')[0].name,
                i: tech('Figma')[0].i,
            },
        ],
        links: [
            { name: 'project info & repo', link: externalLinks.collabLabRepo  },
            { name: 'live site', link: externalLinks.collabLab  },
            { name: 'about my time at TCL', link: '/the-collab-lab-info' }
        ],
        done: true
    }
];

export default projects;