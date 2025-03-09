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
  icon: JSX.Element;
} 