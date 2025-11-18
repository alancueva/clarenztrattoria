const PRIMARY_GREEN = 'text-[#1D4D3D]';

export default function IntroductionText() {

    return (
        <div className="py-20 sm:py-24 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className={`text-3xl font-bold ${PRIMARY_GREEN} mb-6`}>
                    Tradición y Compromiso
                </h2>

                <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                    Clarenz Trattoria es la dedicación a la auténtica tradición italiana.
                    Desde su fundación, nuestra misión ha sido simple: honrar la pureza de los ingredientes
                    y la maestría del horno. Servimos una experiencia culinaria regida por un compromiso
                    inquebrantable con la excelencia y la historia de la cocina napolitana, buscando
                    siempre que cada visita se sienta como un retorno a la casa familiar.
                </p>

                <p className="mt-8 text-sm font-semibold tracking-wider uppercase text-gray-400">
                    Fundada en 2015 en Chimbote, Perú.
                </p>

            </div>
        </div>
    );
}