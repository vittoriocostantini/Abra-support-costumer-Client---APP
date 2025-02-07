import { getAgentByName, getRandomAgent } from '../agents-data/agent-data';
import { IonIcon } from '@ionic/react';
import { share } from 'ionicons/icons';

// Define la interfaz para un ticket
interface Ticket {
  id: string;
  title: string;
  number: string;
  status: string;
  date: string;
  path: string;
  avatarUrl: string;
  agentName: string;
  imageAlt: string;
  icon: JSX.Element;
}

export const tickets: Ticket[] = [];

// Función para agregar un nuevo ticket
export const addTicket = (title: string, icon: string) => {
  const randomAgent = getRandomAgent(); // Obtener un agente aleatorio
  const newTicket: Ticket = {
    id: (tickets.length + 1).toString(),
    title,
    number: `#${tickets.length + 1}`,
    status: 'Completado', // Puedes cambiar el estado según sea necesario // anadir logica de asignacion de estado
    date: 'Enero 15', // O el día que desees
    path: '/Tickets/chat/',
    avatarUrl: randomAgent.avatar, // Usar el avatar del agente aleatorio
    agentName: randomAgent.name,   // Usar el nombre del agente aleatorio
    imageAlt: 'Avatar',
    icon: <IonIcon  size="small" icon={icon} />
  };
  tickets.push(newTicket);
};

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

// Aquí puedes agregar más funciones relacionadas con los tickets si es necesario
