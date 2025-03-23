import { loadMessagesFromLocalStorage } from '../storage-utils/storage-utils';

// Este hook se encarga de cargar los mensajes guardados en localStorage
export const loadMessages = (chatId: string): { text: string; sender: string; chatId: string; unread?: number }[] => {
    const savedMessages = loadMessagesFromLocalStorage(chatId);
    
    // Borrar los mensajes después de 10 segundos
    // setTimeout(() => {
    //     localStorage.removeItem(`chatMessages_${chatId}`);
    // }, 10000);

    return savedMessages;
};
