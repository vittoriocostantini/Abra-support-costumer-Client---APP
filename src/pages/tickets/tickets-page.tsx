import React from 'react';
import { IonContent, IonHeader, IonToolbar, IonPage, IonTitle, IonButtons, IonMenuButton } from '@ionic/react';
import '../../theme/page-themes/ticket-page.css';
import FilterOption from '../../components/filter-option/filter-option';
import TicketsProduct from '../../tickets-product/tickets-product';
import {  showTabBar } from '../../services/tabs/tab-bar-view/tabbar-view';
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

/* tickets-page.tsx */