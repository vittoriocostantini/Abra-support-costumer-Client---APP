export const ERROR_MESSAGES = {
    EMAIL_REQUIRED: 'El email es requerido',
    EMAIL_INVALID: 'Email inválido',
    PASSWORD_REQUIRED: 'La contraseña es requerida',
    PASSWORD_TOO_SHORT: 'La contraseña debe tener al menos 6 caracteres',
    LOGIN_ERROR: 'Error al iniciar sesión',
    INVALID_CREDENTIALS: 'Email o contraseña incorrectos',
    USER_NOT_FOUND: 'No existe una cuenta con este email',
    WRONG_PASSWORD: 'Contraseña incorrecta',
    TOO_MANY_ATTEMPTS: 'Demasiados intentos fallidos. Por favor, intente más tarde',
    NETWORK_ERROR: 'Error de conexión. Por favor, verifique su conexión a internet'
} as const;

export type ErrorMessage = typeof ERROR_MESSAGES[keyof typeof ERROR_MESSAGES]; 