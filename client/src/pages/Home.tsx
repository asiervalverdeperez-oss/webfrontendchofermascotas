import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Star, ChevronLeft, ChevronRight, Plane, Heart, Route, MapPinned, Award, Mountain, Waves, Trees, Shield, Users } from "lucide-react";

import heroImage from "@assets/image_1768158590550.png";
import carImage1 from "@assets/image_1768157788767.png";
import carImage2 from "@assets/image_1768157810869.png";
import carImage3 from "@assets/image_1768157818886.png";
import carImage4 from "@assets/image_1768157824930.png";
import carImage5 from "@assets/image_1768157835708.png";
import carImage6 from "@assets/image_1768157849015.png";
import aboutImage1 from "@assets/image_1768158000932.png";
import aboutImage2 from "@assets/image_1768158013328.png";
import aboutImage3 from "@assets/image_1768158021770.png";
import aboutImage4 from "@assets/image_1768158028505.png";
import dogBeach from "@assets/foto_3_reploit_1768157729431.png";

const carImages = [carImage1, carImage2, carImage3, carImage4, carImage5, carImage6];
const aboutImages = [aboutImage1, aboutImage2, aboutImage3, aboutImage4];

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="text-primary">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <circle cx="6" cy="6" r="2"/>
                <circle cx="18" cy="6" r="2"/>
                <circle cx="6" cy="18" r="2"/>
                <circle cx="18" cy="18" r="2"/>
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-semibold text-primary" style={{ fontFamily: "'Playfair Display', serif" }}>
              Chofer<span className="font-bold">MASCOTAS</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors" data-testid="link-inicio">Inicio</a>
            <a href="#servicios" className="text-foreground hover:text-primary transition-colors" data-testid="link-servicios">Servicios</a>
            <a href="#nosotros" className="text-foreground hover:text-primary transition-colors" data-testid="link-nosotros">Nosotros</a>
            <a href="#tarifas" className="text-foreground hover:text-primary transition-colors" data-testid="link-tarifas">Tarifas</a>
            <a href="#opiniones" className="text-foreground hover:text-primary transition-colors" data-testid="link-opiniones">Opiniones</a>
            <a href="#contacto" className="text-foreground hover:text-primary transition-colors" data-testid="link-contacto">Contacto</a>
          </nav>
          
          <a href="tel:609439889" className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors" data-testid="link-phone">
            <Phone size={18} />
            <span>609 43 98 89</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Perro feliz en vehículo" className="w-full h-full object-cover object-center blur-[2px] scale-105" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-xl animate-fade-in-up">
          <div className="flex items-center gap-2 text-primary mb-4">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <circle cx="6" cy="6" r="2"/>
              <circle cx="18" cy="6" r="2"/>
            </svg>
            <span className="text-sm uppercase tracking-widest font-medium">Transporte especializado para mascotas</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tu mascota viaja
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent italic mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            segura y feliz
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Servicio de transporte privado y personalizado en Barcelona y alrededores. Porque tu compañero peludo merece viajar con la misma comodidad y cariño que en casa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors" data-testid="button-presupuesto">
              Pedir presupuesto
            </a>
            <a href="tel:609439889" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-border text-foreground rounded-full font-medium hover:bg-muted transition-colors" data-testid="button-llamar">
              <Phone size={18} />
              Llamar ahora
            </a>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-primary" />
              <span>100% seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart size={18} className="text-primary" />
              <span>Trato personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-primary" />
              <span>Disponible todos los días</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: Plane,
      title: "Traslados aeropuerto",
      description: "Recogemos y llevamos a tu mascota al aeropuerto, estación de tren o puerto. Servicio puntual y sin estrés."
    },
    {
      icon: Heart,
      title: "Veterinario y peluquería",
      description: "La llevamos a sus citas médicas, vacunas, revisiones o sesiones de peluquería y spa canino."
    },
    {
      icon: Route,
      title: "Rutas urbanas e interurbanas",
      description: "Desplazamientos dentro de Barcelona y a poblaciones cercanas. Flexibilidad total de horarios."
    },
    {
      icon: MapPinned,
      title: "Segunda residencia y vacaciones",
      description: "Viajes a hoteles, casas rurales, destinos de vacaciones. Tu mascota llega descansada y contenta."
    },
    {
      icon: Award,
      title: "Exposiciones y concursos",
      description: "Transporte especializado para eventos caninos. Tu campeón llega en perfectas condiciones."
    },
    {
      icon: Mountain,
      title: "Viajes de larga distancia",
      description: "Rutas largas con paradas para pasear, beber agua y descansar. Comunicación constante durante el trayecto."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">Nuestros servicios</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Todo lo que tu mascota necesita
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ofrecemos un servicio completo de transporte adaptado a cada situación. Con cariño, profesionalidad y la máxima seguridad.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow" data-testid={`card-service-${index}`}>
              <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageSlider({ images, title }: { images: string[], title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl aspect-[4/3]">
        <img 
          src={images[currentIndex]} 
          alt={`${title} ${currentIndex + 1}`} 
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      </div>
      <button 
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
        data-testid={`slider-prev-${title}`}
      >
        <ChevronLeft size={20} />
      </button>
      <button 
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
        data-testid={`slider-next-${title}`}
      >
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrentIndex(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            data-testid={`slider-dot-${i}`}
          />
        ))}
      </div>
    </div>
  );
}

function SpecialExperiences() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent text-sm uppercase tracking-widest font-medium">Experiencias especiales</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Aventuras con tu mejor amigo
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Además del transporte habitual, organizamos excursiones y escapadas a lugares increíbles donde tu mascota puede disfrutar al máximo. Conocemos los mejores sitios gracias a nuestras propias experiencias con nuestros perros.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Waves size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Playas dog-friendly</h4>
                  <p className="text-sm text-muted-foreground">Las mejores playas donde tu perro puede bañarse y correr libre.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <circle cx="12" cy="12" r="3"/>
                    <circle cx="6" cy="6" r="2"/>
                    <circle cx="18" cy="6" r="2"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Aquapark Canino</h4>
                  <p className="text-sm text-muted-foreground">Parque acuático para perros en La Roca del Vallès. ¡Diversión garantizada!</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Trees size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Parques naturales y montaña</h4>
                  <p className="text-sm text-muted-foreground">Excursiones a ríos, lagos, cascadas y rutas de montaña.</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Heart size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">+500</div>
                  <div className="text-sm text-muted-foreground">Viajes realizados</div>
                </div>
              </div>
            </div>
          </div>
          
          <ImageSlider images={carImages} title="vehiculo" />
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ImageSlider images={aboutImages} title="nosotros" />
          
          <div>
            <span className="text-primary text-sm uppercase tracking-widest font-medium">Sobre nosotros</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Amor por los animales y profesionalidad
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              ChoferMASCOTAS nació de la pasión por los animales y la necesidad de ofrecer un transporte de calidad para nuestras mascotas. Sabemos lo importante que es para ti que tu compañero viaje tranquilo y seguro.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Contamos con un vehículo totalmente adaptado: cómodo, limpio, climatizado y equipado con todo lo necesario para que el viaje sea una experiencia agradable. Si tu mascota lo necesita, te mantenemos informado durante todo el trayecto.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-3">
                  <Shield size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Vehículo adaptado</h4>
                <p className="text-sm text-muted-foreground">Seguridad total</p>
              </div>
              <div className="bg-card rounded-xl p-4 border border-border">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mb-3">
                  <Users size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Trato personalizado</h4>
                <p className="text-sm text-muted-foreground">Cada mascota es única</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="tarifas" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">Tarifas</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Precios claros y transparentes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Tarifas orientativas para traslados al aeropuerto (solo ida). Consulta sin compromiso para rutas personalizadas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <MapPin size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Barcelona ciudad</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={16} />
                  <span>Diurno (8:00 - 20:00)</span>
                </div>
                <span className="text-2xl font-bold text-primary">25 €</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={16} />
                  <span>Nocturno (20:00 - 8:00)</span>
                </div>
                <span className="text-2xl font-bold text-primary">55 €</span>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-8 border-2 border-accent">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin size={20} className="text-accent" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">Área metropolitana</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={16} />
                  <span>Diurno (8:00 - 20:00)</span>
                </div>
                <span className="text-2xl font-bold text-accent">30 €</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={16} />
                  <span>Nocturno (20:00 - 8:00)</span>
                </div>
                <span className="text-2xl font-bold text-accent">65 €</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-2xl p-8 border border-border max-w-4xl mx-auto">
          <h4 className="text-lg font-semibold text-foreground mb-4">Condiciones y suplementos</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Precios para radio de 15 km desde el punto de origen
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Km adicional diurno: 1,20 €/km
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Sábados a partir de las 15:00, noches, domingos y festivos: +10 € por trayecto
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Peajes no incluidos
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Km adicional nocturno: 1,45 €/km
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Servicio nocturno: reserva con 48h de antelación
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      name: "María García",
      date: "Octubre 2025",
      text: "\"Llevaron a mi perrita Luna al veterinario mientras yo estaba en el trabajo. Me enviaron fotos durante todo el trayecto y la trataron con un cariño increíble. Volveré a repetir seguro.\""
    },
    {
      name: "Carlos Martínez",
      date: "Septiembre 2025",
      text: "\"Necesitaba trasladar a mis dos gatos al aeropuerto para un vuelo internacional. Fueron puntuales, profesionales y muy cuidadosos. Los gatos llegaron tranquilos y sin estrés. Muy recomendable.\""
    },
    {
      name: "Ana López",
      date: "Agosto 2025",
      text: "\"Contraté el servicio para llevar a mi bulldog francés a nuestra casa de la playa. El viaje fue largo pero hicieron paradas para que pudiera pasear y beber agua. Llegó feliz y descansado.\""
    },
    {
      name: "Pedro Ruiz",
      date: "Julio 2025",
      text: "\"Excelente servicio. Mi perro Max es muy nervioso en los coches pero el conductor supo calmarlo y tratarlo con mucha paciencia. Se nota que aman a los animales de verdad.\""
    }
  ];

  return (
    <section id="opiniones" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">Opiniones</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            La confianza de las familias que han viajado con nosotros es nuestra mejor carta de presentación.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 border border-border" data-testid={`card-testimonial-${index}`}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                    <circle cx="12" cy="12" r="3"/>
                    <circle cx="6" cy="6" r="2"/>
                    <circle cx="18" cy="6" r="2"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceHours() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Horario de servicio
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-1 opacity-80" />
                <div>
                  <div className="font-semibold">Diurno</div>
                  <div className="text-sm opacity-80">Todos los días de 8:00 a 20:00</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={20} className="mt-1 opacity-80" />
                <div>
                  <div className="font-semibold">Nocturno</div>
                  <div className="text-sm opacity-80">De 20:00 a 8:00 (reserva con 48h de antelación)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star size={20} className="mt-1 opacity-80" />
                <div>
                  <div className="font-semibold">Fines de semana y festivos</div>
                  <div className="text-sm opacity-80">Disponible con suplemento</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center lg:text-right">
            <p className="text-lg mb-4 opacity-90">¿Necesitas un traslado?</p>
            <a href="#contacto" className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-white/90 transition-colors" data-testid="button-contactar">
              Contactar ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest font-medium">Contacto</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Pide tu presupuesto sin compromiso
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas. También puedes llamarnos directamente.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                  data-testid="input-nombre"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Teléfono</label>
                  <input
                    type="tel"
                    placeholder="600 000 000"
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    data-testid="input-telefono"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                <textarea
                  placeholder="Cuéntanos qué necesitas: tipo de mascota, origen, destino, fecha..."
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  data-testid="textarea-mensaje"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                data-testid="button-enviar"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Contacto directo</h3>
              <div className="space-y-4">
                <a href="tel:609439889" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow" data-testid="link-telefono-contacto">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone size={22} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Teléfono / WhatsApp</div>
                    <div className="font-semibold text-foreground">609 43 98 89</div>
                  </div>
                </a>
                <a href="mailto:info@chofermascotas.com" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow" data-testid="link-email-contacto">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail size={22} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold text-foreground">info@chofermascotas.com</div>
                  </div>
                </a>
                <a href="https://wa.me/34609439889" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:shadow-md transition-shadow" data-testid="link-whatsapp">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">WhatsApp</div>
                    <div className="font-semibold text-foreground">Escríbenos por WhatsApp</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Zona de servicio</h3>
              <p className="text-muted-foreground">
                Barcelona ciudad, área metropolitana y toda Cataluña. También realizamos viajes de larga distancia a cualquier punto de España y Europa. Consulta tu ruta sin compromiso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-80">
                <circle cx="12" cy="12" r="3"/>
                <circle cx="6" cy="6" r="2"/>
                <circle cx="18" cy="6" r="2"/>
                <circle cx="6" cy="18" r="2"/>
                <circle cx="18" cy="18" r="2"/>
              </svg>
              <span className="text-xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Chofer<span className="font-bold">MASCOTAS</span>
              </span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Transporte privado y personalizado para mascotas. Seguridad, comodidad y mucho cariño en cada viaje.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Traslados aeropuerto</li>
              <li>Veterinario y peluquería</li>
              <li>Viajes urbanos e interurbanos</li>
              <li>Vacaciones y segunda residencia</li>
              <li>Exposiciones y concursos</li>
              <li>Viajes de larga distancia</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <Phone size={16} />
                609 43 98 89
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail size={16} />
                info@chofermascotas.com
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <MapPin size={16} />
                Barcelona y alrededores
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/Chofermascotas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" data-testid="link-facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://x.com/chofermascotas" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" data-testid="link-twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-sm opacity-60">
          © 2026 ChoferMASCOTAS. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <SpecialExperiences />
      <AboutUs />
      <Pricing />
      <Testimonials />
      <ServiceHours />
      <Contact />
      <Footer />
    </div>
  );
}
