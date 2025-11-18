'use client';
import { useState, useMemo } from 'react';
// import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';


// Tipos de pizza disponibles
interface PizzaType {
    id: string;
    name: string;
    price: number;
    image: string; // URL simulada
    description: string;
}

// Tamaños de pizza con un factor de escala
interface PizzaSize {
    label: 'S' | 'M' | 'L' | 'XL';
    scale: number; // Factor para escalar la imagen (e.g., 0.8, 1.0, 1.2, 1.4)
}

const PIZZA_SIZES: PizzaSize[] = [
    { label: 'S', scale: 1.0 },
    { label: 'M', scale: 1.25 },
    { label: 'L', scale: 1.5 },
    { label: 'XL', scale: 1.75 },
];

// Datos de ejemplo
const PIZZA_MENU: PizzaType[] = [
    // { id: 'margherita', name: 'Margherita', price: 12, image: '/images/pizzas/pepperoni.png', description: 'La clásica con tomate, mozzarella y albahaca.' },
    { id: 'pepperoni', name: 'Pepperoni', price: 15, image: '/images/pizzas/pepperoni.png', description: 'Salsa roja, mozzarella y rebanadas de pepperoni.' },
    //   { id: 'funghi', name: 'Funghi e Prosciutto', price: 14, image: 'https://placehold.co/800x800/f8f8f8/282828?text=Funghi', description: 'Champiñones frescos, jamón cocido y aceite de trufa.' },
    //   { id: 'pesto', name: 'Pesto y Rúcula', price: 16, image: 'https://placehold.co/800x800/f8f8f8/282828?text=Pesto', description: 'Base de pesto, queso de cabra, cherrys y rúcula fresca.' },
    //   { id: 'diavola', name: 'Diavola Piccante', price: 17, image: 'https://placehold.co/800x800/f8f8f8/282828?text=Diavola', description: 'Salsa picante, Nduja y mozzarella ahumada.' },
];

export default function PizzaSelector(){
    const [selectedPizza, setSelectedPizza] = useState<PizzaType>(PIZZA_MENU[0]);
    const [selectedSize, setSelectedSize] = useState<PizzaSize>(PIZZA_SIZES[1]); // Por defecto 'M'

    // Calcula el ángulo para posicionar cada etiqueta de pizza
    // const angles = useMemo(() => {
    //     const totalPizzas = PIZZA_MENU.length;
    //     // Distribuir en un semicírculo de 180 grados (de 180 a 360 grados)
    //     const startAngle = 180;
    //     const step = 180 / (totalPizzas - 1);

    //     return PIZZA_MENU.map((_, index) => startAngle + index * step);
    // }, []);

    // Estilos del color de la marca
    const brandGreen = 'text-[#1F4C47]'; // Verde oscuro de Clarenz
    const brandRed = 'bg-[#B05B47] hover:bg-[#A04A37]'; // Rojo terracota de Clarenz
    const brandRedText = 'text-[#B05B47]';

    // --- Función para renderizar una etiqueta en la posición radial ---
    const renderRadialLabel = (pizza: PizzaType, angle: number, index: number) => {
        // Calculamos la posición usando trigonometría (radio 40vh)
        const radius = 40; // 40vh de radio
        const rad = angle * (Math.PI / 180);
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        const isSelected = pizza.id === selectedPizza.id;

        return (
            <button
                key={pizza.id}
                onClick={() => setSelectedPizza(pizza)}
                className={`absolute text-sm font-semibold transition-all duration-300 transform 
                ${isSelected ? `${brandRedText} scale-110` : 'text-gray-500 hover:text-gray-900'}
                `}
                style={{
                    // Mueve el label a su posición radial (usando 'vh' como unidad para el tamaño)
                    top: `calc(50% - ${y}vh)`,
                    left: `calc(50% + ${x}vh)`,
                    // Asegura que el texto esté centrado en el punto
                    transform: 'translate(-50%, -50%)',
                    whiteSpace: 'nowrap',
                    zIndex: 20
                }}
            >
                {pizza.name.toUpperCase()}
                {/* Punto de selección */}
                <span
                    className={`absolute left-1/2 top-full mt-1 w-2 h-2 rounded-full transition-all duration-300 
                ${isSelected ? brandRed : 'bg-gray-300'}
                `}
                    style={{ transform: 'translate(-50%, 0)' }}
                />
            </button>
        );
    };

    // --- Renderizado del Componente ---
    return (
        // Contenedor principal de pantalla completa y centrado
        <section className="min-h-screen w-full flex flex-col items-center justify-center bg-white p-4">

            {/* 1. Título y Control de Tamaño */}
            <div className="flex flex-col items-center mb-10">
                <h1 className={`text-4xl md:text-6xl font-extrabold ${brandGreen} mb-2`}>
                    Diseña Tu Pizza
                </h1>
                <p className="text-xl text-gray-600 mb-6">Elige tu estilo y el tamaño perfecto.</p>

                {/* Control de Tamaño (S, M, L, XL) */}
                <div className="flex space-x-4 border border-gray-300 rounded-full p-1 shadow-inner">
                    {PIZZA_SIZES.map((size) => (
                        <button
                            key={size.label}
                            onClick={() => setSelectedSize(size)}
                            className={`w-10 h-10 rounded-full text-lg font-bold transition-all duration-200 
                ${size.label === selectedSize.label
                                    ? `${brandRed} text-white shadow-lg`
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }
              `}
                        >
                            {size.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* 2. Área Central de la Pizza (Contenedor que gestiona el layout radial) */}
            <div className="relative flex items-center justify-center w-full h-[90vh] overflow-hidden pt-5 pb-5">

                {/* Círculo de la base (simula el borde del plato o la base de opciones) */}
                <div className="absolute w-[90vh] h-[90vh] rounded-full border border-gray-200 border-dashed" />

                {/* Etiquetas de Pizza Radiales */}
                {/* {PIZZA_MENU.map((pizza, index) => renderRadialLabel(pizza, angles[index], index))} */}

                {/* --- Imagen de la Pizza (el centro de la interacción) --- */}
                <div className="relative z-10 p-6 bg-white rounded-full shadow-2xl transition-all duration-500"
                    style={{
                        transform: `scale(${selectedSize.scale})`, // Escala según el tamaño
                        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)'
                    }}
                >
                    <Image
                        src={selectedPizza.image}
                        alt={`Pizza ${selectedPizza.name}`}
                        width={500}
                        height={500}
                        priority
                        // Usamos un tamaño base grande y la escala aplicada en el div contenedor
                        className="w-[300px] h-[300px] rounded-full object-cover transition-all duration-500 ease-in-out"
                    // onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x800/f0f0f0/888888?text=Pizza+Clarenz'; }}
                    />

                    {/* Información y Botón de Ordenar (Superpuesto en la pizza) */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/40 bg-opacity-30 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                        <h3 className="text-2xl font-bold">{selectedPizza.name}</h3>
                        <p className="text-sm italic mb-2 px-6 text-center">{selectedPizza.description}</p>
                        {/* <p className="text-4xl font-extrabold mb-4">
                            ${(selectedPizza.price * selectedSize.scale).toFixed(2)}
                        </p> */}
                        {/* <button className={`flex items-center space-x-2 px-6 py-3 rounded-full text-lg font-semibold shadow-xl ${brandRed}`}>
                            <ShoppingCart size={20} />
                            <span>Añadir al Pedido</span>
                        </button> */}
                    </div>
                </div>

            </div>

            {/* Texto de información adicional o precio flotante (solo en escritorio) */}
            {/* <div className="hidden md:block mt-10 text-center">
                <p className="text-2xl font-light text-gray-700">
                    Actualmente seleccionada: <span className={`${brandRedText} font-bold`}>{selectedPizza.name}</span> en tamaño <span className={`${brandRedText} font-bold`}>{selectedSize.label}</span>.
                </p>
            </div> */}

        </section>
    );
}