import type { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';



const config: CapacitorConfig = {
  appId: 'com.costantini.abra',
  appName: 'abra',
  webDir: 'dist',
  plugins: {
    Keyboard: {
      resize: KeyboardResize.None,
      style: KeyboardStyle.Default,
    },
  },
};

export default config;
