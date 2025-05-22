import { Ticket as TicketModel } from '../../models/ticket-card/ticket-model-card'; // Importar la interfaz Ticket como TicketModel
import { getRandomAgent } from '../../data/agents-data/agent-data';
import { IonIcon } from '@ionic/react';
// Exportar las funciones de actualización desde el nuevo archivo
export * from '../../utils/tickets/tickets-updaters/ticket-updaters';

// Define la interfaz para un ticket

export const tickets: TicketModel[] = [];

// Función para agregar un nuevo ticket
export const addTicket = (title: string, icon: string, description: string = '', notes: string = '') => {
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
    icon: <IonIcon size="small" icon={icon} />,
    description: description,
    notes: notes,
  };
  tickets.push(newTicket);
  console.log('Nuevo ticket creado:', newTicket);
};

// Aquí puedes agregar más funciones relacionadas con los tickets si es necesario

