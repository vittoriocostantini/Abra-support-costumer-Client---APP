import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Importamos useHistory
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonText,
    IonList,
    IonCheckbox,
    IonBadge,
} from '@ionic/react';
import { hideTabBar } from '../../../services/tabs/tab-bar-view/tabbar-view';
import './sign-up.css';
import { arrowBack, chevronBack } from 'ionicons/icons'; // Importamos el ícono de flecha hacia atrás
import { IonIcon } from '@ionic/react'; // Importamos IonIcon

const SignUp: React.FC = () => {
    const history = useHistory();
    hideTabBar();

    // Estado consolidado para manejar el paso actual y la clase de animación
    const [stepState, setStepState] = useState({
        step: 1,
        animationClass: '',
    });

    // Estado para almacenar los valores del formulario
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        termsAccepted: false,
        shareLogs: false,
    });

    // Función para manejar cambios en los inputs
    const handleInputChange = (e: CustomEvent) => {
        // Obtenemos el nombre y valor directamente del evento
        const { name } = e.target as HTMLInputElement;
        const value = 'checked' in e.detail ? e.detail.checked : e.detail.value;
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Función para cambiar de paso con animación
    const changeStep = (direction: 'next' | 'prev') => {
        const isNext = direction === 'next';
        const newStep = isNext ? stepState.step + 1 : stepState.step - 1;

        // Si estamos en el primer paso y retrocedemos, volvemos atrás en el historial
        if (newStep < 1) {
            history.goBack();
            return;
        }

        const animationOut = isNext ? 'slide-out-left' : 'slide-out-right';
        const animationIn = isNext ? 'slide-in-right' : 'slide-in-left';

        setStepState((prevState) => ({
            ...prevState,
            animationClass: animationOut,
        }));

        setTimeout(() => {
            setStepState({
                step: newStep,
                animationClass: animationIn,
            });
        }, 300); // Duración de la animación
    };

    // Add email validation function
    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <IonPage>
            <IonHeader class="ion-no-border" >
                <IonToolbar>
                    <IonButton fill="clear" onClick={() => changeStep('prev')}>
                        <IonIcon className='back-button-icon' icon={chevronBack} /> {/* Reemplazamos el texto por el ícono */}
                    </IonButton>
                    <IonTitle>Crea una cuenta</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen className="content-sign" scrollY={false}>
                <IonList className={`list-sign-up ${stepState.animationClass}`}>
                    <form>
                        {stepState.step === 1 && (
                            <>
                                <IonText className="title-gmail">¿Cuál es tu email?</IonText>
                                <IonItem>
                                    <IonInput
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onIonInput={handleInputChange}
                                        labelPlacement="floating"
                                        fill="solid"
                                        required
                                    ></IonInput>
                                </IonItem>
                                <h2>Tendrás que verificarlo luego.</h2>
                                <IonButton
                                    shape="round"
                                    type="button"
                                    onClick={() => changeStep('next')}
                                    disabled={!formData.email || !isValidEmail(formData.email)}
                                >
                                    Siguiente
                                </IonButton>
                            </>
                        )}

                        {stepState.step === 2 && (
                            <>
                                <IonText className="title-pass">Ingresa una contraseña</IonText>
                                <IonItem>
                                    <IonInput
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onIonInput={handleInputChange}
                                        labelPlacement="floating"
                                        fill="solid"
                                        required
                                        minlength={10}
                                    ></IonInput>
                                </IonItem>
                                <h2>Usa al menos 10 caracteres.</h2>
                                <IonButton
                                    shape="round"
                                    type="button"
                                    onClick={() => changeStep('next')}
                                    disabled={!formData.password || formData.password.length < 10}
                                >
                                    Siguiente
                                </IonButton>
                            </>
                        )}

                        {stepState.step === 3 && (
                            <>
                                <IonText className="title-user-name">¿Cuál es tu nombre?</IonText>
                                <IonItem>
                                    <IonInput
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onIonInput={handleInputChange}
                                        labelPlacement="floating"
                                        fill="solid"
                                        required
                                    ></IonInput>
                                </IonItem>
                                <h2>Este nombre aparecerá para los agentes.</h2>
                                <IonBadge>Obligatorio</IonBadge>
                                <IonItem className="item-terms">
                                    <IonCheckbox
                                        name="termsAccepted"
                                        checked={formData.termsAccepted}
                                        onIonChange={handleInputChange}
                                        slot="end"
                                    />
                                    <IonText>Acepto los términos y condiciones</IonText>
                                </IonItem>
                                <IonItem className="item-log">
                                    <IonCheckbox
                                        name="shareLogs"
                                        checked={formData.shareLogs}
                                        onIonChange={handleInputChange}
                                        slot="end"
                                    />
                                    <IonText>Yo acepto compartir el registro de errores</IonText>
                                </IonItem>
                                <IonButton
                                    shape="round"
                                    type="submit"
                                    disabled={!formData.name || !formData.termsAccepted}
                                >
                                    Crear cuenta
                                </IonButton>
                            </>
                        )}
                    </form>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default SignUp;