import { HeroSlider } from "@/components/hero-slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, ShoppingCart, Key, Award, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-blue-700 to-gray-900 pt-20">
      <HeroSlider />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}

        {/* Main Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 lg:p-16 mb-8">
          {/* Services Overview */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-balance">
                Venta, instalación y mantenimiento de los{" "}
                <span className="text-primary">
                  grupos electrógenos más modernos y avanzados
                </span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light max-w-3xl mx-auto text-pretty">
                Ofreciendo soluciones energéticas personalizadas para cada
                proyecto
              </p>
              <Button
                size="lg"
                className="mt-6 bg-primary hover:bg-primary/90 text-white"
              >
                SABER MÁS
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
              <Link href="/services">
                <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer h-full bg-gray-50 rounded-3xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Wrench className="text-primary" size={36} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                      GENERADORES PARA
                      <br />
                      USO INDUSTRIAL
                      <br />
                      TRIFÁSICOS
                    </h3>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/venta">
                <Card className="border-2 border-primary bg-primary text-white transition-all hover:shadow-lg cursor-pointer h-full rounded-3xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShoppingCart className="text-white" size={36} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                      GENERADORES
                      <br />
                      MEDIANOS DE 110
                      <br />
                      HASTA 650 KVA
                    </h3>
                  </CardContent>
                </Card>
              </Link>

              <Link href="/alquiler">
                <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer h-full bg-gray-50 rounded-3xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Key className="text-primary" size={36} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                      GENERADORES
                      <br />
                      GRANDES DE 650
                      <br />
                      HASTA 2.500 KVA
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Brand Logos */}
            <div className="text-center mb-12">
              <p className="text-lg md:text-xl mb-8 font-light">
                En <strong>Nuevas Energías</strong> trabajamos con las{" "}
                <strong className="text-primary">
                  mejores marcas del sector energético
                </strong>
              </p>
              <p className="text-muted-foreground font-light mb-8 max-w-3xl mx-auto">
                Disponemos de un amplio rango de potencias, motores y modelos
                distintos, para que elijas según las necesidades concretas de tu
                actividad empresarial.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                VER TODOS NUESTROS GRUPOS ELECTRÓGENOS
              </Button>
            </div>
          </section>

          {/* About Section */}
          <section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-balance">
                  Nuestra Empresa
                </h2>
                <p className="text-lg text-muted-foreground font-light mb-6 leading-relaxed">
                  En Nuevas Energías trabajamos con las mejores marcas del
                  sector energético. Disponemos de un amplio rango de potencias,
                  motores y modelos distintos, para que elijas según las
                  necesidades concretas de tu actividad empresarial.
                </p>
                <p className="text-lg text-muted-foreground font-light mb-8 leading-relaxed">
                  Nuestro compromiso es ofrecer soluciones energéticas
                  confiables y eficientes, respaldadas por un equipo técnico
                  altamente capacitado y un servicio de atención al cliente
                  excepcional.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">
                      Más de 20 años de experiencia
                    </h4>
                    <p className="text-muted-foreground font-light">
                      Líderes en el sector energético
                    </p>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Conocer más
                </Button>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                <img
                  src="/industrial-generator-facility-with-modern-equipmen.jpg"
                  alt="Nuestra empresa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Services Card - Dark Theme */}
        {/* <div className="bg-gray-900 rounded-[2.5rem] shadow-2xl p-8 md:p-12 lg:p-16 mb-8 text-white">
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-balance">
                Nuestros servicios relacionados con la venta de grupos
                electrógenos
              </h2>
              <p className="text-lg text-gray-300 font-light max-w-3xl mx-auto">
                Ofrecemos tareas de mantenimiento preventivo y correctivo, así
                como un excelente servicio postventa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 border-gray-700 hover:border-primary transition-all rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 bg-gray-700">
                    <img
                      src="/technician-working-on-generator-control-panel.jpg"
                      alt="Control remoto de equipos"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Control remoto de equipos
                    </h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-primary transition-all rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 bg-gray-700">
                    <img
                      src="/preventive-maintenance-on-industrial-generator.jpg"
                      alt="Mantenimiento Preventivo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Mantenimiento Preventivo
                    </h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-primary transition-all rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 bg-gray-700">
                    <img
                      src="/yellow-portable-generator-maintenance.jpg"
                      alt="Mantenimiento Correctivo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Mantenimiento Correctivo
                    </h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 hover:border-primary transition-all rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 bg-gray-700">
                    <img
                      src="/generator-charging-station-service.jpg"
                      alt="Bancos de Carga"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Bancos de Carga
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="text-primary" size={32} />
                </div>
                <p className="text-sm font-light text-gray-300">
                  Excelente servicio técnico y de mantenimiento
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <p className="text-sm font-light text-gray-300">
                  Realizamos un diagnóstico completo
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-primary" size={32} />
                </div>
                <p className="text-sm font-light text-gray-300">
                  Reaccionamos todo tipo de informes
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="text-primary" size={32} />
                </div>
                <p className="text-sm font-light text-gray-300">
                  Diseñamos proyectos y soluciones
                </p>
              </div>
            </div>
          </section>
        </div> */}

        {/* Contact Section */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 lg:p-16">
          <section className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-balance">
              ¿Necesitas una solución energética?
            </h2>
            <p className="text-xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto text-pretty">
              Contáctanos y encuentra el generador que se adapta a tus
              necesidades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Phone className="mr-2" size={20} />
                Llamar ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                <Mail className="mr-2" size={20} />
                Solicitar presupuesto
              </Button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
