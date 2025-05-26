import { useCallback, useReducer, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { authService } from '../../firebase/auth/auth.service';
import { FormState, FormAction, LoginCredentials } from '../../models/login/barrel-models/login-barrel';
import { ERROR_MESSAGES, ErrorMessage } from '../../constants/error-messages';

const MIN_PASSWORD_LENGTH = 6;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialState: FormState = {
    email: '',
    password: '',
    errors: {},
    isLoading: false,
    showToast: false,
    toastMessage: ''
};

const validationRules = {
    email: [
        {
            validate: (value: string) => value.trim() !== '',
            message: ERROR_MESSAGES.EMAIL_REQUIRED
        },
        {
            validate: (value: string) => EMAIL_REGEX.test(value),
            message: ERROR_MESSAGES.EMAIL_INVALID
        }
    ],
    password: [
        {
            validate: (value: string) => value !== '',
            message: ERROR_MESSAGES.PASSWORD_REQUIRED
        },
        {
            validate: (value: string) => value.length >= MIN_PASSWORD_LENGTH,
            message: ERROR_MESSAGES.PASSWORD_TOO_SHORT
        }
    ]
} as const;

const formReducer = (state: FormState, action: FormAction): FormState => {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                [action.field]: action.value,
                errors: { ...state.errors, [action.field]: undefined }
            };
        case 'SET_ERRORS':
            return { ...state, errors: action.errors };
        case 'SET_LOADING':
            return { ...state, isLoading: action.isLoading };
        case 'SHOW_TOAST':
            return { ...state, showToast: true, toastMessage: action.message };
        case 'HIDE_TOAST':
            return { ...state, showToast: false };
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
};

export const useLoginForm = () => {
    const history = useHistory();
    const [state, dispatch] = useReducer(formReducer, initialState);

    const validateField = useCallback((field: keyof LoginCredentials, value: string): string | undefined => {
        const rules = validationRules[field];
        const error = rules.find(rule => !rule.validate(value));
        return error?.message;
    }, []);

    const validateForm = useCallback((): boolean => {
        const newErrors = {
            email: validateField('email', state.email),
            password: validateField('password', state.password)
        };

        dispatch({ type: 'SET_ERRORS', errors: newErrors });
        return !Object.values(newErrors).some(error => error !== undefined);
    }, [state.email, state.password, validateField]);

    const handleInputChange = useCallback((field: keyof LoginCredentials, value: string) => {
        dispatch({ type: 'SET_FIELD', field, value });
    }, []);

    const handleLogin = useCallback(async () => {
        if (!validateForm()) {
            return;
        }

        dispatch({ type: 'SET_LOADING', isLoading: true });
        try {
            await authService.login({ email: state.email, password: state.password });
            history.replace('/tabs/submit-case');
        } catch (error: any) {
            let errorMessage: ErrorMessage = ERROR_MESSAGES.LOGIN_ERROR;
            
            if (error.code) {
                switch (error.code) {
                    case 'auth/invalid-credential':
                    case 'auth/user-not-found':
                        errorMessage = ERROR_MESSAGES.INVALID_CREDENTIALS;
                        break;
                    case 'auth/wrong-password':
                        errorMessage = ERROR_MESSAGES.WRONG_PASSWORD;
                        break;
                    case 'auth/too-many-requests':
                        errorMessage = ERROR_MESSAGES.TOO_MANY_ATTEMPTS;
                        break;
                    case 'auth/network-request-failed':
                        errorMessage = ERROR_MESSAGES.NETWORK_ERROR;
                        break;
                    default:
                        errorMessage = error.message || ERROR_MESSAGES.LOGIN_ERROR;
                }
            }
            
            dispatch({ type: 'SHOW_TOAST', message: errorMessage });
        } finally {
            dispatch({ type: 'SET_LOADING', isLoading: false });
        }
    }, [state.email, state.password, history, validateForm]);

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        handleLogin();
    }, [handleLogin]);

    const handleToastDismiss = useCallback(() => {
        dispatch({ type: 'HIDE_TOAST' });
    }, []);

    const isFormValid = useMemo(() => {
        return state.email.trim() !== '' && state.password.length >= MIN_PASSWORD_LENGTH;
    }, [state.email, state.password]);

    return {
        state,
        handleInputChange,
        handleSubmit,
        handleToastDismiss,
        isFormValid
    };
}; 