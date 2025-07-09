// Definición centralizada de tipos e interfaces para tickets

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
  description: string;
  notes: string;
}

export interface TicketsProduct extends Ticket {
  messages: { text: string; sender: string; chatId: string; unread?: number }[];
  onArchive: (ticketId: string) => void;
  archivedTickets: any[];
  isArchived: boolean;
  onUnarchive: (ticketId: string) => void;
  onDelete?: (ticketId: string) => void;
} 