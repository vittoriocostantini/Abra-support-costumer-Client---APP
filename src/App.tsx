import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Page from './pages/Page';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { peopleOutline, ticketOutline, personOutline, settingsOutline } from 'ionicons/icons';
import ContactPage from './pages/ContactPage';
import TicketPage from './pages/TicketPage';
import SearchPage from './pages/SearchPage';
import SettingsPage from './pages/SettingsPage';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Dark mode */
import '@ionic/react/css/palettes/dark.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
            <Route path="/page/:name" component={Page} exact={true} />
            <Redirect from="/" to="/page/Inicio" exact={true} />
          </IonRouterOutlet>
        </IonSplitPane>
        <IonTabs>
          <IonRouterOutlet>
            <Redirect exact path="/" to="/home" />
            <Route path="/Tickets" render={() => <TicketPage />} exact={true} />
            <Route path="/Contact" render={() => <ContactPage />} exact={true} />
            <Route path="/SearchPage" render={() => <SearchPage />} exact={true} />
            <Route path="/SettingsPage" render={() => <SettingsPage />} exact={true} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
          <IonTabButton tab="tickets" href="/tickets">
              <IonIcon icon={ticketOutline} />
              <IonLabel>Tickets</IonLabel>
            </IonTabButton>
            <IonTabButton tab="contact" href="/contact">
              <IonIcon icon={peopleOutline} />
              <IonLabel>Contacts</IonLabel>
            </IonTabButton>
            <IonTabButton tab="SearchPage" href="/SearchPage">
              <IonIcon icon={personOutline} />
              <IonLabel>Account</IonLabel>
            </IonTabButton>
            <IonTabButton tab="SettingsPage" href="/SettingsPage">
              <IonIcon icon={settingsOutline} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
