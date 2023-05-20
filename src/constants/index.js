import html from '../assets/html.svg'
import css3 from '../assets/css3.svg'
import js from '../assets/javascript.svg'
import react from '../assets/react.svg'
import tailwind from '../assets/tailwind.svg'
import scss from '../assets/sass.svg'

// projects img
import project1 from '../assets/project.png'
import project2 from '../assets/codech.png'
import project3 from '../assets/dashboard-home.png'

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
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
        featured: true,
        description: "In order to be able to manage the produc: User information, order information, product information, and some statistics. User registration and login can be done. The user adds the product to his cart on this website, enters the address and can create his order. You can also add products to your favorites and comment. Order tracking can be done from the admin panel",
        img: project1,
        tags: ["javascript", "react", "redux"]
    },
    {
        id: 2,
        title: "Company X",
        featured: false,
        description: " In order to be able to manage the product, I coded all the cod(add new product, delete, update, read). The panel provides the following information: User information, order information, product information, and some statistics. User registration and login can be done. The user adds the product to his cart on this website, enters the address and can create his order. You can also add products to your favorites and comment. Order tracking can be done from the admin panel",
        img: project2,
        tags: ["angular", "jquery", "materialUI"]
    },
    {
        id: 3,
        title: "Phonex",
        featured: true,
        description: "In order to be able to managl whose design belongs to me. (add new product, delete, update, read). The panel provides the following information: User information, order information, product information, and some statistics. User registration and login can be done. The user adds the product to his cart on this website, enters the address and can create his order. You can also add products to your favorites and comment. Order tracking can be done from the admin panel",
        img: project3,
        tags: ["vue", "react", "tailwind css"]
    },
    {
        id: 4,
        title: "Udddex X",
        featured: true,
        description: " In order to be able to manage the product, I coded all the cod(add new product, delete, update, read). The panel provides the following information: User information, order information, product information, and some statistics. User registration and login can be done. The user adds the product to his cart on this website, enters the address and can create his order. You can also add products to your favorites and comment. Order tracking can be done from the admin panel",
        img: project2,
        tags: ["angular", "jquery", "materialUI"]
    },
    {
        id: 5,
        title: "Udddex X",
        featured: false,
        description: " In order to be able to manage the product, I coded all the cod(add new product, delete, update, read). The panel provides the following information: User information, order information, product information, and some statistics. User registration and login can be done. The user adds the product to his cart on this website, enters the address and can create his order. You can also add products to your favorites and comment. Order tracking can be done from the admin panel",
        img: project1,
        tags: ["angular", "jquery", "materialUI"]
    },
    {
        id: 6,
        title: "KemKum 3",
        featured: false,
        description: " In order to be able to manage the product, I coded all the cod(add new product, delete, update, read). The panel provides the following information: User information, order information, product information, and some statistics. User registration and login can be done. The user adds the product to his cart on this website, enters the address and can create his order. You can also add products to your favorites and comment. Order tracking can be done from the admin panel",
        img: project3,
        tags: ["angular", "jquery", "materialUI"]
    },

]