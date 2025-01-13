import { useEffect, useState } from 'react';

const useSendButtonVisibility = (message: string) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(message.trim().length > 0); // Mostrar si hay texto
    }, [message]);

    return isVisible;
};

export default useSendButtonVisibility; 