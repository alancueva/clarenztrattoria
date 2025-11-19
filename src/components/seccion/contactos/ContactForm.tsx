'use client';
import React, { useState } from 'react';
import { User, Mail, Send, CheckCircle, MessageSquare, Phone } from 'lucide-react';

// Colores corporativos (reutilizados)
const PRIMARY_GREEN_BG = 'bg-[#1D4D3D]';
const PRIMARY_GREEN_TEXT = 'text-[#1D4D3D]';
const HOVER_GREEN = 'hover:bg-[#4D775E]';

// --- DEFINICIÓN DE TIPOS ---
interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

// --- Componente ContactForm ---
const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Lógica de manejo de entrada de datos
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMessage('');
    };

    // Validación básica
    const validateForm = () => {
        const { name, email, message } = formData;
        if (!name.trim() || !email.trim() || !message.trim()) {
            setErrorMessage('Por favor, completa los campos de Nombre, Email y Mensaje.');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrorMessage('Por favor, introduce un correo electrónico válido.');
            return false;
        }
        if (message.length < 10) {
            setErrorMessage('El mensaje debe tener al menos 10 caracteres.');
            return false;
        }
        setErrorMessage('');
        return true;
    };

    // Simulación de envío de formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            // Simulación de una llamada de red de 1.5 segundos
            setTimeout(() => {
                console.log('Formulario enviado:', formData);
                setIsLoading(false);
                setIsSubmitted(true);
            }, 1500);
        }
    };

    // Mensaje de Éxito
    if (isSubmitted) {
        return (
            <div className="flex flex-col items-center justify-center h-full p-10 text-center bg-green-50 rounded-2xl shadow-2xl transition duration-500 transform scale-100">
                <CheckCircle className="w-16 h-16 text-green-600 mb-6 animate-pulse" />
                <h2 className="text-3xl font-extrabold text-gray-900 mb-3">¡Gracias por contactarnos!</h2>
                <p className="text-lg text-gray-700 mb-6">
                    Hemos recibido tu mensaje. Te responderemos pronto.
                </p>
                <button
                    onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                    className={`px-6 py-3 font-semibold text-white rounded-full transition duration-300 shadow-lg ${PRIMARY_GREEN_BG} ${HOVER_GREEN}`}
                >
                    Volver al formulario
                </button>
            </div>
        );
    }

    return (
        <section className="font-sans bg-gray-50 py-20 sm:py-24 text-black" id="formulario-basico">
            <div className="max-w-xl mx-auto px-4">

                {/* Encabezado */}
                <div className="text-center mb-12">
                    <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-2">
                        ¿TIENES UNA PREGUNTA RÁPIDA?
                    </h3>
                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                        Escríbenos
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Solo necesitamos tres datos para ponernos en contacto contigo.
                    </p>
                    <div className="mt-4 flex justify-center">
                        <div className={`h-1 w-16 rounded-full ${PRIMARY_GREEN_BG}`}></div>
                    </div>
                </div>

                {/* Tarjeta del Formulario (Minimalista) */}
                <form onSubmit={handleSubmit} className="bg-white p-10 sm:p-10 rounded-2xl shadow-2xl border border-gray-100 space-y-6">

                    {/* Fila 1: Nombre y Email */}
                    <InputField id="name" name="name" label="Tu Nombre" type="text" value={formData.name} onChange={handleChange} required icon={User} />
                    <InputField id="email" name="email" label="Tu Correo" type="email" value={formData.email} onChange={handleChange} required icon={Mail} />
                    {/* Fila 2: Teléfono (Opcional) */}
                    <InputField id="phone" name="phone" label="Teléfono (Opcional)" type="tel" value={formData.phone} onChange={handleChange} required={false} icon={Phone} />


                    {/* Fila 3: Mensaje */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Mensaje o Consulta <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <MessageSquare className={`absolute left-3 top-3 w-5 h-5 ${PRIMARY_GREEN_TEXT}`} />
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Tengo una consulta sobre..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4D3D] transition duration-150"
                            ></textarea>
                        </div>
                    </div>

                    {/* Mensaje de Error */}
                    {errorMessage && (
                        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-medium transition-all duration-300">
                            {errorMessage}
                        </div>
                    )}

                    {/* Botón de Envío */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full flex items-center justify-center px-6 py-3 font-bold text-lg text-white rounded-xl transition duration-300 shadow-xl transform hover:scale-[1.01]
                        ${isLoading ? 'bg-gray-500 cursor-not-allowed' : `${PRIMARY_GREEN_BG} ${HOVER_GREEN}`}
                        `}
                    >
                        {isLoading ? (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : (
                            <>
                                <Send className="w-5 h-5 mr-3" />
                                Enviar Consulta
                            </>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

// --- Sub-componente de Campo de Entrada con Icono ---
interface InputFieldProps {
    id: string;
    name: string;
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    icon: React.FC<React.SVGProps<SVGSVGElement>>; // Icono de Lucide
}

const InputField: React.FC<InputFieldProps> = ({ id, name, label, type, value, onChange, required = false, icon: Icon }) => (
    <div className="space-y-2">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label} {required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative">
            <Icon className={`absolute left-3 top-3 w-5 h-5 ${PRIMARY_GREEN_TEXT}`} />
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4D3D] transition duration-150"
            />
        </div>
    </div>
);

export default ContactForm;