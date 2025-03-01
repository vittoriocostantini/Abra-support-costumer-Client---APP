import React, { useState, useRef } from 'react';
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
  IonToast,
  IonLoading
} from '@ionic/react';
import '../../theme/page-themes/submit-case.css';
import PlatformScrollSubmit from '../../components/platform-scroll-apps/platform-scroll-submit-app';
import { attachOutline, bulb, share } from 'ionicons/icons';
import { showTabBar } from '../../services/tabs/tab-bar-view/tabbar-view';
import { useIonViewDidEnter } from '@ionic/react';
import { updateTicketTitle, updateTicketIcon, addTicket } from '../../tickets-store/tickets-store';



const SubmitCase: React.FC = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState<string>('');
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const platformScrollRef = useRef<{ resetState: () => void }>(null);
  const [notes, setNotes] = useState('');
  const [description, setDescription] = useState('');

  useIonViewDidEnter(() => {
    showTabBar();
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!icon) {
      setShowToast(true);
      return;
    }
    setLoading(true);
    await addTicket(title, icon);
    console.log('Nuevo ticket creado:', title, icon);
    setTitle(''); // Limpiar el título
    setIcon(''); // Limpiar el icono
    setNotes(''); // Limpiar las notas
    setDescription(''); // Limpiar la descripción
    setLoading(false); // Desactivar el loading
    platformScrollRef.current?.resetState(); // Resetear el estado del componente PlatformScrollSubmit
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
            <IonLabel position="stacked">Título</IonLabel>
            <IonInput
              type="text"
              required
              className='title-input'
              value={title}
              onIonChange={(e) => setTitle(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <PlatformScrollSubmit ref={platformScrollRef} onSelectIcon={setIcon} reset={!icon} />
          <IonItem>
            <IonLabel position="stacked">Descripción</IonLabel>
            <IonTextarea required value={description} onIonChange={(e) => setDescription(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Notas</IonLabel>
            <IonTextarea value={notes} onIonChange={(e) => setNotes(e.detail.value!)}></IonTextarea>
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
      <IonToast
        className='toast-submit'
        position="top"
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Por favor, selecciona una aplicación antes de enviar."
        duration={2000}
      />
      <IonLoading
        isOpen={loading}
        message={'Enviando...'}
      />
    </IonPage>
  );
}

export default SubmitCase;

/* submit-case.tsx */