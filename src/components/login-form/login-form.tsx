import React from 'react';
import { IonItem, IonInput, IonText, IonButton, IonList } from '@ionic/react';
import { LoginCredentials, LoginFormState } from '../../models/login/barrel-models/login-barrel';

interface LoginFormProps {
    state: LoginFormState;
    handleInputChange: (field: keyof LoginCredentials, value: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
    isFormValid: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
    state,
    handleInputChange,
    handleSubmit,
    isFormValid
}) => {
    return (
        <IonList className="list-login">
            <form onSubmit={handleSubmit} noValidate>
                <IonText slot='start' className='title-gmail-log'>Email o usuario</IonText>
                <IonItem className='item-gmail-log'>    
                    <IonInput 
                        type="email" 
                        labelPlacement="floating" 
                        fill="solid" 
                        value={state.email}
                        onIonChange={e => handleInputChange('email', e.detail.value!)}
                        aria-label="Email"
                        aria-invalid={!!state.errors.email}
                        aria-describedby={state.errors.email ? 'email-error' : undefined}
                    />
                </IonItem>
                {state.errors.email && (
                    <IonText 
                        color="danger" 
                        className="error-message" 
                        role="alert"
                        id="email-error"
                    >
                        {state.errors.email}
                    </IonText>
                )}

                <IonText slot='start' className='title-password'>Contraseña</IonText>
                <IonItem className='password-item'>    
                    <IonInput 
                        type="password" 
                        labelPlacement="floating" 
                        fill="solid" 
                        value={state.password}
                        onIonChange={e => handleInputChange('password', e.detail.value!)}
                        aria-label="Contraseña"
                        aria-invalid={!!state.errors.password}
                        aria-describedby={state.errors.password ? 'password-error' : undefined}
                    />
                </IonItem>
                {state.errors.password && (
                    <IonText 
                        color="danger" 
                        className="error-message" 
                        role="alert"
                        id="password-error"
                    >
                        {state.errors.password}
                    </IonText>
                )}

                <IonButton 
                    shape='round' 
                    type="submit"
                    disabled={state.isLoading || !isFormValid}
                    expand="block"
                    className="login-button"
                >
                    {state.isLoading ? 'Cargando...' : 'Inicia Sesion'}
                </IonButton>
            </form>
        </IonList>
    );
}; 