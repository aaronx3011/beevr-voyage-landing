/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BrainCircuit, 
  Sparkles, 
  MessageSquare, 
  Zap, 
  Layers, 
  Menu, 
  X, 
  ChevronRight, 
  ArrowRight,
  Globe,
  Monitor,
  Cpu,
  BarChart3,
  Mail,
  Phone,
  Twitter,
  Github,
  Linkedin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Logo } from "@/components/ui/Logo";
import { HeroLogo } from "@/components/ui/HeroLogo";

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#030712]/80 backdrop-blur-md border-b border-white/10" : "bg-transparent border-b border-white/5"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-3">
            <Logo className="h-10 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-400">
            <a href="#features" className="hover:text-amber-400 transition-colors">Servicios</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">Proyectos</a>
            <a href="#why-us" className="hover:text-amber-400 transition-colors">Diferencial</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">Preguntas</a>
            <Button size="sm" className="bg-amber-600 hover:bg-amber-500 text-white rounded-none px-6 h-9 text-[10px] uppercase tracking-widest font-bold">
              Iniciar Proyecto
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-400">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="md:hidden bg-[#030712] border-l border-white/10 w-full max-w-xs ml-auto h-screen fixed inset-0 top-0 z-40 p-8 flex flex-col gap-8 shadow-2xl"
          >
            <div className="flex justify-end mb-4">
              <button onClick={() => setIsOpen(false)}><X className="w-8 h-8 text-gray-400" /></button>
            </div>
            <div className="flex flex-col gap-8 text-[12px] uppercase font-bold tracking-[0.2em] text-gray-400">
              <a href="#features" onClick={() => setIsOpen(false)}>Servicios</a>
              <a href="#about" onClick={() => setIsOpen(false)}>Proyectos</a>
              <a href="#why-us" onClick={() => setIsOpen(false)}>Diferencial</a>
              <a href="#faq" onClick={() => setIsOpen(false)}>Preguntas</a>
              <Button className="w-full bg-amber-600 hover:bg-amber-500 rounded-none py-6 uppercase tracking-widest text-white">
                Iniciar Proyecto
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl mx-auto px-4 md:px-8 mb-16"
          >
            <div className="relative p-2 md:p-4 overflow-visible">
              <HeroLogo className="w-full h-auto max-h-[30vh] md:max-h-[40vh]" />
              <div className="mt-8 md:mt-12 flex flex-nowrap items-center justify-center gap-x-2 sm:gap-x-4 md:gap-x-6">
                <span className="text-[7px] sm:text-sm md:text-lg font-light tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase text-white whitespace-nowrap">
                  Inteligencia Artificial
                </span>
                <span className="text-amber-500 text-[8px] md:text-lg leading-none">•</span>
                <span className="text-[7px] sm:text-sm md:text-lg font-light tracking-[0.1em] sm:tracking-[0.2em] md:tracking-[0.3em] uppercase text-amber-500 whitespace-nowrap">
                  Realidad Virtual
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-3 py-1 text-[10px] uppercase tracking-widest bg-amber-900/40 text-amber-300 border border-amber-500/30 rounded-none mb-8 italic font-sans">
                Exploración Inmersiva con IA & VR
              </span>
            <h2 className="text-4xl md:text-6xl font-light leading-[1.2] tracking-tight pb-6 overflow-visible">
                Diseñamos el <span className="font-bold">Futuro</span>: <br />
                <span className="inline-block font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-500 py-4 px-2">Experiencias Inmersivas</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl leading-relaxed font-light">
                En <span className="text-amber-500 font-medium">Bee VR Voyage</span>, no solo desarrollamos software; construimos puentes entre la imaginación y la realidad. Somos una empresa de innovación tecnológica especializada en transformar la interacción humana mediante la integración de <strong>IA, Realidad Virtual (VR) y Narrativa Interactiva</strong>.
              </p>
              <p className="text-md text-gray-500 max-w-lg leading-relaxed font-light mt-4 italic">
                Nuestra misión es convertir la tecnología en una herramienta de conexión emocional y aprendizaje profundo.
              </p>
            </div>
            

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            className="flex justify-center relative scale-90 lg:scale-100"
          >
            <div className="ai-sphere">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                 className="orbit orbit-1" 
               />
               <motion.div 
                 animate={{ rotate: -360 }}
                 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                 className="orbit orbit-2" 
               />
               <div className="ai-core" />
               
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-4 -left-12 lg:-left-4 p-4 bg-gray-900/80 backdrop-blur border border-white/10 rounded-none"
               >
                 <div className="text-[10px] text-amber-400 uppercase tracking-widest mb-1 font-bold">AI Neuro Core</div>
                 <div className="text-xl font-mono text-white">99.9%</div>
               </motion.div>

               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                 className="absolute -bottom-12 -right-4 p-4 bg-gray-900/80 backdrop-blur border border-white/10 rounded-none"
               >
                 <div className="text-[10px] text-amber-500 uppercase tracking-widest mb-1 font-bold">VR Synthesis</div>
                 <div className="text-xl font-mono text-white">LOW LATENCY</div>
               </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "IA CONVERSACIONAL",
      description: "Asistentes inteligentes que interactúan con voz y matices emocionales en tiempo real.",
      id: "01",
      icon: MessageSquare
    },
    {
      title: "ECOSISTEMAS VR",
      description: "Entornos 360° diseñados para una inmersión total en cultura, turismo y formación.",
      id: "02",
      icon: Globe
    },
    {
      title: "MUSEOGRAFÍA INTELIGENTE",
      description: "Sistemas interactivos que convierten al espectador en el protagonista del espacio.",
      id: "03",
      icon: Layers
    },
    {
      title: "EDTECH DE VANGUARDIA",
      description: "Herramientas para 'aprender haciendo' en mundos virtuales seguros y dinámicos.",
      id: "04",
      icon: BrainCircuit
    }
  ];

  return (
    <section id="features" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[10px] text-amber-500 uppercase tracking-[0.4em] font-bold">¿Qué Hacemos?</span>
          <h2 className="text-4xl font-light mt-4">Soluciones de Próxima Generación</h2>
        </div>
        <div className="border-t border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((f, i) => (
            <div key={i} className="group p-8 border-b lg:border-b-0 lg:border-r border-white/10 hover:bg-amber-500/[0.02] transition-colors">
              <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-12 font-bold group-hover:text-amber-400 transition-colors">
                {f.id}. {f.title}
              </div>
              <div className="mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                <f.icon className="w-8 h-8 text-amber-500" />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed font-light group-hover:text-gray-200 transition-colors">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
      tag: "Neuroeducación & Gamificación",
      title: "Fly Bee Real",
      description: "Una experiencia educativa de vanguardia que sumerge al usuario en el microcosmos de las abejas. Hemos diseñado esta APK utilizando mecánicas de estimulación de dopamina, transformando el aprendizaje biológico en un proceso adictivo y memorable.",
      image: "/src/assets/images/regenerated_image_1778704251987.jpg"
    },
    {
      tag: "AI & Sports",
      title: "Jessica: Asistente Deportiva",
      description: "Figura digital con acceso a data global de fútbol en tiempo real. Ofrece análisis táctico, estadísticas avanzadas y asesoramiento instantáneo, redefiniendo la interacción con el fan.",
      image: "/src/assets/images/regenerated_image_1778699944824.png"
    }
  ];

  const others = [
    {
      title: "Optimum Spine",
      description: "APK interactiva para la educación sobre salud espinal y bienestar.",
      icon: Monitor,
      image: "/src/assets/images/regenerated_image_1778704249389.jpg"
    },
    {
      title: "Music Box Tingilingi",
      description: "Fusión de juego y creación sonora en formato APK interactivo.",
      icon: MessageSquare,
      image: "/src/assets/images/regenerated_image_1778704250485.png"
    },
    {
      title: "Project Orion",
      description: "Catálogo interactivo de equipos de sonido con exploración técnica visual.",
      icon: Cpu,
      image: "/src/assets/images/regenerated_image_1778718725775.png"
    }
  ];

  return (
    <section id="about" className="py-32 px-6 lg:px-12 bg-[#050a18]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[10px] text-amber-500 uppercase tracking-[0.4em] font-bold">Portafolio</span>
          <h2 className="text-5xl font-light mt-4 tracking-tight">Casos de Éxito</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-900/40 border border-white/10 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 space-y-4">
                <span className="text-[10px] text-amber-500 uppercase tracking-widest font-bold">{p.tag}</span>
                <h3 className="text-2xl font-bold italic">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed font-light">{p.description}</p>
                <div className="pt-4">
                  <Button variant="link" className="text-amber-500 p-0 h-auto text-xs uppercase tracking-widest font-bold group-hover:translate-x-2 transition-transform hover:no-underline">
                    Ver Detalles <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {others.map((o, i) => (
            <div key={i} className="group p-0 bg-white/5 border border-white/5 hover:border-amber-500/30 transition-all overflow-hidden">
              {o.image && (
                <div className="aspect-video overflow-hidden border-b border-white/5">
                  <img 
                    src={o.image} 
                    alt={o.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div className="p-8">
                <o.icon className="w-6 h-6 text-amber-500 mb-6" />
                <h4 className="text-lg font-bold mb-2">{o.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-light">{o.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Waveform = () => {
  return (
    <section className="py-24 overflow-hidden bg-black/40">
      <div className="flex items-end justify-center gap-1 h-32 px-4">
        {[20, 35, 45, 60, 40, 25, 45, 70, 90, 100, 80, 65, 45, 30, 40, 55, 75, 40, 20, 35, 50, 70, 85, 60, 45, 30, 25, 40, 60, 80, 95, 120, 100, 80, 60, 45, 30, 40, 55, 75, 40, 20].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 5 }}
            animate={{ height: h }}
            transition={{ 
              duration: 1, 
              repeat: Infinity, 
              repeatType: "reverse", 
              delay: i * 0.05 
            }}
            className="w-1.5 md:w-2 lg:w-3 waveform-bar rounded-full opacity-60"
          />
        ))}
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    {
      title: "Psicología del Aprendizaje",
      text: "Aplicamos principios de neurociencia para que cada interacción genere un impacto real."
    },
    {
      title: "Escalabilidad",
      text: "Desde una activación puntual en un evento hasta la digitalización completa de un museo."
    },
    {
      title: "Enfoque Global",
      text: "Soluciones preparadas para mercados internacionales con soporte multilingüe."
    }
  ];

  return (
    <section id="why-us" className="py-32 px-6 lg:px-12 bg-black/20">
      <div className="max-w-5xl mx-auto text-center space-y-20">
        <div className="space-y-6 max-w-3xl mx-auto">
          <span className="text-[10px] text-amber-500 uppercase tracking-[0.4em] font-bold">Diferenciador</span>
          <h2 className="text-4xl md:text-5xl font-light italic leading-tight">
            "No vendemos herramientas, creamos <span className="font-bold text-white not-italic underline decoration-amber-500 underline-offset-8">experiencias memorables</span>."
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {reasons.map((r, i) => (
            <div key={i} className="space-y-4 p-8 border border-white/5 bg-[#030712]/40 hover:border-amber-500/30 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500" />
                <h4 className="text-xs font-bold uppercase tracking-widest text-white">{r.title}</h4>
              </div>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "¿Cómo integra Bee VR Voyage la IA en museos?",
      a: "Creamos asistentes digitales y sistemas interactivos que responden en tiempo real, permitiendo que los visitantes 'hablen' con la historia o las obras de arte de forma inmersiva."
    },
    {
      q: "¿Qué equipos son necesarios para sus experiencias de VR?",
      a: "Nuestras soluciones son versátiles; diseñamos experiencias tanto para visores de alta gama (como Meta Quest o Apple Vision Pro) como para dispositivos móviles y web 360°."
    },
    {
      q: "¿Pueden desarrollar soluciones personalizadas para marcas?",
      a: "Sí. Somos una empresa de innovación. Cada proyecto se construye desde cero alineado a los objetivos de comunicación y engagement de la marca."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 lg:px-12 max-w-4xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <div className="text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em]">Conocimiento</div>
        <h2 className="text-5xl font-light tracking-tight">Preguntas Frecuentes</h2>
      </div>
      <Accordion type="single" collapsible className="w-full border-t border-white/10">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10 py-4">
            <AccordionTrigger className="text-left text-lg font-light hover:no-underline hover:text-blue-400 transition-colors">{f.q}</AccordionTrigger>
            <AccordionContent className="text-gray-400 text-base leading-relaxed pt-4 font-light">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-32 pb-16 px-6 lg:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Liderando la vanguardia tecnológica en inteligencia artificial y realidad virtual para experiencias inmersivas de alto impacto.
            </p>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">01. Contacto</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-light">
              <li className="flex items-center gap-3">
                <span className="text-amber-500">
                  <Phone className="w-4 h-4" />
                </span>
                <a href="tel:+17862771100" className="hover:text-amber-400 transition-colors uppercase tracking-wider font-medium">+1 786.277.1100</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-amber-500">
                  <Mail className="w-4 h-4" />
                </span>
                <a href="mailto:beetechscorp@gmail.com" className="hover:text-amber-400 transition-colors lowercase tracking-wider font-medium">beetechscorp@gmail.com</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-8 flex flex-col justify-end">
             <div className="flex flex-wrap gap-x-8 gap-y-2 text-[10px] font-bold text-gray-500 tracking-widest uppercase">
              <span>USA, MIAMI</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-12 flex flex-col items-center gap-12">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold italic">© 2026 BEE VR VOYAGE. Elevando datos a historias.</p>
        </div>
      </div>
    </footer>
  );
};

// --- App Root ---

export default function App() {
  // Direct dark mode enforcement via HTML class
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen geometric-bg text-gray-100 font-sans selection:bg-amber-600 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Waveform />
        <Portfolio />
        <WhyUs />
        <FAQ />
        

        {/* Final CTA */}
        <section className="py-40 relative overflow-hidden px-6">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <div className="space-y-8">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-amber-500">COMENZAR EL VOYAGE</span>
                <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-tight">
                  El Futuro está a <br />
                  <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white to-amber-500">
                    un click
                  </span>
                </h2>
              </div>
              <div className="space-y-10">
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                  ¿Tienes una idea que parece imposible? En <span className="text-white font-medium">Bee VR Voyage</span> tenemos la tecnología para construirla. Ya sea que busques educar, vender o emocionar, somos tu aliado estratégico en la era de la inteligencia inmersiva.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button size="lg" className="h-16 px-12 bg-amber-600 text-white font-bold text-sm tracking-widest rounded-none uppercase hover:bg-amber-500 transition-all group">
                    Agendar Consultoría <Mail className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
