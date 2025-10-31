"use client";

import { useState, useTransition } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { abrirEmail, abrirWhatsApp } from "@/utils/redirectRedes";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [messageStatus, setMessageStatus] = useState<null | {
    type: "success" | "error";
    text: string;
  }>(null);
  const [isPending, startTransition] = useTransition();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessageStatus(null);

    startTransition(async () => {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("message", formData.message);

      try {
        const res = await fetch("/api/send-email", {
          method: "POST",
          body: data,
        });

        const result = await res.json();

        if (result.success) {
          setMessageStatus({
            type: "success",
            text: "✅ Mensaje enviado correctamente. ¡Gracias por contactarte!",
          });
          setFormData({ name: "", email: "", phone: "", message: "" });
        } else {
          throw new Error(result.error || "Error desconocido");
        }
      } catch (err: any) {
        setMessageStatus({
          type: "error",
          text:
            err.message ||
            "❌ Ocurrió un error al enviar el mensaje. Intentalo más tarde.",
        });
      }
    });
  };

  return (
    <section className="relative overflow-hidden py-4">
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center">
          {/* Columna izquierda - Información */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold text-balance leading-tight">
                Contacto
              </h2>
              <p className="text-lg text-cyan-100 leading-relaxed">
                ¿Tenés alguna pregunta o necesitás más información? Estamos acá
                para ayudarte. Completá el formulario y nos pondremos en
                contacto con vos lo antes posible.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div
                className="flex items-center gap-4 cursor-pointer hover:bg-white/10 transition-colors p-1 rounded-[30px]"
                onClick={() => abrirEmail(`${process.env.NEXT_PUBLIC_EMAIL}`)}
              >
                <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                  <Mail className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-cyan-100">
                    {process.env.NEXT_PUBLIC_EMAIL}
                  </p>
                </div>
              </div>

              <div
                className="flex items-center gap-4 cursor-pointer hover:bg-white/10 transition-colors p-1 rounded-[20px]"
                onClick={() =>
                  abrirWhatsApp(`${process.env.NEXT_PUBLIC_WHATSAPP}`)
                }
              >
                <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                  <Phone className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                  <p className="text-cyan-100">
                    {process.env.NEXT_PUBLIC_WHATSAPP_RENDER}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-1">
                <div className="rounded-full bg-white/10 p-3 backdrop-blur-sm">
                  <MapPin className="h-6 w-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Ubicación</h3>
                  <p className="text-cyan-100">CABA, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="relative">
            <div className="rounded-3xl bg-white/95 backdrop-blur-md p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+54 11 1234-5678"
                />
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Contanos cómo podemos ayudarte..."
                  rows={5}
                />

                {messageStatus && (
                  <p
                    className={`text-sm font-medium ${
                      messageStatus.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {messageStatus.text}
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={isPending}
                  className={`w-full h-12 text-white font-semibold text-base shadow-lg transition-all duration-300 ${
                    isPending
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                  }`}
                >
                  {isPending ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="animate-spin h-5 w-5" />
                      Enviando...
                    </div>
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
