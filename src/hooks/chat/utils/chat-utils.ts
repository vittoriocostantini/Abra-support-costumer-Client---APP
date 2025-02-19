import { useEffect } from 'react';
import { scrollToBottom as scrollToBottomUtil, handleScroll } from '../scroll-utils/scroll-utils';
import { loadMessages } from '../storage-load-messages/storage-load-messages';

// Este hook se encarga de desplazar el contenedor de mensajes hacia abajo cuando se agrega un nuevo mensaje
export const scrollToBottom = (messagesEndRef: React.RefObject<HTMLDivElement>) => {
    if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
};

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

// Este hook se encarga de cargar los mensajes guardados en localStorage
// export const loadMessages = (chatId: string): { text: string; sender: string; chatId: string; unread?: number }[] => {
//     const savedMessages = localStorage.getItem(`chatMessages_${chatId}`);
//     
//     // Borrar los mensajes después de 10 segundos
//     // setTimeout(() => {
//     //     localStorage.removeItem(`chatMessages_${chatId}`);
//     // }, 10000);
//
//     return savedMessages ? JSON.parse(savedMessages) : [];
// };
