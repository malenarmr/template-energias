import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const salesCategories = [
  {
    title: "Estacionarios",
    description: "Ideal para industrias, consorcios, hospitales y fábricas.",
    image: "/stationary-generator-for-sale.jpg",
    power: "Potencias de 20 kVA a 1.000 kVA",
  },
  {
    title: "Portátiles",
    description:
      "Grupos electrógenos portátiles de alta calidad para uso doméstico y comercial.",
    image: "/portable-generator-for-sale.jpg",
    power: "Potencias de 3000W a 20 KVA",
  },
  {
    title: "A Gas",
    description:
      " Son ideales para uso domiciliario, como ventaja se puede destacar su bajo costo de mantenimiento , su autonomía permanente y sus bajas emisiones, ideal para casas",
    image: "/gas-generator.jpg",
    power: "Potencias de 8.000W en adelante.",
  },
];

const brands = ["Baudouin", "Doosan", "Perkins", "Cummins", "Volvo Penta"];

export default function VentaPage() {
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
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">Nuestra Gama de Productos</h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto text-pretty">
              Encuentra el grupo electrógeno perfecto para tus necesidades
            </p>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {salesCategories.map((category, index) => (
              <Card
                key={index}
                className="overflow-hidden border-2 hover:border-primary transition-colors"
              >
                <div className="relative h-64">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    {category.title}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {category.power}
                  </p>
                  <p className="text-muted-foreground  mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">
              Trabajamos con las Mejores Marcas
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto text-pretty">
              Disponemos de un amplio rango de potencias, motores y modelos
              distintos
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 flex items-center justify-center h-32 border-2 hover:border-primary transition-colors"
              >
                <span className="text-2xl font-semibold text-gray-700">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="/industrial-generator-showroom.jpg"
                alt="Showroom"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">
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
              {/* <Button
                size="lg"
                className="mt-8 bg-primary hover:bg-primary/90 text-white"
              >
                Solicitar información
              </Button> */}
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
          >
            Contactar ahora
          </Button>
        </div>
      </section>
    </main>
  );
}
