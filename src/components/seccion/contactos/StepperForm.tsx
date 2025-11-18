'use client';
import React, { useState } from 'react';
import { User, MessageSquare, Send, CheckCircle, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

// Colores corporativos (reutilizados)
const PRIMARY_GREEN_BG = 'bg-[#1D4D3D]'; 
const PRIMARY_GREEN_TEXT = 'text-[#1D4D3D]';
const HOVER_GREEN = 'hover:bg-[#4D775E]';
const DISABLED_COLOR = 'bg-gray-400';

// --- DEFINICIÓN DE TIPOS ---
interface FormData {
  name: string;
  email: string;
  phone: string;
  inquiryType: 'reservation' | 'feedback' | 'general';
  message: string;
}

// --- Componente StepperForm ---
const StepperForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Lógica de manejo de entrada de datos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage('');
  };

  // Validación para el Paso 1
  const validateStep1 = () => {
    const { name, email, phone } = formData;
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage('Por favor, completa todos los campos requeridos.');
      return false;
    }
    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, introduce un correo electrónico válido.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  // Validación para el Paso 2
  const validateStep2 = () => {
    const { message } = formData;
    if (!message.trim() || message.length < 10) {
      setErrorMessage('Tu mensaje debe tener al menos 10 caracteres.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  // Navegación entre pasos
  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
    setErrorMessage('');
  };

  // Simulación de envío de formulario (Aquí iría la lógica de API/Firestore)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 3) {
      // Simulación de envío exitoso
      console.log('Formulario enviado:', formData);
      setIsSubmitted(true);
      // Nota: En una aplicación real, aquí se llamaría a una API o se usaría Firestore
    }
  };

  // --- SECCIONES DEL FORMULARIO ---

  // Paso 1: Información Personal
  const Step1 = () => (
    <div className="space-y-6 transition-opacity duration-500 ease-in-out">
      <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
        <User className={`w-6 h-6 mr-3 ${PRIMARY_GREEN_TEXT}`} />
        Cuéntanos quién eres
      </h3>
      <InputField id="name" name="name" label="Nombre Completo" type="text" value={formData.name} onChange={handleChange} required />
      <InputField id="email" name="email" label="Correo Electrónico" type="email" value={formData.email} onChange={handleChange} required />
      <InputField id="phone" name="phone" label="Teléfono / WhatsApp" type="tel" value={formData.phone} onChange={handleChange} required />
    </div>
  );

  // Paso 2: Mensaje y Tipo de Consulta
  const Step2 = () => (
    <div className="space-y-6 transition-opacity duration-500 ease-in-out">
      <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4">
        <MessageSquare className={`w-6 h-6 mr-3 ${PRIMARY_GREEN_TEXT}`} />
        ¿En qué podemos ayudarte?
      </h3>
      <div className="space-y-2">
        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700">Tipo de Consulta</label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4D3D] transition duration-150"
        >
          <option value="general">Pregunta General</option>
          <option value="reservation">Hacer una Reserva</option>
          <option value="feedback">Sugerencia o Feedback</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje (Mínimo 10 caracteres)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4D3D] transition duration-150"
          required
          placeholder={formData.inquiryType === 'reservation' ? 'Ej: Necesito reservar para 4 personas el Sábado a las 7:00 PM.' : 'Escribe tu consulta o sugerencia...'}
        ></textarea>
      </div>
    </div>
  );

  // Paso 3: Confirmación y Envío
  const Step3 = () => (
    <div className="text-center p-8 bg-gray-50 rounded-lg transition-opacity duration-500 ease-in-out">
      <BookOpen className={`w-12 h-12 mx-auto mb-4 ${PRIMARY_GREEN_TEXT}`} />
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Revisa y Envía
      </h3>
      <p className="text-gray-600 mb-6">
        Estás a un solo clic de enviar tu solicitud.
      </p>

      <div className="text-left space-y-3 p-4 bg-white rounded-lg border border-gray-200 shadow-inner">
        <p className="text-sm font-semibold text-gray-700">
            <User className='inline w-4 h-4 mr-2' />
            Nombre: <span className="font-normal">{formData.name}</span>
        </p>
        <p className="text-sm font-semibold text-gray-700">
            <MessageSquare className='inline w-4 h-4 mr-2' />
            Asunto: <span className="font-normal">{
                formData.inquiryType === 'reservation' ? 'Reserva' : 
                formData.inquiryType === 'feedback' ? 'Sugerencia' : 'General'
            }</span>
        </p>
        <p className="text-sm font-semibold text-gray-700 break-words">
            Mensaje: <span className="font-normal italic">{formData.message.substring(0, 100)}{formData.message.length > 100 ? '...' : ''}</span>
        </p>
      </div>
    </div>
  );
  
  // Mensaje de Éxito
  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-10 text-center bg-green-50 rounded-xl shadow-2xl">
        <CheckCircle className="w-16 h-16 text-green-600 mb-6 animate-pulse" />
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">¡Mensaje Enviado con Éxito!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Gracias por contactarnos, <span className="font-bold">{formData.name}</span>. Te responderemos lo antes posible a tu correo ({formData.email}).
        </p>
        <button
          onClick={() => { setStep(1); setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', inquiryType: 'general', message: '' }); }}
          className={`px-6 py-3 font-semibold text-white rounded-full transition duration-300 shadow-lg ${PRIMARY_GREEN_BG} ${HOVER_GREEN}`}
        >
          Enviar Otro Mensaje
        </button>
      </div>
    );
  }

  // Contenido principal del formulario
  const stepsContent = [Step1, Step2, Step3];
  const totalSteps = stepsContent.length;

  return (
    <section className="font-sans bg-gray-50 py-20 sm:py-24" id="formulario">
      <div className="max-w-4xl mx-auto px-6">

        {/* Encabezado */}
        <div className="text-center mb-12">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-2">
                RESERVAS Y CONSULTAS
            </h3>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                Contacta con Nosotros
            </h2>
            <div className="mt-4 flex justify-center">
                <div className={`h-1 w-16 rounded-full ${PRIMARY_GREEN_BG}`}></div>
            </div>
        </div>

        {/* Tarjeta del Formulario */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-2xl border border-gray-100">
          
          {/* Barra de Progreso */}
          <div className="flex justify-between items-center mb-10">
            {Array.from({ length: totalSteps }, (_, index) => index + 1).map((stepNum) => (
              <div key={stepNum} className={`flex-1 flex flex-col items-center relative ${stepNum <= step ? '' : 'opacity-50'}`}>
                {/* Círculo de Paso */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white transition-all duration-500
                    ${stepNum === step ? PRIMARY_GREEN_BG : (stepNum < step ? 'bg-green-600' : 'bg-gray-300')} 
                    transform ${stepNum === step ? 'scale-110' : ''}`}
                >
                  {stepNum}
                </div>
                <p className={`mt-2 text-xs font-semibold whitespace-nowrap ${stepNum === step ? PRIMARY_GREEN_TEXT : 'text-gray-500'}`}>
                    Paso {stepNum}
                </p>
                {/* Línea de Conexión (si no es el último paso) */}
                {stepNum < totalSteps && (
                    <div className={`absolute inset-0 right-0 top-5 h-1 w-full  z-0 transition-all duration-500
                        ${stepNum < step ? 'bg-green-600' : 'bg-gray-300'}`}
                        style={{ width: 'calc(100% - 20px)' }} 
                    ></div>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Contenido del Paso Actual */}
            <div className="min-h-[250px]"> {/* Altura mínima para evitar CLS al cambiar de paso */}
                {stepsContent[step - 1]()}
            </div>

            {/* Mensaje de Error */}
            {errorMessage && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center font-medium">
                {errorMessage}
              </div>
            )}

            {/* Controles de Navegación */}
            <div className="flex justify-between pt-6 border-t border-gray-100">
              
              {/* Botón Anterior */}
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className={`flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-full font-semibold transition duration-300 hover:bg-gray-200`}
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Anterior
                </button>
              )}
              {step === 1 && <div />} {/* Espaciador */}

              {/* Botón Siguiente / Enviar */}
              {step < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className={`flex items-center px-6 py-3 font-semibold text-white rounded-full transition duration-300 shadow-lg ${PRIMARY_GREEN_BG} ${HOVER_GREEN}`}
                >
                  Siguiente 
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  className={`flex items-center px-6 py-3 font-semibold text-white rounded-full transition duration-300 shadow-lg ${PRIMARY_GREEN_BG} ${HOVER_GREEN}`}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensaje
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// --- Sub-componente de Campo de Entrada ---
interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ id, name, label, type, value, onChange, required = false }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1D4D3D] transition duration-150"
    />
  </div>
);

export default StepperForm;