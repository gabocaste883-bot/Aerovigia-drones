import {
  ArrowRight,
  Building2,
  Check,
  Crown,
  Factory,
  Languages,
  Mail,
  MapPin,
  Menu,
  Plane,
  Search,
  Shield,
  Target,
  Truck,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'
import wilmerPhoto from './assets/wilmer-bello-caicedo.png'
import droneControl from './assets/drone-control-visual-mejorada.png'
import escoltasValores from './assets/escoltas-aereas-valores.png'
import seguridadInfraestructuras from './assets/seguridad-infraestructuras.png'
import proteccionVip from './assets/proteccion-vip-alto-perfil.png'
import seguridadDronesBusqueda from './assets/seguridad-drones-busqueda-tiempo-real.png'
import logoHeader from './assets/aerovigia-logo-header-web.png'

const PHONE_DISPLAY_EMIRATES = '+971 50 880 1447'
const PHONE_DISPLAY_COLOMBIA = '+57 321 903 1332'
const WHATSAPP_EMIRATES = '971508801447'
const WHATSAPP_COLOMBIA = '573219031332'
const PRIMARY_EMAIL = 'brigada13@hotmail.com'
const SECONDARY_EMAIL = 'wilmerbello75@gmail.com'

const whatsappMessage = encodeURIComponent(
  'Hola, quiero información sobre AEROVIGIA-DRONES y sus servicios de seguridad aérea con drones.'
)
const whatsappUrlEmirates = `https://wa.me/${WHATSAPP_EMIRATES}?text=${whatsappMessage}`
const whatsappUrlColombia = `https://wa.me/${WHATSAPP_COLOMBIA}?text=${whatsappMessage}`
const whatsappUrl = whatsappUrlEmirates

const services = [
  {
    icon: Target,
    title: 'Seguridad con drones y búsqueda en tiempo real',
    text: 'Monitoreo aéreo para detectar riesgos, apoyar búsquedas y responder rápidamente ante emergencias o situaciones críticas.',
    image: seguridadDronesBusqueda,
  },
  {
    icon: Crown,
    title: 'Protección VIP de alto perfil',
    text: 'Apoyo aéreo preventivo para la protección de personas de alto perfil, ejecutivos, empresarios y desplazamientos sensibles.',
    image: proteccionVip,
  },
  {
    icon: Factory,
    title: 'Seguridad de infraestructuras',
    text: 'Supervisión aérea de activos, perímetros, instalaciones industriales, zonas privadas e infraestructura crítica.',
    image: seguridadInfraestructuras,
  },
  {
    icon: Truck,
    title: 'Escoltas aéreas de valores',
    text: 'Acompañamiento aéreo para rutas, transporte de valores y operaciones donde se requiere detección temprana de amenazas.',
    image: escoltasValores,
  },
]

const sectors = [
  { icon: Shield, label: 'Empresas de seguridad privada' },
  { icon: Building2, label: 'Conjuntos residenciales' },
  { icon: Factory, label: 'Empresas e industria' },
  { icon: Truck, label: 'Transporte de valores' },
  { icon: Crown, label: 'Protección VIP' },
  { icon: MapPin, label: 'Fincas y zonas rurales' },
]

const steps = [
  {
    title: 'Activación del caso',
    text: 'Recibimos la ubicación, tipo de riesgo y necesidad operativa: búsqueda, patrullaje, supervisión o escolta.',
    icon: Users,
  },
  {
    title: 'Despliegue aéreo',
    text: 'El equipo realiza inspección aérea para ampliar el campo visual, cubrir zonas críticas y detectar amenazas o señales relevantes.',
    icon: Plane,
  },
  {
    title: 'Información para actuar',
    text: 'Entregamos apoyo visual en tiempo real para facilitar decisiones rápidas, coordinación en campo y reacción preventiva.',
    icon: Search,
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="page">
      <header className="topbar">
        <div className="container nav">
          <a className="brand brandLogoLink" href="#inicio" aria-label="AEROVIGIA-DRONES inicio" onClick={closeMenu}>
            <img className="brandLogoHeader" src={logoHeader} alt="AEROVIGIA-DRONES" />
          </a>

          <nav className={`navLinks ${menuOpen ? 'active' : ''}`}>
            <a href="#inicio" onClick={closeMenu}>Inicio</a>
            <a href="#servicios" onClick={closeMenu}>Servicios</a>
            <a href="#perfil" onClick={closeMenu}>Perfil</a>
            <a href="#sectores" onClick={closeMenu}>Sectores</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
          </nav>

          <div className="navActions">
            <button className="langBtn" type="button"><Languages size={17} /> EN</button>
            <a className="btn btnPrimary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Solicitar vigilancia aérea <ArrowRight size={18} />
            </a>
          </div>

          <button className="menuBtn" type="button" aria-label="Abrir menú" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="container heroGrid">
            <div className="heroCopy">
              <div className="pill"><Shield size={18} /> Grupo Drones y Movilidad · Colombia</div>
              <h1>Seguridad, supervisión y rescate en tiempo real con drones.</h1>
              <p>
                Elevamos la seguridad y la protección de la vida con inteligencia aérea en tiempo real.
                AEROVIGIA-DRONES ofrece ojos en el cielo para proteger personas, activos, rutas e infraestructura crítica.
              </p>
              <div className="heroActions">
                <a className="btn btnPrimary" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Solicitar vigilancia aérea <ArrowRight size={18} />
                </a>
                <a className="btn btnDark" href="#servicios">Ver servicios <ArrowRight size={16} /></a>
              </div>
              <div className="heroFeatures">
                <div className="featureMini"><span className="check"><Check size={15} /></span> Localización precisa</div>
                <div className="featureMini"><span className="check"><Check size={15} /></span> Reacción inmediata</div>
                <div className="featureMini"><span className="check"><Check size={15} /></span> Tecnología que salva vidas</div>
              </div>
            </div>

            <div className="heroMedia" aria-label="Dron profesional en operación nocturna">
              <div className="heroImage">
                <div className="scanIcon"><Target size={23} /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section sectionDark" id="servicios">
          <div className="container">
            <div className="sectionTitle">
              <span className="eyebrow">Soluciones especializadas</span>
              <h2>Vigilancia aérea profesional para seguridad, protección e infraestructura.</h2>
              <p>
                AEROVIGIA-DRONES combina drones, supervisión remota y operación táctica para reducir puntos ciegos,
                mejorar tiempos de reacción y apoyar decisiones críticas.
              </p>
            </div>

            <div className="servicesGrid">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <article className="serviceCard" key={service.title}>
                    <div className="serviceImg" style={{ backgroundImage: `url(${service.image})` }} />
                    <div className="serviceBody">
                      <div className="serviceIcon"><Icon size={25} /></div>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section sectionLight profileSection" id="perfil">
          <div className="container profileGrid">
            <div className="split">
              <span className="eyebrow">Dirección estratégica</span>
              <h2>Seguridad aérea liderada con enfoque operativo y preventivo.</h2>
              <p>
                AEROVIGIA-DRONES integra experiencia en seguridad, operación aérea y visión estratégica
                para ofrecer apoyo visual en tiempo real en escenarios de protección, supervisión y rescate.
              </p>
              <div className="profileInfoList">
                <div className="infoRow">
                  <div className="infoIcon">01</div>
                  <div>
                    <strong>Seguridad aérea con drones</strong>
                    <span>Enfoque en vigilancia, supervisión, búsqueda, protección y acompañamiento preventivo.</span>
                  </div>
                </div>
                <div className="infoRow">
                  <div className="infoIcon">02</div>
                  <div>
                    <strong>Operación con visión estratégica</strong>
                    <span>Servicios diseñados para organizaciones que requieren visibilidad aérea y reacción oportuna.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="profileCard">
              <img className="profilePhoto" src={wilmerPhoto} alt="Foto profesional de Wilmer Bello Caicedo" />
              <div className="profileCaption">
                <span className="eyebrow">Fundador</span>
                <h3>Wilmer Bello Caicedo</h3>
                <p>Fundador y Director de Estrategia en Seguridad Aérea con Drones</p>
                <p>Grupo Drones y Movilidad</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section sectionDark" id="sectores">
          <div className="container">
            <div className="sectionTitle compactTitle">
              <span className="eyebrow">Clientes objetivo</span>
              <h2>Diseñado para organizaciones que necesitan visibilidad aérea, control y reacción.</h2>
            </div>

            <div className="sectorsGrid">
              {sectors.map((sector) => {
                const Icon = sector.icon
                return (
                  <div className="sectorCard" key={sector.label}>
                    <Icon size={21} />
                    <span>{sector.label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section sectionLight" id="proceso">
          <div className="container workGrid">
            <div className="split">
              <span className="eyebrow">Cómo trabajamos</span>
              <h2>Del aviso al control visual en tiempo real.</h2>
              <p>Más visión, menos puntos ciegos y mejor capacidad de reacción.</p>
              <div className="workImage">
                <img src={droneControl} alt="Dron en control visual en tiempo real" />
              </div>
            </div>

            <div className="steps">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div className="step" key={step.title}>
                    <div className="stepNumber">{String(index + 1).padStart(2, '0')}</div>
                    <div className="stepIcon"><Icon size={20} /></div>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="ctaSection">
          <div className="container">
            <div className="ctaBox">
              <div className="ctaIcon"><Search size={26} /></div>
              <span className="eyebrow">Asesoría gratuita</span>
              <h2>¿Te gustaría saber cómo los drones pueden mejorar la seguridad de tu empresa, conjunto o ruta?</h2>
              <p>
                Contáctanos y recibe una asesoría gratuita. Revisamos tu necesidad, el tipo de zona,
                el nivel de riesgo y te orientamos sobre la mejor solución de vigilancia, supervisión o rescate aéreo.
              </p>
              <div className="ctaActions">
                <a className="btn btnPrimary" href={whatsappUrlEmirates} target="_blank" rel="noreferrer">
                  WhatsApp Emiratos <ArrowRight size={17} />
                </a>
                <a className="btn btnDark" href={whatsappUrlColombia} target="_blank" rel="noreferrer">WhatsApp Colombia</a>
                <a className="btn btnDark" href={`mailto:${PRIMARY_EMAIL}`}>Enviar correo <Mail size={16} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section sectionCyan" id="contacto">
          <div className="container contactGrid">
            <div className="contactCopy">
              <span className="eyebrow darkEyebrow">Contacto</span>
              <h2>¿Necesitas ojos en el cielo para proteger una zona, ruta o persona?</h2>
              <p>
                Solicita una evaluación del caso y revisemos cómo AEROVIGIA-DRONES puede apoyar con seguridad aérea,
                supervisión o rescate en tiempo real en Colombia.
              </p>
            </div>

            <div className="contactCard">
              <h3>AEROVIGIA-DRONES</h3>
              <small>Grupo Drones y Movilidad</small>
              <div className="contactList">
                <div><MapPin size={16} /> Colombia</div>
                <div><span>☏</span> Emiratos Árabes Unidos: {PHONE_DISPLAY_EMIRATES}</div>
                <div><span>☏</span> Colombia: {PHONE_DISPLAY_COLOMBIA}</div>
                <div><Plane size={16} /> Operación en Colombia</div>
                <div><Mail size={16} /> {PRIMARY_EMAIL}</div>
                <div><Mail size={16} /> {SECONDARY_EMAIL}</div>
              </div>
              <div className="contactActions">
                <a className="btn btnPrimary" href={whatsappUrlEmirates} target="_blank" rel="noreferrer">WhatsApp Emiratos</a>
                <a className="btn btnDark" href={whatsappUrlColombia} target="_blank" rel="noreferrer">WhatsApp Colombia</a>
                <a className="btn btnDark" href={`mailto:${PRIMARY_EMAIL}`}>Enviar correo <Mail size={16} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2026 AEROVIGIA-DRONES · Grupo Drones y Movilidad. Security, Supervision and Real-Time Rescue · Operación en Colombia
      </footer>

      <a className="whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
        ☏
      </a>
    </div>
  )
}

export default App
