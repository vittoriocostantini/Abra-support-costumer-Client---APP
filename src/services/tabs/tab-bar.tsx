import React, { useEffect } from 'react';
import { IonIcon, IonLabel } from '@ionic/react';
import { person, settings, ticket, addCircle } from 'ionicons/icons';
import './tab-bar.css';
import AppRoutes from '../routes/app-routes';
import { IonRouterOutlet, IonTabs, IonTabBar, IonTabButton } from '@ionic/react';
import { showTabBar } from './tab-bar-view/tabbar-view';
import { useTranslation } from 'react-i18next';

function TabBar() {
  const { t } = useTranslation('tabs');

  useEffect(() => {
    showTabBar();
  }, []);

  return (
    <IonTabs className='tab-bar-app' data-id='app-tab-bar'>
      <IonRouterOutlet>
        <AppRoutes />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className='tab-bar' id='app-tab-bar' translucent={true}>
        <IonTabButton tab="SubmitCase" href="/pages/submit-case" aria-hidden={true} className='button-case'>
          <IonIcon icon={addCircle} />
          <IonLabel>{t('tabs.case')}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="Contact" href="/pages/contact" className='button-contact'>
          <IonIcon icon={person} />
          <IonLabel>{t('tabs.agents')}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="Tickets" href="/pages/tickets" className='button-tickets'>
          <IonIcon icon={ticket} />
          <IonLabel>{t('tabs.tickets')}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="Settings" href="/pages/settings" className='button-settings'>
          <IonIcon icon={settings} />
          <IonLabel>{t('tabs.settings')}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}

export default TabBar;

