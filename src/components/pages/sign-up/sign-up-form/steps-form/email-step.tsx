import React from 'react';
import { IonText, IonItem, IonInput, IonButton } from '@ionic/react';
import { FormData } from '../../../../../models/sign-up/barrel-models/sign-up-barrels';

interface EmailStepProps {
    formData: FormData;
    onInputChange: (e: CustomEvent) => void;
    onNext: () => void;
    isValidEmail: (email: string) => boolean;
}

export const EmailStep: React.FC<EmailStepProps> = ({
    formData,
    onInputChange,
    onNext,
    isValidEmail
}) => (
    <>
        <IonText className="title-gmail">¿Cuál es tu email?</IonText>
        <IonItem>
            <IonInput
                type="email"
                name="email"
                value={formData.email}
                onIonInput={onInputChange}
                labelPlacement="floating"
                fill="solid"
                required
            />
        </IonItem>
        <h2>Tendrás que verificarlo luego.</h2>
        <IonButton
            shape="round"
            type="button"
            onClick={onNext}
            disabled={!formData.email || !isValidEmail(formData.email)}
        >
            Siguiente
        </IonButton>
    </>
); 