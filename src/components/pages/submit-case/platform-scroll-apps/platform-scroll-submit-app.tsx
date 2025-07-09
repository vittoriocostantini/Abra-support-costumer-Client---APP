import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import { IonItem, IonLabel, IonIcon } from '@ionic/react';
import { apps } from 'ionicons/icons';
import ModalApps from './modal-apps/modal-apps';
import './platform-scroll-submit.css';
import { useTranslation } from 'react-i18next';

interface PlatformScrollSubmitProps {
    onSelectIcon: (icon: string) => void;
    reset: boolean;
}

const PlatformScrollSubmit = forwardRef<{
    resetState: () => void;
}, PlatformScrollSubmitProps>(({ onSelectIcon, reset }, ref) => {
    const [selectedApp, setSelectedApp] = useState<string>('');
    const [selectedIcon, setSelectedIcon] = useState<string>(apps);
    const [selectedColor, setSelectedColor] = useState<string>('black');
    const modalRef = useRef<HTMLIonModalElement>(null);
    const { t } = useTranslation('platformScroll');
    useImperativeHandle(ref, () => ({
        resetState: () => {
            setSelectedApp('');
            setSelectedIcon(apps);
            setSelectedColor('black');
        }
    }));

    return (
        <IonItem>
            <IonLabel id='label-apps'>{selectedApp || t('selectApp')}</IonLabel>
            <IonItem button lines="none" detail={false} id="open-apps-modal">
                <IonIcon size="large" slot="" icon={selectedIcon} className='icon-apps' id='icon-apps' style={{ color: selectedColor }}></IonIcon>
            </IonItem>
            <ModalApps 
                modalRef={modalRef}
                onSelectApp={(appLabel, appIcon, appColor) => {
                    setSelectedApp(appLabel);
                    setSelectedIcon(appIcon);
                    setSelectedColor(appColor);
                    onSelectIcon(appIcon);
                    modalRef.current?.dismiss();
                }}
            />
        </IonItem>
    );
});

export default PlatformScrollSubmit;

/* platform-scroll-submit.tsx */