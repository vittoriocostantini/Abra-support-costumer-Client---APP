import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonPage } from '@ionic/react';
import '../theme/TabsApp/SearchPage.css';

const SearchPage: React.FC = () => {
  return (
    <IonPage>
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
  </IonPage>
  );
}

export default SearchPage;