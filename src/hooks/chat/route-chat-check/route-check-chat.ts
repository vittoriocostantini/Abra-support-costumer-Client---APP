export const checkIsInChat = (currentPath: string, path: string, id: string): boolean => {
    const expectedPath = `${path}${id}`;
    return currentPath === expectedPath;
  };
  