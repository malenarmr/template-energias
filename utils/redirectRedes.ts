export function abrirWhatsApp(numero: string, mensaje = "") {
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

export function abrirEmail(destinatario: string, asunto = "", cuerpo = "") {
  const url = `mailto:${destinatario}?subject=${encodeURIComponent(
    asunto
  )}&body=${encodeURIComponent(cuerpo)}`;
  window.open(url, "_blank");
}
