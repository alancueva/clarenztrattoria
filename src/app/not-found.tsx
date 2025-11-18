'use client';
import { Ghost, Home, ArrowLeft, Search } from 'lucide-react';

const PRIMARY_GREEN_BG = 'bg-[#1D4D3D]'; 
const HOVER_GREEN = 'hover:bg-[#4D775E]';
const PRIMARY_GREEN_TEXT = 'text-[#1D4D3D]';

export default function NotFoundPage(){

    // Simulación de funciones de navegación (En una app real, usarías React Router o similar)
    const handleGoHome = () => {
        window.location.href = '/'; 
    };

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div className="font-sans min-h-screen flex items-center justify-center text-center bg-gray-50 p-6">
            <div className="max-w-xl w-full p-8 sm:p-12 bg-white rounded-3xl shadow-2xl border border-gray-100 transform transition-all duration-500 hover:shadow-3xl">
                
                {/* Icono Principal y Código de Error */}
                <div className="mb-8">
                    <Ghost className={`w-20 h-20 mx-auto mb-4 ${PRIMARY_GREEN_TEXT}`} strokeWidth={1.5} />
                    <h1 className="text-8xl font-extrabold text-gray-900 mb-2">404</h1>
                    <p className={`text-2xl font-semibold uppercase ${PRIMARY_GREEN_TEXT}`}>
                        Página No Encontrada
                    </p>
                </div>

                {/* Mensaje de Explicación */}
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                    Parece que la página que estás buscando se ha esfumado en el ciberespacio.
                    No te preocupes, ¡a todos nos pasa!
                </p>

                {/* Opciones de Navegación (Call-to-Action) */}
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                    
                    {/* Botón Principal: Ir a Inicio */}
                    <button
                        onClick={handleGoHome}
                        className={`flex items-center justify-center px-6 py-3 font-bold text-white rounded-full transition duration-300 shadow-lg transform hover:scale-[1.05] ${PRIMARY_GREEN_BG} ${HOVER_GREEN}`}
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Ir a la Página Principal
                    </button>

                    {/* Botón Secundario: Volver */}
                    <button
                        onClick={handleGoBack}
                        className="flex items-center justify-center px-6 py-3 font-semibold text-gray-700 bg-gray-100 rounded-full transition duration-300 hover:bg-gray-200"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Volver Atrás
                    </button>
                </div>
                
                {/* Sección Adicional (Sugerencia de Búsqueda) */}
                {/* <div className="mt-12 pt-8 border-t border-gray-200">
                    <p className="text-md text-gray-500 mb-4">
                        O prueba a buscar lo que necesitas:
                    </p>
                    <div className="relative max-w-sm mx-auto">
                        <input
                            type="text"
                            placeholder="Ej. Reservas, Servicios, Menú..."
                            className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#1D4D3D] transition duration-150 text-gray-700"
                            aria-label="Buscar en el sitio web"
                        />
                        <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400`} />
                    </div>
                </div> */}

            </div>
        </div>
    );
}