import React from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonList,
    IonToast,
    IonIcon,
} from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import { hideTabBar } from '../../../services/tabs/tab-bar-view/tabbar-view';
import './sign-up.css';
import { useSignUpForm } from '../../../hooks/sign-up/use-sign-up-form';
import { EmailStep } from '../../../components/sign-up-form/steps-form/email-step';
import { PasswordStep } from '../../../components/sign-up-form/steps-form/password-step';
import { NameStep } from '../../../components/sign-up-form/steps-form/name-step';

const SignUp: React.FC = () => {
    hideTabBar();

    
    const {
        stepState,
        formData,
        showToast,
        toastMessage,
        setShowToast,
        handleInputChange,
        changeStep,
        isValidEmail,
        handleSubmit
    } = useSignUpForm();

    const renderStep = () => {
        switch (stepState.step) {
            case 1:
                return (
                    <EmailStep
                        formData={formData}
                        onInputChange={handleInputChange}
                        onNext={() => changeStep('next')}
                        isValidEmail={isValidEmail}
                    />
                );
            case 2:
                return (
                    <PasswordStep
                        formData={formData}
                        onInputChange={handleInputChange}
                        onNext={() => changeStep('next')}
                    />
                );
            case 3:
                return (
                    <NameStep
                        formData={formData}
                        onInputChange={handleInputChange}
                        onSubmit={handleSubmit}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                    <IonButton fill="clear" onClick={() => changeStep('prev')}>
                        <IonIcon className='back-button-icon' icon={chevronBack} />
                    </IonButton>
                    <IonTitle>Crea una cuenta</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="content-sign" scrollY={false}>
                <IonList className={`list-sign-up ${stepState.animationClass}`}>
                    <form onSubmit={(e) => { e.preventDefault(); if (stepState.step === 3) handleSubmit(); }}>
                        {renderStep()}
                    </form>
                </IonList>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={3000}
                    position="top"
                    color="danger"
                />
            </IonContent>
        </IonPage>
    );
};

export default SignUp;