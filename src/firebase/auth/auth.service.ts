import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  updateProfile,
  User,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../config/firebase-config';

export interface AuthUser {
  email: string;
  password: string;
  displayName?: string;
}

export const authService = {
  // Registro de usuario
  async register({ email, password, displayName }: AuthUser) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName) {
          await updateProfile(userCredential.user, { displayName });
      }
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  },

  // Inicio de sesión
  async login({ email, password }: AuthUser) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  },

  // Inicio de sesión con Google
  async loginWithGoogle() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      return result.user;
    } catch (error) {
      throw error;
    }
  },

  // Cierre de sesión
  async logout() {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  },

  // Restablecer contraseña
  async resetPassword(email: string) {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      throw error;
    }
  },

  // Obtener usuario actual
  getCurrentUser(): User | null {
    return auth.currentUser;
  }
}; 