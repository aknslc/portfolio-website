import html from '../assets/html.svg'
import css3 from '../assets/css3.svg'
import js from '../assets/javascript.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import scss from '../assets/sass.svg'

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const skills = [

    {
        title: 'html',
        img: html
    },
    {
        title: 'css',
        img: css3
    },
    {
        title: 'javascript',
        img: js
    },
    {
        title: 'react',
        img: react
    },
    {
        title: 'tailwind',
        img: tailwind
    },
    {
        title: 'sass',
        img: scss
    },
]

export const projects = [
    {
        id: 1,
        title: "E-commerce",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores fugit, dolorum dolor, impedit iste sit accusantium voluptate, ipsa ea blanditiis cupiditate aspernatur! Accusamus magni fugit expedita possimus eos? Iure!",
        img: html,
        tags: ["javascript", "react", "redux"]
    },
    {
        id: 2,
        title: "Company X",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores fugit, dolorum dolor, impedit iste sit accusantium voluptate, ipsa ea blanditiis cupiditate aspernatur! Accusamus magni fugit expedita possimus eos? Iure!",
        img: css3,
        tags: ["angular", "jquery", "material ui"]
    },
    {
        id: 3,
        title: "Phonex",
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores fugit, dolorum dolor, impedit iste sit accusantium voluptate, ipsa ea blanditiis cupiditate aspernatur! Accusamus magni fugit expedita possimus eos? Iure!",
        img: js,
        tags: ["vue", "react", "tailwind css"]
    }
]