import { IonApp, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import TabBar from './tabs/TabBar';

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
        <TabBar />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
