// src/utils/archive-service.ts
import { archiveTicket, unarchiveTicket } from '../../../services/ticket-options/ticket-archive';

export const handleArchive = (id: string, localIsArchived: boolean, onArchive: (id: string) => void) => {
    if (localIsArchived) {
        unarchiveTicket(id);
    } else {
        archiveTicket(id);
    }
    onArchive(id);
};