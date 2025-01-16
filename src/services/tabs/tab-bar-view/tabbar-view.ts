// Oculta el tab bar service
export const hideTabBar = (): void => {
    const tabBar = document.getElementById('app-tab-bar');
    if (tabBar !== null) {
      tabBar.style.display = 'none';
      tabBar.style.opacity = '0';
    }
  };

  // Muestra el tab bar service
  
  export const showTabBar = (): void => {
    const tabBar = document.getElementById('app-tab-bar');
    if (tabBar !== null) {
      tabBar.style.opacity = '0';
      tabBar.style.transform = 'translateY(20px)';
      tabBar.style.display = 'flex';
      setTimeout(() => {
        tabBar.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        tabBar.style.opacity = '1';
        tabBar.style.transform = 'translateY(0)';
      }, 10);
    }
  };
  
  /* tabbar-view.ts */