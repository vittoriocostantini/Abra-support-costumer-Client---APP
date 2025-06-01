// Funciones para manejar el almacenamiento de tickets en localStorage
import { Ticket as TicketModel } from '../../../models/ticket-card/ticket-model-card';

const TICKETS_STORAGE_KEY = 'tickets';
const ARCHIVED_TICKETS_STORAGE_KEY = 'archived-tickets';

export function loadTickets(): TicketModel[] {
  const stored = localStorage.getItem(TICKETS_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }
  return [];
}

export function saveTickets(tickets: TicketModel[]) {
  localStorage.setItem(TICKETS_STORAGE_KEY, JSON.stringify(tickets));
}

export function loadArchivedTickets(): TicketModel[] {
  const stored = localStorage.getItem(ARCHIVED_TICKETS_STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return [];
    }
  }
  return [];
}

export function saveArchivedTickets(tickets: TicketModel[]) {
  localStorage.setItem(ARCHIVED_TICKETS_STORAGE_KEY, JSON.stringify(tickets));
} 