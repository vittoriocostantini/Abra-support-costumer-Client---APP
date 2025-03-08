import { tickets } from '../../../tickets-store/tickets-store'; // Importar tickets
import { updateTicketStatus } from '../../tickets/ticket-support/ticket-status'; // Importar la función para actualizar el estado
import { simulateAutoResponse } from '../auto-response/auto-response'; // Importar la función de respuesta automática
import { saveMessagesToLocalStorage, loadMessagesFromLocalStorage } from '../storage-utils/storage-utils';

// Este hook se encarga de enviar un mensaje y simular una respuesta automática
export const sendMessage = (
    message: { text: string; sender: string; chatId: string }, 
    setMessages: React.Dispatch<React.SetStateAction<{ text: string; sender: string; chatId: string; unread?: number }[]>>
) => {
    if (!message.text.trim()) return; // Salir si el mensaje está vacío

    const currentMessages = loadMessagesFromLocalStorage(message.chatId); // Usar la función separada
    setMessages(prevMessages => {
        const updatedMessages = [...prevMessages, { ...message, sender: 'Yo', unread: 0 }];
        saveMessagesToLocalStorage(message.chatId, updatedMessages); // Usar la función separada
        return updatedMessages;
    });
    // Usar la función de respuesta automática
    simulateAutoResponse(message.chatId, setMessages);
};

// Este hook se encarga de manejar el envío de un mensaje
export const sendMessageHandler = (
    message: string,
    chatId: string,
    setMessages: React.Dispatch<React.SetStateAction<{ text: string; sender: string; chatId: string }[]>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    inputRef: React.RefObject<HTMLTextAreaElement>
) => {
    if (!message.trim()) return; // Salir si el mensaje está vacío

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

