import React, { useState } from 'react';
import { IonContent, IonHeader, IonToolbar, IonPage, IonTitle, IonButtons, IonMenuButton, IonList } from '@ionic/react';
import '../../theme/page-themes/ticket-page.css';
import FilterOption from '../../components/filter-option/filter-option';
import TicketCard from '../../components/ticket-card/ticket-card';
import {  showTabBar } from '../../services/tabs/tab-bar-view/tabbar-view';
import { useIonViewDidEnter } from '@ionic/react';
import { tickets } from '../../tickets-store/tickets-store';

const TicketsPage: React.FC = () => {
  const [submittedTitle, setSubmittedTitle] = useState('');

  useIonViewDidEnter(() => {
    showTabBar();
  });

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
            console.log('Ticket Props:', ticket);
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