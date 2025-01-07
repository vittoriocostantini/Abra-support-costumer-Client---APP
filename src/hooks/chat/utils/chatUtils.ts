// Este hook se encarga de enviar un mensaje y simular una respuesta automática
export const sendMessage = (message: string, setMessages: React.Dispatch<React.SetStateAction<{ text: string; sender: string }[]>>) => {
    if (message.trim()) {
        setMessages(prevMessages => [...prevMessages, { text: message, sender: 'Yo' }]);
        // Simulación de respuesta automática
        setTimeout(() => {
            setMessages(prevMessages => [...prevMessages, { text: 'Hola, ¿cómo puedo ayudarte?', sender: 'Bot' }]);
        }, 1000);
    }
};

// Este hook se encarga de desplazar el contenedor de mensajes hacia abajo cuando se agrega un nuevo mensaje
export const scrollToBottom = (messagesEndRef: React.RefObject<HTMLDivElement>) => {
    if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
};