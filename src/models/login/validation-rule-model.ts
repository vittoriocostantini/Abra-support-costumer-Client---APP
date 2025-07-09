// Interface para las reglas de validación
export interface ValidationRule {
    validate: (value: string) => boolean;
    message: string;
} 