import { useTicketsStore } from '../../../stores/tickets-store/tickets-global-store';

// Función para actualizar el estado de un ticket usando zustand
export const updateTicketStatus = (chatId: string, newStatus: string) => {
  const { updateTicketStatus } = useTicketsStore.getState();
  updateTicketStatus(chatId, newStatus);
};