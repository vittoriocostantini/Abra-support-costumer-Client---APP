// utils/storage-utils.ts
export const saveMessagesToLocalStorage = (chatId: string, messages: any[]) => {
    localStorage.setItem(`chatMessages_${chatId}`, JSON.stringify(messages));
};

export const loadMessagesFromLocalStorage = (chatId: string): any[] => {
    const messages = localStorage.getItem(`chatMessages_${chatId}`);
    return messages ? JSON.parse(messages) : [];
};