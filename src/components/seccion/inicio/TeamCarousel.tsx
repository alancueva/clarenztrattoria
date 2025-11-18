'use client';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

// Colores corporativos
const PRIMARY_GREEN = '#1D4D3D';

const teamMembers = [
  {
    name: "Maestro Pizzaiolo", 
    title: "ROL CLAVE", 
    description: "Custodio de la llama y la tradición.",
    imageUrl: "/images/team/imagen_1.jpg" 
  },
  {
    name: "Dirección de Experiencia en Sala",
    title: "ROL CLAVE",
    description: "Lidera la experiencia en sala con precisión.",
    imageUrl: "/images/team/imagen_2.jpg" 
  },
  {
    name: "Mixología y Bar",
    title: "ROL CLAVE",
    description: "Responsable de la carta líquida.",
    imageUrl: "/images/team/imagen_3.jpg"
  }
];

// Tiempo de transición en milisegundos (7 segundos)
const TRANSITION_TIME = 7000;


export default function TeamCarousel(){
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar al siguiente miembro del equipo
  const goToNext = useCallback(() => {
    setCurrentIndex(prevIndex => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  // useEffect para manejar el temporizador de cambio automático
  useEffect(() => {
    const timer = setInterval(goToNext, TRANSITION_TIME);
    // Limpieza del temporizador al desmontar el componente
    return () => clearInterval(timer);
  }, [goToNext]);

  const currentMember = teamMembers[currentIndex];

  return (
    <section className="py-30 sm:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Encabezado Serio y Minimalista */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-2">
            Nuestros Fundamentos
          </h2>
          <h1 className={`text-4xl md:text-5xl font-extrabold text-[${PRIMARY_GREEN}]`}>
            EL EQUIPO CLARENZ
          </h1>
          <div className={`mt-4 h-1 w-16 mx-auto bg-gray-300 rounded-full`}></div>
        </div>

        {/* Carrusel del Equipo (Solo Imagen) */}
        <div className="relative bg-gray-50/10 rounded-lg shadow-xl overflow-hidden min-h-[500px]">
          
          {/* Contenedor de la Imagen */}
          <div className="w-full h-[500px] relative">
            <Image
              key={currentMember.imageUrl} // Clave para forzar la re-renderización y la transición
              src={currentMember.imageUrl}
              alt={currentMember.name}
              width={5000}
              height={5000}
              priority
              className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100"
            />

            {/* Overlay para el Título (para mejorar la legibilidad sobre la imagen) */}
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-8 text-white">
                {/* ROL CLAVE (Subtítulo pequeño) */}
                {/* <h3 className={`text-lg font-bold uppercase tracking-widest text-gray-300 mb-1`}>
                    {currentMember.title}
                </h3> */}
                {/* DESCRIPCIÓN DEL ROL (Título grande) */}
                {/* <h2 className={`text-4xl font-extrabold mb-4`}>
                    {currentMember.name}
                </h2> */}
            </div>

            {/* Indicador de número de slide */}
            <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {currentIndex + 1} / {teamMembers.length}
            </div>
          </div>

          {/* Controles de navegación manual (opcional, pero útil) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? `w-8 bg-white` // Botón activo en blanco sobre el overlay
                    : 'w-2 bg-gray-400/70 hover:bg-white' // Botón inactivo
                }`}
                aria-label={`Ver miembro ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};