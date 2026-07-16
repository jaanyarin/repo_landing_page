import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, BarChart3, Bot, CheckCircle2, ChevronRight, Code2,
  Database, Download, Github, Linkedin, Mail, Menu, MessageCircle,
  MonitorSmartphone, ShieldCheck, Sparkles, X, Zap,
} from 'lucide-react'
import './index.css'

const services = [
  { icon: MonitorSmartphone, title: 'Desarrollo con Power Apps', text: 'Aplicaciones web y móviles adaptadas a procesos operativos, administrativos y de campo.' },
  { icon: Bot, title: 'Automatización con Power Automate', text: 'Aprobaciones, notificaciones, documentos y tareas repetitivas ejecutadas de forma automática.' },
  { icon: BarChart3, title: 'Dashboards con Power BI', text: 'Información clara y accionable para supervisar indicadores y tomar mejores decisiones.' },
  { icon: Database, title: 'SQL Server e integración de datos', text: 'Modelos de datos, procedimientos, consultas e integración segura con aplicaciones.' },
  { icon: Sparkles, title: 'Consultoría Power Platform', text: 'Análisis del proceso y definición de una solución viable antes de iniciar el desarrollo.' },
  { icon: Code2, title: 'Soluciones personalizadas', text: 'Integraciones con React, APIs, Java y servicios empresariales cuando el proyecto lo requiere.' },
]

const projects = [
  { category: 'Operaciones', title: 'Registro de Peso de Producto Terminado', text: 'Aplicación para registrar pesos, formatos, proveedores y datos de producción conectada a SQL Server.', tags: ['Power Apps', 'SQL Server'], accent: 'purple' },
  { category: 'Calidad', title: 'Certificaciones y Análisis de Agua', text: 'Gestión de certificados, resultados y trazabilidad de análisis con paneles de seguimiento.', tags: ['Power Apps', 'Power BI'], accent: 'blue' },
  { category: 'Producción', title: 'Brotación, Floración y Cuajado', text: 'Registro agrícola por campo, lote y variedad con indicadores para campañas productivas.', tags: ['Power Apps', 'SQL'], accent: 'green' },
  { category: 'Mantenimiento', title: 'Gestión de Averías', text: 'Control de incidencias, responsables, evidencias y seguimiento de acciones correctivas.', tags: ['Power Apps', 'Automate'], accent: 'orange' },
  { category: 'Operaciones', title: 'Control de Equipos de Apilamiento', text: 'Gestión de equipos, documentos, campañas, mantenimientos y disponibilidad operativa.', tags: ['React Native', 'Quarkus'], accent: 'navy' },
  { category: 'Campo', title: 'Entrega de Insectos Benéficos', text: 'Control de entregas y liberaciones en campo con trazabilidad y evidencias.', tags: ['React Native', 'API'], accent: 'teal' },
]

const technologies = ['Power Apps', 'Power Automate', 'Power BI', 'SQL Server', 'SharePoint', 'React', 'React Native', 'TypeScript', 'Java', 'Quarkus', 'Docker', 'GitHub']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const whatsapp = 'https://wa.me/51980029687?text=Hola%20Alejandro%2C%20vi%20tu%20portafolio%20y%20quisiera%20conversar%20sobre%20un%20proyecto.'

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark">AA</span>
          <span><strong>Alejandro Anyarín</strong><small>Transformación Digital · Power Platform</small></span>
        </a>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          {['inicio', 'servicios', 'proyectos', 'tecnologias', 'sobre-mi', 'contacto'].map(item => (
            <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item.replace('-', ' ')}</a>
          ))}
        </nav>
        <a className="button button-primary header-cta" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Hablemos</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir navegación">{menuOpen ? <X/> : <Menu/>}</button>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-content">
            <span className="eyebrow"><Zap size={16}/> Soluciones empresariales</span>
            <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}>Digitalizo procesos empresariales con <span>Power Apps</span> y <em>Power Automate</em></motion.h1>
            <p>Desarrollo aplicaciones, automatizaciones y dashboards que mejoran el control operativo, reducen errores y convierten información dispersa en decisiones claras.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#proyectos">Ver mis proyectos <ArrowRight size={18}/></a>
              <a className="button button-secondary" href="#contacto">Solicitar una consulta</a>
            </div>
            <div className="trust-row">
              <span><CheckCircle2/> Soluciones escalables</span>
              <span><CheckCircle2/> Enfoque empresarial</span>
              <span><CheckCircle2/> Diseño responsive</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Vista conceptual de una solución Power Platform">
            <div className="glow"></div>
            <div className="dashboard-window">
              <div className="window-bar"><i></i><i></i><i></i><span>Panel de operaciones</span></div>
              <div className="dashboard-body">
                <aside><b>AA</b><span></span><span></span><span></span><span></span></aside>
                <div className="dashboard-main">
                  <div className="mini-stats"><div><small>Registros</small><strong>1,248</strong></div><div><small>Cumplimiento</small><strong>96%</strong></div><div><small>Alertas</small><strong>08</strong></div></div>
                  <div className="chart"><div className="bars"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
                  <div className="table-lines"><span></span><span></span><span></span><span></span></div>
                </div>
              </div>
            </div>
            <div className="phone-card"><div className="phone-notch"></div><strong>Nuevo registro</strong><label>Proceso<input value="Control operativo" readOnly/></label><label>Estado<input value="Completado" readOnly/></label><button>Guardar</button></div>
          </div>
        </section>

        <section className="problem-section">
          <div><span className="section-kicker">Transformación digital</span><h2>¿Tu empresa todavía trabaja con archivos dispersos y procesos manuales?</h2></div>
          <div className="problem-grid">
            {['Registros duplicados en Excel', 'Procesos sin seguimiento', 'Aprobaciones por mensajes', 'Reportes elaborados manualmente'].map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}
          </div>
        </section>

        <section id="servicios" className="section">
          <div className="section-heading"><div><span className="section-kicker">Servicios</span><h2>Soluciones para digitalizar y automatizar tu empresa</h2></div><p>Desde el análisis inicial hasta la implementación y acompañamiento.</p></div>
          <div className="services-grid">
            {services.map(({icon: Icon,title,text}, index) => <motion.article whileHover={{y:-6}} className="service-card" key={title}><span className="icon-box"><Icon/></span><small>0{index+1}</small><h3>{title}</h3><p>{text}</p><a href="#contacto">Consultar <ChevronRight size={16}/></a></motion.article>)}
          </div>
        </section>

        <section id="proyectos" className="section projects-section">
          <div className="section-heading"><div><span className="section-kicker">Portafolio</span><h2>Proyectos que convierten procesos en soluciones digitales</h2></div><p>Casos presentados con información anonimizada para proteger datos empresariales.</p></div>
          <div className="projects-grid">
            {projects.map(project => <article className="project-card" key={project.title}><div className={`project-cover ${project.accent}`}><span>{project.category}</span><div className="mock-screen"><b>{project.title.split(' ').slice(0,3).join(' ')}</b><i></i><i></i><i></i></div></div><div className="project-body"><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{project.title}</h3><p>{project.text}</p><a href="#contacto">Ver caso de estudio <ArrowRight size={16}/></a></div></article>)}
          </div>
        </section>

        <section id="tecnologias" className="section technologies-section">
          <div className="section-heading"><div><span className="section-kicker">Stack tecnológico</span><h2>Tecnologías que utilizo</h2></div><p>Power Platform como núcleo, complementado con desarrollo e integración empresarial.</p></div>
          <div className="tech-grid">{technologies.map((tech,index)=><div key={tech}><span>{String(index+1).padStart(2,'0')}</span><strong>{tech}</strong></div>)}</div>
        </section>

        <section className="section process-section">
          <div className="section-heading"><div><span className="section-kicker">Metodología</span><h2>Mi proceso de trabajo</h2></div></div>
          <div className="process-grid">{[
            ['01','Análisis','Entiendo el proceso, usuarios, problemas y objetivos.'],
            ['02','Diseño','Defino pantallas, experiencia, datos y reglas de negocio.'],
            ['03','Desarrollo','Construyo la aplicación, flujos e integraciones.'],
            ['04','Validación','Pruebo con usuarios y ajusto según observaciones.'],
            ['05','Implementación','Publico, documento y acompaño la adopción.'],
          ].map(step=><article key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div>
        </section>

        <section id="sobre-mi" className="section about-section">
          <div className="profile-visual"><div className="profile-monogram">AA</div><div className="profile-badge"><ShieldCheck/> Enfoque en resultados</div></div>
          <div className="about-copy"><span className="section-kicker">Sobre mí</span><h2>Convierto necesidades operativas en herramientas digitales simples y escalables</h2><p>Soy Alejandro Anyarín, Analista de Transformación Digital y desarrollador especializado en Microsoft Power Platform.</p><p>Diseño aplicaciones con Power Apps, automatizo procesos mediante Power Automate y construyo soluciones conectadas con SQL Server, Power BI y servicios personalizados.</p><div className="about-points"><span><CheckCircle2/> Experiencia en procesos reales</span><span><CheckCircle2/> Orientación al usuario</span><span><CheckCircle2/> Integración de datos</span></div><a className="button button-secondary" href="./cv/cv-alejandro-anyarin.pdf" download><Download size={18}/> Descargar CV</a></div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="contact-copy"><span className="section-kicker light">Contacto</span><h2>Hablemos de tu próximo proyecto</h2><p>Cuéntame qué proceso deseas digitalizar. Podemos revisar el problema y definir una primera propuesta de solución.</p><div className="contact-links"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle/> <span><small>WhatsApp</small><strong>+51 980 029 687</strong></span></a><a href="mailto:alejandro.anyarin.dev@gmail.com"><Mail/><span><small>Correo</small><strong>alejandro.anyarin.dev@gmail.com</strong></span></a></div></div>
          <form className="contact-form" action="https://formspree.io/f/your-form-id" method="POST"><div className="form-row"><label>Nombre completo<input name="name" required placeholder="Tu nombre"/></label><label>Empresa<input name="company" placeholder="Empresa u organización"/></label></div><div className="form-row"><label>Correo electrónico<input type="email" name="email" required placeholder="correo@empresa.com"/></label><label>WhatsApp<input name="phone" placeholder="Número de contacto"/></label></div><label>¿Qué solución necesitas?<select name="service" required defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Aplicación Power Apps</option><option>Automatización Power Automate</option><option>Dashboard Power BI</option><option>Integración SQL Server</option><option>Consultoría</option></select></label><label>Cuéntame sobre tu proyecto<textarea name="message" required rows={5} placeholder="Describe brevemente el proceso o problema..."/></label><button className="button button-primary" type="submit">Enviar solicitud <ArrowRight size={18}/></button><small>Debes reemplazar el ID de Formspree antes de publicar el formulario.</small></form>
        </section>
      </main>

      <footer className="footer"><div className="brand"><span className="brand-mark">AA</span><span><strong>Alejandro Anyarín</strong><small>Power Platform Developer</small></span></div><p>© 2026 Alejandro Anyarín. Todos los derechos reservados.</p><div><a href="https://github.com/jaanyarin" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a><a href="#" aria-label="LinkedIn"><Linkedin/></a><a href="mailto:alejandro.anyarin.dev@gmail.com" aria-label="Correo"><Mail/></a></div></footer>
      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle/></a>
    </div>
  )
}

export default App
