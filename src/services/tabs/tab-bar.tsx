import React from 'react';
import { IonIcon, IonLabel } from '@ionic/react';
import { person,  settings, ticket, addCircle } from 'ionicons/icons';
import './tab-bar.css';
import AppRoutes from '../routes/app-routes';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton } from '@ionic/react';
import { hideTabBar } from './tab-bar-view/tabbar-view';



function TabBar() {
  hideTabBar();
  return (
    <IonRouterOutlet> 
      <IonTabs className='tab-bar-app' data-id='app-tab-bar' >
        <IonRouterOutlet>
          <AppRoutes />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className='tab-bar' id='app-tab-bar' translucent={true}>
        <IonTabButton tab="SubmitCase" href="/pages/SubmitCase" aria-hidden={true} className='button-case'>
            <IonIcon icon={addCircle} />
            <IonLabel>Caso</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Contact" href="/pages/Contact" className='button-contact'>
            <IonIcon icon={person} />
            <IonLabel>Agentes</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Tickets" href="/pages/Tickets" className='button-tickets'>
            <IonIcon icon={ticket} />
            <IonLabel>Tickets</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Settings" href="/pages/SettingsPage" className='button-settings' >
            <IonIcon icon={settings} />
            <IonLabel>Configuración</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonRouterOutlet>
  );
}
export default TabBar;

