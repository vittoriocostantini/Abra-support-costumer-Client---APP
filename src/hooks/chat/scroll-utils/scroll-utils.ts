// src/hooks/chat/utils/scroll-utils.ts

export const scrollToBottom = (element: HTMLDivElement) => {
    element.scrollIntoView({ behavior: "smooth" });
};

export const handleScroll = (element: HTMLDivElement, callback: () => void) => {
    const { scrollTop, scrollHeight, clientHeight } = element;
    if (scrollTop + clientHeight >= scrollHeight) {
        callback();
    }
};