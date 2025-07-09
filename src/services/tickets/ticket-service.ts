// Servicio centralizado para la gestión de tickets
import { Ticket } from '../../types/tickets/ticket-types';

const STORAGE_KEY = 'lastTicketId';
const NUMBER_KEY = 'lastTicketNumber';
const TICKETS_STORAGE_KEY = 'tickets';
const ARCHIVED_TICKETS_STORAGE_KEY = 'archived-tickets';

// --- Generación de ID y número ---
export function getNextTicketId(): string {
  let currentId = getStoredValue(STORAGE_KEY) + 1;
  setStoredValue(STORAGE_KEY, currentId);
  return currentId.toString();
}

export function resetTicketId() {
  setStoredValue(STORAGE_KEY, 0);
}

export function getNextTicketNumber(): string {
  let currentNumber = getStoredValue(NUMBER_KEY) + 1;
  setStoredValue(NUMBER_KEY, currentNumber);
  return `#${currentNumber}`;
}

export function resetTicketNumber() {
  setStoredValue(NUMBER_KEY, 0);
}

function getStoredValue(key: string, defaultValue: number = 0): number {
  const stored = localStorage.getItem(key);
  return stored ? parseInt(stored, 10) : defaultValue;
}

function setStoredValue(key: string, value: number) {
  localStorage.setItem(key, value.toString());
}

// --- Almacenamiento de tickets ---
export function loadTickets(): Ticket[] {
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

export function saveTickets(tickets: Ticket[]) {
  localStorage.setItem(TICKETS_STORAGE_KEY, JSON.stringify(tickets));
}

export function loadArchivedTickets(): Ticket[] {
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

export function saveArchivedTickets(tickets: Ticket[]) {
  localStorage.setItem(ARCHIVED_TICKETS_STORAGE_KEY, JSON.stringify(tickets));
}

// --- Actualización genérica de propiedades ---
export function updateTicketProperty(tickets: Ticket[], id: string, property: keyof Ticket, value: any): Ticket[] {
  return tickets.map(t => t.id === id ? { ...t, [property]: value } : t);
}

// --- Actualización de estado ---
export function updateTicketStatus(tickets: Ticket[], id: string, newStatus: string): Ticket[] {
  return tickets.map(ticket => ticket.id === id ? { ...ticket, status: newStatus } : ticket);
} 