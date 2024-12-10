import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonPage, IonButtons, IonMenuButton } from '@ionic/react';
import '../../theme/Page-themes/SearchPage.css';
import SearchBarPage from './searchbar/SearchBarPage';

const SearchPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='header-search' translucent>
        <IonToolbar className='toolbar-search'>
          <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
          <IonTitle className='title-search'>Busca tu caso</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense' className='header-case'>
          <IonToolbar>
            <IonTitle size='large'>Busca tu caso</IonTitle>
          </IonToolbar>
          <SearchBarPage />
        </IonHeader>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eligendi, 
          sint non impedit laborum cupiditate perspiciatis at amet! Veniam accusantium 
          esse voluptate consequatur unde corporis nostrum illum in odit qui.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eligendi, 
          sint non impedit laborum cupiditate perspiciatis at amet! Veniam accusantium 
          esse voluptate consequatur unde corporis nostrum illum in odit qui.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eligendi, 
          sint non impedit laborum cupiditate perspiciatis at amet! Veniam accusantium 
          esse voluptate consequatur unde corporis nostrum illum in odit qui.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eligendi, 
          sint non impedit laborum cupiditate perspiciatis at amet! Veniam accusantium 
          esse voluptate consequatur unde corporis nostrum illum in odit qui.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eligendi, 
          sint non impedit laborum cupiditate perspiciatis at amet! Veniam accusantium 
          esse voluptate consequatur unde corporis nostrum illum in odit qui.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eligendi, 
          sint non impedit laborum cupiditate perspiciatis at amet! Veniam accusantium 
          esse voluptate consequatur unde corporis nostrum illum in odit qui.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem eligendi, 
          sint non impedit laborum cupiditate perspiciatis at amet! Veniam accusantium 
          esse voluptate consequatur unde corporis nostrum illum in odit qui.</p>
      </IonContent>
    </IonPage>
  );
}

export default SearchPage;