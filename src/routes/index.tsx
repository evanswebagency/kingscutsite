import { createFileRoute } from "@tanstack/react-router";
import { Scissors, Sparkles, Baby, Crown, Droplets, Award, DollarSign, Zap, Sparkle, MapPin, Phone, Star, ChevronDown } from "lucide-react";
import { useState } from "react";
import { WhatsAppFloating, WhatsAppCTA, WHATSAPP_URL } from "@/components/WhatsAppButton";
import hero from "@/assets/hero.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kings Cut Barbershop — Austin's Freshest Cuts, Every Time" },
      { name: "description", content: "Professional barbers in Austin, TX. Fades, beards, hot towel shaves. Same-day appointments. Book on WhatsApp." },
      { property: "og:title", content: "Kings Cut Barbershop — Austin, TX" },
      { property: "og:description", content: "Austin's freshest cuts, every time. Book on WhatsApp." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Scissors, name: "Fade & Taper", price: "$25" },
  { icon: Sparkles, name: "Beard Trim & Shape", price: "$15" },
  { icon: Baby, name: "Kids Cut", price: "$20" },
  { icon: Crown, name: "Full Cut & Beard", price: "$35" },
  { icon: Droplets, name: "Hot Towel Shave", price: "$30" },
];

const reasons = [
  { icon: Award, title: "Expert Barbers", desc: "Skilled craftsmen with years of experience." },
  { icon: DollarSign, title: "Affordable Pricing", desc: "Premium cuts at honest prices." },
  { icon: Zap, title: "Fast Service", desc: "In and out without the rush." },
  { icon: Sparkle, title: "Clean Environment", desc: "Spotless shop, welcoming vibe." },
];

const testimonials = [
  { quote: "Best cut I've had in Austin!", name: "Marcus T." },
  { quote: "Fast, clean and professional every time.", name: "Jordan R." },
  { quote: "My go-to barbershop, highly recommended!", name: "Derek M." },
];

const stats = [
  { num: "500+", label: "Happy Clients" },
  { num: "6", label: "Years Experience" },
  { num: "5★", label: "Star Rating" },
  { num: "24h", label: "Same Day Booking" },
];

const faqs = [
  { q: "Do I need to book in advance?", a: "Walk-ins are welcome, but booking via WhatsApp guarantees your spot, especially on weekends." },
  { q: "How long does a cut take?", a: "Most cuts take 30–45 minutes. Full cut & beard combos take about an hour." },
  { q: "What are your opening hours?", a: "Monday–Saturday 9am–8pm, Sunday 10am–6pm." },
  { q: "Do you cut kids hair?", a: "Absolutely. Kids cuts are $20 and our barbers are great with little ones." },
];

const gallery = [g1, g2, g3, g4];

function Home() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <About />
      <WhyUs />
      <Stats />
      <MidCTA />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <Crown className="h-6 w-6 text-primary" />
          <span className="font-display text-xl tracking-wider">KINGS CUT</span>
        </a>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#services" className="text-muted-foreground hover:text-foreground">Services</a>
          <a href="#about" className="text-muted-foreground hover:text-foreground">About</a>
          <a href="#gallery" className="text-muted-foreground hover:text-foreground">Gallery</a>
          <a href="#location" className="text-muted-foreground hover:text-foreground">Location</a>
        </nav>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-md bg-gradient-gold px-4 py-2 text-sm font-semibold text-gold-foreground">Book</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <img src={hero} alt="Kings Cut Barbershop" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.16 0.005 60 / 0.6) 0%, oklch(0.12 0.005 60 / 0.95) 100%)" }} />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary">Austin, Texas · Est. 2018</p>
        <h1 className="font-display text-6xl leading-[0.95] md:text-8xl lg:text-9xl">
          Austin's <span className="text-gradient-gold">Freshest</span> Cuts,<br />Every Time
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Professional barbers you can trust.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppCTA />
          <a href="#services" className="text-sm uppercase tracking-widest text-muted-foreground hover:text-foreground">View Services ↓</a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Services" title="The Menu" />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, name, price }) => (
            <div key={name} className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary">
              <Icon className="h-10 w-10 text-primary" />
              <h3 className="mt-6 text-2xl">{name}</h3>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-sm text-muted-foreground">Starting at</span>
                <span className="font-display text-3xl text-primary">{price}</span>
              </div>
            </div>
          ))}
          <div className="flex flex-col items-start justify-center rounded-xl bg-gradient-gold p-8 text-gold-foreground">
            <h3 className="text-2xl">Ready for a fresh look?</h3>
            <p className="mt-2 text-sm opacity-90">Book your slot in seconds.</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-semibold text-foreground">
              Book on WhatsApp →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-y border-border bg-card/30 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">About</p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl">A cut above the rest.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Kings Cut has been serving Austin since 2018. We've built our shop around one simple idea — every client leaves looking their best.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            From classic fades to full beard sculpts, our barbers bring years of experience and a sharp eye to every chair.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm text-primary">
            <Crown className="h-4 w-4" /> Every client leaves looking their best
          </div>
        </div>
        <img src={g2} alt="Kings Cut interior" width={1000} height={800} loading="lazy" className="rounded-xl object-cover shadow-card" />
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Why Choose Us" title="Built for Quality" />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-xl">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-card/30 px-6 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-5xl text-gradient-gold md:text-6xl">{s.num}</div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MidCTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-background p-12 text-center shadow-card">
        <h2 className="font-display text-4xl md:text-5xl">Same day. Sharp cut.</h2>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">Skip the wait — message us on WhatsApp and we'll lock in your chair.</p>
        <div className="mt-8 flex justify-center"><WhatsAppCTA /></div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Gallery" title="The Work" />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((src, i) => (
            <div key={i} className="group overflow-hidden rounded-xl">
              <img src={src} alt={`Kings Cut work ${i + 1}`} loading="lazy" className="aspect-[4/5] h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-card/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Testimonials" title="What Clients Say" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-border bg-card p-8">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-6 text-lg leading-relaxed">"{t.quote}"</p>
              <p className="mt-6 text-sm uppercase tracking-widest text-muted-foreground">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Good to Know" />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between py-6 text-left">
                <span className="text-lg font-medium">{f.q}</span>
                <ChevronDown className={`h-5 w-5 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="pb-6 text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="location" className="bg-card/30 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Visit</p>
          <h2 className="mt-4 font-display text-5xl">Find the Shop</h2>
          <div className="mt-8 space-y-4 text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <div className="font-medium text-foreground">1247 South Congress Ave</div>
                <div>Austin, TX 78704</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-primary" />
              <a href="tel:+2347044131476" className="text-foreground hover:text-primary">+234 704 413 1476</a>
            </div>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-border">
          <iframe
            title="Kings Cut Barbershop location"
            src="https://www.google.com/maps?q=1247+South+Congress+Ave,+Austin,+TX+78704&output=embed"
            className="h-[400px] w-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-gold p-12 text-center text-gold-foreground">
        <h2 className="font-display text-5xl md:text-6xl">Ready for the chair?</h2>
        <p className="mx-auto mt-4 max-w-md opacity-90">Book your appointment now or give us a call.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-background px-8 py-4 font-semibold text-foreground transition-transform hover:scale-105">
            Book on WhatsApp
          </a>
          <a href="tel:+2347044131476" className="inline-flex items-center gap-2 rounded-md border-2 border-gold-foreground px-8 py-4 font-semibold transition-colors hover:bg-gold-foreground hover:text-primary">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <Crown className="h-4 w-4 text-primary" />
          <span className="font-display tracking-wider">KINGS CUT BARBERSHOP</span>
        </div>
        <div>© {new Date().getFullYear()} Kings Cut · Austin, TX</div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-5xl md:text-6xl">{title}</h2>
    </div>
  );
}
