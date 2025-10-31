import ButtonFlotante from "@/components/buttonFlotante";
import ContactForm from "@/components/contact";
import { HeroSlider } from "@/components/hero-slider";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, ShoppingCart, Key, Award, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-blue-800 to-gray-300 pt-20">
      <HeroSlider />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}

        {/* Main Content Card */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 lg:p-16 mb-8">
          {/* Services Overview */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-balance">
                Ofrecemos soluciones energéticas personalizadas
                <br /> para
                <strong> cada proyecto</strong>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 lg:gap-8 mb-16 justify-items-center">
              <Link href="/mantenimiento">
                <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer h-full bg-gray-50 rounded-3xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Wrench className="text-primary" size={36} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                      MANTENIMIENTO
                    </h3>
                    <h4>
                      Servicio técnico especializado y mantenimiento preventivo
                      para garantizar el óptimo funcionamiento de tus equipos.
                    </h4>
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
                      VENTA
                    </h3>
                    <h4>
                      Grupos electrógenos de las mejores marcas del sector
                      energético, con garantía y soporte técnico completo.
                    </h4>
                  </CardContent>
                </Card>
              </Link>

              <Link
                href="/alquiler"
                className="md:col-span-2 lg:col-span-1 md:max-w-md md:w-full"
              >
                <Card className="border-2 hover:border-primary transition-all hover:shadow-lg cursor-pointer h-full bg-gray-50 rounded-3xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Key className="text-primary" size={36} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">
                      ALQUILER
                    </h3>
                    <h4>
                      Soluciones de energía temporal para eventos, obras y
                      proyectos especiales con equipos de última generación.
                    </h4>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* Brand Logos */}
            <div className="text-center mb-12">
              <h4 className="text-2xl md:text-4xl lg:text-3xl font-semibold mb-6 text-balance">
                En <strong>Nuevas Energías</strong> trabajamos con las mejores
                marcas del sector energético
              </h4>
              <div className="flex flex-wrap justify-center items-center gap-12 py-4 [&_img]:grayscale">
                <Image
                  src="logos-empresas/pramac-logo.png"
                  alt="pracmac logo"
                  width={150}
                  height={100}
                />
                <Image
                  src="logos-empresas/Cummins-logo.png"
                  alt="pracmac logo"
                  width={70}
                  height={100}
                />
                <br></br>
                <Image
                  src="logos-empresas/perkins-logo.png"
                  alt="pracmac logo"
                  width={70}
                  height={100}
                />
                <Image
                  src="logos-empresas/volvo-logo.png"
                  alt="pracmac logo"
                  width={100}
                  height={100}
                />
                <Image
                  src="logos-empresas/scania-logo.png"
                  alt="pracmac logo"
                  width={100}
                  height={200}
                />
                <Image
                  src="logos-empresas/FPT-logo.png"
                  alt="pracmac logo"
                  width={200}
                  height={300}
                />
                <Image
                  src="logos-empresas/kipor-logo.png"
                  alt="pracmac logo"
                  width={200}
                  height={300}
                />
                <Image
                  src="logos-empresas/Kohler-logo.png"
                  alt="pracmac logo"
                  width={200}
                  height={300}
                />
                <Image
                  src="logos-empresas/logus-logo.png"
                  alt="pracmac logo"
                  width={200}
                  height={300}
                />
              </div>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
              >
                VER TODOS NUESTROS GRUPOS ELECTRÓGENOS
              </Button> */}
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
                  En Nuevas Energías trabajamos hace 20 años con las mejores
                  marcas del sector energético. Disponemos de un amplio rango de
                  potencias, motores y modelos distintos, para que elijas según
                  las necesidades concretas de tu actividad empresarial.
                </p>
                <p className="text-lg text-muted-foreground font-light mb-8 leading-relaxed">
                  Nuestro compromiso es ofrecer soluciones energéticas
                  confiables y eficientes, respaldadas por un equipo técnico
                  altamente capacitado y un servicio de atención al cliente
                  excepcional.<br></br> Brindamos atención personalizada
                  ofreciendo la solución en el día
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
                {/* <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white"
                >
                  Conocer más
                </Button> */}
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden">
                <img
                  src="/industrial-generator-showroom.jpg"
                  alt="Nuestra empresa"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>
        <div
          id="contact"
          className="bg-red-500"
          style={{ scrollMarginTop: "100px" }}
        ></div>
        <ContactForm />
        <ButtonFlotante />
      </div>
    </main>
  );
}
