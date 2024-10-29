import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import Page from '../pages/Page';
import TicketsPage from '../pages/tickets/TicketsPage';
import ContactPage from '../pages/contact/ContactPage';
import SearchPage from '../pages/search/SearchPage';
import SettingsPage from '../pages/settings/SettingsPage';
import ChatPage from '../pages/chat/ChatPage';

const AppRoutes: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Route path="/page/:name" component={Page} exact={true} />
      <Redirect exact path="/" to="/pages/Tickets" />
      <Route path="/pages/Tickets" component={TicketsPage} exact={true} />
      <Route path="/pages/Contact" component={ContactPage} exact={true} />
      <Route path="/pages/SearchPage" component={SearchPage} exact={true} />
      <Route path="/pages/SettingsPage" component={SettingsPage} exact={true} />
      <Route path="/Tickets/chat" component={ChatPage} exact={true} />
    </IonRouterOutlet>
  );
};

export default AppRoutes;
