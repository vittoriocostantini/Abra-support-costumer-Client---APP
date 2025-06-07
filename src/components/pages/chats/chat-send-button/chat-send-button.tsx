import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { rocketOutline } from 'ionicons/icons';
import './chat-send-button.css';



interface ChatSendButtonProps {
    onClick: (event: React.MouseEvent<HTMLIonButtonElement>) => void;
    visible: boolean;
}

const ChatSendButton: React.FC<ChatSendButtonProps> = ({ onClick, visible }) => (
    <IonButton
        fill='clear'
        size="small"
        className={`chat-button-send${visible ? ' visible' : ''}`}
        onClick={onClick}
        style={{ opacity: visible ? 1 : 0 }}
    >
        <IonIcon icon={rocketOutline} slot="icon-only" size='default' />
    </IonButton>
);

export default ChatSendButton; 