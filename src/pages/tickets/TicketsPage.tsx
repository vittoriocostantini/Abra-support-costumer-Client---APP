import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonPage, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import '../../theme/Page-themes/TicketPage.css';
import FilterOption from '../../components/filter-option/FilterOption';
import TicketsProduct from '../../ticketsproduct/TicketsProduct';
import {  showTabBar } from '../../services/tabs/tabbarview/Tab-Bar-View';
import { useIonViewDidEnter } from '@ionic/react';

const TicketsPage: React.FC = () => {
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