import React from 'react';
import { IonContent, IonHeader, IonToolbar } from '@ionic/react';
import '../theme/TabsApp/TicketPage.css';
import FilterOption from '../components/stateful/FilterOption';
import TicketList from '../components/stateless/TicketList';

function TicketsPage() {
  return (
  <>
    <IonHeader className='header-tickets'>
      <IonToolbar className='toolbar-tickets'>
        <FilterOption />
      </IonToolbar>
    </IonHeader>
    <IonContent className='content-tickets'>
      <TicketList />
    </IonContent>
  </>
);
}

export default TicketsPage;