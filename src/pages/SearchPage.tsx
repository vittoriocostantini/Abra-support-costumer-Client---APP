import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar } from '@ionic/react';
import '../theme/SearchPage.css';

const AccountPage = () => (
  <>
    <IonHeader className='header-search'>
      <IonToolbar className='toolbar-search'>
          <IonTitle className='title-search'>Busca tu caso</IonTitle>
          <IonSearchbar 
          animated={true} 
          placeholder="Buscar"
          className='searchbar'
          ></IonSearchbar>
          </IonToolbar>
    </IonHeader>
    <IonContent>

    </IonContent>
  </>
);

export default AccountPage;