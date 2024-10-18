import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonPage } from '@ionic/react';
import '../theme/TabsApp/TicketPage.css';
import FilterOption from '../components/stateful/FilterOption';
import TicketCard from '../components/stateless/TicketCard';

const TicketsPage: React.FC = () => {
  return (
    <IonPage>


    <IonHeader className='header-tickets'>
      <IonToolbar className='toolbar-tickets'>
        <FilterOption />
      </IonToolbar>
    </IonHeader>
    <IonContent className='content-tickets'>
      <TicketCard />
    </IonContent>
    </IonPage>
  
);
}

export default TicketsPage;