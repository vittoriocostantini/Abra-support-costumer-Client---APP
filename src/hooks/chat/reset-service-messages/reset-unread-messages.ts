export const resetUnreadMessages = (chatId: string) => {
    const savedMessages = localStorage.getItem(`chatMessages_${chatId}`);
    console.log(`Mensajes antes de resetear: ${savedMessages}`); // Log para verificar los mensajes antes
    if (savedMessages) {
        const messages = JSON.parse(savedMessages).map((message: any) => ({
            ...message,
            unread: 0 // Resetear el contador de mensajes no leídos
        }));
        localStorage.setItem(`chatMessages_${chatId}`, JSON.stringify(messages));
        console.log(`Mensajes reseteados para el chat ${chatId}`); // Log para verificar después
    }
};
