import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/react';
import './archived-tickets.css';
import TicketCard from '../../../components/tickets/ticket-card/ticket-card';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useTicketsStore } from '../../../stores/tickets-store/tickets-global-store';
import { useMessageStore } from '../../../stores/message-store/message-store';

const ArchivedTickets: React.FC = () => {
    const { t } = useTranslation('archived');
    const { archivedTickets, unarchiveTicket, deleteTicket } = useTicketsStore();
    const [popLayout, setPopLayout] = useState(false);

    const handleUnarchive = (ticketId: string) => {
        unarchiveTicket(ticketId);
    };

    return (
        <IonPage>
            <IonHeader class="ion-no-border" className="archived-header" translucent>
                <IonToolbar>
                    <IonTitle>{t('archived')}</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton text={t('chats')} className='back-button'/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className='archived-content'>
                <ul className='archived-tickets-list'>
                    <AnimatePresence mode={popLayout ? "popLayout" : "sync"}>
                        {archivedTickets.map(ticket => (
                            <TicketItem
                                key={ticket.id}
                                ticket={ticket}
                                handleUnarchive={handleUnarchive}
                            />
                        ))}
                    </AnimatePresence>
                </ul>
            </IonContent>
        </IonPage>
    );
};

const TicketItem: React.FC<{ ticket: any, handleUnarchive: (id: string) => void }> = ({ ticket, handleUnarchive }) => {
    const { deleteTicket } = useTicketsStore();
    const { messages } = useMessageStore();
    const ticketMessages = Array.isArray(messages[ticket.id]) ? messages[ticket.id] : [];
    
    return (
        <motion.li
            layout
            key={ticket.id}
            initial="hidden"
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            variants={{
                hidden: { opacity: 0, y: 0 },
                visible: { opacity: 1, y: 0 }
            }}
            style={{ position: 'relative', zIndex: 1 }}
            transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
        >
            <TicketCard
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                number={ticket.number}
                path={ticket.path}
                avatarUrl={ticket.avatarUrl}
                imageAlt={ticket.imageAlt}
                status={ticket.status}
                date={ticket.date}
                agentName={ticket.agentName}
                icon={ticket.icon}
                messages={ticketMessages}
                isArchived={true}
                onArchive={handleUnarchive}
                archivedTickets={[]}
                onUnarchive={handleUnarchive}
                onDelete={() => deleteTicket(ticket.id, true)}
            />
        </motion.li>
    );
};

export default ArchivedTickets;
