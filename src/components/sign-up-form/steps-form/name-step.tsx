import React from 'react';
import { IonText, IonItem, IonInput, IonButton, IonCheckbox, IonBadge } from '@ionic/react';
import { FormData } from '../../../models/sign-up/barrel-models/sign-up-barrels';

interface NameStepProps {
    formData: FormData;
    onInputChange: (e: CustomEvent) => void;
}

export const NameStep: React.FC<NameStepProps> = ({
    formData,
    onInputChange,
}) => (
    <>
        <IonText className="title-user-name">¿Cuál es tu nombre?</IonText>
        <IonItem>
            <IonInput
                type="text"
                name="name"
                value={formData.name}
                onIonInput={onInputChange}
                labelPlacement="floating"
                fill="solid"
                required
            />
        </IonItem>
        <h2>Este nombre aparecerá para los agentes.</h2>
        <IonBadge>Obligatorio</IonBadge>
        <IonItem className="item-terms">
            <IonCheckbox
                name="termsAccepted"
                checked={formData.termsAccepted}
                onIonChange={onInputChange}
                slot="end"
            />
            <IonText>Acepto los términos y condiciones</IonText>
        </IonItem>
        <IonItem className="item-log">
            <IonCheckbox
                name="shareLogs"
                checked={formData.shareLogs}
                onIonChange={onInputChange}
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
); 