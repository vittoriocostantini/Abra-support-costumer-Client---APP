import { FormErrors } from './form-errors-model';

// Interface para el estado del formulario
export interface FormState {
    email: string;
    password: string;
    errors: FormErrors;
    isLoading: boolean;
    showToast: boolean;
    toastMessage: string;
} 