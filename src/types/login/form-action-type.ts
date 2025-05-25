import { LoginCredentials } from '../../models/login/login-credentials-model';
import { FormErrors } from '../../models/login/form-errors-model';

// Tipo para las acciones del reducer
export type FormAction = 
    | { type: 'SET_FIELD'; field: keyof LoginCredentials; value: string }
    | { type: 'SET_ERRORS'; errors: FormErrors }
    | { type: 'SET_LOADING'; isLoading: boolean }
    | { type: 'SHOW_TOAST'; message: string }
    | { type: 'HIDE_TOAST' }
    | { type: 'RESET_FORM' }; 