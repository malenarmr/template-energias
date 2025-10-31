"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModalContact from "./modalContact";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/alquiler", label: "Alquiler" },
    { href: "/venta", label: "Venta" },
    { href: "/mantenimiento", label: "Mantenimiento" },
  ];

  const handleContactClick = () => {
    if (pathname === "/") {
      // Si estamos en la página de inicio, hacer scroll a la sección
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // Si estamos en otra página, abrir el modal
      setIsModalOpen(true);
    }
    setIsOpen(false); // Cerrar menú móvil si está abierto
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-black.png"
                alt="Nuevas Energías"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-light text-lg"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="bg-primary hover:bg-primary/90 text-white"
                onClick={handleContactClick}
              >
                Contacto
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors font-light text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  className="bg-primary hover:bg-primary/90 text-white w-full"
                  onClick={handleContactClick}
                >
                  Contacto
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Modal de contacto */}
      <ModalContact isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}
