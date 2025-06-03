import React from 'react';
import './chat-input.css';
import useResetTextarea from '../../../../hooks/chat/chat-input/use-reset-textarea';
import useAdjustHeight from '../../../../hooks/chat/chat-input/use-adjust-height';

interface ChatInputProps {
    inputRef: React.RefObject<HTMLTextAreaElement>;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ inputRef, value, onChange }) => {
    const resetTextarea = useResetTextarea(inputRef);
    useAdjustHeight(inputRef, value);

    return (
        <textarea
            ref={inputRef}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                onChange(e);
                if (e.target.value.length > 0) {
                    inputRef.current?.classList.add('typing');
                } else {
                    inputRef.current?.classList.remove('typing');
                }
            }}
            className="chat-input-message"
            id="chat-input-message"
            rows={1}
        />
    );
};

export default ChatInput;

/* chat-input.tsx */