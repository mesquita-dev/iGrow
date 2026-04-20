/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { 
  Tractor, 
  Warehouse, 
  Truck, 
  Car, 
  ShieldCheck, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Users,
  Instagram,
  Linkedin,
  MessageCircle
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Máquinas e Equipamentos",
    description: "Cobertura completa para tratores, colheitadeiras e implementos agrícolas. Proteção que garante a continuidade da sua safra.",
    icon: Tractor,
    features: ["Frotas de máquinas", "Taxas exclusivas", "Condições comerciais únicas"],
    color: "bg-agro-green/10",
    iconColor: "text-agro-green"
  },
  {
    title: "Indústria e Agroindústria",
    description: "Segurança para silos, armazéns e plantas industriais. Protegemos sua estrutura física e o seu estoque.",
    icon: Warehouse,
    features: ["Seguro para silos", "Plantas industriais", "Estoque e produção"],
    color: "bg-agro-dark/10",
    iconColor: "text-agro-dark"
  },
  {
    title: "Transporte Nacional e Int.",
    description: "Logística protegida do campo ao porto. Seguros para cargas em trânsito rodoviário, marítimo ou aéreo.",
    icon: Truck,
    features: ["Frete nacional", "Importação/Exportação", "Gerenciamento de risco"],
    color: "bg-agro-green/10",
    iconColor: "text-agro-green"
  },
  {
    title: "Frotas (Leves e Pesados)",
    description: "Gestão inteligente de seguros para frotas agrícolas, linha amarela e veículos leves ou pesados.",
    icon: Car,
    features: ["Frotas agrícolas", "Linha amarela", "Custo-benefício otimizado"],
    color: "bg-agro-dark/10",
    iconColor: "text-agro-dark"
  }
];

const reasons = [
  {
    title: "Foco no Agronegócio",
    description: "Entendemos a realidade do produtor rural e as nuances de cada safra.",
    icon: TrendingUp
  },
  {
    title: "Rendimento Exclusivo",
    description: "Condições comerciais que você só encontra conosco através de parcerias estratégicas.",
    icon: CheckCircle2
  },
  {
    title: "Atendimento Consultivo",
    description: "Não apenas vendemos seguros, desenhamos a solução ideal para o seu risco.",
    icon: Users
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBg = useTransform(scrollY, [0, 50], ["rgba(52, 79, 88, 0)", "rgba(52, 79, 88, 0.95)"]);
  const navShadow = useTransform(scrollY, [0, 50], ["none", "0 4px 6px -1px rgb(0 0 0 / 0.1)"]);

  return (
    <div className="min-h-screen text-[#F0F0F0] bg-[#344F58]">
      {/* Navigation */}
      <motion.nav
        style={{ backgroundColor: navBg, boxShadow: navShadow }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-editorial-accent rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-agro-dark transform rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase text-white">
                iGrow <span className="text-editorial-accent italic font-serif">Seguros</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-10">
              <a href="#services" className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70 hover:opacity-100 hover:text-editorial-accent transition-all">Serviços</a>
              <a href="#about" className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70 hover:opacity-100 hover:text-editorial-accent transition-all">Diferenciais</a>
              <motion.a 
                href="#contact" 
                className="relative overflow-hidden text-editorial-accent font-bold tracking-wider text-sm border border-editorial-accent/30 px-6 py-2 group"
                whileHover="hover"
                initial="initial"
              >
                <motion.div 
                  className="absolute inset-0 bg-white"
                  variants={{
                    initial: { y: "100%" },
                    hover: { y: 0 }
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#A6C253]">
                  INICIAR COTAÇÃO
                </span>
              </motion.a>
            </div>

            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md hover:bg-white/5 transition-colors"
                aria-label="Menu"
              >
                <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
                <div className="w-6 h-0.5 bg-white mb-1.5 transition-all"></div>
                <div className="w-6 h-0.5 bg-white transition-all"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-agro-dark border-b border-white/10 py-8 px-12 space-y-6"
          >
            <a href="#services" className="block text-[10px] font-bold uppercase tracking-[0.2em]" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#about" className="block text-[10px] font-bold uppercase tracking-[0.2em]" onClick={() => setIsMenuOpen(false)}>Diferenciais</a>
            <motion.a 
              href="#contact" 
              whileTap={{ scale: 0.95 }}
              className="block bg-white text-[#A6C253] font-bold tracking-widest text-center py-4 border border-editorial-accent/30" 
              onClick={() => setIsMenuOpen(false)}
            >
              INICIAR COTAÇÃO
            </motion.a>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#1a282d] pt-32 pb-20 lg:pt-40">
        {/* Immersive Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
            className="w-full h-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=2000" 
              alt="Harvest field" 
              className="w-full h-full object-cover opacity-30"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a282d] via-[#1a282d]/80 to-transparent"></div>
          
          {/* Decorative Grid Line */}
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/5 hidden lg:block"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-12 pt-12 grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-[1px] bg-editorial-accent"></span>
                <span className="text-editorial-accent uppercase tracking-[0.5em] text-[10px] font-bold">
                  Especialista em Riscos Agrícolas
                </span>
              </div>
              
              <h1 className="text-6xl md:text-[5.5rem] font-serif font-light text-[#F0F0F0] leading-[1.1] mb-10 italic">
                A tecnologia <br /> que <span className="text-editorial-accent font-bold not-italic tracking-tighter">protege</span> <br />sua safra.
              </h1>
              
              <p className="text-lg text-white/50 mb-12 leading-relaxed font-light max-w-lg">
                Combinamos inteligência de dados com 20 anos de campo para oferecer as melhores taxas em frotas, silos e frotas de linha amarela.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-10">
                <motion.a 
                  href="#contact" 
                  whileHover="hover"
                  initial="initial"
                  className="relative overflow-hidden px-12 py-6 bg-editorial-accent text-agro-dark font-bold text-xs tracking-[0.3em] uppercase group flex items-center"
                >
                  <motion.div 
                    className="absolute inset-0 bg-white"
                    variants={{
                      initial: { y: "100%" },
                      hover: { y: 0 }
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-[#A6C253] transition-colors duration-300">
                    Falar com Especialista
                    <ArrowRight size={16} />
                  </span>
                </motion.a>
                
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-agro-dark overflow-hidden grayscale">
                        <img src={`https://picsum.photos/seed/agro-user-${i}/100/100`} alt="Cli" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div className="text-[9px] uppercase tracking-widest leading-tight">
                    <span className="text-white font-bold block">+1.200</span>
                    <span className="text-white/40">Produtores Segurados</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="hidden lg:col-span-6 lg:grid grid-cols-2 gap-6 relative">
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="aspect-[3/4] card-glass overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1592919016381-f07ecd5a8963?auto=format&fit=crop&q=80&w=800" 
                  alt="Modern tractor" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] font-bold text-editorial-accent uppercase tracking-widest block mb-2">Máquinas</span>
                  <p className="text-white text-xs font-serif italic">Cobertura All-Risk</p>
                </div>
              </div>
              <div className="card-glass p-8 flex items-center justify-between border-editorial-accent/20">
                <div>
                   <p className="text-[9px] text-white/40 uppercase tracking-widest mb-1">Taxas Médias</p>
                   <p className="text-white font-bold text-sm">-18.4% vs Mercado</p>
                </div>
                <TrendingUp className="text-editorial-accent" size={20} />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6 pt-12"
            >
              <div className="card-glass p-8 bg-white/5 border-white/10 backdrop-blur-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-2 h-2 rounded-full bg-editorial-accent animate-pulse"></div>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">Análise em Tempo Real</span>
                </div>
                <div className="space-y-3">
                   <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 2, delay: 1 }}
                        className="h-full bg-editorial-accent"
                      ></motion.div>
                   </div>
                   <div className="flex justify-between text-[8px] text-white/30 uppercase tracking-widest">
                      <span>Risco Climático</span>
                      <span>Baixo</span>
                   </div>
                </div>
              </div>
              <div className="aspect-square card-glass overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800" 
                  alt="Grain silos" 
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="text-[10px] font-bold text-editorial-accent uppercase tracking-widest block mb-2">Armazenagem</span>
                  <p className="text-white text-xs font-serif italic">Seguro Safra & Silos</p>
                </div>
              </div>
              <div className="vertical-text text-[9px] uppercase tracking-[0.5em] opacity-10 absolute -right-12 top-0 font-bold">AGRICULTURAL SOLUTIONS</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Carousel (Logo Wall) */}
      <div className="bg-editorial-accent py-8 overflow-hidden border-y border-white/5 relative">
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-editorial-accent to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-editorial-accent to-transparent z-10"></div>
        
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-32 items-center"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-32 items-center">
              {["Porto Seguro", "AXA Seguros", "Essor", "Bradesco Seguros", "Newe Seguros", "AKAD", "Excelsior"].map((partner) => (
                <span 
                  key={partner} 
                  className="text-agro-dark/50 font-bold uppercase tracking-[0.4em] text-[11px] hover:text-agro-dark transition-colors cursor-default"
                >
                  {partner}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-agro-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 mb-20 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <span className="text-editorial-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">Especialidades</span>
            <h2 className="text-5xl md:text-6xl font-serif italic font-light tracking-tight text-white mb-6">Onde somos <span className="font-bold text-editorial-accent not-italic tracking-tighter">experts</span></h2>
            <p className="text-white/50 font-light leading-relaxed">
              Soluções modernas e robustas para os desafios mais complexos do agronegócio e logística industrial.
            </p>
          </motion.div>
          <div className="hidden md:block h-[1px] flex-grow mx-12 bg-white/10"></div>
        </div>

        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileHover="hover"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  initial: { opacity: 0, y: 40 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.8, 
                      delay: index * 0.15,
                      ease: [0.21, 0.47, 0.32, 0.98] 
                    }
                  }
                }}
                className="group card-glass p-10 flex flex-col justify-between hover:bg-editorial-accent/10 transition-all duration-700 min-h-[400px] cursor-pointer"
              >
                <div>
                   <div className="flex justify-between items-start mb-8">
                      <span className="text-4xl font-serif italic text-editorial-accent opacity-50">{(index + 1).toString().padStart(2, '0')}.</span>
                      <motion.div 
                        variants={{
                          hover: { x: 5, backgroundColor: "var(--color-editorial-accent)", color: "var(--color-agro-dark)" }
                        }}
                        className="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full text-white transition-all duration-300"
                      >
                        <ArrowRight size={16} />
                      </motion.div>
                   </div>
                   
                   <motion.div
                     variants={{
                       hover: { scale: 1.1, rotate: 5, y: -5 }
                     }}
                     transition={{ type: "spring", stiffness: 400, damping: 15 }}
                     className="mb-6 inline-block text-editorial-accent"
                   >
                     <service.icon size={42} strokeWidth={1.2} />
                   </motion.div>

                   <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter text-white">{service.title}</h3>
                   <p className="text-white/40 text-xs leading-relaxed pr-4 mb-8">
                     {service.description}
                   </p>
                </div>
                <ul className="space-y-4">
                  {service.features.slice(0, 2).map((feature, fIndex) => (
                    <li key={fIndex} className="text-[10px] font-bold uppercase tracking-widest text-white/30 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-editorial-accent rotate-45"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section: Frotas e Taxas */}
      <section className="py-32 bg-[#2a3f46] relative overflow-hidden border-y border-white/5">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-editorial-accent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-editorial-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Ofertas Premium</span>
              <h2 className="text-5xl md:text-6xl font-serif italic font-light text-white mb-10 leading-tight">
                Condições <span className="text-editorial-accent not-italic font-bold tracking-tighter">exclusivas</span> para frotas de todos os portes.
              </h2>
              <div className="space-y-4 mb-12">
                <div className="card-glass p-8 hover:bg-white/5 transition-all cursor-default">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-serif italic text-editorial-accent">A.</span>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">Frota Agrícola & Linha Amarela</h4>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed">Especialidade em máquinas pesadas, retroescavadeiras e frotas integradas com taxas agressivas.</p>
                </div>
                <div className="card-glass p-8 hover:bg-white/5 transition-all cursor-default">
                   <div className="flex items-center gap-4 mb-4">
                    <span className="text-2xl font-serif italic text-editorial-accent">B.</span>
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest">Leves e Pesados</h4>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed">Cobertura inteligente para transportadoras e frotas corporativas de apoio logístico.</p>
                </div>
              </div>
              <button className="flex items-center text-agro-dark font-bold bg-editorial-accent px-10 py-5 text-xs tracking-widest uppercase hover:opacity-90 transition-all group">
                SOLICITAR COTAÇÃO DE FROTA
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200" 
                  alt="Fleet of trucks" 
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-[1500ms] ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-editorial-accent mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-1000 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-agro-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </div>
              <div className="absolute -bottom-12 -left-12 card-glass p-12 max-w-sm backdrop-blur-2xl transition-transform duration-700 group-hover:-translate-y-2">
                <div className="flex items-center gap-6 mb-4">
                  <span className="text-5xl font-serif italic text-editorial-accent">-15%</span>
                  <div className="h-10 w-[1px] bg-white/10"></div>
                  <span className="text-[10px] text-white/50 font-bold uppercase tracking-[0.2em] leading-tight">Média de <br />Economia</span>
                </div>
                <p className="text-[10px] text-white/30 leading-relaxed italic font-serif">Baseado em nossas taxas preferenciais com as maiores seguradoras do mundo.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="about" className="py-32 bg-[#2d444c] overflow-hidden">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex justify-between items-center mb-24">
             <div className="h-[1px] flex-grow bg-white/5"></div>
             <div className="px-12 text-center shrink-0">
                <span className="text-editorial-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Excelência</span>
                <h2 className="text-4xl md:text-5xl font-serif italic font-light text-white tracking-tight text-wrap">Por que iGrow <span className="not-italic font-bold text-editorial-accent tracking-tighter">Seguros</span>?</h2>
             </div>
             <div className="h-[1px] flex-grow bg-white/5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex w-24 h-24 card-glass rounded-full items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-700">
                  <reason.icon className="text-editorial-accent w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-white mb-6 underline decoration-white/10 underline-offset-8">{reason.title}</h3>
                <p className="text-white/40 leading-relaxed font-light text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-agro-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-12">
          <div className="card-glass p-12 md:p-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-editorial-accent via-white/20 to-agro-dark"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
              <div>
                <span className="text-editorial-accent uppercase tracking-[0.4em] text-[10px] font-bold mb-6 block">Consultoria</span>
                <h2 className="text-5xl md:text-6xl font-serif font-light text-white mb-10 italic">
                  Pronto para <span className="text-editorial-accent font-bold not-italic tracking-tighter">blindar</span> seu agronegócio?
                </h2>
                <div className="space-y-10">
                  <div className="flex items-start">
                    <div className="w-12 h-12 card-glass flex items-center justify-center mr-8 shrink-0">
                      <Phone className="text-editorial-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-white/30 font-bold uppercase tracking-[0.2em] text-[9px] mb-2">WhatsApp direto</p>
                      <p className="text-white text-xl font-medium tracking-tight hover:text-editorial-accent transition-colors cursor-pointer">(34) 99771-3987</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 card-glass flex items-center justify-center mr-8 shrink-0">
                      <Mail className="text-editorial-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-white/30 font-bold uppercase tracking-[0.2em] text-[9px] mb-2">E-mail corporativo</p>
                      <p className="text-white text-xl font-medium tracking-tight hover:text-editorial-accent transition-colors cursor-pointer">gabriel@igrowseguros.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 card-glass flex items-center justify-center mr-8 shrink-0">
                      <MapPin className="text-editorial-accent" size={20} />
                    </div>
                    <div>
                      <p className="text-white/30 font-bold uppercase tracking-[0.2em] text-[9px] mb-2">onde estamos localizados</p>
                      <p className="text-white text-xl font-medium tracking-tight">Uberaba, Minas Gerais</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-glass p-12 relative overflow-hidden backdrop-blur-3xl shadow-3xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Nome Completo</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 focus:outline-none focus:border-editorial-accent text-white transition-colors" placeholder="Ex: João da Silva" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">E-mail</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 focus:outline-none focus:border-editorial-accent text-white transition-colors" placeholder="joao@fazenda.com" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">Interesse Principal</label>
                    <div className="relative">
                        <select className="w-full bg-white/5 border border-white/10 rounded-none px-6 py-4 focus:outline-none focus:border-editorial-accent text-white transition-colors appearance-none cursor-pointer">
                          <option className="bg-agro-dark">Seguro de Máquinas</option>
                          <option className="bg-agro-dark">Seguro de Frotas</option>
                          <option className="bg-agro-dark">Transporte Internacional</option>
                          <option className="bg-agro-dark">Armazenagem / Silos</option>
                        </select>
                        <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 text-white/20 rotate-90" size={16} />
                    </div>
                  </div>
                  <button className="w-full bg-editorial-accent text-agro-dark font-bold py-5 text-xs tracking-[0.3em] uppercase hover:opacity-90 transition-all shadow-2xl shadow-agro-green/10">
                    Solicitar Proposta Digital
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a282d] py-20 text-white/40">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-12">
            <div className="flex gap-24 text-wrap">
               <div>
                  <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 block mb-4">Sede Administrativa</span>
                  <p className="text-xs font-medium text-white/80">Uberaba, MG — BR</p>
               </div>
               <div>
                  <span className="text-[9px] uppercase tracking-[0.3em] opacity-40 block mb-4">Fale Conosco</span>
                  <p className="text-xs font-medium text-white/80 underline decoration-editorial-accent underline-offset-8">gabriel@igrowseguros.com</p>
               </div>
            </div>
            
            <div className="flex items-center gap-8">
               <span className="vertical-text text-[9px] uppercase tracking-[0.5em] opacity-20 font-bold">PREMIUM BROKERAGE</span>
               <div className="h-20 w-[1px] bg-white opacity-5"></div>
               <div className="text-right">
                  <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-white mb-2">CONDIÇÕES 2026</span>
                  <span className="block text-xs opacity-40 font-serif italic text-wrap">Certificação ANSEG A+</span>
               </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <ShieldCheck size={14} className="text-editorial-accent" />
                </div>
                <p className="text-[10px] font-bold tracking-widest uppercase mb-0">iGrow Seguros Premium Insurance Broker</p>
              </div>
              <div className="h-[1px] w-8 bg-white/10 hidden md:block"></div>
              <div className="flex items-center gap-5">
                <a href="#" className="text-white/20 hover:text-editorial-accent transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="text-white/20 hover:text-editorial-accent transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" className="text-white/20 hover:text-editorial-accent transition-colors">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
            <p className="text-[9px] uppercase tracking-widest opacity-30">© 2026 All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
