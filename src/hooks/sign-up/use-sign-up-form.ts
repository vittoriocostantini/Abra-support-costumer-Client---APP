import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authService } from '../../firebase/auth/auth.service';
import { FormData, StepState, StepDirection } from '../../models/sign-up/barrel-models/sign-up-barrels';

export const useSignUpForm = () => {
    const history = useHistory();
    const [stepState, setStepState] = useState<StepState>({
        step: 1,
        animationClass: '',
    });

    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
        name: '',
        termsAccepted: false,
        shareLogs: false,
    });

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleInputChange = (e: CustomEvent) => {
        const { name } = e.target as HTMLInputElement;
        const value = 'checked' in e.detail ? e.detail.checked : e.detail.value;
        
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const changeStep = (direction: StepDirection) => {
        const isNext = direction === 'next';
        const newStep = isNext ? stepState.step + 1 : stepState.step - 1;

        if (newStep < 1) {
            history.goBack();
            return;
        }

        const animationOut = isNext ? 'slide-out-left' : 'slide-out-right';
        const animationIn = isNext ? 'slide-in-right' : 'slide-in-left';

        setStepState((prevState) => ({
            ...prevState,
            animationClass: animationOut,
        }));

        setTimeout(() => {
            setStepState({
                step: newStep,
                animationClass: animationIn,
            });
        }, 250);
    };

    const isValidEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async () => {
        try {
            await authService.register({
                email: formData.email,
                password: formData.password,
                displayName: formData.name
            });
            history.replace('/tabs/submit-case');
        } catch (error: any) {
            setToastMessage(error.message);
            setShowToast(true);
        }
    };

    return {
        stepState,
        formData,
        showToast,
        toastMessage,
        setShowToast,
        handleInputChange,
        changeStep,
        isValidEmail,
        handleSubmit
    };
}; 