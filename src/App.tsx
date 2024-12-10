import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import MenuApp from './services/Menu-app/Menu-App';
import { IonSplitPane, IonRouterOutlet } from '@ionic/react';
import AppRoutes from './services/routes/AppRoutes';
import { Route, Redirect } from 'react-router-dom';
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



// Configuración inicial de Ionic React
setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp >
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <MenuApp />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/pages/Tickets" />
            </Route>
            <AppRoutes />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
