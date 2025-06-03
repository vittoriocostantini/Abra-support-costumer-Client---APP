import { useState } from 'react';
//logica de swipe para message bubble
export const useSwipeToReply = (isOwnMessage: boolean, message: string, setReplyMessage: (msg: string) => void) => {
    const [swipeDistance, setSwipeDistance] = useState(0);
    const [startX, setStartX] = useState<number | null>(null);
    const [startY, setStartY] = useState<number | null>(null);
    const [bubbleWidth, setBubbleWidth] = useState(0);
    const [validSwipeStart, setValidSwipeStart] = useState(false);
    const [isHorizontalSwipe, setIsHorizontalSwipe] = useState(false);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const element = e.currentTarget;
        const elementRect = element.getBoundingClientRect();
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        
        // Calculate the relative position of the touch within the element
        const relativeX = touchX - elementRect.left;
        const elementWidth = elementRect.width;
        
        // Only allow swipe if touch starts from the middle (or after) of the bubble
        setValidSwipeStart(relativeX >= elementWidth / 5);
        
        setStartX(touchX);
        setStartY(touchY);
        setBubbleWidth(elementWidth);
        setIsHorizontalSwipe(false); // Reset horizontal swipe flag
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (startX !== null && startY !== null && !isOwnMessage && validSwipeStart) {
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const deltaX = currentX - startX;
            const deltaY = currentY - startY;
            
            // Determine if this is primarily a horizontal swipe
            // Only set this once per swipe gesture
            if (!isHorizontalSwipe) {
                // If horizontal movement is greater than vertical and moving right
                setIsHorizontalSwipe(Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0);
            }
            
            // Only process the swipe if it's primarily horizontal and to the right
            if (isHorizontalSwipe && deltaX > 0) {
                setSwipeDistance(Math.min(deltaX, 30)); // Limit swipe distance to 30px
            }
        }
    };

    const handleTouchEnd = () => {
        if (swipeDistance > 0 && !isOwnMessage && validSwipeStart && isHorizontalSwipe) {
            setReplyMessage(message); // Ahora llama directamente a setReplyMessage
        }
        setSwipeDistance(0); // Reset after swipe
        setStartX(null);
        setStartY(null);
        setValidSwipeStart(false);
        setIsHorizontalSwipe(false);
    };

    return {
        swipeDistance,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    };
};