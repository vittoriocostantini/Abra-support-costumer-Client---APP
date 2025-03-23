import React from 'react';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import TicketsPage from '../../pages/tickets/tickets-page';
import ContactPage from '../../pages/contact/contact-page';
import SubmitCase from '../../pages/submit/submit-case';
import SettingsPage from '../../pages/settings/settings-page';
import ChatPage from '../chats/chat-page';
import Privacity from '../../pages/settings/settings-sub-pages/privacity/privacity';
import Languaje from '../../pages/settings/settings-sub-pages/lang/languaje';
import AboutUs from '../../pages/settings/settings-sub-pages/about/about-us';
import ArchivedTickets from '../../pages/tickets/tickets-sub-pages/archived-tickets';
import SignUp from '../../pages/sign-up-page/sign-up/sign-up';
import signUpPage from '../../pages/sign-up-page/sign-up-page';
import LogInPage from '../../pages/log-in-page/log-in';
import LogInAccount from '../../pages/log-in-page/log-in-with-account/log-in-with-account';


const AppRoutes: React.FC = () => {
  return (
    <IonRouterOutlet>
      <Redirect exact path="/" to="/pages/submit-case" />
      <Route path="/log-in-with-account" component={LogInAccount} exact={true} />
      <Route path="/log-in" component={LogInPage} exact={true} />
      <Route path="/sign-up-page" component={signUpPage} exact={true} />
      <Route path="/sign-up" component={SignUp} exact={true} />
      <Route path="/pages/tickets" component={TicketsPage} exact={true} />
      <Route path="/pages/contact" component={ContactPage} exact={true} />
      <Route path="/pages/submit-case" component={SubmitCase} exact={true} />
      <Route path="/pages/settings" component={SettingsPage} exact={true} />
      <Route path="/tickets/chat/:id" component={ChatPage} exact={true} />
      <Route path="/settings/sub-pages/privacity" component={Privacity} exact={true} />
      <Route path="/settings/sub-pages/languaje" component={Languaje} exact={true} />
      <Route path="/settings/sub-pages/about" component={AboutUs} exact={true} />
      <Route path="/tickets/sub-pages/archived-tickets" component={ArchivedTickets} exact={true} />
        
    </IonRouterOutlet>
  );
};

export default AppRoutes;

/* app-routes.tsx */
