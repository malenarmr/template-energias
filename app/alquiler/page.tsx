"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ModalContact from "@/components/modalContact";

const rentalCategories = [
  {
    title: "Estacionarios",
    description:
      "Ideal para industrias, consorcios, hospitales, plantas de proceso, eventos de gran escala.",
    image: "/estacionario-alquiler.png",
    power: "Potencias de 20 kVA a 1.000 kVA",
    borderColor: "#fff",
    background: "#0D1436",
  },
  {
    title: "Portátiles",
    description:
      "Ideal para uso domiciliario, eventos ,  obras, y herramientas portátiles.",
    image: "/portatiles.png",
    power: "Potencias de 3000 W a 20 kVA ",
    borderColor: "#0D1436",
    background: "#fff",
  },
  {
    title: "Torres de Iluminación",
    description:
      " Portátiles con mástiles extensibles, luminarias LED de bajo consumo para. Ideales para obras  obras, eventos, e iluminación de emergencia.",
    image: "/torres(23).png",
    power: "Potencia de 18.000W a 4.000W",
    borderColor: "#fff",
    background: "#0D1436",
  },
];

export default function AlquilerPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-balance">
            Alquiler de Equipos
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-pretty">
            Contamos equipos que se ajustan a cada necesidad
          </p>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {rentalCategories.map((category, index) => (
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
                  className={`absolute left-1/2 -translate-x-1/2 flex justify-center z-20 items-center
    ${
      category.title === "Torres de Iluminación"
        ? "-top-0 md:-top-10 lg:-top-12 xl:-top-10 w-[80%] md:w-[90%]"
        : "top-10 md:top-5 lg:top-5 xl:top-15 w-[110%]"
    }`}
                >
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="object-contain w-full h-full md:h-auto md:w-full drop-shadow-[0_20px_20px_rgba(255,255,255,0.2)]"
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

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">
              Ventajas del Alquiler
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexibilidad</h3>
              <p className="text-muted-foreground font-light">
                Alquila solo por el tiempo que necesites
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sin mantenimiento</h3>
              <p className="text-muted-foreground font-light">
                Nos encargamos de todo el mantenimiento
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Entrega rápida</h3>
              <p className="text-muted-foreground font-light">
                Servicio en el día
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">
            ¿Listo para alquilar?
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
