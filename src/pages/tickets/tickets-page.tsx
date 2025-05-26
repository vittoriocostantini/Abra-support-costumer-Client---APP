import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonToolbar, IonPage, IonTitle, IonIcon, IonItem, IonLabel, IonRouterLink, IonBadge, useIonViewWillEnter, IonNavLink, IonFooter, IonButton, IonButtons, IonTabButton } from '@ionic/react';
import { AnimatePresence, motion } from 'framer-motion';
import { addCircle, archiveOutline, contract, person, settings, ticket } from 'ionicons/icons';
import FilterOption from '../../components/filter-option/filter-option';
import TicketCard from '../../components/ticket-card/ticket-card';
import { tickets } from '../../stores/tickets-store/tickets-store';
import { loadMessages } from '../../utils/chat/storage-load-messages/storage-load-messages';
import { getArchivedTickets } from '../../functions/tickets/archive-unarchive-options/ticket-archive-unarchive-functions';
import useInterval from '../../hooks/tickets/message-update-interval-badge/use-interval';
import '../../theme/page-themes/ticket-page.css'; 
import { useTranslation } from 'react-i18next';
import FooterTickets from '../../components/footer-tickets-page/footer-tickets';


const TicketsPage: React.FC = () => {
  const [submittedTitle, setSubmittedTitle] = useState('');
  const [updatedTickets, setUpdatedTickets] = useState(tickets);
  const [archivedTickets, setArchivedTickets] = useState(getArchivedTickets());
  const [popLayout, setPopLayout] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const { t } = useTranslation('tickets');
  
  useIonViewWillEnter(() => {
    setUpdatedTickets(tickets);
  });

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

  const filteredTickets = filterStatus ? updatedTickets.filter(ticket => ticket.status === filterStatus) : updatedTickets;

  return (
    <IonPage>
      <IonHeader className='header-tickets' class='ion-no-border'>
        <IonToolbar className='toolbar-tickets'>
          <IonTitle>{t('chats')}</IonTitle>
          <FilterOption onFilterSelect={setFilterStatus} />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='content-tickets'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size='large'>{t('chats')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ul className='tickets-list'>
          <IonRouterLink routerDirection="forward" routerLink="/view/archived/" className="ion-activatable">
            <IonItem button detail={false} className='archived-tickets'>
              <IonIcon size='small' icon={archiveOutline} />
              <IonLabel className='archive-label'>{t('archived')}</IonLabel>
            </IonItem>
            
          </IonRouterLink>
          <AnimatePresence mode={popLayout ? "popLayout" : "sync"}>
            {filteredTickets.map((ticket, index) => {
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
      <FooterTickets />
    </IonPage>
  );
};

export default TicketsPage;
