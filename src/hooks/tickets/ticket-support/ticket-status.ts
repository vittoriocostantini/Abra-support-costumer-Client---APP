import { tickets } from "../../../stores/tickets-store/tickets-store";

// Función para actualizar el estado de un ticket
export const updateTicketStatus = (chatId: string, newStatus: string) => {
    const ticket = tickets.find(ticket => ticket.id === chatId);
    if (ticket) {
        ticket.status = newStatus; // Cambiar el estado del ticket
    }
};