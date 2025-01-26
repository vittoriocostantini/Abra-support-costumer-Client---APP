import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import TicketsPage from '../../pages/tickets/tickets-page';
import ContactPage from '../../pages/contact/contact-page';
import SubmitCase from '../../pages/submit/submit-case';
import SettingsPage from '../../pages/settings/settings-page';
import ChatPage from '../chat/chat-page';
import Privacity from '../../pages/settings/settings-sub-pages/privacity/privacity';
import Languaje from '../../pages/settings/settings-sub-pages/lang/languaje';
import AboutUs from '../../pages/settings/settings-sub-pages/about/about-us';

const AppRoutes: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Redirect exact path="/" to="/pages/SubmitCase" />
      <Route path="/pages/Tickets" component={TicketsPage} exact={true} />
      <Route path="/pages/Contact" component={ContactPage} exact={true} />
      <Route path="/pages/SubmitCase" component={SubmitCase} exact={true} />
      <Route path="/pages/SettingsPage" component={SettingsPage} exact={true} />
      <Route path="/Tickets/chat/:id" component={ChatPage} exact={true} />
      <Route path="/sub-pages/Privacity" component={Privacity} exact={true} />
      <Route path="/sub-pages/Languaje" component={Languaje} exact={true} />
      <Route path="/sub-pages/AboutUs" component={AboutUs} exact={true} />
    </IonRouterOutlet>
  );
};

export default AppRoutes;

/* app-routes.tsx */
