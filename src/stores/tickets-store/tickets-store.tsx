import { Ticket as TicketModel } from '../../models/ticket-card/ticket-model-card'; // Importar la interfaz Ticket como TicketModel
import { getRandomAgent } from '../../data/agents-data/agent-data';
import { IonIcon } from '@ionic/react';

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

export const tickets: TicketModel[] = [];

// Función para agregar un nuevo ticket
export const addTicket = (title: string, icon: string) => {
  const randomAgent = getRandomAgent(); // Obtener un agente aleatorio
  const date = new Date(); // Obtener la fecha actual
  const formattedDate = `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}`; // Formato "Mes Día"
  
  const newTicket: TicketModel = {
    id: (tickets.length + 1).toString(),
    title,
    number: `#${tickets.length + 1}`,
    status: 'Pendiente', // Cambiado a "Pendiente"
    date: formattedDate, // Usar la fecha formateada
    path: '/tickets/chat/',
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

