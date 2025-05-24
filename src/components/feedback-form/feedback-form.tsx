import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonContent,
  IonModal,
  IonIcon,
  IonPage,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonFooter,
  IonToggle,
  IonList
} from '@ionic/react';
import { send, attachOutline, heart } from 'ionicons/icons';
import './feedback-form.css';
import { useTranslation } from 'react-i18next';

interface FeedbackFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation('feedback');
  return (
    <>
    <IonModal
      isOpen={isOpen}
      onDidDismiss={onClose}
      backdropDismiss={false}
      breakpoints={[0, 1]}
      initialBreakpoint={1}
      className='modal-feedback'
    >
      <IonHeader className='header-feedback'>
        <IonToolbar className='toolbar-feedback'>
          <IonTitle>{t('feedback')}</IonTitle>
          <IonButton
            slot="start"
            onClick={onClose}
            className='button-close'
            fill='clear'
          >
            {t('cancel')}
          </IonButton>
          <IonButton
            slot="end"
            fill='clear'
          >
            <IonIcon icon={attachOutline} size='large' slot='end' />
          </IonButton>
          <IonButton
            slot="end"
            onClick={onClose}
            className='button-send'
            fill='clear'
          >
            {t('send')}
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <div className='container-feedback'>
        <div className='container-feedback-textarea'>
          <textarea
            placeholder={t('writeFeedback')}
            className='textarea-feedback'
          />
        </div>
        <IonItem className='feedback-item' lines="none" detail={false}>
          <IonLabel className='feedback-label'>
            <p>
              <IonIcon size='small' icon={heart} />
              {t('feedbackNote')}
            </p>
          </IonLabel>
        </IonItem>
        <IonList className='list-feedback'>
          <IonItem>
            <IonLabel>{t('includeLogs')}</IonLabel>
            <IonToggle slot="end" color='success'/>
          </IonItem>
          <IonItem>
            <IonLabel>{t('includeDiagnosticInformation')}</IonLabel>
            <IonToggle slot="end" color='success'/>
          </IonItem>
        </IonList>
      </div>
    </IonModal>
    </>
  );
};

export default FeedbackForm;
