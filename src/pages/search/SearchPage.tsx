import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonPage, IonButton, IonIcon } from '@ionic/react';
import '../../theme/TabsApp/SearchPage.css';

const SearchPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className='header-search' translucent>
      <IonToolbar className='toolbar-search'>
          <IonTitle className='title-search'>Busca tu caso</IonTitle>
          </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
      <IonHeader collapse='condense' className='header-case'>
        <IonToolbar>
          <IonTitle size='large'>Busca tu caso</IonTitle>

          
        </IonToolbar>
        <IonSearchbar 
          animated={true} 
          placeholder="Buscar"
          className='searchbar'
          ></IonSearchbar>
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