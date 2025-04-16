export interface WorksData {
    id: number;
    src: string;
    name: string;
    href: string;
    width: number;
    height: number;
}

export interface WorksDataProps {
    title: string;
    tagging: string;
    imageUrl: string;
    listWorks: string[];
    description: string;
    socmedImg: string[];
}

export const navigation = [
    { name: "works", href: "/works" },
    // { name: "about", href: "#" },
    { name: "contact", href: "/contact" },
];

export const worksCategory = ["All Works", "Social Media", "Campaign", "Website Development", "Mobile Apps"]
export const needs = ["Social Media", "Campaign", "Website Development", "VR Website", "etc."]

export const footerNav = [
    // {
    //     navigation: "WORK",
    //     subnavigation: [
    //         { name: "Production Campaign", href: "" },
    //         { name: "Social Media", href: "" },
    //         { name: "Company Profile", href: "" },
    //         { name: "Virtual Website", href: "" },
    //     ],
    // },
    {
        navigation: "SERVICE",
        subnavigation: [
            { name: "Our Service", href: "" },
            { name: "Speciality", href: "" },
        ],
    },
    {
        navigation: "ABOUT",
        subnavigation: [
            { name: "Stories & Culture", href: "/about-us" },
            { name: "The Teams", href: "" },
        ],
    },
    {
        navigation: "CONTACT",
        subnavigation: [
            { name: "Email", href: "mailto:hi@mindsetlab.id" },
            { name: "Whatsapp", href: "https://wa.me/6281311206663" },
        ],
    },
];