import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/react'; // Añadir IonIcon
import '../theme/ContactPage.css';
import AddForm from '../components/AddForm';

const ContactPage = () => (
  <>
    <IonHeader className='header-home'>
      <IonToolbar className='toolbar-home'>
        <IonTitle className='title-contact'>Contacta a un agente</IonTitle>
        <AddForm />
      </IonToolbar>
    </IonHeader>
    <IonContent>
    </IonContent>
  </>
);

export default ContactPage;