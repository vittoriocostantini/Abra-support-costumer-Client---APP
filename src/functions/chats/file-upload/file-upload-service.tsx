import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { add, addCircleOutline } from 'ionicons/icons';
import './file-upload-service.css';

interface FileUploadButtonProps {
    onFilesSelected: (files: FileList) => void;
    handleButtonClick: (event: React.MouseEvent<HTMLIonButtonElement>) => void;
}

const FileUploadButton: React.FC<FileUploadButtonProps> = ({ onFilesSelected, handleButtonClick }) => {
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            onFilesSelected(files);
        }
    };

    return (
        <>
            <IonButton 
            className="chat-icon-add" 
            size='small'
            fill='clear'
            onClick={(event) => {
                        handleButtonClick(event);
                    document.getElementById('fileInput')?.click();
                }}>
                    <IonIcon icon={addCircleOutline}  slot='icon-only' size='large'/>
                </IonButton>
            <input
                type="file"
                accept="image/*"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
                multiple
            />
        </>
    );
};

export default FileUploadButton;

/* file-upload-service.tsx */