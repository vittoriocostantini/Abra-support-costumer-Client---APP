import React, { useState, useRef } from 'react';
import './filter-option.css'; // Asegúrate de tener este archivo CSS
import { 
    IonSelect, 
    IonSelectOption 
} from '@ionic/react';

const FilterOption: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="filter-option" >
            <IonSelect 
                interface="action-sheet" 
                placeholder="Filtrar tus tickets"
                onIonChange={(e) => console.log('Selected:', e.detail.value)}
                className='filter-menu'
                
            >
                <IonSelectOption value="completado">Completado</IonSelectOption>
                <IonSelectOption value="en_proceso">En proceso</IonSelectOption>
                <IonSelectOption value="pendiente">Pendiente</IonSelectOption>
            </IonSelect>
        </div>
    );
};

export default FilterOption;

/* filter-option.tsx */