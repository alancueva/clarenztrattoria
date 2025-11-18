
const PRIMARY_GREEN = 'text-[#1D4D3D]'; // Verde profundo del logo

/**
 * Componente de la sección "Acerca de Nosotros" para Clarenz Trattoria.
 *
 * Utiliza un estilo minimalista y un tono serio para reflejar la elegancia de la marca.
 * El contenido es corto y se enfoca en la autenticidad y la dedicación.
 */

export default function AboutSection(){
  return (
    <section className="py-20 sm:py-24 bg-gray-50 font-sans">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Título de la sección */}
        <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-2">
          Sobre Nosotros
        </h2>

        {/* Nombre de la Trattoria con acento */}
        <h1 className={`text-4xl md:text-5xl font-extrabold ${PRIMARY_GREEN} mb-8 border-b-4 border-gray-300 inline-block px-4 pb-2`}>
          CLARENZ TRATTORIA
        </h1>

        {/* Descripción minimalista y seria */}
        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Clarenz Trattoria es la dedicación a la auténtica tradición italiana.
          Desde su fundación, nuestra misión ha sido simple: honrar la pureza de los ingredientes
          y la maestría del horno. Servimos una experiencia culinaria regida por un compromiso
          inquebrantable con la excelencia y la historia de la cocina napolitana.
        </p>
        {/* Año de fundación (Agregado) */}
        <p className="mt-8 text-md font-semibold tracking-wider uppercase text-gray-400">
          Fundada en 2015
        </p>
        {/* Un pequeño acento visual y de seriedad */}
        <div className={`mt-10 h-1 w-20 mx-auto bg-gray-400 rounded-full`}></div>
      </div>
    </section>
  );
}