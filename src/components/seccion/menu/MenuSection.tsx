'use client';
import React, { useState } from 'react';

// Colores corporativos
const PRIMARY_GREEN = 'text-[#1D4D3D]'; 
const PRIMARY_GREEN_BG = 'bg-[#1D4D3D]'; 
const PRIMARY_GREEN_TEXT = 'text-[#1D4D3D]'; 
const TEXT_GRAY = 'text-gray-700';

/*
 * Componente SectionHeader Integrado:
 * Se define aquí para evitar el error de importación externa y hacer que el archivo sea autocontenido.
 */
interface SectionHeaderProps {
  subtitle: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title }) => {
  return (
    <div className="text-center mb-12">
      {/* Subtítulo */}
      <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-400 mb-2">
        {subtitle}
      </h3>
      
      {/* Título Principal */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
        {title}
      </h2>
      
      {/* Separador de acento */}
      <div className="mt-4 flex justify-center">
        <div className={`h-1 w-16 rounded-full ${PRIMARY_GREEN_BG}`}></div>
      </div>
    </div>
  );
};
/* Fin de SectionHeader Integrado */


// Estructura de datos del menú (Extraídos de las imágenes)
const menuData = {
  Clásicas: [
    { name: "Napolitana", ingredients: "Albahaca, mozzarella, suizo", price_p: 12.90, price_m: 18.90, price_g: 23.90 },
    { name: "Mozarella", ingredients: "Extra mozzarella, suizo", price_p: 14.50, price_m: 19.90, price_g: 25.90 },
    { name: "Americana", ingredients: "Jamón ahumado, mozzarella, suizo", price_p: 14.50, price_m: 19.90, price_g: 25.90 },
    { name: "Fugazza", ingredients: "Cebolla blanca, aceitunas, mozzarella, suizo", price_p: 14.50, price_m: 19.90, price_g: 25.90 },
    { name: "Pepperoni", ingredients: "Pepperoni, mozzarella, suizo", price_p: 16.90, price_m: 22.90, price_g: 29.90 },
    { name: "Hawaiana", ingredients: "Piña en almíbar, jamón, mozzarella, suizo", price_p: 16.90, price_m: 24.90, price_g: 31.90 },
  ],
  Populares: [
    { name: "Vegetariana", ingredients: "Cebolla blanca, pimiento, aceituna verde y negra, champiñón, mozzarella, suizo", price_p: 16.90, price_m: 22.90, price_g: 31.90 },
    { name: "Bacon", ingredients: "Tocino, aceituna verde, jamón ahumado, mozzarella, suizo", price_p: 16.90, price_m: 24.90, price_g: 31.90 },
    { name: "Boloñesa", ingredients: "Carne molida, chorizo, tocino ahumado, mozzarella, suizo", price_p: 19.90, price_m: 28.50, price_g: 36.50 },
    { name: "Tropical", ingredients: "Piña, durazno en almíbar, jamón ahumado, mozzarella, suizo", price_p: 19.90, price_m: 28.50, price_g: 36.50 },
  ],
  Especiales: [
    { name: "Ranchera", ingredients: "Chorizo, tocino, pimiento, choclo, mozzarella, suizo", price_p: 16.90, price_m: 26.50, price_g: 31.90 },
    { name: "Carnívora", ingredients: "Carne molida, salami, tocino, pimiento, mozzarella, suizo", price_p: 21.50, price_m: 29.90, price_g: 38.50 },
    { name: "Suprema", ingredients: "Carne molida, salchicha, chorizo, pimiento, cebolla, aceitunas, mozzarella, suizo", price_p: 19.90, price_m: 26.50, price_g: 36.50 },
    { name: "Española", ingredients: "Jamón, chorizo, cabanossi, aceituna negra, mozzarella, suizo", price_p: 21.50, price_m: 29.90, price_g: 38.50 },
    { name: "Italiana", ingredients: "Cebolla blanca, salami, jamón, tomate, pimiento, mozzarella, suizo", price_p: 16.90, price_m: 22.90, price_g: 31.90 },
    { name: "Argentina", ingredients: "Jamón, tocino, salami, chorizo, mozzarella, suizo", price_p: 18.90, price_m: 26.50, price_g: 33.90 },
    { name: "Frutos Secos", ingredients: "Pasas, pecana, almendra, ajonjolí, jamón, mozzarella, suizo", price_p: 18.90, price_m: 26.50, price_g: 36.50 },
    { name: "Peruana", ingredients: "Pollo, choclo, pimiento, cebolla blanca, papas al hilo, mozzarella, suizo", price_p: 19.90, price_m: 28.50, price_g: 36.50 },
    { name: "Clarenz'z (borde relleno)", ingredients: "Carne, pepperoni, cebolla, pimiento, pollo, durazno, almendra, mozzarella, suizo", price_p: 27.90, price_m: 36.90, price_g: 43.90 },
  ],
  'Otros Platos': [
    { name: "Pastas Frescas del Día", ingredients: "Pregunte por nuestra selección de ravioles o fetuccini artesanales.", price_p: null, price_m: 29.90, price_g: null },
    { name: "Lasaña Clásica", ingredients: "Capas de carne y bechamel, gratinada con mozzarella y parmesano.", price_p: null, price_m: 32.50, price_g: null },
    { name: "Ensalada Caprese", ingredients: "Tomates, mozzarella de búfala, albahaca fresca y aceite de oliva virgen.", price_p: null, price_m: 18.90, price_g: null },
  ],
};

type MenuCategory = keyof typeof menuData;

/**
 * Componente que muestra un ítem del menú con su nombre, ingredientes y precios.
 */
const MenuItem: React.FC<{ name: string; ingredients: string; price_p: number | null; price_m: number | null; price_g: number | null }> = ({ name, ingredients, price_p, price_m, price_g }) => {
  return (
    <div className="flex flex-col border-b border-gray-200 py-6 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 px-4 -mx-4 rounded-md">
      <div className="flex justify-between items-start">
        {/* Nombre del Producto */}
        <h3 className={`text-xl font-bold ${PRIMARY_GREEN_TEXT} mb-1.5`}>
          {name}
        </h3>
        
        {/* Precios (si aplica) */}
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 ml-4 text-right flex-shrink-0">
          {price_p && <span className="text-sm font-semibold text-gray-500">P: S/.{price_p.toFixed(2)}</span>}
          {price_m && <span className="text-sm font-semibold text-gray-500">M: S/.{price_m.toFixed(2)}</span>}
          {price_g && <span className="text-sm font-semibold text-gray-500">G: S/.{price_g.toFixed(2)}</span>}
        </div>
      </div>
      
      {/* Ingredientes (Descripción) */}
      <p className={`text-sm italic ${TEXT_GRAY} leading-relaxed`}>
        {ingredients}
      </p>
    </div>
  );
};


/**
 * Sección principal del Menú Interactivo de Clarenz Trattoria.
 * Utiliza pestañas (tabs) para una navegación dinámica.
 */

export default function MenuSection(){
    const [activeTab, setActiveTab] = useState<MenuCategory>('Clásicas');
  const tabs: MenuCategory[] = Object.keys(menuData) as MenuCategory[];

  return (
    <section className="font-sans bg-gray-50">
      
      {/* 1. Encabezado de Sección Reutilizable (Ahora integrado) */}
      <div className="pt-20 sm:pt-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <SectionHeader 
                subtitle="NUESTRAS CREACIONES"
                title="LA CARTA COMPLETA"
            />
        </div>
      </div>

      {/* 2. Contenido Principal del Menú con Pestañas */}
      <div className="pb-20 sm:pb-24 pt-10 sm:pt-12">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Indicadores de Tallas y Precios (Solo Pizzas) */}
          <div className="text-center mb-10 text-gray-500 text-sm italic">
            <span>Precios mostrados en Soles (S/.)</span> 
            {/* Solo muestra las tallas si es una categoría de pizza */}
            {(activeTab !== 'Otros Platos') && (
              <span className="block mt-1 font-semibold">
                Tallas: P (25cm) | M (30cm) | G (35cm)
              </span>
            )}
          </div>
          
          {/* Pestañas de Navegación */}
          <div className="flex justify-center flex-wrap gap-3 sm:gap-6 mb-12 border-b border-gray-200 pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  px-4 py-2 text-lg font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg
                  ${activeTab === tab 
                    ? `${PRIMARY_GREEN_BG} text-white shadow-lg` // Pestaña activa: fondo verde
                    : `bg-white ${PRIMARY_GREEN_TEXT} border border-gray-300 hover:border-[#1D4D3D] hover:shadow-md` // Pestaña inactiva
                  }
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Contenido de la Pestaña Activa */}
          {/* Usamos una clave dinámica para forzar la re-animación si se desea en un entorno real */}
          <div key={activeTab} className="transition-opacity duration-500 opacity-100 animate-fadeIn"> 
            
            {/* Listado de Productos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
              {menuData[activeTab].map((item, index) => (
                <MenuItem key={index} {...item} />
              ))}
            </div>

            {/* Mensaje si no hay productos (aunque el JSON de datos tiene contenido) */}
            {menuData[activeTab].length === 0 && (
              <p className="text-center text-gray-500 text-xl py-10">
                Pronto tendremos más delicias en esta sección.
              </p>
            )}
          </div>

        </div>
      </div>
      
      {/* 3. Llamada a la acción (Opcional, pero bueno para el menú) */}
      <div className={`py-12 text-center bg-gray-900`}>
        <p className="text-white text-xl font-medium mb-4">
          ¿Listo para probar la auténtica cocina napolitana?
        </p>
        <button 
          className={`px-8 py-3 text-lg font-bold uppercase tracking-wider text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl`}
          style={{ backgroundColor: PRIMARY_GREEN_TEXT.replace('text-', '#') }} // Usar el color verde como fondo
        >
          ¡PIDE AHORA!
        </button>
      </div>
      
    </section>
  );
}