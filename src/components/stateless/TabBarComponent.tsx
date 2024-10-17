import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { peopleOutline, ticketOutline, personOutline, settingsOutline } from 'ionicons/icons';

const TabBarComponent: React.FC = () => {
  const routes = [
    { path: '/Tickets', icon: ticketOutline, label: 'Tickets' },
    { path: '/Contact', icon: peopleOutline, label: 'Contacts' },
    { path: '/SearchPage', icon: personOutline, label: 'Account' },
    { path: '/SettingsPage', icon: settingsOutline, label: 'Settings' },
  ];

  return (
    <IonTabBar slot="bottom">
      {routes.map(({ path, icon, label }) => (
        <IonTabButton key={path} tab={path.slice(1).toLowerCase()} href={path}>
          <IonIcon icon={icon} />
          <IonLabel>{label}</IonLabel>
        </IonTabButton>
      ))}
    </IonTabBar>
  );
};

export default TabBarComponent;