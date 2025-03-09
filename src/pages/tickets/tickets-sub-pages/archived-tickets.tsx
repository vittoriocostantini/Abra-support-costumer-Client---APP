import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButtons, IonBackButton } from '@ionic/react';
import { hideTabBar } from '../../../services/tabs/tab-bar-view/tabbar-view';
import './archived-tickets.css';
import { getArchivedTickets, unarchiveTicket } from '../../../services/ticket-options/ticket-archive'; // Importar la función para obtener tickets archivados
import TicketCard from '../../../components/ticket-card/ticket-card'; // Asegúrate de que la ruta sea correcta
import { loadMessages } from '../../../hooks/chat/storage-load-messages/storage-load-messages'; // Asegúrate de que la ruta sea correcta
import { AnimatePresence, motion } from 'framer-motion';



const ArchivedTickets: React.FC = () => {
    hideTabBar();
    const [archivedTickets, setArchivedTickets] = useState(getArchivedTickets()); // Obtener tickets archivados

    const handleUnarchive = (ticketId: string) => {
        unarchiveTicket(ticketId); // Desarchivar el ticket
        setArchivedTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== ticketId)); // Actualizar el estado local
    };

    useEffect(() => {
        const fetchTickets = () => {
            setArchivedTickets(getArchivedTickets()); // Actualizar la lista de tickets archivados
        };
        fetchTickets();
    }, []);
    const [popLayout, setPopLayout] = useState(false);

    return (
        <IonPage>
            <IonHeader class="ion-no-border" className="archived-header" translucent>
                <IonToolbar>
                    <IonTitle>Archivados</IonTitle>
                    <IonButtons slot="start" >
                        <IonBackButton defaultHref="/tickets" text="Chats" className='back-button'/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen className='archived-content'>
                <ul className='archived-tickets-list'>
                    <AnimatePresence mode={popLayout ? "popLayout" : "sync"} >
                        {archivedTickets.map(ticket => (
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
                                    messages={loadMessages(ticket.id)}
                                    isArchived={true}
                                    onArchive={handleUnarchive}
                                    archivedTickets={archivedTickets}
                                    onUnarchive={handleUnarchive}
                                />
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </IonContent>
        </IonPage>
    );
};

export default ArchivedTickets;
