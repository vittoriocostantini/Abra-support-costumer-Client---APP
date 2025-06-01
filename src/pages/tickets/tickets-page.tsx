import React, { useState } from 'react';
import { IonContent, IonHeader, IonToolbar, IonPage, IonTitle, IonIcon, IonItem, IonLabel, IonRouterLink } from '@ionic/react';
import { AnimatePresence, motion } from 'framer-motion';
import { archiveOutline } from 'ionicons/icons';
import FilterOption from '../../components/filter-option/filter-option';
import TicketCard from '../../components/ticket-card/ticket-card';
import { useTicketsStore } from '../../stores/tickets-store/tickets-global-store';
import { loadMessages } from '../../utils/chat/storage-load-messages/storage-load-messages';
import '../../theme/page-themes/ticket-page.css'; 
import { useTranslation } from 'react-i18next';
import FooterTickets from '../../components/footer-tickets-page/footer-tickets';


const TicketsPage: React.FC = () => {
  const {
    tickets,
    archivedTickets,
    archiveTicket,
    unarchiveTicket,
    deleteTicket,
  } = useTicketsStore();
  const [submittedTitle, setSubmittedTitle] = useState('');
  const [popLayout, setPopLayout] = useState(false);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);
  const { t } = useTranslation('tickets');
  
  // useIonViewWillEnter(() => {
  //   setUpdatedTickets(tickets);
  // });

  // useInterval(tickets, tickets);

  const handleArchiveTicketLocal = (ticketId: string, isArchived: boolean) => {
    if (isArchived) {
      unarchiveTicket(ticketId);
    } else {
      archiveTicket(ticketId);
    }
  };

  const handleDeleteTicketLocal = (ticketId: string, isArchived?: boolean) => {
    deleteTicket(ticketId, isArchived);
  };

  const isTicketValid = (ticket: any) => ticket && ticket.id;

  const filteredTickets = filterStatus ? tickets.filter(ticket => ticket.status === filterStatus) : tickets;

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
                    onArchive={() => handleArchiveTicketLocal(ticket.id, false)}
                    archivedTickets={archivedTickets}
                    isArchived={archivedTickets.some(archivedTicket => archivedTicket && archivedTicket.id === ticket.id)}
                    onUnarchive={() => handleArchiveTicketLocal(ticket.id, true)}
                    onDelete={() => handleDeleteTicketLocal(ticket.id, false)}
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
