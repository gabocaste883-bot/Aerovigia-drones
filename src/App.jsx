import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  Globe2,
  Languages,
  LifeBuoy,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Plane,
  Radar,
  Shield,
  ShieldCheck,
  Truck,
  Users,
  X,
  Zap,
  Headphones,
  MonitorCheck,
  Search,
} from 'lucide-react';

const CONTACT = {
  mainPhone: '+971 508 801 447',
  whatsapp: '971508801447',
  email1: 'brigada13@hotmail.com',
  email2: 'wilmerbello75@gmail.com',
  license: '20252420300059243',
};

const assets = {
  hero: '/assets/hero-drone-clean-v4.jpg?v=4',
  process: '/assets/process-drone-v3.jpg?v=3',
  search: '/assets/service-search.jpg?v=3',
  residential: '/assets/service-residential.jpg?v=3',
  industrial: '/assets/service-industrial.jpg?v=3',
  escort: '/assets/service-escort.jpg?v=3',
  operator: '/assets/operator-wilmer-bello.jpg?v=3',
  certificate: '/assets/license-certificate.jpg?v=3',
  footer: '/assets/drone-footer.jpg?v=3',
};

const content = {
  es: {
    langButton: 'EN',
    nav: [
      ['Inicio', '#inicio'],
      ['Servicios', '#servicios'],
      ['Licencia', '#licencia'],
      ['Sectores', '#sectores'],
      ['Contacto', '#contacto'],
    ],
    eyebrow: 'Grupo Drones y Movilidad · Colombia',
    heroTitle: 'Seguridad, supervisión y rescate en tiempo real con drones.',
    heroText:
      'Elevamos la seguridad y la protección de la vida con inteligencia aérea en tiempo real. AEROVIGIA-DRONES ofrece ojos en el cielo para proteger personas, activos, rutas e infraestructura crítica.',
    primaryCta: 'Solicitar vigilancia aérea',
    secondaryCta: 'Ver servicios',
    badge1: 'Localización precisa',
    badge2: 'Reacción inmediata',
    badge3: 'Tecnología que salva vidas',
    heroCardTitle: 'Drones de vigilancia en operación',
    heroCardText: 'Monitoreo aéreo, cobertura visual, supervisión inteligente y apoyo operativo para tomar decisiones rápidas.',
    servicesTag: 'Soluciones especializadas',
    servicesTitle: 'Vigilancia aérea profesional para seguridad, rescate e infraestructura.',
    servicesText:
      'AEROVIGIA-DRONES combina drones, supervisión remota y operación táctica para reducir puntos ciegos, mejorar tiempos de reacción y apoyar decisiones críticas.',
    services: [
      { icon: LifeBuoy, image: assets.search, title: 'Búsqueda en tiempo real', text: 'Localización inmediata de personas perdidas o desaparecidas mediante apoyo aéreo y tecnología térmica para zonas boscosas, áreas extensas o condiciones de baja visibilidad.' },
      { icon: Building2, image: assets.residential, title: 'Patrullaje residencial', text: 'Revista dinámica de barrios, conjuntos y edificios. Verificación aérea de alertas sospechosas, reducción de puntos ciegos y monitoreo preventivo.' },
      { icon: Factory, image: assets.industrial, title: 'Supervisión petrolera e industrial', text: 'Revista técnica de activos críticos, oleoductos e infraestructura estratégica para prevención de riesgos y control visual de zonas sensibles.' },
      { icon: Truck, image: assets.escort, title: 'Escoltas aéreas de valores', text: 'Acompañamiento aéreo preventivo para transporte de productos de alto valor, detección de amenazas en ruta y apoyo visual en tiempo real.' },
    ],
    trustTag: 'Confianza operacional',
    trustTitle: 'Operación respaldada con licencia de vuelo comercial.',
    trustText: 'La sección de confianza destaca la capacidad comercial de operación aérea y el enfoque serio de seguridad, supervisión y rescate en tiempo real.',
    licenseLabel: 'Licencia de vuelo comercial',
    licenseText: 'Número de licencia comercial para operación con drones en Colombia',
    certifiedBy: 'Wilmer Bello Caicedo · Grupo Drones y Movilidad',
    sectorsTag: 'Clientes objetivo',
    sectorsTitle: 'Diseñado para organizaciones que necesitan visibilidad aérea, control y reacción.',
    sectors: [
      [Shield, 'Empresas de seguridad privada'],
      [Building2, 'Conjuntos residenciales'],
      [Factory, 'Empresas e industria'],
      [Truck, 'Transporte de valores'],
      [Users, 'Eventos y aglomeraciones'],
      [MapPin, 'Fincas y zonas rurales'],
    ],
    processTag: 'Cómo trabajamos',
    processTitle: 'Del aviso al control visual en tiempo real.',
    processLead: 'Más visión, menos puntos ciegos y mejor capacidad de reacción.',
    process: [
      { number: '01', icon: Headphones, title: 'Activación del caso', text: 'Recibimos la ubicación, tipo de riesgo y necesidad operativa: búsqueda, patrullaje, supervisión o escolta.' },
      { number: '02', icon: Plane, title: 'Despliegue aéreo', text: 'El equipo realiza inspección aérea para ampliar el campo visual, cubrir zonas críticas y detectar amenazas o señales relevantes.' },
      { number: '03', icon: MonitorCheck, title: 'Información para actuar', text: 'Entregamos apoyo visual en tiempo real para facilitar decisiones rápidas, coordinación en campo y reacción preventiva.' },
    ],
    consultationTitle: '¿Te gustaría saber cómo los drones pueden mejorar la seguridad de tu empresa, conjunto o ruta?',
    consultationText: 'Contáctanos y recibe una asesoría gratuita. Revisamos tu necesidad, el tipo de zona, el nivel de riesgo y te orientamos sobre la mejor solución de vigilancia, supervisión o rescate aéreo.',
    consultationCta: 'Quiero mi asesoría gratis',
    contactTag: 'Contacto',
    contactTitle: '¿Necesitas ojos en el cielo para proteger una zona, ruta o persona?',
    contactText: 'Solicita una evaluación del caso y revisemos cómo AEROVIGIA-DRONES puede apoyar con seguridad aérea, supervisión o rescate en tiempo real en Colombia.',
    whatsappCta: 'Hablar por WhatsApp',
    emailCta: 'Enviar correo',
    footer: 'Security, Supervision and Real-Time Rescue · Operación en Colombia',
    whatsappMessage: 'Hola, quiero solicitar información sobre servicios de AEROVIGIA-DRONES para seguridad, supervisión o rescate en tiempo real. Mi caso es:',
  },
  en: {
    langButton: 'ES',
    nav: [
      ['Home', '#inicio'],
      ['Services', '#servicios'],
      ['License', '#licencia'],
      ['Sectors', '#sectores'],
      ['Contact', '#contacto'],
    ],
    eyebrow: 'Drones and Mobility Group · Colombia',
    heroTitle: 'Real-time security, supervision and rescue with drones.',
    heroText: 'We elevate security and the protection of life with real-time aerial intelligence. AEROVIGIA-DRONES provides eyes in the sky to protect people, assets, routes and critical infrastructure.',
    primaryCta: 'Request aerial surveillance',
    secondaryCta: 'View services',
    badge1: 'Precise location',
    badge2: 'Immediate response',
    badge3: 'Technology that saves lives',
    heroCardTitle: 'Surveillance drones in operation',
    heroCardText: 'Aerial monitoring, visual coverage, intelligent supervision and operational support for fast decisions.',
    servicesTag: 'Specialized solutions',
    servicesTitle: 'Professional aerial surveillance for security, rescue and infrastructure.',
    servicesText: 'AEROVIGIA-DRONES combines drones, remote supervision and tactical operation to reduce blind spots, improve response times and support critical decisions.',
    services: [
      { icon: LifeBuoy, image: assets.search, title: 'Real-time search', text: 'Immediate location of missing or lost people through aerial support and thermal technology for forest areas, large zones or low-visibility conditions.' },
      { icon: Building2, image: assets.residential, title: 'Residential patrol', text: 'Dynamic patrol of neighborhoods, residential complexes and buildings. Aerial verification of suspicious alerts, blind-spot reduction and preventive monitoring.' },
      { icon: Factory, image: assets.industrial, title: 'Oil and industrial supervision', text: 'Technical review of critical assets, pipelines and strategic infrastructure for risk prevention and visual control of sensitive areas.' },
      { icon: Truck, image: assets.escort, title: 'Aerial escort for valuables', text: 'Preventive aerial support for high-value transportation routes, threat detection and real-time visual assistance.' },
    ],
    trustTag: 'Operational trust',
    trustTitle: 'Operation backed by a commercial flight license.',
    trustText: 'This trust section highlights commercial aerial operation capacity and the serious focus on security, supervision and real-time rescue.',
    licenseLabel: 'Commercial flight license',
    licenseText: 'Commercial license number for drone operation in Colombia',
    certifiedBy: 'Wilmer Bello Caicedo · Drones and Mobility Group',
    sectorsTag: 'Target clients',
    sectorsTitle: 'Built for organizations that need aerial visibility, control and response.',
    sectors: [
      [Shield, 'Private security companies'],
      [Building2, 'Residential communities'],
      [Factory, 'Companies and industry'],
      [Truck, 'Valuable goods transport'],
      [Users, 'Events and crowds'],
      [MapPin, 'Farms and rural areas'],
    ],
    processTag: 'How we work',
    processTitle: 'From alert to real-time visual control.',
    processLead: 'More visibility, fewer blind spots and faster response.',
    process: [
      { number: '01', icon: Headphones, title: 'Case activation', text: 'We receive the location, type of risk and operational need: search, patrol, supervision or escort.' },
      { number: '02', icon: Plane, title: 'Aerial deployment', text: 'The team conducts an aerial inspection to expand the field of view, cover critical areas and detect threats or relevant signals.' },
      { number: '03', icon: MonitorCheck, title: 'Information to act', text: 'We provide real-time visual support to enable fast decisions, field coordination and preventive response.' },
    ],
    consultationTitle: 'Would you like to know how drones can improve the security of your company, community or route?',
    consultationText: 'Contact us and receive a free consultation. We review your need, area type, risk level and guide you toward the best aerial surveillance, supervision or rescue solution.',
    consultationCta: 'I want my free consultation',
    contactTag: 'Contact',
    contactTitle: 'Do you need eyes in the sky to protect an area, route or person?',
    contactText: 'Request a case evaluation and let us review how AEROVIGIA-DRONES can support aerial security, supervision or real-time rescue in Colombia.',
    whatsappCta: 'Message on WhatsApp',
    emailCta: 'Send email',
    footer: 'Security, Supervision and Real-Time Rescue · Operation in Colombia',
    whatsappMessage: 'Hello, I would like information about AEROVIGIA-DRONES services for real-time security, supervision or rescue. My case is:',
  },
};

function SectionTag({ children }) {
  return <p className="mb-3 text-sm font-black uppercase tracking-[0.24em] text-cyan-400">{children}</p>;
}

export default function App() {
  const [lang, setLang] = useState('es');
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  const whatsappUrl = useMemo(() => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(t.whatsappMessage)}`, [t.whatsappMessage]);

  return (
    <main id="inicio" className="min-h-screen bg-[#020712] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020712]/95 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-[#020712] shadow-lg shadow-cyan-500/25"><Plane size={28} /></div>
            <div><p className="text-sm font-black leading-tight">AEROVIGIA-DRONES</p><p className="text-xs text-slate-400">Grupo Drones y Movilidad</p></div>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {t.nav.map(([label, href]) => <a key={label} href={href} className="text-sm font-semibold text-slate-300 transition hover:text-cyan-200">{label}</a>)}
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-3 text-sm font-bold text-white transition hover:bg-white/10"><Languages size={16} /> {t.langButton}</button>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-black text-[#020712] transition hover:scale-[1.02] hover:bg-white">{t.primaryCta} <ArrowRight size={16} /></a>
          </div>
          <button className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setMenuOpen((v) => !v)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </nav>
        {menuOpen && <div className="border-t border-white/10 px-6 py-4 md:hidden"><div className="flex flex-col gap-4">{t.nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="text-sm text-slate-300">{label}</a>)}<button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-5 py-3 text-sm font-bold text-white"><Languages size={16} /> {t.langButton}</button><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 text-sm font-black text-[#020712]">{t.primaryCta} <ArrowRight size={16} /></a></div></div>}
      </header>

      <section className="relative overflow-hidden border-b border-cyan-300/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,0.20),transparent_35%),radial-gradient(circle_at_20%_85%,rgba(14,165,233,0.16),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100"><ShieldCheck size={16} /> {t.eyebrow}</div>
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{t.heroText}</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-4 text-sm font-black text-[#020712] shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:bg-white">{t.primaryCta} <ArrowRight size={18} /></a><a href="#servicios" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 text-sm font-black text-white transition hover:bg-white/10">{t.secondaryCta} <ChevronRight size={18} /></a></div>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">{[t.badge1, t.badge2, t.badge3].map((badge) => <div key={badge} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm font-bold text-slate-200"><CheckCircle2 className="mb-3 text-cyan-300" size={22} /> {badge}</div>)}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, delay: 0.1 }}>
            <div className="relative overflow-hidden rounded-[2.2rem] border border-cyan-300/25 bg-[#06111f] p-3 shadow-2xl shadow-cyan-500/10">
              <img
                src={assets.hero}
                alt="Dron profesional de vigilancia aérea en operación nocturna"
                className="h-[520px] w-full rounded-[1.6rem] object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="servicios" className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><SectionTag>{t.servicesTag}</SectionTag><h2 className="text-3xl font-black leading-tight md:text-5xl">{t.servicesTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-300">{t.servicesText}</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{t.services.map(({ icon: Icon, image, title, text }) => <div key={title} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-300/30"><img src={image} alt={title} className="h-48 w-full object-cover" /><div className="p-6"><div className="mb-5 inline-flex rounded-2xl bg-cyan-300/10 p-4 text-cyan-300"><Icon size={30} /></div><h3 className="text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-300">{text}</p></div></div>)}</div></div>
      </section>

      <section id="licencia" className="bg-slate-50 py-20 text-[#020712]"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8"><div><SectionTag>{t.trustTag}</SectionTag><h2 className="text-3xl font-black leading-tight md:text-5xl">{t.trustTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-700">{t.trustText}</p><div className="mt-8 overflow-hidden rounded-[2rem] bg-[#020712] shadow-2xl"><img src={assets.operator} alt="Wilmer Bello Caicedo operador certificado" className="h-[360px] w-full object-cover object-center" /><div className="border-t border-white/10 p-6 text-white"><p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">{lang === 'es' ? 'Operador certificado' : 'Certified operator'}</p><h3 className="mt-2 text-2xl font-black">Wilmer Bello Caicedo</h3><p className="mt-2 text-sm text-slate-300">Grupo Drones y Movilidad · AEROVIGIA-DRONES</p></div></div></div><div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-2xl"><img src={assets.certificate} alt="Certificado y licencia comercial AEROVIGIA-DRONES" className="mb-6 w-full rounded-[1.5rem] border border-slate-200 object-cover" /><div className="rounded-[1.5rem] border border-cyan-200 bg-gradient-to-br from-white to-cyan-50 p-6"><div className="flex items-start justify-between gap-4"><div><p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-700">{t.licenseLabel}</p><h3 className="mt-3 text-3xl font-black">AEROVIGIA-DRONES</h3><p className="mt-2 font-semibold text-slate-600">Grupo Drones y Movilidad</p></div><div className="rounded-2xl bg-[#020712] p-4 text-cyan-300"><BadgeCheck size={34} /></div></div><div className="my-7 h-px bg-slate-200" /><p className="text-sm font-semibold text-slate-500">{t.licenseText}</p><p className="mt-2 break-all rounded-2xl bg-[#020712] px-5 py-4 text-2xl font-black tracking-wide text-cyan-300">{CONTACT.license}</p><p className="mt-5 text-sm font-bold text-slate-700">{t.certifiedBy}</p><p className="mt-2 text-sm text-slate-500">Security, Supervision and Real-Time Rescue</p></div></div></div></section>

      <section id="sectores" className="py-20"><div className="mx-auto max-w-7xl px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><SectionTag>{t.sectorsTag}</SectionTag><h2 className="text-3xl font-black leading-tight md:text-5xl">{t.sectorsTitle}</h2></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{t.sectors.map(([Icon, label]) => <div key={label} className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"><Icon className="mb-4 text-cyan-300" size={30} /><p className="text-lg font-black">{label}</p></div>)}</div></div></section>

      <section className="bg-white py-20 text-[#020712]"><div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8"><div><SectionTag>{t.processTag}</SectionTag><h2 className="text-3xl font-black leading-tight md:text-5xl">{t.processTitle}</h2><p className="mt-5 text-lg leading-8 text-slate-700">{t.processLead}</p><img src={assets.process} alt="Dron en despliegue de vigilancia aérea" className="mt-8 rounded-[2rem] object-cover shadow-2xl" /></div><div className="space-y-5">{t.process.map((step) => { const Icon = step.icon; return <div key={step.number} className="rounded-3xl bg-slate-50 p-6 shadow-xl"><div className="flex gap-5"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#020712] text-lg font-black text-cyan-300">{step.number}</div><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700"><Icon size={26} /></div><div><h3 className="text-xl font-black">{step.title}</h3><p className="mt-2 leading-7 text-slate-700">{step.text}</p></div></div></div>; })}</div></div></section>

      <section className="relative overflow-hidden py-20"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(37,99,235,0.18),transparent_30%)]" /><div className="relative mx-auto max-w-6xl px-6 text-center lg:px-8"><div className="rounded-[2.5rem] border border-cyan-300/20 bg-white/[0.06] p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur md:p-12"><div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-300 text-[#020712] shadow-lg shadow-cyan-500/20"><Search size={32} /></div><p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">{lang === 'es' ? 'Asesoría gratuita' : 'Free consultation'}</p><h2 className="mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">{t.consultationTitle}</h2><p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">{t.consultationText}</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-7 py-4 font-black text-[#020712] shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02] hover:bg-white">{t.consultationCta} <ArrowRight size={18} /></a><a href={`mailto:${CONTACT.email1}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-7 py-4 font-black text-white transition hover:bg-white/10">{t.emailCta} <Mail size={18} /></a></div></div></div></section>

      <section id="contacto" className="relative overflow-hidden bg-cyan-300 py-20 text-[#020712]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.65),transparent_32%)]" /><div className="relative mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:px-8"><div><p className="text-sm font-black uppercase tracking-[0.24em]">{t.contactTag}</p><h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{t.contactTitle}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-800">{t.contactText}</p></div><div className="rounded-[2rem] bg-[#020712] p-6 text-white shadow-2xl"><h3 className="text-2xl font-black">AEROVIGIA-DRONES</h3><p className="mt-2 text-slate-400">Grupo Drones y Movilidad</p><div className="mt-6 space-y-4 text-sm text-slate-300"><p><MapPin className="mr-2 inline text-cyan-300" size={18} /> Colombia</p><p><MessageCircle className="mr-2 inline text-cyan-300" size={18} /> {CONTACT.mainPhone}</p><p><Globe2 className="mr-2 inline text-cyan-300" size={18} /> Operación en Colombia</p><p><Mail className="mr-2 inline text-cyan-300" size={18} /> {CONTACT.email1}</p><p><Mail className="mr-2 inline text-cyan-300" size={18} /> {CONTACT.email2}</p></div><div className="mt-7 grid gap-3 sm:grid-cols-2"><a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-4 font-black text-[#020712] transition hover:bg-white">{t.whatsappCta} <MessageCircle size={18} /></a><a href={`mailto:${CONTACT.email1}`} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-5 py-4 font-black text-white transition hover:bg-white/10">{t.emailCta} <Mail size={18} /></a></div></div></div></section>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110" aria-label="WhatsApp"><MessageCircle size={28} /></a>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-500"><p>© 2026 AEROVIGIA-DRONES · Grupo Drones y Movilidad. {t.footer}</p></footer>
    </main>
  );
}
