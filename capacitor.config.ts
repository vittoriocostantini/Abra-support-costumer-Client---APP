import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';


const config: CapacitorConfig = {
  appId: 'com.costantini.app',
  appName: 'abra',
  webDir: 'dist',
  plugins: {
    Keyboard: {
      resize: KeyboardResize.None,
    },
  },
};

export default config;
