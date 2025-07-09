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
import PlatformScrollSubmit from '../../components/pages/submit-case/platform-scroll-apps/platform-scroll-submit-app';
import { attachOutline, bulb } from 'ionicons/icons';
import { useTicketsStore } from '../../stores/tickets-store/tickets-global-store';
import { useTranslation } from 'react-i18next';

const SubmitCase: React.FC = () => {
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState<string>('');
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const platformScrollRef = useRef<{ resetState: () => void }>(null);
  const [notes, setNotes] = useState('');
  const [description, setDescription] = useState('');
  const { t } = useTranslation('submit');
  const { addTicket } = useTicketsStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!icon) {
      setShowToast(true);
      return;
    }
    setLoading(true);
    await addTicket(title, icon, description, notes);
    setTitle('');
    setIcon('');
    setNotes('');
    setDescription('');
    setLoading(false);
    platformScrollRef.current?.resetState();
  };

  return (
    <IonPage>
      <IonHeader className='header-search' >
        <IonToolbar className='toolbar-search'>
          <IonButtons slot="start">
        </IonButtons>
          <IonTitle className='title-search'>{t('createCase')}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='content-submit' scrollY={false}> 
        <IonHeader collapse='condense' className='header-case'>
          <IonToolbar>
            <IonTitle size='large'>{t('createCase')}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form className='form-search' onSubmit={handleSubmit}>
          <IonList className='list-container'>
          <IonItem>
            <IonLabel position="stacked">{t('title')}</IonLabel>
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
            <IonLabel position="stacked">{t('description')}</IonLabel>
            <IonTextarea required value={description} onIonChange={(e) => setDescription(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">{t('notes')}</IonLabel>
            <IonTextarea value={notes} onIonChange={(e) => setNotes(e.detail.value!)}></IonTextarea>
          </IonItem>
          <IonItem>
            <IonBadge className='badge-file'>{t('tips')}</IonBadge>
           <IonLabel className="label-file" style={{ position: 'relative' }}> <IonIcon icon={bulb} size='small' />
              {t('attachFiles')}
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

          <IonButton type="submit" className='button-submit'>{t('send')}</IonButton>
        </form>
      </IonContent>
      <IonToast
        className='toast-submit'
        position="top"
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={t('selectAppFirst')}
        duration={2000}
      />
      <IonLoading
        isOpen={loading}
        message={t('sending')}
      />
    </IonPage>
  );
}

export default SubmitCase;

/* submit-case.tsx */