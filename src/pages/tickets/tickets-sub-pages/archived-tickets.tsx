import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, useIonViewDidEnter } from '@ionic/react';
import './archived-tickets.css';
import { getArchivedTickets, unarchiveTicket } from '../../../functions/tickets/archive-unarchive-options/ticket-archive-unarchive-functions';
import TicketCard from '../../../components/ticket-card/ticket-card';
import { loadMessages } from '../../../utils/chat/storage-load-messages/storage-load-messages';
import { AnimatePresence, motion } from 'framer-motion';
import useInterval from '../../../hooks/tickets/message-update-interval-badge/use-interval'; 
import { useMessageStatus } from '../../../functions/messages/message-status/message-status';
import { useTranslation } from 'react-i18next';

const ArchivedTickets: React.FC = () => {
    const { t } = useTranslation('archived');

    const [archivedTickets, setArchivedTickets] = useState(getArchivedTickets());

    const handleUnarchive = (ticketId: string) => {
        unarchiveTicket(ticketId);
        setArchivedTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== ticketId));
    };

    useEffect(() => {
        const fetchTickets = () => {
            setArchivedTickets(getArchivedTickets());
        };
        fetchTickets();
    }, []);

    // Use the useInterval hook to update the archivedTickets state
    useInterval(setArchivedTickets, archivedTickets);

    const [popLayout, setPopLayout] = useState(false);

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
                                archivedTickets={archivedTickets}
                            />
                        ))}
                    </AnimatePresence>
                </ul>
            </IonContent>
        </IonPage>
    );
};

const TicketItem: React.FC<{ ticket: any, handleUnarchive: (id: string) => void, archivedTickets: any[] }> = ({ ticket, handleUnarchive, archivedTickets }) => {
    const messages = loadMessages(ticket.id);
    useMessageStatus(messages, ticket.id);

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
                messages={messages}
                isArchived={true}
                onArchive={handleUnarchive}
                archivedTickets={archivedTickets}
                onUnarchive={handleUnarchive}
                
            />
        </motion.li>
    );
};

export default ArchivedTickets;
