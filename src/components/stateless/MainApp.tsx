import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { IonSplitPane, IonRouterOutlet, IonTabs } from '@ionic/react';
import RoutesComponent from './RoutesComponent';
import TabBarComponent from './TabBarComponent';

const MainApp: React.FC = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <IonRouterOutlet id="main">
          <RoutesComponent />
        </IonRouterOutlet>
      </IonSplitPane>
      <IonTabs>
        <IonRouterOutlet>
          <RoutesComponent />
        </IonRouterOutlet>
        <TabBarComponent />
      </IonTabs>
    </IonReactRouter>
  );
};

export default MainApp;