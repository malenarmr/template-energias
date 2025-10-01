import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Image src="/logo-white.png" alt="Nuevas Energías" width={200} height={50} className="h-12 w-auto mb-4" />
            <p className="text-gray-400 font-light">Soluciones energéticas para cada proyecto</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2 font-light">
              <li>
                <Link href="/alquiler" className="text-gray-400 hover:text-primary transition-colors">
                  Alquiler
                </Link>
              </li>
              <li>
                <Link href="/venta" className="text-gray-400 hover:text-primary transition-colors">
                  Venta
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Mantenimiento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 font-light text-gray-400">
              <li>info@nuevasenergias.com</li>
              <li>+54 11 1234-5678</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Email">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 font-light">
          <p>&copy; {new Date().getFullYear()} Nuevas Energías. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
