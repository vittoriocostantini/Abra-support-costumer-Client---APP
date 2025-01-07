import React from 'react';
import { IonIcon, IonLabel } from '@ionic/react';
import { personOutline,  settingsOutline, ticketOutline, addCircleOutline } from 'ionicons/icons';
import './TabBar.css';
import AppRoutes from '../routes/AppRoutes';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton } from '@ionic/react';
import { hideTabBar } from './tabbarview/Tab-Bar-View';



function TabBar() {
  hideTabBar();
  return (
    <IonRouterOutlet>
      <IonTabs className='tab-bar-app' data-id='mi-tab-id'>
        <IonRouterOutlet>
          <AppRoutes />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className='tab-bar' id='app-tab-bar' translucent={true}>
        <IonTabButton tab="SubmitCase" href="/pages/SubmitCase">
            <IonIcon icon={addCircleOutline} />
            <IonLabel>Caso</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Contact" href="/pages/Contact">
            <IonIcon icon={personOutline} />
            <IonLabel>Agentes</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Tickets" href="/pages/Tickets">
            <IonIcon icon={ticketOutline} />
            <IonLabel>Tickets</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Settings" href="/pages/SettingsPage">
            <IonIcon icon={settingsOutline} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
          
        </IonTabBar>
      </IonTabs>
    </IonRouterOutlet>
  );
}
export default TabBar;
