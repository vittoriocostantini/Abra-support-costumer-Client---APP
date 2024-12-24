import React, { useState } from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption, IonIcon, IonButton, IonButtons } from '@ionic/react';
import { apps } from 'ionicons/icons';
import ModalApps from './modal-apps/ModalApps';
import './Platform-scroll-submit.css';

const PlatformScrollSubmit: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedApp, setSelectedApp] = useState<string>('Selecciona una app');
    const [selectedIcon, setSelectedIcon] = useState<string>(apps);

    return (
        <IonItem>
            <IonLabel id='label-apps'>{selectedApp}</IonLabel>
            <IonItem button lines="none" detail={false} onClick={() => setShowModal(true)}>
                <IonIcon size="large" slot="" icon={selectedIcon} className='icon-apps' id='icon-apps'></IonIcon>
            </IonItem>
            <ModalApps 
                isOpen={showModal} 
                onDidDismiss={() => setShowModal(false)}
                onSelectApp={(appLabel, appIcon) => {
                    setSelectedApp(appLabel);
                    setSelectedIcon(appIcon);
                }}
            />
        </IonItem>
    );
};

export default PlatformScrollSubmit;