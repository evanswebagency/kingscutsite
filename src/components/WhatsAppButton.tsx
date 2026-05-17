import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/15127643291?text=Hi%20Kings%20Cut%2C%20I%27d%20like%20to%20book%20an%20appointment";

export function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-gold transition-transform hover:scale-110"
      style={{ backgroundColor: "var(--whatsapp)" }}
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-30" style={{ backgroundColor: "var(--whatsapp)" }} />
    </a>
  );
}

export function WhatsAppCTA({ children = "Book on WhatsApp", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-gradient-gold px-8 py-4 text-base font-semibold text-gold-foreground shadow-gold transition-transform hover:scale-105 ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {children}
    </a>
  );
}

export { WHATSAPP_URL };
