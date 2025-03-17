import { useState } from 'react';
import { handleReply } from '../message-reply/message-reply-handle';

//logica de swipe para message bubble
export const useSwipeToReply = (isOwnMessage: boolean, message: string, setReplyMessage: (msg: string) => void) => {
    const [swipeDistance, setSwipeDistance] = useState(0);
    const [startX, setStartX] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (startX !== null && !isOwnMessage) {
            const currentX = e.touches[0].clientX;
            const deltaX = currentX - startX;
            if (deltaX > 0) { // Only allow swiping to the right
                setSwipeDistance(Math.min(deltaX, 30)); // Limit swipe distance to 30px
            }
        }
    };

    const handleTouchEnd = () => {
        if (swipeDistance > 0 && !isOwnMessage) {
            handleReply(message, setReplyMessage); // Pass the setReplyMessage function
        }
        setSwipeDistance(0); // Reset after swipe
        setStartX(null);
    };

    return {
        swipeDistance,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    };
};