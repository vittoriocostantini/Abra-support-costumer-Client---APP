import { FormErrors } from './form-errors-model';

// Interface para el estado del formulario que se pasa al componente
export interface LoginFormState {
    email: string;
    password: string;
    errors: FormErrors;
    isLoading: boolean;
} 