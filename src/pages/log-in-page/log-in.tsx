import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonList, IonIcon, IonFooter, IonText, IonBackButton, IonButton } from '@ionic/react';
import { hideTabBar } from '../../services/tabs/tab-bar-view/tabbar-view';
import './log-in.css';
import { 
         logoGoogle,
         logoApple,
         closeCircle,
         closeCircleOutline,
         
}
from 'ionicons/icons'

const LogInPage: React.FC = () => {
    hideTabBar();
    return (
        <IonPage>
           <IonHeader class='ion-no-border'>
           <IonToolbar>
                    <IonButton slot='start' fill='clear'>
                             <IonBackButton text=''/>
                    </IonButton>
                </IonToolbar>
            </IonHeader>   
            <IonContent fullscreen className="content-login" scrollY={false}>
                <IonList className="rounded-items-log-in">
                <IonText className="title-app">
                    <h1>Servicio inmediato.
                    <br/>
                    Gratis en Abra.</h1>
                        
                </IonText>
                    <IonItem button detail={false} lines="none" className="rounded-item-log register-item-log" routerLink='/log-in-with-account/'>
                        <IonLabel>Inicia sesion con tu email</IonLabel>
                    </IonItem>
                    <IonItem button detail={false} lines="none" className="rounded-item-log">
                        <IonIcon size="large" icon={logoGoogle} className="google-logo"/> 
                            <IonLabel>Inicia sesion con Google</IonLabel>
                    </IonItem>
                        <IonItem button detail={false} lines="none" className="rounded-item-log">
                            <IonIcon size="large" icon={logoApple} className="apple-logo"/> 
                                <IonLabel>Inicia sesion con Apple</IonLabel>
                        </IonItem>
                        <IonButton fill='clear' className='log-in-account'>
                            <IonBackButton defaultHref='/sign-up-page' text="No tienes cuenta?" icon="false"></IonBackButton>
                                </IonButton>
                       
                 </IonList>
            </IonContent>
         
        </IonPage>
    );
};

export default LogInPage;