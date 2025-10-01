import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const salesCategories = [
  {
    title: "Portátiles",
    description: "Grupos electrógenos portátiles de alta calidad para uso doméstico y comercial ligero.",
    image: "/portable-generator-for-sale.jpg",
    power: "De 2 a 20 KVA",
  },
  {
    title: "Estacionarios",
    description: "Equipos industriales de gran potencia para instalaciones permanentes y aplicaciones críticas.",
    image: "/stationary-generator-for-sale.jpg",
    power: "De 20 a 2500 KVA",
  },
  {
    title: "A Gas",
    description: "Generadores ecológicos que funcionan con gas natural o GLP, ideales para uso continuo.",
    image: "/gas-generator.jpg",
    power: "De 10 a 500 KVA",
  },
]

const brands = ["Baudouin", "Doosan", "Perkins", "Cummins", "Volvo Penta"]

export default function VentaPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 text-balance">Venta de Grupos Electrógenos</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-pretty">
            Equipos de las mejores marcas del mercado con garantía y soporte técnico completo
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">Nuestra Gama de Productos</h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto text-pretty">
              Encuentra el grupo electrógeno perfecto para tus necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {salesCategories.map((category, index) => (
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
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">Ver modelos</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">Trabajamos con las Mejores Marcas</h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto text-pretty">
              Disponemos de un amplio rango de potencias, motores y modelos distintos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 flex items-center justify-center h-32 border-2 hover:border-primary transition-colors"
              >
                <span className="text-2xl font-semibold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img src="/industrial-generator-showroom.jpg" alt="Showroom" className="w-full h-full object-cover" />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">¿Por qué comprar con nosotros?</h2>
              <div className="space-y-4">
                {[
                  "Garantía oficial de fábrica",
                  "Instalación y puesta en marcha incluida",
                  "Capacitación para el uso del equipo",
                  "Servicio técnico especializado",
                  "Repuestos originales disponibles",
                  "Financiación disponible",
                  "Asesoramiento personalizado",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="text-primary" size={16} />
                    </div>
                    <p className="text-lg font-light">{feature}</p>
                  </div>
                ))}
              </div>
              <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-white">
                Solicitar catálogo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">¿Interesado en comprar?</h2>
          <p className="text-xl font-light mb-8 max-w-2xl mx-auto text-pretty">
            Nuestros especialistas te ayudarán a elegir el equipo ideal para tu aplicación
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Contactar a un asesor
          </Button>
        </div>
      </section>
    </main>
  )
}
