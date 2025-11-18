'use client';
import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';

// Colores corporativos
const PRIMARY_GREEN_BG = 'bg-[#1D4D3D]';
const PRIMARY_GREEN_TEXT = 'text-[#1D4D3D]';
const TEXT_GRAY = 'text-gray-700';

// --- DATOS DE LAS SEDES CON IFRAME Y ESTADO DE CARGA ---
interface Branch {
    id: 'chimbote_espinar' | 'chimbote_merca2' | 'nuevo_chimbote';
    name: string;
    address: string;
    phone: string;
    phoneDetails: string;
    // El iframe para incrustar el mapa. El de Espinar es real, los otros son placeholders iniciales.
    mapIframeUrl: string;
}

// NOTA: Reemplazar los placeholders de 'mapIframeUrl' por los iframes reales cuando los encuentres.
const branches: Branch[] = [
    {
        id: 'nuevo_chimbote',
        name: 'Sede Nuevo Chimbote',
        address: "Jr Nepeña 148 - Urb. Buenos Aires Mz C' Lt 7",
        phone: '929300157',
        phoneDetails: 'Nuevo Chimbote',
        // Placeholder URL para Nuevo Chimbote - ¡ACTUALIZAR LUEGO!
        mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d768.1127541092202!2d-78.52755764370232!3d-9.127098744033281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab858110e8b113%3A0x173e092053f1cdf2!2sClarenz%20Trattoria!5e1!3m2!1ses!2spe!4v1763487841110!5m2!1ses!2spe"
    },
    {
        id: 'chimbote_espinar',
        name: 'Sede Chimbote - Espinar',
        address: 'Jr. Ladislao Espinar 460',
        phone: '926134285',
        phoneDetails: 'Espinar (desde el medio día)',
        mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d768.1127541092202!2d-78.52755764370232!3d-9.127098744033281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab858110e8b113%3A0x173e092053f1cdf2!2sClarenz%20Trattoria!5e1!3m2!1ses!2spe!4v1763487841110!5m2!1ses!2spe"
    },
    {
        id: 'chimbote_merca2',
        name: 'Sede Chimbote - Merca2',
        address: 'Merca2 (Jr Manuel Ruiz 222)',
        phone: '906497675',
        phoneDetails: '@merca2.chimbote',
        // Placeholder URL para Merca2 - ¡ACTUALIZAR LUEGO!
        mapIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1536.439887579463!2d-78.59232604880125!3d-9.0771960566955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ab81005603e3d9%3A0xf77a993bef7944f5!2sMERCA2!5e1!3m2!1ses!2spe!4v1763489586006!5m2!1ses!2spe"
    },
];

// --- COMPONENTE INTEGRADO SectionHeader ---
interface SectionHeaderProps {
    subtitle: string;
    title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title }) => {
    return (
        <div className="text-center mb-12">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-2">
                {subtitle}
            </h3>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                {title}
            </h2>
            <div className="mt-4 flex justify-center">
                <div className={`h-1 w-16 rounded-full ${PRIMARY_GREEN_BG}`}></div>
            </div>
        </div>
    );
};

export default function ContactSection() {
    // Estado para rastrear la sede seleccionada, por defecto la primera
    const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0]);
    // Estado para controlar qué mapas se han cargado (para evitar la recarga constante)
    const [loadedMaps, setLoadedMaps] = useState<Record<string, boolean>>({});
    // Estado para controlar la animación del contenido (para que no haya un CLS)
    const [contentKey, setContentKey] = useState(selectedBranch.id);

    // Efecto para actualizar la clave de contenido y simular una transición cuando cambia la sede
    useEffect(() => {
        // Al cambiar la sede, actualizamos la clave para reiniciar la animación del mapa/dirección
        const timer = setTimeout(() => {
            setContentKey(selectedBranch.id);
            // Marcamos el mapa actual como cargado
            setLoadedMaps(prev => ({ ...prev, [selectedBranch.id]: true }));
        }, 100); // Pequeño retraso para que la animación sea más notable

        return () => clearTimeout(timer);
    }, [selectedBranch.id]);

    // Función para manejar el clic en la sede
    const handleSelectBranch = (branch: Branch) => {
        if (branch.id !== selectedBranch.id) {
            setSelectedBranch(branch);
        }
    };

    // Determinar si el iframe ya debería cargarse (el que está activo O ya fue visitado)
    const shouldLoadIframe = loadedMaps[selectedBranch.id] || selectedBranch.id === branches[0].id;


    return (
        <section className="font-sans bg-white py-20 sm:py-24" id="contacto">
            <div className="max-w-7xl mx-auto px-6">

                {/* Encabezado */}
                <SectionHeader
                    subtitle="ESTAMOS EN TRES PUNTOS ESTRATÉGICOS"
                    title="UBICACIÓN Y CONTACTO"
                />

                {/* Contenido Principal: Horarios, Contacto y Mapa */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Columna 1: Información General y Horario */}
                    <div className="lg:col-span-1 space-y-8 p-6 rounded-xl shadow-2xl bg-gray-50 border border-gray-100 h-fit">

                        {/* Horario */}
                        <div className="flex items-center space-x-4">
                            <Clock className={`w-8 h-8 ${PRIMARY_GREEN_TEXT}`} />
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Horario de Atención</h4>
                                <p className={`${TEXT_GRAY} text-lg`}>16:30 - 23:00</p>
                                <p className={`text-sm font-semibold ${PRIMARY_GREEN_TEXT}`}>Todos los Días</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-4">
                            <Mail className={`w-8 h-8 ${PRIMARY_GREEN_TEXT}`} />
                            <div>
                                <h4 className="text-xl font-bold text-gray-900">Correo Electrónico</h4>
                                <a
                                    href="mailto:pizzeria_clarenz@hotmail.com"
                                    className={`text-lg hover:underline ${TEXT_GRAY}`}
                                >
                                    pizzeria_clarenz@hotmail.com
                                </a>
                            </div>
                        </div>

                        {/* Teléfonos (Un listado más genérico) */}
                        <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
                            <h4 className="text-xl font-bold text-gray-900 flex items-center">
                                <Phone className={`w-6 h-6 mr-3 ${PRIMARY_GREEN_TEXT}`} />
                                Teléfonos de Pedido
                            </h4>
                            {branches.map((branch) => (
                                <div key={branch.id}>
                                    <a
                                        href={`tel:+51${branch.phone}`}
                                        className={`text-lg font-medium hover:underline ${PRIMARY_GREEN_TEXT}`}
                                    >
                                        {branch.phone}
                                    </a>
                                    <p className="text-sm text-gray-500">
                                        {branch.phoneDetails}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Columna 2 & 3: Selector de Sede y Mapa Dinámico */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Pestañas de Navegación de Sedes */}
                        <div className="flex flex-wrap justify-center sm:justify-start gap-3 p-4 rounded-xl shadow-lg bg-gray-100">
                            {branches.map((branch) => (
                                <button
                                    key={branch.id}
                                    onClick={() => handleSelectBranch(branch)}
                                    className={`
                    px-5 py-2 text-base font-semibold transition-all duration-300 rounded-full flex items-center
                    ${selectedBranch.id === branch.id
                                            ? `${PRIMARY_GREEN_BG} text-white shadow-md transform scale-105`
                                            : `bg-white text-gray-800 hover:bg-gray-200 border border-gray-300`
                                        }
                  `}
                                >
                                    <MapPin className="w-5 h-5 mr-2" />
                                    {branch.name}
                                </button>
                            ))}
                        </div>

                        {/* Información Detallada de la Sede Seleccionada y Mapa */}
                        <div key={contentKey} className="bg-white p-6 rounded-xl shadow-xl border border-gray-100 animate-fadeIn">
                            <h3 className={`text-2xl font-extrabold mb-4 ${PRIMARY_GREEN_TEXT}`}>
                                {selectedBranch.name}
                            </h3>

                            {/* Dirección */}
                            <div className="flex items-start space-x-3 mb-6">
                                <MapPin className={`w-6 h-6 flex-shrink-0 ${PRIMARY_GREEN_TEXT}`} />
                                <p className={`text-lg font-medium ${TEXT_GRAY}`}>
                                    {selectedBranch.address}
                                </p>
                            </div>

                            {/* Contenedor del Mapa (Iframe de carga diferida) */}
                            <div className="relative w-full h-96 overflow-hidden rounded-lg border-4 border-gray-200">
                                {!shouldLoadIframe && (
                                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                        <p className={`text-xl font-bold ${PRIMARY_GREEN_TEXT}`}>
                                            Cargando Mapa...
                                        </p>
                                    </div>
                                )}
                                {/* El iframe solo se renderiza si ya ha sido visitado o si es la sede seleccionada */}
                                {(selectedBranch.id === contentKey) && (
                                    <iframe
                                        src={selectedBranch.mapIframeUrl}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={false}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`Mapa de ${selectedBranch.name}`}
                                        className="absolute inset-0 w-full h-full transition-opacity duration-700"
                                    ></iframe>
                                )}
                            </div>

                            {/* Botón de Cómo Llegar (Real) */}
                            {/* <div className="mt-6 text-center">
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedBranch.address)},+Chimbote,+Perú`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center px-8 py-3 text-lg font-bold uppercase tracking-wider text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl`}
                                    style={{ backgroundColor: PRIMARY_GREEN_TEXT.replace('text-', '#') }}
                                >
                                    <MapPin className="w-5 h-5 mr-2" />
                                    Obtener indicaciones
                                </a>
                            </div> */}

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}