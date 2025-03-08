// Este hook se encarga de cargar los mensajes guardados en localStorage
export const loadMessages = (chatId: string): { text: string; sender: string; chatId: string; unread?: number }[] => {
    const savedMessages = localStorage.getItem(`chatMessages_${chatId}`);
    
    // Borrar los mensajes después de 10 segundos
    // setTimeout(() => {
    //     localStorage.removeItem(`chatMessages_${chatId}`);
    // }, 10000);

    return savedMessages ? JSON.parse(savedMessages) : [];
};
