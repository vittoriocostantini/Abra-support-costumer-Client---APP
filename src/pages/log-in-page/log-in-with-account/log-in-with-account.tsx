import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButton, IonToast, useIonViewWillEnter } from '@ionic/react';
import './log-in-with-account.css';
import { useLoginForm } from '../../../hooks/login/use-login-form';
import { LoginForm } from '../../../components/pages/log-in/login-form/login-form';

const TOAST_DURATION = 2000;

const LogInAccount: React.FC = () => {

    const { state, handleInputChange, handleSubmit, handleToastDismiss, isFormValid } = useLoginForm();

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
                <LoginForm
                    state={state}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    isFormValid={isFormValid}
                />
            </IonContent>
            <IonToast
                isOpen={state.showToast}
                onDidDismiss={handleToastDismiss}
                message={state.toastMessage}
                duration={TOAST_DURATION}
                position="top"
                color="danger"
            />
        </IonPage>
    );
};

export default LogInAccount;