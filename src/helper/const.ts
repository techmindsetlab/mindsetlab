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

export const works: WorksData[] = [
    {
        id: 1,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 350,
        height: 200,
        name: "Dummy 1",
        href: "/",
    }, // horizontal
    {
        id: 2,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 250,
        height: 250,
        name: "Dummy 2",
        href: "/",
    }, // square
    {
        id: 3,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 350,
        height: 200,
        name: "Dummy 3",
        href: "/",
    }, // horizontal
    {
        id: 4,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 250,
        height: 250,
        name: "Dummy 4",
        href: "/",
    }, // square
    {
        id: 5,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 250,
        height: 250,
        name: "Dummy 5",
        href: "/",
    }, // square
    {
        id: 6,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 350,
        height: 200,
        name: "Dummy 6",
        href: "/",
    }, // horizontal
    {
        id: 7,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 350,
        height: 200,
        name: "Dummy 7",
        href: "/",
    }, // horizontal
    {
        id: 8,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 350,
        height: 200,
        name: "Dummy 8",
        href: "/",
    }, // horizontal
    {
        id: 9,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 250,
        height: 250,
        name: "Dummy 9",
        href: "/",
    }, // square
    {
        id: 10,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 350,
        height: 200,
        name: "Dummy 10",
        href: "/",
    }, // horizontal
    {
        id: 11,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 200,
        height: 350,
        name: "Dummy 11",
        href: "/",
    }, // vertical
    {
        id: 12,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 350,
        height: 200,
        name: "Dummy 12",
        href: "/",
    }, // horizontal
    {
        id: 13,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 250,
        height: 250,
        name: "Dummy 13",
        href: "/",
    }, // square
    {
        id: 14,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 200,
        height: 350,
        name: "Dummy 14",
        href: "/",
    }, // vertical
    {
        id: 15,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 250,
        height: 250,
        name: "Dummy 15",
        href: "/",
    }, // square
    {
        id: 16,
        src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        width: 200,
        height: 350,
        name: "Dummy 16",
        href: "/",
    }, // vertical
];

export const allWorksData: WorksDataProps[] = [
    {
        title: "FOOT LOCKER SOCIAL MEDIA",
        tagging: "Social Media",
        imageUrl: "https://www.stockvault.net/data/2012/10/29/137060/preview16.jpg",
        listWorks: [
            "Social Media", "Campaign"
        ],
        description: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
        socmedImg: [
            "https://www.stockvault.net/data/2014/10/06/163147/preview16.jpg", "https://www.stockvault.net/data/2014/10/06/163147/preview16.jpg", "https://www.stockvault.net/data/2014/10/06/163147/preview16.jpg", "https://www.stockvault.net/data/2014/10/06/163147/preview16.jpg", "https://www.stockvault.net/data/2014/10/06/163147/preview16.jpg", "https://www.stockvault.net/data/2014/10/06/163147/preview16.jpg",
        ]
    },
    {
        title: "FOOT LOCKER SOCIAL MEDIA",
        tagging: "Campaign",
        imageUrl: "https://www.stockvault.net/data/2014/10/06/163147/preview16.jpg",
        listWorks: [
            "Social Media", "Campaign"
        ],
        description: "Lorem ipsum dolor sit amet",
        socmedImg: []
    },
    {
        title: "FOOT LOCKER SOCIAL MEDIA",
        tagging: "Website Development",
        imageUrl: "https://www.stockvault.net/data/2016/03/14/187739/preview16.jpg",
        listWorks: [
            "Social Media", "Campaign"
        ],
        description: "Lorem ipsum dolor sit amet",
        socmedImg: []
    },
    {
        title: "FOOT LOCKER SOCIAL MEDIA",
        tagging: "VR Website",
        imageUrl: "https://www.stockvault.net/data/2016/03/14/187732/preview16.jpg",
        listWorks: [
            "Social Media", "Campaign"
        ],
        description: "Lorem ipsum dolor sit amet",
        socmedImg: []
    },
];


export const navigation = [
    { name: "works", href: "/works" },
    { name: "about", href: "#" },
    { name: "contact", href: "#" },
];

export const worksCategory = ["All Works", "Social Media", "Campaign", "Website Development", "VR Website"]

export const footerNav = [
    {
        navigation: "WORK",
        subnavigation: [
            { name: "Production Campaign", href: "" },
            { name: "Social Media", href: "" },
            { name: "Company Profile", href: "" },
            { name: "Virtual Website", href: "" },
        ],
    },
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
            { name: "Stories & Culture", href: "" },
            { name: "The Teams", href: "" },
        ],
    },
    {
        navigation: "CONTACT",
        subnavigation: [
            { name: "(Email)", href: "" },
            { name: "(Whatsapp)", href: "" },
        ],
    },
];