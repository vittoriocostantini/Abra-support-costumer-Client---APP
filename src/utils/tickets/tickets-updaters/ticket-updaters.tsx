import { IonIcon } from '@ionic/react';
import { tickets } from '../../../stores/tickets-store/tickets-store';

// Función para actualizar el título de un ticket
export const updateTicketTitle = (id: string, newTitle: string) => {
  const ticket = tickets.find(ticket => ticket.id === id);
  if (ticket) {
    ticket.title = newTitle;
  }
};

// Función para actualizar el icono de un ticket
export const updateTicketIcon = (id: string, newIcon: string) => {
  const ticket = tickets.find(ticket => ticket.id === id);
  if (ticket) {
    ticket.icon = <IonIcon icon={newIcon} />;
  }
};

// Función para actualizar la descripción de un ticket
export const updateTicketDescription = (id: string, newDescription: string) => {
  const ticket = tickets.find(ticket => ticket.id === id);
  if (ticket) {
    ticket.description = newDescription;
  }
};

// Función para actualizar las notas de un ticket
export const updateTicketNotes = (id: string, newNotes: string) => {
  const ticket = tickets.find(ticket => ticket.id === id);
  if (ticket) {
    ticket.notes = newNotes;
  }
};