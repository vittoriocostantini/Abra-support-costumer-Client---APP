import { useEffect } from 'react';
import { scrollToBottom as scrollToBottomUtil, handleScroll } from '../scroll-utils/scroll-utils';


export const useScrollToBottom = (messagesEndRef: React.RefObject<HTMLDivElement>, messages: any[]) => {
    useEffect(() => {
        const scrollToBottomCallback = () => {
            if (messagesEndRef.current) {
                scrollToBottomUtil(messagesEndRef.current);
            }
        };

        // Llama a scrollToBottom cada vez que los mensajes cambien
        scrollToBottomCallback();

        // Agregar un evento de desplazamiento para detectar el fondo
        const handleScrollEvent = () => {
            if (messagesEndRef.current) {
                handleScroll(messagesEndRef.current, scrollToBottomCallback);
            }
        };

        window.addEventListener('scroll', handleScrollEvent);

        return () => {
            window.removeEventListener('scroll', handleScrollEvent);
        };
    }, [messages]);
};

