import React from 'react';

const PRIMARY_GREEN = 'text-[#1D4D3D]'; // Verde profundo del logo
const BORDER_GREEN = 'border-[#1D4D3D]';

interface HighlightItemProps {
  title: string;
  description: string;
  imagePlaceholder: string;
}

/**
 * Componente individual para destacar un producto (Pizza, Pasta, Cóctel).
 */
const HighlightItem: React.FC<HighlightItemProps> = ({ title, description, imagePlaceholder }) => {
  return (
    <div className="flex flex-col w-72 sm:w-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.02]">
      
      {/* Área de la imagen con un placeholder elegante */}
      <div 
        className={`w-full h-48 bg-gray-200 flex items-center justify-center ${BORDER_GREEN} border-b-4`}
        // Aquí se usaría una URL de imagen real. Usamos un placeholder con texto para la demostración.
      >
        <span className={`text-xl font-bold uppercase ${PRIMARY_GREEN}`}>{imagePlaceholder}</span>
        {/* Usar una etiqueta de imagen real: <img src="..." alt={title} className="w-full h-full object-cover" /> */}
      </div>

      {/* Contenido de la tarjeta con padding interior incrementado a 'p-6' */}
      <div className="p-6 text-left"> 
        {/* Título del Producto */}
        <h3 className={`text-2xl font-bold ${PRIMARY_GREEN} mb-2`}>
          {title}
        </h3>
        
        {/* Descripción corta */}
        <p className="text-gray-700 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};


export default function HighlightsSection(){
  const highlights = [
    {
      title: "La Pizza Classica",
      description: "La pureza de la masa madre y los ingredientes D.O.P. italianos, horneada a la perfección en piedra volcánica.",
      imagePlaceholder: "PIZZA",
    },
    {
      title: "Pastas Artesanales",
      description: "Selección de pastas frescas y rellenas. Recetas transmitidas, ejecutadas con la precisión de la alta cocina.",
      imagePlaceholder: "PASTAS",
    },
    {
      title: "Mixología de Autor",
      description: "Cócteles diseñados para complementar la experiencia. Clásicos redefinidos y mezclas exclusivas con espíritu europeo.",
      imagePlaceholder: "CÓCTELES",
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Encabezado con el mismo estilo minimalista */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-2">
            Nuestra Maestría
          </h2>
          <h1 className={`text-4xl md:text-5xl font-extrabold ${PRIMARY_GREEN}`}>
            UNA CARTA INQUEBRANTABLE
          </h1>
          <div className={`mt-4 h-1 w-16 mx-auto bg-gray-300 rounded-full`}></div>
        </div>

        {/* Contenedor de las tarjetas de destacados */}
        {/* En móvil: overflow-x-scroll para vista horizontal. En desktop: grid de 3 columnas */}
        <div className="flex overflow-x-scroll snap-x snap-mandatory gap-6 pb-4 sm:overflow-hidden sm:grid sm:grid-cols-3 sm:gap-8 justify-start sm:justify-center">
          
          {highlights.map((item, index) => (
            <div key={index} className="snap-center flex-shrink-0">
              <HighlightItem {...item} />
            </div>
          ))}

        </div>
        
        {/* Indicación para móvil, solo si el ancho es pequeño */}
        <p className="mt-8 text-center text-xs text-gray-400 sm:hidden">
          {'< DESLIZA PARA VER MÁS >'}
        </p>

      </div>
    </section>
  );
}