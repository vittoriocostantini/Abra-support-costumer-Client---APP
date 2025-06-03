import { create } from 'zustand';
import { persist } from 'zustand/middleware';


interface Message {
  text: string;
  sender: string;
  chatId: string;
  unread?: number;
  replyingTo?: string;
}

interface MessageStore {
  messages: { [chatId: string]: Message[] };
  activeChatId: string | null;
  replyMessage: string | null;
  loadMessages: (chatId: string) => void;
  addMessage: (msg: Message) => void;
  resetUnreadMessages: (chatId: string) => void;
  setActiveChatId: (id: string | null) => void;
  setReplyMessage: (msg: string | null) => void;
  countUnreadMessages: (chatId: string) => number;
}

export const useMessageStore = create<MessageStore>()(
  persist(
    (set, get) => ({
      messages: {},
      activeChatId: null,
      replyMessage: null,
      loadMessages: (chatId: string) => {
        const saved = localStorage.getItem(`chatMessages_${chatId}`);
        const msgs = saved ? JSON.parse(saved) : [];
        set((state) => ({ messages: { ...state.messages, [chatId]: msgs } }));
      },
      addMessage: (msg: Message) => {
        set((state) => {
          const prev = state.messages[msg.chatId] || [];
          const updated = [...prev, msg];
          localStorage.setItem(`chatMessages_${msg.chatId}` , JSON.stringify(updated));
          return { messages: { ...state.messages, [msg.chatId]: updated } };
        });
      },
      resetUnreadMessages: (chatId: string) => {
        set((state) => {
          const prev = Array.isArray(state.messages[chatId]) ? state.messages[chatId] : [];
          const updated = prev.map((m) => ({ ...m, unread: 0 }));
          localStorage.setItem(`chatMessages_${chatId}`, JSON.stringify(updated));
          return { messages: { ...state.messages, [chatId]: updated } };
        });
      },
      setActiveChatId: (id: string | null) => set({ activeChatId: id }),
      setReplyMessage: (msg: string | null) => set({ replyMessage: msg }),
      countUnreadMessages: (chatId: string) => {
        const { messages, activeChatId } = get();
        if (activeChatId === chatId) return 0;
        const chatMessages = Array.isArray(messages[chatId]) ? messages[chatId] : [];
        return chatMessages.filter(m => m.unread && m.unread > 0).length;
      },
    }),
    {
      name: 'message-store',
      partialize: (state) => ({ messages: state.messages }),
    }
  )
); 