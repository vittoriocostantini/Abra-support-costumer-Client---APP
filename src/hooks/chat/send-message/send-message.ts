import { simulateAutoResponse } from '../auto-response/auto-response'; // Importar la función de respuesta automática
import { saveMessagesToLocalStorage, loadMessagesFromLocalStorage } from '../storage-utils/storage-utils';

// Este hook se encarga de enviar un mensaje y simular una respuesta automática
// Define types for better readability and type safety
type Message = { text: string; sender: string; chatId: string; unread?: number };

// Utility function to check if a message is empty
const isMessageEmpty = (message: string) => !message.trim();

// Function to send a message and simulate an auto-response
export const sendMessage = (
    message: Message, 
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
    if (isMessageEmpty(message.text)) return;

    const currentMessages = loadMessagesFromLocalStorage(message.chatId);
    setMessages(prevMessages => {
        const updatedMessages = [...prevMessages, { ...message, sender: 'Yo', unread: 0 }];
        saveMessagesToLocalStorage(message.chatId, updatedMessages);
        return updatedMessages;
    });
    simulateAutoResponse(message.chatId, setMessages);
};

// Este hook se encarga de manejar el envío de un mensaje
export const sendMessageHandler = (
    message: string, // Texto del mensaje
    chatId: string, // ID del chat
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>, // Función para actualizar los mensajes
    setMessage: React.Dispatch<React.SetStateAction<string>>, // Función para actualizar el texto del mensaje
    inputRef: React.RefObject<HTMLTextAreaElement> // Referencia al elemento de entrada de texto
    
) => {
    if (isMessageEmpty(message)) return;

    const newMessage: Message = { text: message, sender: 'currentUser', chatId: chatId };
    sendMessage(newMessage, setMessages);

    setMessage('');
    if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.style.height = 'auto';
    }
};

