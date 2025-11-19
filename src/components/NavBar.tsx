'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface NavLink {
    name: string;
    href: string;
}

const allNavLinks: NavLink[] = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/page/nosotros' },
    { name: 'Menú', href: '/page/menu' },
    { name: 'Contactos', href: '/page/contactos' },
];

// División de los enlaces para la navegación de escritorio (2 a la izquierda, 2 a la derecha)
const leftLinks = allNavLinks.slice(0, 2);
const rightLinks = allNavLinks.slice(2, 4);

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Barra de navegación fija con fondo blanco y sombra sutil
        <nav className="bg-white shadow-md sticky top-0 z-50 font-sans">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-20 relative">

                    {/* Navegación Escritorio - Todo en un contenedor flex */}
                    <div className="hidden md:flex flex-1 items-center justify-center">
                        <div className="flex items-center space-x-2">
                            {/* Enlaces Izquierdos */}
                            {leftLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 hover:text-red-700 px-3 py-2 text-base font-medium transition-all duration-200 hover:scale-105"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Logo Centro */}
                            <Link href="/" className="flex items-center px-6 hover:scale-105 transition-transform duration-200">
                                <Image
                                    src="/logo_clarenz_trattoria.png"
                                    alt="Clarenz Trattoria Logo"
                                    width={500}
                                    height={500}
                                    priority
                                    className="h-25 w-auto"
                                />
                            </Link>

                            {/* Enlaces Derechos */}
                            {rightLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-700 hover:text-red-700 px-3 py-2 text-base font-medium transition-all duration-200 hover:scale-105"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Vista Móvil - Logo Centrado */}
                    <div className="md:hidden flex flex-1 items-center justify-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo_clarenz_trattoria.png"
                                alt="Clarenz Trattoria Logo"
                                width={500}
                                height={500}
                                priority
                                className="h-25 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Botón de Menú Móvil */}
                    <div className="md:hidden absolute left-4 top-1/2 transform -translate-y-1/2">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-700 transition-all duration-200"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Abrir/Cerrar menú principal</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* Panel de Menú Móvil (Muestra todos los enlaces) */}
            <div
                className={`md:hidden absolute w-full shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                    {allNavLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-gray-800 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition duration-150"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}