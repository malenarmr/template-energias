"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const slides = [
  {
    title: "Venta",
    subtitle: "Grupos Electrógenos",
    description: "Equipos nuevos de las mejores marcas del mercado",
    button: "consulta por el generador que se adapta a tus necesidades",
    image: "/venta-home-2.png",
  },
  {
    title: "Alquiler",
    subtitle: "Soluciones Temporales",
    description: "Energía confiable para eventos y proyectos",
    button: "Consulta por el generador que se adapta a tus necesidades ",
    image: "/alquiler-home.png",
  },
  {
    title: "Mantenimiento y reparación",
    subtitle: "Servicio Técnico",
    button: "consulta por el servicio que se adapta a tus necesidades",
    description:
      "Reparaciones, abonos, instalaciones, services preventivos y correctivos.",
    image: "/mantenimiento-home.png",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden w-full">
      <div className="relative w-full h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] h-full">
              {/* 🟢 TEXTO ARRIBA EN MOBILE */}
              <div className="h-[45vh] md:h-[90%] relative flex flex-col justify-center items-end px-6 pb-10 pt-6 md:py-12 md:px-12 lg:px-20 xl:px-24 order-1 md:order-1">
                <div className="max-w-2xl text-white w-full">
                  <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <div className="mb-6 md:mb-8">
                    <p className="text-base sm:text-lg md:text-base lg:text-xl text-gray-200 font-light">
                      {slide.description}
                    </p>
                  </div>
                  <div className="md:relative md:z-20">
                    <Button
                      size="lg"
                      className="bg-transparent text-white hover:bg-transparent font-semibold text-sm md:text-sm lg:text-base px-6 md:px-6 lg:px-8 py-5 md:py-5 lg:py-6 rounded-full border-2 border-white w-full sm:w-auto md:whitespace-nowrap"
                    >
                      <span className="hidden sm:inline">
                        {slide.button.toUpperCase()}
                      </span>
                      <span className="sm:hidden">ENCUENTRA TU GENERADOR</span>
                    </Button>
                  </div>
                </div>
              </div>

              {/* 🟣 IMAGEN ABAJO EN MOBILE */}
              <div className="h-[45vh] md:h-[90%] relative flex flex-col justify-center items-start order-2 md:order-2 overflow-visible">
                <div className="relative w-full md:w-full h-[60%] bg-blue-900 rounded-l-[60px] backdrop-blur-md overflow-visible">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    style={{ filter: "drop-shadow(0px 4px 60px #ffffff60)" }}
                    className="absolute sm-left-10 top-1/2 -translate-y-1/2 w-[40vw] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={prevSlide}
        className="absolute left-4 md:left-1 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="w-5 h-5 md:w-7 md:h-7 text-white" />
      </Button>

      <Button
        onClick={nextSlide}
        className="absolute right-4 md:right-1 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="w-5 h-5 md:w-7 md:h-7 text-white" />
      </Button>

      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8 md:w-10" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
