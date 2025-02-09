import { tickets } from '../../../tickets-store/tickets-store'; // Importar tickets
import { updateTicketStatus } from '../../ticket-support/ticket-status'; // Importar la función para actualizar el estado

// Este hook se encarga de enviar un mensaje y simular una respuesta automática
export const sendMessage = (
    message: { text: string; sender: string; chatId: string }, 
    setMessages: React.Dispatch<React.SetStateAction<{ text: string; sender: string; chatId: string }[]>>
) => {
    if (message.text.trim()) {
        setMessages(prevMessages => {
            const updatedMessages = [...prevMessages, { ...message, sender: 'Yo' }];
            localStorage.setItem(`chatMessages_${message.chatId}`, JSON.stringify(updatedMessages)); // Guardar en localStorage con chatId
            return updatedMessages;
        });
        // Simulación de respuesta automática
        setTimeout(() => {
            setMessages(prevMessages => {
                const updatedMessages = [...prevMessages, { text: 'Hola, ¿cómo puedo ayudarte?', sender: 'Bot', chatId: message.chatId }];
                localStorage.setItem(`chatMessages_${message.chatId}`, JSON.stringify(updatedMessages)); // Guardar en localStorage con chatId
                return updatedMessages;
            });
        }, 1000);
    }
};

// Este hook se encarga de enviar un mensaje y simular una respuesta automática
export const sendMessageHandler = (
    message: string,
    chatId: string,
    setMessages: React.Dispatch<React.SetStateAction<{ text: string; sender: string; chatId: string }[]>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    inputRef: React.RefObject<HTMLTextAreaElement>
) => {
    const newMessage = { text: message, sender: 'currentUser', chatId: chatId };
    sendMessage(newMessage, setMessages);
    
    // Cambiar el estado del ticket a "En Proceso"
    updateTicketStatus(chatId, 'En Proceso'); // Usar la nueva función

    setMessage(''); // Limpiar el mensaje
    if (inputRef.current) {
        inputRef.current.value = ''; // Limpiar el contenido
        inputRef.current.style.height = 'auto'; // Restablecer la altura
    }
};

