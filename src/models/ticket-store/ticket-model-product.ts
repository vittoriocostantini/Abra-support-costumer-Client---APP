// Definir el tipo para las props
export interface TicketsProduct {
  id: string;
  title: string;
  number: string;
  path: string;
  avatarUrl: string;
  imageAlt: string;
  status: string;
  date: string;
  agentName: string;
  icon?: string;
  messages: { text: string; sender: string; chatId: string; unread?: number }[];
  onArchive: (ticketId: string) => void;
  archivedTickets: any[];
  isArchived: boolean;
  onUnarchive: (ticketId: string) => void;
  onDelete?: (ticketId: string) => void;
} 