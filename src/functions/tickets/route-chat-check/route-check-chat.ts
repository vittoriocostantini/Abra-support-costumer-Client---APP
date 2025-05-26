export const checkIsInChat = (currentPath: string, path: string, id: string): boolean => {
    const expectedPath = `/tickets/chat/${id}`;
    return currentPath === expectedPath;
};
  