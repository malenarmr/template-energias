import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, ClipboardCheck, Zap, Calendar } from "lucide-react"

const services = [
  {
    title: "Reparaciones",
    description:
      "Servicio de reparación especializado para todo tipo de grupos electrógenos. Diagnóstico preciso y soluciones efectivas.",
    icon: Wrench,
    image: "/generator-repair-technician.jpg",
  },
  {
    title: "Service",
    description:
      "Mantenimiento preventivo programado para garantizar el óptimo funcionamiento y prolongar la vida útil de tus equipos.",
    icon: ClipboardCheck,
    image: "/generator-maintenance-service.jpg",
  },
  {
    title: "Instalaciones",
    description: "Instalación profesional de grupos electrógenos con todos los permisos y certificaciones necesarias.",
    icon: Zap,
    image: "/generator-installation.jpg",
  },
  {
    title: "Abonos",
    description:
      "Planes de mantenimiento con abono mensual que incluyen revisiones periódicas, repuestos y atención prioritaria.",
    icon: Calendar,
    image: "/maintenance-contract.png",
  },
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-balance">Servicios Técnicos</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-pretty">
            Mantenimiento preventivo y correctivo para garantizar el funcionamiento óptimo de tus equipos
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto text-pretty">
              Ofrecemos tareas de mantenimiento preventivo y correctivo, así como un excelente servicio postventa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-colors">
                  <div className="relative h-64">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground font-light mb-6 leading-relaxed">{service.description}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">Solicitar servicio</Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">Mantenimiento Preventivo</h2>
              <p className="text-lg text-muted-foreground font-light mb-6 leading-relaxed">
                El mantenimiento preventivo es fundamental para garantizar la disponibilidad y confiabilidad de tus
                grupos electrógenos. Nuestro equipo técnico especializado realiza inspecciones periódicas siguiendo las
                recomendaciones del fabricante.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-lg font-light">Revisión completa de componentes mecánicos y eléctricos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-lg font-light">Cambio de aceite, filtros y refrigerante</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-lg font-light">Pruebas de funcionamiento bajo carga</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <p className="text-lg font-light">Informe detallado del estado del equipo</p>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Contratar mantenimiento
              </Button>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary via-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">Servicio de Emergencia 24/7</h2>
            <p className="text-xl font-light mb-8 max-w-2xl mx-auto text-pretty">
              Disponemos de un equipo técnico de guardia para atender cualquier emergencia con tus grupos electrógenos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Llamar ahora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">¿Necesitas un servicio técnico?</h2>
          <p className="text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto text-pretty">
            Contáctanos y te brindaremos la mejor solución para mantener tus equipos en perfecto estado
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Solicitar presupuesto
          </Button>
        </div>
      </section>
    </main>
  )
}
