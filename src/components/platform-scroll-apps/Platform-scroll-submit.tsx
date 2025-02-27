import React, { useState } from 'react';
import { IonItem, IonLabel, IonSelect, IonSelectOption, IonIcon, IonButton, IonButtons } from '@ionic/react';
import { apps } from 'ionicons/icons';
import ModalApps from './modal-apps/modal-apps';
import './platform-scroll-submit.css';

interface PlatformScrollSubmitProps {
    onSelectIcon: (icon: string) => void;
}

const PlatformScrollSubmit: React.FC<PlatformScrollSubmitProps> = ({ onSelectIcon }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedApp, setSelectedApp] = useState<string>('');
    const [selectedIcon, setSelectedIcon] = useState<string>(apps);
    const [selectedColor, setSelectedColor] = useState<string>('black');

    return (
        <IonItem>
            <IonLabel id='label-apps'>{selectedApp || 'Selecciona una app'}</IonLabel>
            <IonItem button lines="none" detail={false} onClick={() => setShowModal(true)}>
                <IonIcon size="large" slot="" icon={selectedIcon} className='icon-apps' id='icon-apps' style={{ color: selectedColor }}></IonIcon>
            </IonItem>
            <ModalApps 
                isOpen={showModal} 
                onDidDismiss={() => setShowModal(false)}
                onSelectApp={(appLabel, appIcon, appColor) => {
                    setSelectedApp(appLabel);
                    setSelectedIcon(appIcon);
                    setSelectedColor(appColor);
                    onSelectIcon(appIcon);
                }}
            />
        </IonItem>
    );
};

export default PlatformScrollSubmit;

/* platform-scroll-submit.tsx */