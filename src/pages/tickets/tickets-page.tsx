// Importaciones de React y componentes de Ionic
import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonToolbar, IonPage, IonTitle, IonIcon, IonItem, IonLabel, IonRouterLink } from '@ionic/react';
import { useIonViewDidEnter } from '@ionic/react';
import { AnimatePresence, motion } from 'framer-motion';
import { archiveOutline } from 'ionicons/icons';

// Importaciones de componentes internos
import FilterOption from '../../components/filter-option/filter-option';
import TicketCard from '../../components/ticket-card/ticket-card';

// Importaciones de servicios y utilidades
import { showTabBar } from '../../services/tabs/tab-bar-view/tabbar-view';
import { tickets } from '../../tickets-store/tickets-store';
import { loadMessages } from '../../hooks/chat/storage-load-messages/storage-load-messages';
import { getArchivedTickets } from '../../services/ticket-options/ticket-archive';
import useInterval from '../../hooks/tickets/message-update-interval-badge/use-interval';

// Importaciones de estilos
import '../../theme/page-themes/ticket-page.css';

// Componente principal de la página de tickets
const TicketsPage: React.FC = () => {
  // Estado para el título enviado y los tickets actualizados
  const [submittedTitle, setSubmittedTitle] = useState('');
  const [updatedTickets, setUpdatedTickets] = useState(tickets);
  const [archivedTickets, setArchivedTickets] = useState(getArchivedTickets());
  const [popLayout, setPopLayout] = useState(false);

  // Efecto que se ejecuta cuando la vista se ha cargado
  useIonViewDidEnter(() => {
    showTabBar();
    setUpdatedTickets(tickets);
  });

  // Intervalo para actualizar los mensajes de los tickets
  useInterval(setUpdatedTickets, tickets);

  const handleArchiveTicket = (ticketId: string) => {
    setUpdatedTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== ticketId));
    setArchivedTickets(prevArchived => {
      const ticketToUnarchive = prevArchived.find(ticket => ticket && ticket.id === ticketId);
      if (ticketToUnarchive) {
        return prevArchived.filter(ticket => ticket && ticket.id !== ticketId);
      }
      return [...prevArchived, tickets.find(ticket => ticket && ticket.id === ticketId)];
    });
  };

  const handleUnarchiveTicket = (ticketId: string) => {
    const ticketToUnarchive = archivedTickets.find(ticket => ticket.id === ticketId);
    if (ticketToUnarchive) {
      setUpdatedTickets(prevTickets => [...prevTickets, ticketToUnarchive]);
      setArchivedTickets(prevArchived => prevArchived.filter(ticket => ticket.id !== ticketId));
    }
  };

  const isTicketValid = (ticket: any) => ticket && ticket.id;

  // Renderizado del componente
  return (
    <IonPage>
      <IonHeader className='header-tickets' class='ion-no-border'>
        <IonToolbar className='toolbar-tickets'>
          <IonTitle>Chats</IonTitle>
          <FilterOption />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='content-tickets'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size='large'>Chats</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ul className='tickets-list'>
          <IonRouterLink routerLink="/tickets/sub-pages/archived-tickets">
            <IonItem button detail={false} className='archived-tickets'>
              <IonIcon size='small' icon={archiveOutline} />
              <IonLabel className='archive-label'>Archivados</IonLabel>
              <p>0</p>
            </IonItem>
          </IonRouterLink>
          <AnimatePresence mode={popLayout ? "popLayout" : "sync"}>
            {updatedTickets.map((ticket, index) => {
              if (!isTicketValid(ticket)) return null;
              const isArchived = archivedTickets.some(archivedTicket => archivedTicket && archivedTicket.id === ticket.id);
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
                    id={ticket.id}
                    title={submittedTitle || ticket.title}
                    number={ticket.number || ''}
                    path={ticket.path || ''}
                    avatarUrl={ticket.avatarUrl || ''}
                    imageAlt={ticket.imageAlt || ''}
                    status={ticket.status || ''}
                    date={ticket.date || ''}
                    agentName={ticket.agentName || ''}
                    icon={ticket.icon}
                    messages={loadMessages(ticket.id)}
                    onArchive={handleArchiveTicket}
                    archivedTickets={archivedTickets}
                    isArchived={isArchived}
                    onUnarchive={handleUnarchiveTicket}
                  />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </IonContent>
    </IonPage>
  );
};

// Exportación del componente
export default TicketsPage;

/* tickets-page.tsx */