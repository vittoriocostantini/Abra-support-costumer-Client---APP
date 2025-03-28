import React from 'react';
import { IonPage, 
    IonHeader,    
    IonInput,
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonItem, 
    IonLabel, 
    IonList, 
    IonIcon, 
    IonFooter, 
    IonText, 
    IonBackButton, 
    IonButton } from '@ionic/react';
import { hideTabBar } from '../../../services/tabs/tab-bar-view/tabbar-view';
import './log-in-with-account.css';

const LogInAccount: React.FC = () => {
    hideTabBar();
    return (
        <IonPage>
           <IonHeader class='ion-no-border'>
           <IonToolbar>
                    <IonButton slot='start' fill='clear'>
                             <IonBackButton text='' />
                    </IonButton>
                        <IonTitle>Inicia Sesion</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="content-login" scrollY={false}>
                <IonList className="list-login">
                <form>
            <IonText slot='start' className='title-gmail-log' >email o usuario</IonText>
                <IonItem className='item-gmail-log'>    
                    <IonInput type="email" labelPlacement="floating" fill="solid" required ></IonInput>
                 </IonItem>
                 <IonText slot='start' className='title-password' >Contraseña</IonText>

                 <IonItem className='password-item'>    
                    <IonInput type="password" labelPlacement="floating" fill="solid" required></IonInput>
                 </IonItem>
            <IonButton shape='round'type="button" >Inicia Sesion</IonButton>
         </form>
                 </IonList>
            </IonContent>
                <IonFooter class='ion-no-border'>
                    <IonToolbar>
                         <IonTitle>Inicia Sesion</IonTitle>
                    </IonToolbar>
                </IonFooter>
        </IonPage>
    );
};

export default LogInAccount;