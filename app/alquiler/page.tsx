import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const rentalCategories = [
  {
    title: "Estacionarios",
    description:
      "Ideal para industrias, consorcios, hospitales, plantas de proceso, eventos de gran escala.",
    image: "/portable-generator.jpg",
    power: "Potencias de 20 kVA a 1.000 kVA",
  },
  {
    title: "Portátiles",
    description:
      "Ideal para uso domiciliario, eventos ,  obras, y herramientas portátiles.",
    image: "/stationary-industrial-generator.jpg",
    power: "Potencias de 3000 W a 20 kVA ",
  },
  {
    title: "Torres de Iluminación",
    description:
      " Portátiles con mástiles extensibles, luminarias LED de bajo consumo para. Ideales para obras  obras, eventos, e iluminación de emergencia.",
    image: "/lighting-tower-generator.jpg",
    power: "Potencia de 4000w",
  },
];

export default function AlquilerPage() {
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
          {/* <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-balance">Nuestra Flota</h2>
            <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto text-pretty">
              Disponemos de una amplia variedad de equipos para satisfacer todas tus necesidades energéticas
            </p>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rentalCategories.map((category, index) => (
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
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
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
          >
            Contactar ahora
          </Button>
        </div>
      </section>
    </main>
  );
}
