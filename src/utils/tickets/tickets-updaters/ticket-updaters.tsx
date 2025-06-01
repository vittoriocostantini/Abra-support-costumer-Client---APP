import { useTicketsStore } from '../../../stores/tickets-store/tickets-global-store';

// Función para actualizar el título de un ticket
export const updateTicketTitle = (id: string, newTitle: string) => {
  const { tickets, updateTicketStatus } = useTicketsStore.getState();
  const ticket = tickets.find(ticket => ticket.id === id);
  if (ticket) {
    useTicketsStore.getState().updateTicketStatus(id, ticket.status); // Para asegurar la reactividad
    useTicketsStore.setState(state => ({
      tickets: state.tickets.map(t => t.id === id ? { ...t, title: newTitle } : t)
    }));
  }
};

// Función para actualizar el icono de un ticket
export const updateTicketIcon = (id: string, newIcon: string) => {
  useTicketsStore.setState(state => ({
    tickets: state.tickets.map(t => t.id === id ? { ...t, icon: newIcon } : t)
  }));
};

// Función para actualizar la descripción de un ticket
export const updateTicketDescription = (id: string, newDescription: string) => {
  useTicketsStore.setState(state => ({
    tickets: state.tickets.map(t => t.id === id ? { ...t, description: newDescription } : t)
  }));
};

// Función para actualizar las notas de un ticket
export const updateTicketNotes = (id: string, newNotes: string) => {
  useTicketsStore.setState(state => ({
    tickets: state.tickets.map(t => t.id === id ? { ...t, notes: newNotes } : t)
  }));
};