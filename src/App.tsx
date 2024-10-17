import { IonApp, IonRouterOutlet, IonSplitPane, IonTabs, IonContent, setupIonicReact } from '@ionic/react';


import MainApp from './components/stateless/MainApp';
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


// Configuración inicial de Ionic React
setupIonicReact({ mode: 'ios' });

const App: React.FC = () => {
  return (
    <IonApp>
      <IonContent>
        <MainApp />
      </IonContent>
    </IonApp>
  );
};

export default App;
