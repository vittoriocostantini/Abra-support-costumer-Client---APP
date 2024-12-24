import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonPage, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import '../../theme/Page-themes/TicketPage.css';
import FilterOption from '../../components/stateful/filteroption/FilterOption';
import TicketsProduct from '../../services/ticketsproduct/TicketsProduct';


const TicketsPage: React.FC = () => {
  return (
    <IonPage>
    <IonHeader className='header-tickets' translucent >
      <IonToolbar className='toolbar-tickets'>
      <FilterOption />
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
    <IonHeader collapse='condense'>
      <IonToolbar>
      </IonToolbar>
      </IonHeader>
      <TicketsProduct />
    </IonContent>
    </IonPage>
  
);
}

export default TicketsPage;