import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TabBar from '../../services/tabs/tab-bar';
import LogInPage from '../../pages/log-in-page/log-in';
import LogInAccount from '../../pages/log-in-page/log-in-with-account/log-in-with-account';
import signUpPage from '../../pages/sign-up-page/sign-up-page';
import SignUp from '../../pages/sign-up-page/sign-up/sign-up';
import ChatPage from '../../services/chats/chat-page';
import ArchivedTickets from '../../pages/tickets/tickets-sub-pages/archived-tickets';
import TicketsPage from '../../pages/tickets/tickets-page';
import Privacity from '../../pages/settings/settings-sub-pages/privacity/privacity';
import Languaje from '../../pages/settings/settings-sub-pages/lang/languaje';
import AboutUs from '../../pages/settings/settings-sub-pages/about/about-us';
import { IonRouterOutlet } from '@ionic/react';
import SettingsPage from '../../pages/settings/settings-page';

const AppRoutes: React.FC = () => (
  <IonRouterOutlet animated={true} mode="ios">
    <Route path="/view/archived/" render={() => <ArchivedTickets />} exact />
    <Route path="/tabs" render={() => <TabBar />} />
    <Route path="/" exact={true} render={() => <Redirect to="/tabs/submit-case" />} />
    <Route path="/settings/privacity" component={Privacity} exact={true} />
    <Route path="/settings/languaje" component={Languaje} exact={true} />
    <Route path="/settings/about" component={AboutUs} exact={true} />
    <Route path="/log-in" component={LogInPage} exact={true} />
    <Route path="/log-in-with-account" component={LogInAccount} exact={true} />
    <Route path="/sign-up-page" component={signUpPage} exact={true} />
    <Route path="/sign-up" component={SignUp} exact={true} />
    <Route path="/tickets/chat/:id" component={ChatPage} exact={true} />
    <Route path="/view/tickets/" render={() => <TicketsPage />} />
    <Route path="/settings" component={SettingsPage} exact={true} />
  </IonRouterOutlet>
);

export default AppRoutes; 