"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const slides = [
  {
    title: "Venta",
    subtitle: "Grupos Electrógenos",
    description: "Equipos nuevos de las mejores marcas del mercado",
    button: "Encontrá el generador que necesitas",
    buttonShort: "Encuentra tu generador",
    image: "/venta-home-2.png",
  },
  {
    title: "Alquiler",
    subtitle: "Soluciones Temporales",
    description: "Energía confiable para eventos y proyectos",
    button: "Encontrá el generador que necesitas",
    buttonShort: "Encuentra tu generador",
    image: "/alquiler-home.png",
  },
  {
    title: "Mantenimiento y reparación",
    subtitle: "Servicio Técnico",
    button: "consulta por el servicio que se adapta a tus necesidades",
    description:
      "Reparaciones, abonos, instalaciones, services preventivos y correctivos.",
    buttonShort: "Encuentra tu servicio",
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
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full ">
              {/* TEXTO - Arriba en mobile, izquierda en desktop */}
              <div className="h-[50vh] lg:h-full relative flex flex-col justify-start md:justify-center items-start md:px-12 pt-15 lg:px-20 xl:px-24 order-1">
                <div className="max-w-2xl text-white w-full flex text-center items-center justify-center flex-col lg:text-left lg:items-start">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight text-balance  ">
                    {slide.title}
                  </h1>
                  <div className="mb-6 lg:mb-8">
                    <p className="text-xl sm:text-xl lg:text-xl text-gray-200 font-light text-pretty">
                      {slide.description}
                    </p>
                  </div>
                  <div className="relative z-20">
                    <Button
                      size="lg"
                      className="bg-transparent text-white hover:bg-transparent font-semibold text-sm lg:text-base px-6 lg:px-8 py-5 lg:py-6 rounded-full border-2 border-white w-full sm:w-auto"
                    >
                      <span className="hidden sm:inline uppercase">
                        {slide.button}
                      </span>
                      <span className="sm:hidden uppercase">
                        {slide.buttonShort}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="h-[50vh] lg:h-full relative flex items-center justify-center order-2 px-4 lg:px-0 mb-[5vh]">
                <div className="relative w-full h-[70%] md:h-[60%] mb-[40vh] md:mb-[30vh] lg:mb-[10vh] lg:h-[60%] lg:bg-blue-900 rounded-l-[40px] lg:rounded-l-[60px] flex items-center justify-center overflow-visible">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    style={{ filter: "drop-shadow(0px 4px 60px #ffffff60)" }}
                    className="absolute left-1/2 md:left-1/2 -translate-x-1/2 lg:left-[10%] lg:translate-x-0 top-1/2 -translate-y-1/2 w-[70vw] sm:w-[50vw] lg:w-[35vw] max-w-md lg:max-w-none object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={prevSlide}
        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
      </Button>

      <Button
        onClick={nextSlide}
        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
      </Button>

      {/* Indicadores de slide */}
      <div className="absolute bottom-[15vh] lg:bottom-[20vh] left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8 lg:w-10" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
