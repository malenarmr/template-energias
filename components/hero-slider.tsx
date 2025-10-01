"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Venta",
    subtitle: "Grupos Electrógenos",
    description: "Equipos nuevos de las mejores marcas del mercado",
    image: "/grupo.png",
  },
  {
    title: "Alquiler",
    subtitle: "Soluciones Temporales",
    description: "Energía confiable para eventos y proyectos",
    image: "/grupo.png",
  },
  {
    title: "Mantenimiento",
    subtitle: "Servicio Técnico",
    description: "Reparaciones, instalaciones y service preventivo",
    image: "/grupo.png",
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
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 grid grid-cols-1 md:grid-cols-2 h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Columna izquierda: texto */}
            <div className="flex flex-col justify-center items-start ml-[5%] px-8 md:px-12 lg:px-16">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>
                <div className="mb-8">
                  <p className="text-base md:text-lg text-gray-200 font-light">
                    {slide.description}
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-transparent text-white hover:bg-transparent font-semibold text-base px-8 py-6 rounded-full border-2 border-white"
                >
                  ENCUENTRA EL GENERADOR QUE SE ADAPTA A TUS NECESIDADES
                </Button>
              </div>
            </div>

            {/* Columna derecha: imagen */}
            <div className="relative flex justify-center items-center h-3/4 self-center">
              <div className="absolute inset-0 bg-[#1FA8E5] rounded-l-[80px] md:rounded-l-[120px]"></div>
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="relative z-10 max-w-[80%] h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Botones */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={28} />
      </button>

      {/* Indicadores */}
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
