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

interface FeedbackFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ isOpen, onClose }) => {
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
          <IonTitle>Feedback</IonTitle>
          <IonButton
            slot="start"
            onClick={onClose}
            className='button-close'
            fill='clear'
          >
            Cancelar
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
            Enviar
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <div className='container-feedback'>
        <div className='container-feedback-textarea'>
          <textarea
            placeholder='Escribe tu feedback aquí'
            className='textarea-feedback'
          />
        </div>
        <IonItem className='feedback-item' lines="none" detail={false}>
          <IonLabel className='feedback-label'>
            <p>
              <IonIcon size='small' icon={heart} />
              Agradecemos tu sinceridad y valoración, tus comentarios son muy importantes para nosotros, 
              al reportar algun bug o problema con la aplicación, nos ayudas a mejorarla para ofrecerte
              un mejor servicio y experiencia a la hora de usarla, todas tus criticas o sugerencias seran 
              tomadas en cuenta por nuestra empresa y desarrolladores, muchas gracias por tu colaboración.
            </p>
          </IonLabel>
        </IonItem>
        <IonList className='list-feedback'>
          <IonItem>
            <IonLabel>Incluir logs de sistemas</IonLabel>
            <IonToggle slot="end" color='success'/>
          </IonItem>
          <IonItem>
            <IonLabel>Incluir información de diagnóstico</IonLabel>
            <IonToggle slot="end" color='success'/>
          </IonItem>
        </IonList>
      </div>
    </IonModal>
    </>
  );
};

export default FeedbackForm;
