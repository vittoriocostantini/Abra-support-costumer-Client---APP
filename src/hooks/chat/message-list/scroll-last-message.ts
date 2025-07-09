import { useEffect, useRef } from 'react';

// Hook para scroll automático en el chat
export function useAutoScroll(
  virtuosoRef: React.RefObject<any>,
  messages: any[],
  atBottom: boolean
) {
  const prevLength = useRef(messages.length);

  useEffect(() => {
    const isLastMessageFromMe = messages[messages.length - 1]?.sender === 'Yo';
    if (
      messages.length > prevLength.current &&
      (atBottom || isLastMessageFromMe)
    ) {
      virtuosoRef.current?.scrollToIndex({
        index: messages.length - 1,
        align: 'end',
        behavior: 'smooth',
      });
    }
    prevLength.current = messages.length;
  }, [messages, virtuosoRef, atBottom]);
} 