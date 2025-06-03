import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { send } from 'ionicons/icons';
import './chat-send-button.css';



interface ChatSendButtonProps {
    onClick: (event: React.MouseEvent<HTMLIonButtonElement>) => void;
    visible: boolean;
}

const ChatSendButton: React.FC<ChatSendButtonProps> = ({ onClick, visible }) => (
    <IonButton
        slot="end"
        shape="round"
        size="small"
        className={`chat-button-send${visible ? ' visible' : ''}`}
        onClick={onClick}
        style={{ opacity: visible ? 1 : 0 }}
    >
        <IonIcon icon={send} slot="icon-only" />
    </IonButton>
);

export default ChatSendButton; 