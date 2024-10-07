import React from 'react';
import { IonContent, IonHeader, IonToolbar } from '@ionic/react';
import '../theme/TicketPage.css';
import FilterOption from '../components/FilterOption';
import TicketList from '../components/TicketList';

const TicketsPage = () => (
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

export default TicketsPage;