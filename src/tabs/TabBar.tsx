import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterOutlet } from '@ionic/react';
import { ticketOutline, peopleOutline, personOutline, settingsOutline } from 'ionicons/icons';
import { useLocation } from 'react-router-dom';
import AppRoutes from '../routes/AppRoutes';

const TabBar: React.FC = () => {
  const location = useLocation();

  // Determina si la barra de pestañas debe estar oculta
  const hideTabBar = location.pathname === '/Tickets/chat';

  return (
    <IonRouterOutlet>
      <IonTabs>
        <IonRouterOutlet>
          <AppRoutes />
        </IonRouterOutlet>
        {/* Renderiza la barra de pestañas solo si no está oculta */}
        {!hideTabBar && (
          <IonTabBar slot="bottom" className="fade-in">
            <IonTabButton tab="tickets" href="/pages/Tickets">
              <IonIcon icon={ticketOutline} />
              <IonLabel>Tickets</IonLabel>
            </IonTabButton>
            <IonTabButton tab="contact" href="/pages/Contact">
              <IonIcon icon={peopleOutline} />
              <IonLabel>Contacts</IonLabel>
            </IonTabButton>
            <IonTabButton tab="search" href="/pages/SearchPage">
              <IonIcon icon={personOutline} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/pages/SettingsPage">
              <IonIcon icon={settingsOutline} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        )}
      </IonTabs>
    </IonRouterOutlet>
  );
};

export default TabBar;
