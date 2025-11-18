import { Mail, MapPin, Phone, Clock } from 'lucide-react'; 

// Colores corporativos
const PRIMARY_GREEN = '#1D4D3D'; 

/**
 * Componente Footer para Clarenz Trattoria.
 *
 * Utiliza un diseño minimalista, centrado en móvil.
 */
export default function Footer(){
  // Ajuste el año del copyright
  const currentYear = new Date().getFullYear() + 1; // Usamos 2025 o el año siguiente
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 font-sans border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Contenedor Principal: Se centrará en móvil y se distribuirá en desktop */}
        {/* Usamos justify-between en desktop para dar espacio entre las 4 columnas */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left space-y-8 md:space-y-0">
          
          {/* Columna 1: Logo */}
          <div className="flex flex-col items-center md:items-start space-y-3 max-w-xs">
            <h2 className={`text-3xl font-extrabold uppercase text-white`} style={{ color: PRIMARY_GREEN }}>
              CLARENZ TRATTORIA
            </h2>

             <p className="text-sm text-gray-400 leading-relaxed mt-2 text-center md:text-left">
              Tendremos para ti la mejor pizza hecha en casa, que podrás disfrutar con amigos y familia a un buen precio y hecha con ingredientes seleccionados y de buena calidad, buscando reunir a las personas y llenarlos de gratos recuerdos…
            </p>
          </div>

          {/* Columna 2: Información de Contacto */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-200 mb-2">
              Contacto
            </h3>
            <p className="flex items-center space-x-2">
              <MapPin size={18} className="text-gray-500" />
              <span>Sede Chimbote  Jr. Ladislao espinar 460</span>
            </p>
            <p className="flex items-center space-x-2">
              <MapPin size={18} className="text-gray-500" />
              <span>Sede Chimbote  Merca2 (Jr Manuel ruiz 222)</span>
            </p>
            <p className="flex items-center space-x-2">
              <MapPin size={18} className="text-gray-500" />
              <span>Sede Nuevo Chimbote Jr Nepeña 148 - Urb. Buenos Aires Mz C Lt 7</span>
            </p>
            <p className="flex items-center space-x-2 pt-2 border-t border-gray-700/50 w-full mt-4">
              <Phone size={18} className="text-gray-500" />
              <span>+51 929 300 157</span>
            </p>
            <p className="flex items-center space-x-2">
              <Mail size={18} className="text-gray-500" />
              <span>pizzeria_clarenz@hotmail.com </span>
            </p>
          </div>

          {/* Columna 3: Horarios de Apertura (Simplificado para "Todos los Días") */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-lg font-semibold uppercase tracking-wider text-gray-200 mb-2">
              Horarios
            </h3>
            
            <div className="flex flex-col items-center md:items-start space-y-1">
              <p className="text-sm font-semibold text-white flex items-center space-x-2">
                <Clock size={18} className="text-gray-500" />
                <span>16:30 - 23:00</span>
              </p>
            </div>

            {/* Indicador de "Todos los Días" */}
            <p className="text-xs text-gray-500 mt-2 font-bold tracking-widest">
              Todos los Días
            </p>

          </div>

        </div>
        
        {/* Separador inferior */}
        <div className={`mt-10 h-0.5 w-full mx-auto bg-gray-700`}></div>

        {/* PIE DE PÁGINA: Copyright a la izquierda, Diseño a la derecha */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0">
          
          {/* Copyright a la izquierda */}
          <p className="text-sm text-gray-500 order-2 sm:order-1">
            &copy; {currentYear} Clarenz Trattoria. Todos los derechos reservados.
          </p>

          {/* Crédito de Diseño a la derecha (Estilo elegante mantenido) */}
          <div className="order-1 sm:order-2">
            <a 
              href="https://alancueva.vercel.app/" // Enlace ficticio
              className={`text-xs uppercase tracking-widest transition-colors duration-300 hover:text-white border-b border-dashed border-gray-600 hover:border-white`}
              style={{ color: '#888' }} // Color gris claro para sobriedad
              target="_blank" 
              rel="noopener noreferrer"
            >
              Diseño Web: Alan Cueva
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}