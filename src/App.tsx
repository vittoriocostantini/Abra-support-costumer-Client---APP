import React from 'react';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';
import './firebase/config/firebase-config'; 
import TabBar from './services/tabs/tab-bar';
import LogInPage from './pages/log-in-page/log-in';
import LogInAccount from './pages/log-in-page/log-in-with-account/log-in-with-account';
import signUpPage from './pages/sign-up-page/sign-up-page';
import SignUp from './pages/sign-up-page/sign-up/sign-up';
import ChatPage from './services/chats/chat-page';
import ArchivedTickets from './pages/tickets/tickets-sub-pages/archived-tickets';
import './i18n/i18n';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.css';
import './theme/variables.css';
import TicketsPage from './pages/tickets/tickets-page';
import Privacity from './pages/settings/settings-sub-pages/privacity/privacity';
import Languaje from './pages/settings/settings-sub-pages/lang/languaje';
import AboutUs from './pages/settings/settings-sub-pages/about/about-us';
import AppRoutes from './services/routes/app-routes';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
          <AppRoutes />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
