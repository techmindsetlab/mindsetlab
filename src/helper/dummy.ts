interface ImageData {
    src?: string;
    height: string;
    hasText?: boolean;
    text?: string;
    buttonLabel?: string;
    hiddenOnMobile?: boolean,
    isWide?: boolean;
}

export const images: ImageData[][] = [
    [
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", height: "h-72" },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", height: "h-64" },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", height: "h-48" },
    ],
    [
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", height: "h-48", hiddenOnMobile: true },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", height: "h-48" },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", height: "h-72", isWide: true },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", height: "h-64" },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", height: "h-64", hiddenOnMobile: true },
    ],
    [
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg", height: "h-72" },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg", height: "h-48" },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", height: "h-64" },
    ],
    [
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg", height: "h-48" },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", height: "h-64" },
        { src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg", height: "h-32" },
        {
            height: "h-32",
            hasText: true,
            text: "Nah ini penjelasan tambahannya call to action yang mengajak audiens yang mengunjungi website mengarah ke ‘All Works’",
            buttonLabel: "See All Works",
        },
    ],
];