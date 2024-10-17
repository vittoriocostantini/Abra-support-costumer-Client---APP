import React, { useState, useRef } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronDownOutline } from 'ionicons/icons';
import '../../theme/ComponentsTheme/FilterOption.css'; // Asegúrate de tener este archivo CSS
import { IonModal, IonContent, IonList, IonItem, IonLabel } from '@ionic/react';

const FilterOption: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal

    const handleModalOpen = () => {
        setIsModalOpen(true);
        modal.current?.present();
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <div 
        className="filter-option">
            <h1 
            className="container" 
            onClick={handleModalOpen}>
                Filtrar tus tickets
                <IonIcon 
                    icon={chevronDownOutline} 
                    className={isModalOpen ? 'icon-rotated open' : 'icon-rotated'} // Cambia la clase según el estado
                />
            </h1>

            
                <IonContent className='ion-padding'>
                <IonModal 
                ref={modal} 
                trigger="open-modal" 
                initialBreakpoint={1} 
                breakpoints={[0, 1]}
                onDidDismiss={handleModalClose} // Asegúrate de cerrar el modal
                className='ion-modal-height'
                >
            
            <IonList className='ion-item'>
                <IonItem button detail={false} onClick={() => console.log('Enviados seleccionados')}>
                    <IonLabel>Enviados</IonLabel>
                </IonItem>
                <IonItem button detail={false} onClick={() => console.log('En progreso seleccionado')}>
                    <IonLabel>En progreso</IonLabel>
                </IonItem>
                <IonItem button detail={false} onClick={() => console.log('Resueltos seleccionados')}>
                    <IonLabel>Resueltos</IonLabel>
                </IonItem>
            </IonList>
                </IonModal>
            </IonContent>
            
        </div>
    );
};

export default FilterOption;