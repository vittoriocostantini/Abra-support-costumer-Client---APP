import React from 'react';
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonToolbar } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import { person, settings, ticket, addCircle } from 'ionicons/icons';
import './tab-bar.css';
import { useTranslation } from 'react-i18next';
import SubmitCase from '../../pages/submit/submit-case';
import ContactPage from '../../pages/contact/contact-page';
import TicketsPage from '../../pages/tickets/tickets-page';
import SettingsPage from '../../pages/settings/settings-page';

function TabBar() {
  const { t } = useTranslation('tabs');
  
  return (
    <IonTabs className='tab-bar-app'>
      <IonRouterOutlet animated={true} mode="ios">
        <Redirect exact path="/" to="/tabs/submit-case" />
        <Route exact path="/tabs/submit-case">
          <SubmitCase />
        </Route>
        <Route exact path="/tabs/agents">
          <ContactPage />
        </Route>
        <Route exact path="/settings">
          <SettingsPage />
        </Route>
        <Route exact path="/view/tickets/"> 
          <TicketsPage />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom" className='tab-bar' id='app-tab-bar' translucent={true}>
        <IonTabButton tab="submit-case" href="/tabs/submit-case" aria-hidden={true} className='button-case'>
          <IonIcon icon={addCircle} />
          <IonLabel>{t('tabs.case')}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="agents" href="/tabs/agents" className='button-agents'>
          <IonIcon icon={person} />
          <IonLabel>{t('tabs.agents')}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tickets" href="/view/tickets/" className='button-tickets'>
          <IonIcon icon={ticket} />
          <IonLabel>{t('tabs.tickets')}</IonLabel>
        </IonTabButton>
        <IonTabButton tab="settings" href="/settings" className='button-settings'>
          <IonIcon icon={settings} />
          <IonLabel>{t('tabs.settings')}</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
}

export default TabBar;

