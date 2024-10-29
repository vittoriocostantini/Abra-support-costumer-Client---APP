import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonPage, IonTitle } from '@ionic/react';
import '../../theme/TabsApp/TicketPage.css';
import FilterOption from '../../components/stateful/filteroption/FilterOption';
import TicketCard from '../../components/stateless/ticketcard/TicketCard';


const TicketsPage: React.FC = () => {
  return (
    <IonPage>
    <IonHeader className='header-tickets' translucent>
      <IonToolbar className='toolbar-tickets'>
      <FilterOption />
      </IonToolbar>
    </IonHeader>
    
    
    <IonContent fullscreen>
    <IonHeader collapse='condense'>
      <IonToolbar>
      </IonToolbar>
      </IonHeader>
      <TicketCard />
    </IonContent>
    </IonPage>
  
);
}

export default TicketsPage;