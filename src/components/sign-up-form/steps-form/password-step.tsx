import React from 'react';
import { IonText, IonItem, IonInput, IonButton } from '@ionic/react';
import { FormData } from '../../../models/sign-up/barrel-models/sign-up-barrels';

interface PasswordStepProps {
    formData: FormData;
    onInputChange: (e: CustomEvent) => void;
    onNext: () => void;
}

export const PasswordStep: React.FC<PasswordStepProps> = ({
    formData,
    onInputChange,
    onNext
}) => (
    <>
        <IonText className="title-pass">Ingresa una contraseña</IonText>
        <IonItem>
            <IonInput
                type="password"
                name="password"
                value={formData.password}
                onIonInput={onInputChange}
                labelPlacement="floating"
                fill="solid"
                required
                minlength={10}
            />
        </IonItem>
        <h2>Usa al menos 10 caracteres.</h2>
        <IonButton
            shape="round"
            type="button"
            onClick={onNext}
            disabled={!formData.password || formData.password.length < 10}
        >
            Siguiente
        </IonButton>
    </>
); 