import {  sendMessage } from '../../services/message/message-service';
import { Message } from '../../models/message/message-model';

// Utility function to check if a message is empty
const isMessageEmpty = (message: string) => !message.trim();

// Este manejador se encarga de procesar el envío de un mensaje y la interacción con la UI
export const sendMessageHandler = (
    message: string,
    chatId: string,
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
    setMessage: React.Dispatch<React.SetStateAction<string>>,
    inputRef: React.RefObject<HTMLTextAreaElement>,
    replyMessage: string | null = null
) => {
    if (isMessageEmpty(message)) return;

    const newMessage: Message = { 
        text: message, 
        sender: 'currentUser', 
        chatId: chatId,
        replyingTo: replyMessage || undefined
    };
    
    if (replyMessage) {
        console.log('Sending reply to message:', replyMessage);
        console.log('Reply content:', message);
    }
    
    sendMessage(newMessage, setMessages);

    setMessage('');
    if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.style.height = 'auto';
    }
};

