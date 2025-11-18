import Image from 'next/image';

const PRIMARY_GREEN = 'text-[#1D4D3D]';

interface SectionHeaderProps {
    subtitle: string;
    title: string;
}

export default function SectionHeader({ subtitle, title }: SectionHeaderProps) {

    return (
        <div className="relative w-full h-[400px] md:h-[500px] font-sans overflow-hidden">

            <Image
                src={'/images/shutterstock_5.jpg'}
                alt="Fondo de sección"
                width={1200}
                height={800}
                priority
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay Oscuro y Gradiente de Transición */}
            {/* El gradiente simula la transición suave del color oscuro del overlay al color claro de la sección de abajo. */}
            <div className="absolute inset-0 bg-black/50">
                {/* <div className="absolute bottom-0 left-0 w-full h-1/6 bg-gradient-to-t from-white to-transparent"></div> */}
            </div>

            {/* Contenido de Texto Centrado */}
            <div className="relative w-full h-full flex flex-col justify-center items-center text-center p-6 z-10">

                {/* Subtítulo: Pequeño, mayúsculas, color claro */}
                <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-300 mb-2 transition-opacity duration-500">
                    {subtitle}
                </h3>

                {/* Título Principal: Grande, negrita, impactante y en blanco para contraste */}
                <h1 className="text-5xl sm:text-7xl font-extrabold text-white transition-opacity duration-500 max-w-4xl">
                    {title}
                </h1>

                {/* Acento Sutil bajo el título */}
                <div className="mt-4 flex justify-center items-center space-x-2">
                    <div className={`h-1 w-16 rounded-full`} style={{ backgroundColor: PRIMARY_GREEN }}></div>
                    <div className={`h-0.75 w-10 bg-white/50 rounded-full`}></div>
                </div>

            </div>
        </div>
    );
}