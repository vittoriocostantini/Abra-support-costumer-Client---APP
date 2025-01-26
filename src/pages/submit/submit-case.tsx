import React from 'react';
import { IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonPage, 
  IonButtons, 
  IonMenuButton, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonTextarea, 
  IonButton, 
  IonIcon, 
  IonBadge, 
  IonList,
} from '@ionic/react';
import '../../theme/page-themes/submit-case.css';
import PlatformScrollSubmit from '../../components/platform-scroll-apps/platform-scroll-submit';
import { attachOutline, bulb } from 'ionicons/icons';
import { showTabBar } from '../../services/tabs/tab-bar-view/tabbar-view';
import { useIonViewDidEnter } from '@ionic/react';



const SubmitCase: React.FC = () => {
  useIonViewDidEnter(() => {
    showTabBar();
  });
  
  return (
    <IonPage>
      <IonHeader className='header-search' translucent>
        <IonToolbar className='toolbar-search'>
          <IonButtons slot="start">
          <IonMenuButton></IonMenuButton>
        </IonButtons>
          <IonTitle className='title-search'>Crea tu caso</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse='condense' className='header-case'>
          <IonToolbar>
            <IonTitle size='large'>Crea tu caso</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form className='form-search'>
          <IonList className='list-container'>
          <IonItem>
            <IonLabel position="stacked">Sujeto</IonLabel>
            <IonInput type="text" required></IonInput>
          </IonItem>
          <PlatformScrollSubmit />
          <IonItem>
            <IonLabel position="stacked">Descripción</IonLabel>
            <IonTextarea required></IonTextarea>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Notas</IonLabel>
            <IonTextarea></IonTextarea>
          </IonItem>
          <IonItem>
            <IonBadge className='badge-file' >Tips</IonBadge>
           <IonLabel className="label-file" style={{ position: 'relative' }}> <IonIcon icon={bulb} size='small' />
              puedes abjuntar imagenes o archivos para la resolución del caso 
            </IonLabel>
            <input
              type="file"
              accept="image/*"
              multiple
              id="fileInput"
              style={{ display: 'none' }}
            />
            <IonButton onClick={() => document.getElementById('fileInput')?.click()}>
              <IonIcon icon={attachOutline} size='large' />
            </IonButton>
          </IonItem>
          </IonList>

          <IonButton  type="submit" className='button-submit'>Enviar</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
}

export default SubmitCase;

/* submit-case.tsx */