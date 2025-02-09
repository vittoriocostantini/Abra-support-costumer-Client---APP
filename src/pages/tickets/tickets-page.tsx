import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonToolbar, IonPage, IonTitle, IonButtons, IonMenuButton, IonList } from '@ionic/react';
import '../../theme/page-themes/ticket-page.css';
import FilterOption from '../../components/filter-option/filter-option';
import TicketCard from '../../components/ticket-card/ticket-card';
import {  showTabBar } from '../../services/tabs/tab-bar-view/tabbar-view';
import { useIonViewDidEnter } from '@ionic/react';
import { tickets } from '../../tickets-store/tickets-store';
import { countMessages } from '../../hooks/chat/utils/chat-utils';

const TicketsPage: React.FC = () => {
  const [submittedTitle, setSubmittedTitle] = useState('');
  const [updatedTickets, setUpdatedTickets] = useState(tickets);

  useIonViewDidEnter(() => {
    showTabBar();
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newTickets = updatedTickets.map(ticket => ({
        ...ticket,
        messageCount: countMessages(ticket.id),
      }));
      setUpdatedTickets(newTickets);
    }, 1000);

    return () => clearInterval(interval);
  }, [updatedTickets]);

  return (
    <IonPage>
      <IonHeader className='header-tickets' translucent >
        <IonToolbar className='toolbar-tickets'>
          <FilterOption />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='content-tickets'>
        <IonList>
          {tickets.map((ticket, index) => {
            const messageCount = countMessages(ticket.id);
            return (
              <TicketCard
                key={index}
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
                messageCount={messageCount}
              />
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
}

export default TicketsPage;

/* tickets-page.tsx */