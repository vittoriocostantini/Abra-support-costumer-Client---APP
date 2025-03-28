import { simulateAutoResponse } from '../../hooks/chat/auto-response/auto-response';
import { saveMessagesToLocalStorage, loadMessagesFromLocalStorage } from '../../utils/chat/storage-utils/storage-utils';
import { Message } from '../../models/message/message-model';

export const sendMessage = (
    message: Message, 
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>
) => {
    const currentMessages = loadMessagesFromLocalStorage(message.chatId);
    setMessages(prevMessages => {
        const updatedMessages = [...prevMessages, { ...message, sender: 'Yo', unread: 0 }];
        saveMessagesToLocalStorage(message.chatId, updatedMessages);
        return updatedMessages;
    });
    simulateAutoResponse(message.chatId, setMessages);
};