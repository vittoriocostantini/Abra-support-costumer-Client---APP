// src/hooks/tickets/archive-option/archive-click-handler.ts
import { handleArchive } from "../../functions/archive/ticket-archive-function";

export const handleArchiveClick = (id: string, localIsArchived: boolean, onArchive: (id: string) => void, setIsArchived: (value: boolean) => void) => {
    handleArchive(id, localIsArchived, onArchive);
    console.log(`Ticket ${id} ${localIsArchived ? 'desarchivado' : 'archivado'}`);
    setIsArchived(!localIsArchived);
};