import { useEffect } from 'react';

// Este hook se encarga de desplazar el contenedor de mensajes hacia abajo cuando se agrega un nuevo mensaje
export const scrollToBottom = (messagesEndRef: React.RefObject<HTMLDivElement>) => {
    if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
};

export const useScrollToBottom = (messagesEndRef: React.RefObject<HTMLDivElement>, messages: any[]) => {
    useEffect(() => {
        const scrollToBottom = ( ) => {
            if (messagesEndRef.current) {
                messagesEndRef.current.scrollIntoView({ behavior: "smooth"  });
            }
        };
        

        // Llama a scrollToBottom cada vez que los mensajes cambien
        scrollToBottom();

        // Agregar un evento de desplazamiento para detectar el fondo
        const handleScroll = () => {
            if (messagesEndRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = messagesEndRef.current;
                if (scrollTop + clientHeight >= scrollHeight) {
                    scrollToBottom();
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [messages]);
};

// Este hook se encarga de cargar los mensajes guardados en localStorage
export const loadMessages = (chatId: string): { text: string; sender: string; chatId: string }[] => {
    const savedMessages = localStorage.getItem(`chatMessages_${chatId}`);
    
    // Borrar los mensajes después de 10 segundos
    setTimeout(() => {
        localStorage.removeItem(`chatMessages_${chatId}`);
    }, 1000000);

    return savedMessages ? JSON.parse(savedMessages) : [];
};

// Nueva función para contar los mensajes
export const countMessages = (chatId: string): number => {
    const savedMessages = localStorage.getItem(`chatMessages_${chatId}`);
    return savedMessages ? JSON.parse(savedMessages).length : 0;
};
