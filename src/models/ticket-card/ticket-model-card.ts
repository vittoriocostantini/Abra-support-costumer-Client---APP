// Definir la interfaz para un ticket
export interface Ticket {
  id: string;
  title: string;
  number: string;
  status: string;
  date: string;
  path: string;
  avatarUrl: string;
  agentName: string;
  imageAlt: string;
  icon: string;
  description: string; // Nueva propiedad para la descripción del ticket
  notes: string; // Nueva propiedad para las notas del ticket
}