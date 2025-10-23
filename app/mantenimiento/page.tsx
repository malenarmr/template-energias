import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Wrench,
  ClipboardCheck,
  Zap,
  Calendar,
  CalendarCheck,
  CalendarCog,
  PlugZap,
} from "lucide-react";
import { text } from "stream/consumers";

const services = [
  {
    title: "Reparaciones",
    description:
      "Servicio de reparación especializado para todo tipo de grupos electrógenos. Diagnóstico preciso y soluciones efectivas.",
    icon: Wrench,
    color: "#fff",
    textColor: "#0D1436",
  },
  {
    title: "Service",
    description:
      "Mantenimiento preventivo programado para garantizar el óptimo funcionamiento y prolongar la vida útil de tus equipos.",
    icon: CalendarCog,
    color: "#fff",
    textColor: "#0D1436",
  },
  {
    title: "Instalaciones",
    description:
      "Instalación profesional de grupos electrógenos con todos los permisos y certificaciones necesarias.",
    icon: PlugZap,
    color: "#fff",
    textColor: "#0D1436",
  },
  {
    title: "Abonos",
    description:
      "Planes de mantenimiento con abono mensual que incluyen revisiones periódicas, repuestos y atención prioritaria.",
    icon: CalendarCheck,
    color: "#fff",
    textColor: "#0D1436",
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-balance">
            Service y Mantenimieto
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-pretty">
            Mantenimiento preventivo y correctivo para garantizar el
            funcionamiento óptimo de tus equipos
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: service.color,
                    borderColor: service.textColor,
                    borderWidth: "2px",
                    borderStyle: "solid",

                    boxShadow: `0 4px 10px ${service.textColor}`,
                  }}
                  className={` w-[100%] aspect-9/10 sm:aspect-9/12 lg:aspect-9/18 xl:aspect-9/12 rounded-[4rem] hover:scale-105 transition-transform duration-300 relative overflow-visible mx-auto flex justify-between flex-col
           `}
                >
                  <div
                    className={`relative h-64 bg-[${service.textColor}] flex items-center justify-center h-[50%] lg:h-[40%]`}
                  >
                    <Icon
                      className="w-50 h-50 sm:w-32 md:w-40 md:h-40 lg:w-30 lg:h-30"
                      style={{
                        color: service.textColor,
                        // filter: `drop-shadow(2px 4px 4px ${service.textColor})`,
                      }}
                    />
                  </div>
                  <div
                    className="flex flex-col items-center justify-around h-[50%] lg:h-[60%] text-center p-5 "
                    style={{ color: service.textColor }}
                  >
                    <h3 className="text-2xl lg:text-xl font-bold uppercase leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-[1.1rem] lg:text-[1rem] font-bold mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/instalaciones.jpg"
                alt="Mantenimiento preventivo"
                className="w-full h-full contain object-center"
              />
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/reparaciones.jpg"
                alt="Mantenimiento preventivo"
                className="w-full h-full contain object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary via-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">
              SECCIÓN DISPONIBLE
            </h2>
            <p className="text-xl font-light mb-8 max-w-2xl mx-auto text-pretty">
              Disponemos de un equipo técnico de guardia para atender cualquier
              emergencia con tus grupos electrógenos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Llamar ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">
            ¿Necesitas un servicio técnico?
          </h2>
          <p className="text-xl font-light mb-8 max-w-2xl mx-auto text-pretty">
            Contáctanos y te brindaremos la mejor solución para mantener tus
            equipos en perfecto estado
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100"
          >
            Contactar ahora
          </Button>
        </div>
      </section>
    </main>
  );
}
