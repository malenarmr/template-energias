"use client";

import { Button } from "@/components/ui/button";
import ModalContact from "@/components/modalContact";
import { Check } from "lucide-react";
import { useState } from "react";

const salesCategories = [
  {
    title: "Estacionarios",
    description: "Ideal para industrias, consorcios, hospitales y fábricas.",
    image: "/estacionarios.png",
    power: "Potencias de 20 kVA a 1.000 kVA",
    borderColor: "#fff",
    background: "#0D1436",
  },
  {
    title: "Portátiles",
    description:
      "Grupos electrógenos portátiles de alta calidad para uso doméstico y comercial.",
    image: "/portatiles.png",
    power: "Potencias de 3000W a 20 KVA",
    borderColor: "#0D1436",
    background: "#fff",
  },
  {
    title: "A Gas",
    description:
      "Ideales para uso domiciliario, destacan por bajo mantenimiento, autonomía y bajas emisiones",
    image: "/gas.png",
    power: "Potencias de 8.000W en adelante.",
    borderColor: "#fff",
    background: "#0D1436",
  },
];

export default function VentaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-balance">
            Venta de Grupos Electrógenos
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-pretty">
            Equipos de las mejores marcas del mercado con garantía y soporte
            técnico completo
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {salesCategories.map((category, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: category.background,
                  borderColor: category.borderColor,
                  borderWidth: "2px",
                  borderStyle: "solid",
                }}
                className={`aspect-[10/16] lg:aspect-[9/16] xl:aspect-[9/14] md:aspect-[8/14] md:w-[90%] w-[90%] rounded-[6rem] hover:scale-105 transition-transform duration-300 relative overflow-visible mx-auto
            md:last:col-span-2 md:last:mx-auto md:last:max-w-[45%] lg:last:col-span-1 lg:last:max-w-none`}
              >
                {/* Imagen centrada y sobresaliente */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 md:top-5 lg:top-5
           xl:top-15 w-[110%] top-10 h-[50%] flex justify-center z-20 items-center"
                >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="object-contain w-full h-auto md:h-auto md:w-full drop-shadow-[0_20px_20px_rgba(255,255,255,0.2)]"
                  />
                </div>

                {/* Contenido del card */}
                <div
                  className="h-full w-full flex flex-col items-center justify-end text-center pb-[20%] px-5 sm:pb-15 lg:pb-10 xl:pb-15 z-10"
                  style={{ color: category.borderColor }}
                >
                  <h3 className="text-[1.5rem] font-bold uppercase leading-tight">
                    {category.title}
                  </h3>
                  <p className="font-bold text-xl mb-2">{category.power}</p>
                  <p className="text-sm font-semibold">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          {/* <CHANGE> Changed grid to flex with flex-col-reverse on mobile, grid on desktop */}
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src="/ventas.png"
                alt="Showroom"
                className="w-full h-full object-cover object-bottom"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-3xl font-semibold mb-6 text-balance">
                ¿Por qué comprar con nosotros?
              </h2>
              <div className="space-y-4">
                {[
                  "Asesoramiento personalizado",
                  "Garantía oficial de fábrica",
                  "Instalación y puesta en marcha",
                  "Capacitación para el uso del equipo",
                  "Servicio técnico especializado",
                  "Repuestos disponibles",
                  "Disponibilidad de equipos nuevos y usados",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="text-primary" size={16} />
                    </div>
                    <p className="text-lg font-light">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">
            ¿Interesado en comprar?
          </h2>
          <p className="text-xl font-light mb-8 max-w-2xl mx-auto text-pretty">
            Nuestros especialistas te ayudarán a elegir tu equipo ideal
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100"
            onClick={() => setIsModalOpen(true)}
          >
            Contactar ahora
          </Button>
        </div>
      </section>
      <ModalContact isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </main>
  );
}
