export const getImagePosition = (
    scrollRotation: number,
    scrollIndicator: number,
    fromLeft: boolean
) => {
    const startScroll = scrollIndicator;
    const endScroll = scrollIndicator + 400;
    const initialOffset = 80;
    const finalOffset = 0;

    if (scrollRotation <= startScroll) {
        return fromLeft ? `-${initialOffset}%` : `${initialOffset}%`;
    }
    if (scrollRotation >= endScroll) {
        return `${finalOffset}%`;
    }

    const progress = (scrollRotation - startScroll) / (endScroll - startScroll);
    const translateValue =
        fromLeft
            ? -initialOffset + progress * (initialOffset - finalOffset)
            : initialOffset - progress * (initialOffset - finalOffset);

    return `${translateValue}%`;
};