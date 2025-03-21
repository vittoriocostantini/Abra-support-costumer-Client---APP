import { tickets } from '../../../stores/tickets-store/tickets-store';
import './ticket-archive.css';

let archivedTickets: any[] = []; // Estado para tickets archivados

export const archiveTicket = (ticketId: string) => {
    const ticketToArchive = tickets.find(ticket => ticket.id === ticketId);
    if (ticketToArchive) {
        archivedTickets.push(ticketToArchive); // Agregar a tickets archivados
        // Eliminar el ticket de la lista de tickets activos
        const updatedTickets = tickets.filter(ticket => ticket.id !== ticketId);
        // Actualizar la lista de tickets activos
        tickets.length = 0; // Limpiar la lista de tickets activos
        tickets.push(...updatedTickets); // Agregar los tickets actualizados
    }
};

export const getArchivedTickets = () => {
    return archivedTickets; // Retornar la lista de tickets archivados
};

export const unarchiveTicket = (ticketId: string) => {
    const ticketToUnarchive = archivedTickets.find(ticket => ticket.id === ticketId);
    if (ticketToUnarchive) {
        // Eliminar el ticket de la lista de tickets archivados
        archivedTickets = archivedTickets.filter(ticket => ticket.id !== ticketId);
        // Agregar el ticket de nuevo a la lista de tickets activos
        tickets.push(ticketToUnarchive);
    }
}; 