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
    color: "#336680",
    textColor: "#fff",
  },
  {
    title: "Service",
    description:
      "Mantenimiento preventivo programado para garantizar el óptimo funcionamiento y prolongar la vida útil de tus equipos.",
    icon: CalendarCog,
    color: "#4D8CA6",
    textColor: "#fff",
  },
  {
    title: "Instalaciones",
    description:
      "Instalación profesional de grupos electrógenos con todos los permisos y certificaciones necesarias.",
    icon: PlugZap,
    color: "#66BFFF",
    textColor: "#000000",
  },
  {
    title: "Abonos",
    description:
      "Planes de mantenimiento con abono mensual que incluyen revisiones periódicas, repuestos y atención prioritaria.",
    icon: CalendarCheck,
    color: "#99D6FF",
    textColor: "#000000",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  style={{ backgroundColor: service.color }}
                  className="overflow-hidden border-2 hover:border-gray-500 transition-colors shadow-[2px_4px_4px_rgba(0,0,0,0.2)]"
                >
                  <div
                    className={`  border-b border-gray-300 relative h-64 bg-[${service.color}] flex items-center justify-center`}
                  >
                    <Icon
                      size={200}
                      className="text-white drop-shadow-[2px_4px_4px_rgba(0,0,0,0.8)]"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3
                      className="text-2xl font-semibold mb-3"
                      style={{ color: service.textColor }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-muted-foreground font-bold mb-6 leading-relaxed"
                      style={{ color: service.textColor }}
                    >
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
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
                src="/generator-preventive-maintenance.jpg"
                alt="Mantenimiento preventivo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/generator-preventive-maintenance.jpg"
                alt="Mantenimiento preventivo"
                className="w-full h-full object-cover"
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
