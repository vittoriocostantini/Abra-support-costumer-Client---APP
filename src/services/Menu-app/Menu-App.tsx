import React from 'react';
import { IonIcon }  from '@ionic/react';
import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { personOutline, searchOutline, settingsOutline, ticketOutline } from 'ionicons/icons';
import '../../theme/Page-themes/Menu.css';
function MenuApp() {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList className='list-menu'>
            <IonItem routerLink="/pages/Contact" lines="none" detail={false}>
              <IonIcon icon={personOutline} className='icon-menu'/>
              <IonLabel>
                <h2>Contact</h2>
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/pages/SearchPage" lines="none" detail={false}>
              <IonIcon icon={searchOutline} className='icon-menu'/>
              <IonLabel>
                <h2>Search</h2>
              </IonLabel>
            </IonItem>
            <IonItem routerLink="/pages/SettingsPage" lines="none" detail={false} >
              <IonIcon icon={settingsOutline} className='icon-menu'/>
              <IonLabel>
                <h2>Settings</h2>
              </IonLabel>
            </IonItem>   
            <IonItem routerLink="/pages/Tickets" lines="none" detail={false} >
              <IonIcon icon={ticketOutline} className='icon-menu'/>
              <IonLabel>
                <h2>Tickets</h2>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    </>
  );
}
export default MenuApp;
