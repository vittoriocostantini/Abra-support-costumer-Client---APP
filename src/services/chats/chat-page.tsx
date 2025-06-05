import React, { useRef, useState, useEffect } from 'react';
import { IonPage, 
    IonHeader, 
    IonToolbar, 
    IonContent, 
    IonFooter, 
    IonButtons, 
    IonButton, 
    IonIcon, 
    IonAvatar, 
    } from '@ionic/react';
import { send,  chevronBack, closeCircleOutline } from 'ionicons/icons';
import './chat-page.css';
import '../../theme/variables.css';
import '../../handlers/message-reply/reply-animation.css';
import { handleFilesSelected } from '../../handlers/file-upload-button/file-handlers';
import ChatInput from '../../components/pages/chats/chat-input/chat-input';
import FileUploadButton from '../../functions/chats/file-upload/file-upload-service';
import MessagesList from '../../components/pages/chats/message-container/message-list';
import { useKeyboardListeners } from '../../handlers/keyboard/keyboard-handler';
import { useParams, useLocation } from 'react-router-dom';
import useResetTextarea from '../../hooks/chat/chat-input/use-reset-textarea';
import { useMessageStatus } from '../../functions/messages/message-status/message-status';
import { handleChatIconAddClick } from '../../functions/chats/button-add-event-handler/button-add-event';
import { useTranslation } from 'react-i18next';
import { useMessageStore } from '../../stores/message-store/message-store';
import { simulateAutoResponse } from '../../hooks/chat/auto-response/auto-response';
import ChatSendButton from '../../components/pages/chats/chat-send-button/chat-send-button';

// ================= FUNCIONES AUXILIARES =================

const handleKeyboardShow = (setIsKeyboardVisible: (v: boolean) => void, keyboardHeight: React.MutableRefObject<number>) => (event: any) => {
    keyboardHeight.current = event.keyboardHeight;
    setIsKeyboardVisible(true);
};

const handleKeyboardHide = (setIsKeyboardVisible: (v: boolean) => void, keyboardHeight: React.MutableRefObject<number>) => () => {
    keyboardHeight.current = 0;
    setIsKeyboardVisible(false);
};

// ================= COMPONENTE PRINCIPAL =================

const ChatPage: React.FC = () => {
    // ----------- Hooks de navegación y estado global -----------
    const location = useLocation<{ agentName: string; avatarUrl: string }>();
    const { agentName = 'Agente', avatarUrl = 'https://ionicframework.com/docs/img/demos/avatar.svg' } = location.state || {};
    const { id: chatId } = useParams<{ id: string }>();
    const { t } = useTranslation('common');

    // ----------- Refs -----------
    const inputRef = useRef<HTMLTextAreaElement>(null!);
    const messagesEndRef = useRef<HTMLDivElement>(null!);
    const keyboardHeight = useRef<number>(0);
    const messagesListRef = useRef<any>(null);

    // ----------- Estado local -----------
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [message, setMessage] = useState('');
    const [isSendButtonVisible, setSendButtonVisible] = useState(false);

    // ----------- Estado global (Zustand) -----------
    const messages = useMessageStore(state => Array.isArray(state.messages[chatId]) ? state.messages[chatId] : []);
    const loadMessages = useMessageStore(state => state.loadMessages);
    const addMessage = useMessageStore(state => state.addMessage);
    const replyMessage = useMessageStore(state => state.replyMessage);
    const setReplyMessage = useMessageStore(state => state.setReplyMessage);
    const setActiveChatId = useMessageStore(state => state.setActiveChatId);

    // ----------- Hooks personalizados -----------
    useKeyboardListeners();
    const resetTextarea = useResetTextarea(inputRef);
    useMessageStatus(messages, chatId);

    // ----------- useEffect -----------
    useEffect(() => {
        loadMessages(chatId);
        setActiveChatId(chatId);
        return () => setActiveChatId(null);
    }, [chatId, loadMessages, setActiveChatId]);

    useEffect(() => {
        setSendButtonVisible(message.trim().length > 0);
    }, [message]);

    useEffect(() => {
        const showHandler = handleKeyboardShow(setIsKeyboardVisible, keyboardHeight);
        const hideHandler = handleKeyboardHide(setIsKeyboardVisible, keyboardHeight);
        window.addEventListener('keyboardDidShow', showHandler);
        window.addEventListener('keyboardDidHide', hideHandler);
        return () => {
            window.removeEventListener('keyboardDidShow', showHandler);
            window.removeEventListener('keyboardDidHide', hideHandler);
        };
    }, []);

    // ----------- Funciones -----------
    const sendMessage = () => {
        if (message.trim().length === 0) return;
        addMessage({
            text: message,
            sender: 'Yo',
            chatId: chatId,
            replyingTo: replyMessage || undefined,
            unread: 0
        });
        simulateAutoResponse(chatId);
        setMessage('');
        resetTextarea();
        setReplyMessage(null);
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLIonButtonElement>) => {
        event.preventDefault();
        if (handleChatIconAddClick(event, isKeyboardVisible, inputRef)) return;
        sendMessage();
        if (isKeyboardVisible && inputRef.current) {
            inputRef.current.focus();
        }
    };

    // ----------- Render -----------
    return (
        <IonPage className='chat-page'>
            <IonHeader className='header-chat ion-no-border' translucent={true}>
                <IonToolbar className='toolbar-header'>
                    <IonButtons slot="start">
                        <IonButton className="back-button" slot="start" onClick={() => window.history.back()} fill="clear">
                            <IonIcon icon={chevronBack} size="large"/>
                        </IonButton>
                    </IonButtons>   
                    <div className='agent-info'>
                        <IonAvatar slot="start" className="chat-avatar" >
                            <img src={avatarUrl} alt={t('agentAvatar')} />
                        </IonAvatar>
                        <p className='agent-title'>{agentName}</p>
                    </div>
                </IonToolbar>
            </IonHeader>
              <IonContent id='chat-container' fullscreen scrollY={false}>
                <MessagesList 
                    ref={messagesListRef}
                    messages={messages} 
                    keyboardHeight={keyboardHeight.current}
                    setReplyMessage={setReplyMessage}
                    agentName={agentName}
                />
              </IonContent>
            <IonFooter className="chat-footer" id='chat-footer' translucent={true} mode='ios' >
                <IonToolbar className="toolbar-footer">
                    {replyMessage && (
                        <div className={`reply-message ${false ? 'reply-message-exit' : 'reply-message-animate'}`}>
                            <p>{replyMessage}</p>
                            <IonButton 
                                slot="end"
                                fill='clear' 
                                className='close-reply' 
                                onClick={() => setReplyMessage(null)}
                            >
                                <IonIcon icon={closeCircleOutline} slot="icon-only" size='large'/>
                            </IonButton>
                        </div>
                    )}
                    <div className='chat-input-container' >  
                        <FileUploadButton 
                            onFilesSelected={handleFilesSelected} 
                            handleButtonClick={handleButtonClick} 
                        />
                        <ChatInput 
                            inputRef={inputRef as React.RefObject<HTMLTextAreaElement>} 
                            value={message}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                        />
                        <ChatSendButton
                            onClick={handleButtonClick}
                            visible={isSendButtonVisible}
                        />
                    </div>
                </IonToolbar>
            </IonFooter>
        </IonPage>
    );
};

export default ChatPage;

