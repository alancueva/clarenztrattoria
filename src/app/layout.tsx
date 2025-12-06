import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 // Básicos
  title: {
    template: "%s | Clarenz Trattoria",
    default: "Clarenz Trattoria - La Mejor Pizza Artesanal Italiana en en Chimbote y Nuevo Chimbote",
  },
  description:
    "Pizzería italiana auténtica en Chimbote y Nuevo Chimbote. Pizzas napolitanas al horno de leña, pasta fresca, antipasti y postres caseros. Reserva mesa o pide a domicilio. ¡Ven a disfrutar del verdadero sabor de Italia!",
};

// Configuración del viewport (importantísimo para móviles)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
