import { create } from 'zustand';
import { Ticket } from '../../types/tickets/ticket-types';
import { getRandomAgent } from '../../data/agents-data/agent-data';
import {
  getNextTicketId,
  getNextTicketNumber,
  loadTickets,
  saveTickets,
  loadArchivedTickets,
  saveArchivedTickets,
  updateTicketStatus as serviceUpdateTicketStatus,
  updateTicketProperty
} from '../../services/tickets/ticket-service';

interface TicketsState {
  tickets: Ticket[];
  archivedTickets: Ticket[];
  addTicket: (title: string, icon: string, description?: string, notes?: string) => void;
  deleteTicket: (id: string, isArchived?: boolean) => void;
  archiveTicket: (id: string) => void;
  unarchiveTicket: (id: string) => void;
  updateTicketStatus: (id: string, newStatus: string) => void;
  updateTicketProperty: (id: string, property: keyof Ticket, value: any) => void;
}

export const useTicketsStore = create<TicketsState>((set, get) => ({
  tickets: loadTickets(),
  archivedTickets: loadArchivedTickets(),

  addTicket: (title, icon, description = '', notes = '') => {
    const randomAgent = getRandomAgent();
    const date = new Date();
    const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`;
    const newTicket: Ticket = {
      id: getNextTicketId(),
      title,
      number: getNextTicketNumber(),
      status: 'Pendiente',
      date: formattedDate,
      path: '/tickets/chat/',
      avatarUrl: randomAgent.avatar,
      agentName: randomAgent.name,
      imageAlt: 'Avatar',
      icon,
      description,
      notes,
    };
    set(state => {
      const updatedTickets = [...state.tickets, newTicket];
      saveTickets(updatedTickets);
      return { ...state, tickets: updatedTickets };
    });
  },

  deleteTicket: (id, isArchived = false) => {
    set(state => {
      if (isArchived) {
        const updatedArchived = state.archivedTickets.filter(ticket => ticket.id !== id);
        saveArchivedTickets(updatedArchived);
        return { ...state, archivedTickets: updatedArchived };
      } else {
        const updatedTickets = state.tickets.filter(ticket => ticket.id !== id);
        saveTickets(updatedTickets);
        return { ...state, tickets: updatedTickets };
      }
    });
  },

  archiveTicket: (id) => {
    set(state => {
      const ticketToArchive = state.tickets.find(ticket => ticket.id === id);
      if (!ticketToArchive) return state;
      const updatedTickets = state.tickets.filter(ticket => ticket.id !== id);
      const updatedArchived = [...state.archivedTickets, ticketToArchive];
      saveTickets(updatedTickets);
      saveArchivedTickets(updatedArchived);
      return { ...state, tickets: updatedTickets, archivedTickets: updatedArchived };
    });
  },

  unarchiveTicket: (id) => {
    set(state => {
      const ticketToUnarchive = state.archivedTickets.find(ticket => ticket.id === id);
      if (!ticketToUnarchive) return state;
      const updatedArchived = state.archivedTickets.filter(ticket => ticket.id !== id);
      const updatedTickets = [...state.tickets, ticketToUnarchive];
      saveTickets(updatedTickets);
      saveArchivedTickets(updatedArchived);
      return { ...state, tickets: updatedTickets, archivedTickets: updatedArchived };
    });
  },

  updateTicketStatus: (id: string, newStatus: string) => {
    set(state => {
      const updatedTickets = serviceUpdateTicketStatus(state.tickets, id, newStatus);
      saveTickets(updatedTickets);
      return { ...state, tickets: updatedTickets };
    });
  },

  updateTicketProperty: (id: string, property: keyof Ticket, value: any) => {
    set(state => {
      const updatedTickets = updateTicketProperty(state.tickets, id, property, value);
      saveTickets(updatedTickets);
      return { ...state, tickets: updatedTickets };
    });
  },
})); 