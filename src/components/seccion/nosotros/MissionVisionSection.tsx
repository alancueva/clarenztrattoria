
const PRIMARY_GREEN_BG = 'bg-[#1D4D3D]';
const PRIMARY_GREEN_TEXT = 'text-[#1D4D3D]';


export default function MissionVisionSection() {
    return (
        <div className="py-16 sm:py-20 bg-gray-50 font-sans">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

                    {/* Bloque: Misión */}
                    <div className="p-8 border border-gray-200 rounded-xl shadow-lg bg-white text-center md:text-left">
                        <div className={`inline-block ${PRIMARY_GREEN_BG} text-white px-4 py-1.5 text-sm font-bold uppercase tracking-widest rounded-full mb-4`}>
                            Misión
                        </div>
                        <h3 className={`text-3xl font-extrabold ${PRIMARY_GREEN_TEXT} mb-4`}>
                            La Autenticidad en la Mesa
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Nuestra misión es transportar a nuestros clientes a la esencia de Nápoles a través
                            de la más pura pizza artesanal y la cocina tradicional italiana, utilizando
                            exclusivamente ingredientes de la más alta calidad y un servicio que irradie
                            la calidez familiar de la Trattoria.
                        </p>
                    </div>

                    {/* Bloque: Visión */}
                    <div className="p-8 border border-gray-200 rounded-xl shadow-lg bg-white text-center md:text-left">
                        <div className={`inline-block ${PRIMARY_GREEN_BG} text-white px-4 py-1.5 text-sm font-bold uppercase tracking-widest rounded-full mb-4`}>
                            Visión
                        </div>
                        <h3 className={`text-3xl font-extrabold ${PRIMARY_GREEN_TEXT} mb-4`}>
                            Referente de Tradición
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Ser reconocidos como el principal referente de la cocina italiana auténtica en Chimbote
                            y el norte de Perú, expandiendo nuestro legado sin comprometer la calidad,
                            y convirtiéndonos en un punto de encuentro donde se crean recuerdos perdurables
                            alrededor de la mejor comida.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
}