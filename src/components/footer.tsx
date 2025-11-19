import React from 'react';
import { Facebook, Instagram, Phone, MapPin} from 'lucide-react';
import { IconWhatsapp } from '@/components/icons/iconWhatsapp';


// Colores corporativos
const PRIMARY_GREEN = '#1D4D3D';



// --- Datos de las Sedes (Mismos que el modal para consistencia) ---
const branchContacts = [
  {
    id: 'espinar',
    name: 'Sede Chimbote - Espinar',
    phone: '926134285',
    whatsappLink: '51926134285',
    address: 'Av. José Pardo 123',
  },
  {
    id: 'merca2',
    name: 'Sede Chimbote - Merca2',
    phone: '906497675',
    whatsappLink: '51906497675',
    address: 'C.C. Merca2 - Stand X',
  },
  {
    id: 'nvo_chimbote',
    name: 'Sede Nuevo Chimbote',
    phone: '929300157',
    whatsappLink: '51929300157',
    address: 'Av. Argentina S/N',
  },
];
// --- Datos de Redes Sociales (Mock) ---
const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/clarenztrattoria', color: 'hover:text-blue-500' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/clarenztrattoria', color: 'hover:text-pink-500' }
];

// Componente de Enlace de Contacto (Teléfono/WhatsApp)
const ContactLink = ({ icon: Icon, text, href, isWhatsapp = false }: { icon: React.ElementType, text: string, href: string, isWhatsapp?: boolean }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center text-sm font-light mb-1 ${isWhatsapp ? 'text-white' : 'text-gray-300'} 
      transition duration-300 ${isWhatsapp ? 'bg-green-600 px-3 py-1 rounded-full hover:bg-green-700' : 'hover:text-white'}`}
  >
    <Icon className="w-4 h-4 mr-2" />
    {text}
  </a>
);
/**
 * Componente Footer para Clarenz Trattoria.
 *
 * Utiliza un diseño minimalista, centrado en móvil.
 */
export default function Footer() {
  // Ajuste el año del copyright
  const currentYear = new Date().getFullYear() + 1; // Usamos 2025 o el año siguiente


  return (
    <footer className="bg-gray-900 text-gray-400 py-12 font-sans border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">

          {/* Columna 1: Branding, Descripción y Redes Sociales (Ahora Centrado) */}
          <div className="space-y-6 text-center md:col-span-1">
            <h2 className={`text-3xl font-extrabold uppercase text-white`}>
              CLARENZ TRATTORIA
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed mt-2 text-center md:text-left">
              Tendremos para ti la mejor pizza hecha en casa, que podrás disfrutar con amigos y familia a un buen precio y hecha con ingredientes seleccionados y de buena calidad, buscando reunir a las personas y llenarlos de gratos recuerdos…
            </p>

            {/* Redes Sociales */}
            <div className="flex justify-center space-x-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`text-gray-500 transition duration-300 ${social.color}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Información de Contacto (Ocupa las otras 2 columnas para centrar la atención) */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-bold mb-5 uppercase tracking-wider text-gray-200 text-center md:text-left">
              Sedes & Pedidos Rápido
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {branchContacts.map((branch) => (
                <div
                  key={branch.id}
                  className="p-4 bg-gray-800 rounded-lg shadow-inner flex flex-col items-center sm:items-start text-center sm:text-left"
                >
                  <h5 className="flex items-center text-md font-semibold mb-3 text-white">
                    <MapPin className={`w-4 h-4 mr-2`} style={{ color: PRIMARY_GREEN }} />
                    {branch.name}
                  </h5>

                  {/* <p className="text-gray-400 text-xs mb-3">{branch.address}</p> */}

                  <div className="flex flex-col space-y-2">
                    <ContactLink
                      icon={Phone}
                      text={branch.phone}
                      href={`tel:+51${branch.phone}`}
                    />
                    <ContactLink
                      icon={IconWhatsapp}
                      text="Pedir por WhatsApp"
                      href={`https://wa.me/${branch.whatsappLink}?text=Hola,%20quisiera%20hacer%20un%20pedido%20en%20${branch.name}.`}
                      isWhatsapp={true}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Separador inferior */}
        <div className={`mt-10 h-0.5 w-full mx-auto bg-gray-700`}></div>

        {/* PIE DE PÁGINA: Copyright a la izquierda, Diseño a la derecha */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-4 sm:space-y-0">
          <p className="text-gray-500 text-sm mb-2">
            Horario de atención: Todos los días - 16:30 - 23:00
          </p>
          {/* Copyright a la izquierda */}
          <p className="text-sm text-gray-500 order-2 sm:order-1 mb-2">
            &copy; {currentYear} Clarenz Trattoria. Todos los derechos reservados.
          </p>

          {/* Crédito de Diseño a la derecha (Estilo elegante mantenido) */}
          <div className="order-1 sm:order-2">
            <a
              href="https://alancueva.vercel.app/"
              className={`text-xs uppercase tracking-widest transition-colors duration-300 hover:text-white border-b border-dashed border-gray-600 hover:border-white`}
              style={{ color: '#888' }}
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