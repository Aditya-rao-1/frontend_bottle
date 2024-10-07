import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { a1, a2, a3, customer1, customer2, a4, a5, a6, a7, a8, a9, a10,a13 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const bottels = [
    {
        thumbnail: a1,
        bigBottle: a1,
    },
    {
        thumbnail: a9,
        bigBottle: a9,
    },
    {
        thumbnail: a3,
        bigBottle: a3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Types' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: a4,
        name: "Thermo-01",
        price: "₹1200",
    },
    {
        imgURL: a8,
        name: "Thermo Flask-10",
        price: "₹1210",
    },
    {
        imgURL: a6,
        name: "Thermo Flask-11",
        price: "₹1220",
    },
    {
        imgURL: a13,
        name: "Thermo cap-001",
        price: "₹1230",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Bottle Force 1", link: "/" },
            { name: "Bottle Max 1", link: "/" },
            { name: "Bottle Jordan 1", link: "/" },
            { name: "Bottle Force 2", link: "/" },
            { name: "Bottle Waffle Racer", link: "/" },
            { name: "Bottle Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
