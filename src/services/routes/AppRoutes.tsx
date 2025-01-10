import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import TicketsPage from '../../pages/tickets/TicketsPage';
import ContactPage from '../../pages/contact/ContactPage';
import SubmitCase from '../../pages/submit/SubmitCase';
import SettingsPage from '../../pages/settings/SettingsPage';
import ChatPage from '../chat/ChatPage';

const AppRoutes: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Redirect exact path="/" to="/pages/SubmitCase" />
      <Route path="/pages/Tickets" component={TicketsPage} exact={true} />
      <Route path="/pages/Contact" component={ContactPage} exact={true} />
      <Route path="/pages/SubmitCase" component={SubmitCase} exact={true} />
      <Route path="/pages/SettingsPage" component={SettingsPage} exact={true} />
      <Route path="/Tickets/chat/:id" component={ChatPage} exact={true} />
    </IonRouterOutlet>
  );
};

export default AppRoutes;
