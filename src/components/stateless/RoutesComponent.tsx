import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Page from '../../pages/Page';
import TicketPage from '../../pages/TicketPage';
import ContactPage from '../../pages/ContactPage';
import SearchPage from '../../pages/SearchPage';
import SettingsPage from '../../pages/SettingsPage';
import ChatPage from '../../pages/ChatPage';

const RoutesComponent: React.FC = () => {
  const routes = [
    { path: '/Tickets', component: TicketPage },
    { path: '/Contact', component: ContactPage },
    { path: '/SearchPage', component: SearchPage },
    { path: '/SettingsPage', component: SettingsPage },
    { path: '/ChatPage', component: ChatPage },
  ];

  return (
    <>
      <Route path="/page/:name" component={Page} exact={true} />
      <Redirect from="/" to="/Tickets" exact={true} />
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} component={component} exact={true} />
      ))}
    </>
  );
};

export default RoutesComponent;