import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import Page from '../pages/Page';
import TicketsPage from '../pages/TicketsPage';
import ContactPage from '../pages/ContactPage';
import SearchPage from '../pages/SearchPage';
import SettingsPage from '../pages/SettingsPage';
import ChatPage from '../pages/ChatPage';

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
