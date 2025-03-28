import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, IonIcon, IonFooter, IonText, IonBackButton, IonButton } from '@ionic/react';
import './sign-up-page.css';
import { hideTabBar } from '../../services/tabs/tab-bar-view/tabbar-view';
import { 
         logoGoogle,
         logoApple,
         closeCircleOutline,
         
}
from 'ionicons/icons'

const signUpPage: React.FC = () => {
    hideTabBar();
    return (
        <IonPage>
           <IonHeader class='ion-no-border'>
           <IonToolbar>
                    <IonButton slot='start' fill='clear'>
                             <IonBackButton text='' icon={closeCircleOutline} />
                    </IonButton>
                        <IonTitle>Registrarte</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="content-sign" scrollY={false}>
                <IonList className="rounded-items-sign-up">
                <IonText className="title-app">
                    <h1>Servicio inmediato.
                        <br/>
                    Gratis en Abra.</h1>
                </IonText>
                    <IonItem button detail={false} lines="none" className="rounded-item register-item" routerLink='/sign-up/'>
                        <IonLabel>Registrate es gratis</IonLabel>
                    </IonItem>
                    <IonItem button detail={false} lines="none" className="rounded-item">
                        <IonIcon size="large" icon={logoGoogle} className="google-logo"/> 
                            <IonLabel>Registrate con Google</IonLabel>
                    </IonItem>
                        <IonItem button detail={false} lines="none" className="rounded-item">
                            <IonIcon size="large" icon={logoApple} className="apple-logo"/> 
                                <IonLabel>Registrate con Apple</IonLabel>
                        </IonItem>
                        <IonButton fill='clear' routerLink='/log-in' >
                                <IonText  className='sign-up-account'>Ya tienes una cuenta?</IonText>
                                </IonButton>
                 </IonList>
            </IonContent>
                <IonFooter class='ion-no-border'>
                    <IonToolbar>
                         <IonTitle>Registrarte</IonTitle>
                    </IonToolbar>
                </IonFooter>
        </IonPage>
    );
};

export default signUpPage;