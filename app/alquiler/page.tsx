import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const rentalCategories = [
  {
    title: "Portátiles",
    description: "Grupos electrógenos portátiles ideales para eventos, obras pequeñas y aplicaciones móviles.",
    image: "/portable-generator.jpg",
    power: "Hasta 20 KVA",
  },
  {
    title: "Estacionarios",
    description:
      "Equipos de mayor potencia para instalaciones fijas, obras de construcción y aplicaciones industriales.",
    image: "/stationary-industrial-generator.jpg",
    power: "De 20 a 500 KVA",
  },
  {
    title: "Torres de Iluminación",
    description: "Soluciones de iluminación autónomas para eventos nocturnos, obras y seguridad.",
    image: "/lighting-tower-generator.jpg",
    power: "Iluminación LED de alta eficiencia",
  },
]

export default function AlquilerPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-balance">Alquiler de Grupos Electrógenos</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-pretty">
            Soluciones de energía temporal para eventos, obras y proyectos especiales
          </p>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">Nuestra Flota</h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto text-pretty">
              Disponemos de una amplia variedad de equipos para satisfacer todas tus necesidades energéticas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rentalCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary transition-colors">
                <div className="relative h-64">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
                  <p className="text-primary font-semibold mb-4">{category.power}</p>
                  <p className="text-muted-foreground font-light mb-6 leading-relaxed">{category.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Solicitar cotización</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">Ventajas del Alquiler</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexibilidad</h3>
              <p className="text-muted-foreground font-light">Alquila solo por el tiempo que necesites</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sin mantenimiento</h3>
              <p className="text-muted-foreground font-light">Nos encargamos de todo el mantenimiento</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Entrega rápida</h3>
              <p className="text-muted-foreground font-light">Instalación y puesta en marcha incluida</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Soporte 24/7</h3>
              <p className="text-muted-foreground font-light">Asistencia técnica disponible siempre</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">¿Listo para alquilar?</h2>
          <p className="text-xl font-light mb-8 max-w-2xl mx-auto text-pretty">
            Contáctanos y te ayudaremos a encontrar la solución perfecta para tu proyecto
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Contactar ahora
          </Button>
        </div>
      </section>
    </main>
  )
}
