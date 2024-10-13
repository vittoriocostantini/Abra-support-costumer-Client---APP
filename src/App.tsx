import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { peopleOutline, ticketOutline, personOutline, settingsOutline } from 'ionicons/icons';

// Importación de las páginas que se usarán en las rutas
import Page from './pages/Page';
import ContactPage from './pages/ContactPage';
import TicketPage from './pages/TicketPage';
import SearchPage from './pages/SearchPage';
import SettingsPage from './pages/SettingsPage';
// Importación de estilos CSS de Ionic y personalizados
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

//commit nuevo
// Configuración inicial de Ionic React
setupIonicReact();

const App: React.FC = () => {
  // Definición de las rutas y sus propiedades
  const routes = [
    { path: '/Tickets', component: TicketPage, icon: ticketOutline, label: 'Tickets' },
    { path: '/Contact', component: ContactPage, icon: peopleOutline, label: 'Contacts' },
    { path: '/SearchPage', component: SearchPage, icon: personOutline, label: 'Account' },
    { path: '/SettingsPage', component: SettingsPage, icon: settingsOutline, label: 'Settings' },
  ];

  return (
    <IonApp>
      <IonReactRouter>
        {/* Configuración del panel dividido de Ionic */}
        <IonSplitPane contentId="main">
          <IonRouterOutlet id="main">
            {/* Ruta para la página genérica con un parámetro de nombre */}
            <Route path="/page/:name" component={Page} exact={true} />
            {/* Redirección inicial a la página de inicio */}
            <Redirect from="/" to="/page/Inicio" exact={true} />
          </IonRouterOutlet>
        </IonSplitPane>
        <IonTabs>
          <IonRouterOutlet>
            {/* Redirección inicial a la pestaña de Tickets */}
            <Redirect exact path="/" to="/Tickets" />
            {/* Mapeo de las rutas definidas en el array */}
            {routes.map(({ path, component }) => (
              <Route key={path} path={path} component={component} exact={true} />
            ))}
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            {/* Mapeo de los botones de las pestañas */}
            {routes.map(({ path, icon, label }) => (
              <IonTabButton key={path} tab={path.slice(1).toLowerCase()} href={path}>
                <IonIcon icon={icon} />
                <IonLabel>{label}</IonLabel>
              </IonTabButton>
            ))}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
