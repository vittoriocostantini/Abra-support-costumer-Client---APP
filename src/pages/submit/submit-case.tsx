import React, { useState } from 'react';
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
import { attachOutline, bulb, share } from 'ionicons/icons';
import { showTabBar } from '../../services/tabs/tab-bar-view/tabbar-view';
import { useIonViewDidEnter } from '@ionic/react';
import { updateTicketTitle, updateTicketIcon, addTicket } from '../../tickets-store/tickets-store';



const SubmitCase: React.FC = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState<string>(share);

  useIonViewDidEnter(() => {
    showTabBar();
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTicket(title, icon);
    console.log('Nuevo ticket creado:', title, icon);
  };

  return (
    <IonPage>
      <IonHeader className='header-search' >
        <IonToolbar className='toolbar-search'>
          <IonButtons slot="start">
        </IonButtons>
          <IonTitle className='title-search'>Crea tu caso</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='content-submit' scrollY={false}> 
        <IonHeader collapse='condense' className='header-case'>
          <IonToolbar>
            <IonTitle size='large'>Crea tu caso</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form className='form-search' onSubmit={handleSubmit}>
          <IonList className='list-container'>
          <IonItem>
            <IonLabel position="stacked">Title</IonLabel>
            <IonInput
              type="text"
              required
              className='title-input'
              value={title}
              onIonChange={(e) => setTitle(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <PlatformScrollSubmit onSelectIcon={setIcon} />
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
            <IonButton onClick={() => document.getElementById('fileInput')?.click()} className='button-file'>
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