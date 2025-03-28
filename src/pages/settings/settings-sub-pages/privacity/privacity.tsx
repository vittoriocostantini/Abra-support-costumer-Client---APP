import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonToggle, IonButtons, IonBackButton, IonIcon, IonList } from '@ionic/react';
import { hideTabBar } from '../../../../services/tabs/tab-bar-view/tabbar-view';
import { lockClosed } from 'ionicons/icons';
import './privacity.css';

const Privacity: React.FC = () => {
  hideTabBar();

  return (
    <IonPage>
      <IonHeader  className='privacity-header' class='ion-no-border' >
        <IonToolbar className='privacity-toolbar' >
          <IonButtons slot="start"  >
            <IonBackButton defaultHref="/settings" text="Ajustes" />
          </IonButtons>
          <IonTitle>Privacidad</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='privacity-content' scrollY={false} fullscreen> 
       <IonItem className='privacity-item' lines="none" detail={false} >
        <IonLabel className='privacity-label'>
          <p><IonIcon size='small'  icon={lockClosed} />Controla tu información personal y 
          privacidad, elije la configuración que mejor se adapte a tus necesidades.</p>
        </IonLabel>
       </IonItem>
       <IonList className='privacity-list'>  
        <IonItem detail={true} button>
          <IonLabel>
            <p>Foto de perfil</p>
          </IonLabel>
        </IonItem>
        <IonItem detail={true} button>
          <IonLabel>
            <p>Agentes preferidos</p>
          </IonLabel>
        </IonItem>
        <IonItem detail={true} button>
          <IonLabel>
            <p>Terminos y condiciones</p>
          </IonLabel>
        </IonItem>
        <IonItem detail={true} button>
          <IonLabel>
            <p>Política de privacidad</p>
          </IonLabel>
        </IonItem>
       </IonList>
       
      </IonContent>
      
    </IonPage>
  );
};

export default Privacity;