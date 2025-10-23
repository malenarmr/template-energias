"use client";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { abrirEmail, abrirWhatsApp } from "@/utils/redirectRedes";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Image
              src="/logo-white.png"
              alt="Nuevas Energías"
              width={200}
              height={50}
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 font-light">
              Soluciones energéticas para cada proyecto
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 font-light">
              <li>
                <Link
                  href="/alquiler"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Alquiler
                </Link>
              </li>
              <li>
                <Link
                  href="/venta"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Venta
                </Link>
              </li>
              <li>
                <Link
                  href="/mantenimiento"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mantenimiento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 font-light text-gray-400">
              <li
                className="cursor-pointer hover:text-white transition-colors"
                onClick={() => abrirEmail(`${process.env.NEXT_PUBLIC_EMAIL}`)}
              >
                <a>{process.env.NEXT_PUBLIC_EMAIL}</a>
              </li>
              <li
                className="cursor-pointer hover:text-white transition-colors"
                onClick={() =>
                  abrirWhatsApp(`${process.env.NEXT_PUBLIC_WHATSAPP}`)
                }
              >
                {process.env.NEXT_PUBLIC_WHATSAPP_RENDER}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Seguinos</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/nuevas.energias.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.instagram.com/nuevas.energias.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/kilowatt-s-a-nuevas-energ%C3%ADas-6690b3255/overlay/about-this-profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  abrirEmail(`${process.env.NEXT_PUBLIC_EMAIL}`);
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 font-light">
          <p>
            &copy; {new Date().getFullYear()} Nuevas Energías. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
