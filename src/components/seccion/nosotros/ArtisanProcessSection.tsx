import { Leaf, Flame, Utensils, Wheat } from 'lucide-react'; 


const PRIMARY_GREEN_TEXT = 'text-[#1D4D3D]'; 
const BG_LIGHT_GRAY = 'bg-gray-100';


export default function ArtisanProcessSection() {

    const processItems = [
        {
            icon: <Wheat size={32} className={PRIMARY_GREEN_TEXT} />,
            title: "Masa Madre de Larga Fermentación",
            description: "Utilizamos una levadura madre centenaria, respetando tiempos de fermentación de más de 48 horas. Esto garantiza una masa ligera, digestiva y con un sabor incomparable.",
        },
        {
            icon: <Leaf size={32} className={PRIMARY_GREEN_TEXT} />,
            title: "Ingredientes D.O.P. y Locales",
            description: "Selección rigurosa de tomates San Marzano D.O.P., mozzarella fresca y aceite de oliva extra virgen. Complementamos con los mejores productos frescos de Chimbote.",
        },
        {
            icon: <Flame size={32} className={PRIMARY_GREEN_TEXT} />,
            title: "Cocción en Horno de Piedra",
            description: "Nuestras pizzas se cocinan a altas temperaturas en un auténtico horno de piedra. El calor uniforme y rápido sella los sabores y otorga el borde crujiente y ahumado perfecto.",
        },
        {
            icon: <Utensils size={32} className={PRIMARY_GREEN_TEXT} />,
            title: "Salsas Artesanales",
            description: "Cada salsa, desde la boloñesa hasta el pesto, se prepara diariamente en nuestra cocina, sin conservantes, siguiendo las recetas transmitidas por la Nonna.",
        },
    ];

    return (
        <div className={`py-20 sm:py-24 ${BG_LIGHT_GRAY} font-sans`}>
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-2">
                        Nuestros Pilares de Calidad
                    </h2>
                    <h1 className={`text-4xl md:text-5xl font-extrabold ${PRIMARY_GREEN_TEXT}`}>
                        EL ARTE DETRÁS DE LA PIZZA
                    </h1>
                    <div className="mt-4 flex justify-center items-center space-x-2">
                        <div className={`h-1 w-16 rounded-full`} style={{ backgroundColor: PRIMARY_GREEN_TEXT }}></div>
                        <div className={`h-0.5 w-10 bg-gray-400 rounded-full`}></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {processItems.map((item, index) => (
                        <div key={index} className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition-shadow duration-300 border-t-4" style={{ borderColor: PRIMARY_GREEN_TEXT }}>
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <h3 className={`text-xl font-bold ${PRIMARY_GREEN_TEXT} mb-3`}>
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}