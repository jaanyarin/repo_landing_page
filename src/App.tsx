import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight, BarChart3, Bot, CheckCircle2, ChevronLeft, ChevronRight,
  Code2, Database, Download, LoaderCircle, Mail, Menu, MessageCircle,
  MonitorSmartphone, Send, ShieldCheck, Sparkles, X, Zap,
} from 'lucide-react'
import './index.css'
import './projects.css'

const services = [
  { icon: MonitorSmartphone, title: 'Desarrollo con Power Apps', text: 'Aplicaciones web y móviles adaptadas a procesos operativos, administrativos y de campo.' },
  { icon: Bot, title: 'Automatización con Power Automate', text: 'Aprobaciones, notificaciones, documentos y tareas repetitivas ejecutadas de forma automática.' },
  { icon: BarChart3, title: 'Dashboards con Power BI', text: 'Información clara y accionable para supervisar indicadores y tomar mejores decisiones.' },
  { icon: Database, title: 'SQL Server e integración de datos', text: 'Modelos de datos, procedimientos, consultas e integración segura con aplicaciones.' },
  { icon: Sparkles, title: 'Consultoría Power Platform', text: 'Análisis del proceso y definición de una solución viable antes de iniciar el desarrollo.' },
  { icon: Code2, title: 'Soluciones personalizadas', text: 'Integraciones con React, APIs, Java y servicios empresariales cuando el proyecto lo requiere.' },
]

const base = import.meta.env.BASE_URL

const projects = [
  {
    id: 'averias', category: 'Mantenimiento y operaciones', title: 'Gestión y reporte de averías',
    text: 'Aplicación para registrar incidencias operativas, clasificar componentes afectados y mejorar la comunicación con mantenimiento.',
    problem: 'Los avisos de averías se comunicaban mediante llamadas, mensajes o registros no estructurados, dificultando el seguimiento y el análisis de incidencias recurrentes.',
    solution: 'Solución desarrollada en Power Apps para registrar, clasificar y consultar averías, centralizando información técnica, evidencias y responsables.',
    benefits: ['Registro inmediato de incidencias', 'Clasificación por sistema y componente', 'Trazabilidad de usuario y fecha', 'Consulta histórica para análisis'],
    tags: ['Power Apps', 'Power Automate', 'SQL Server'],
    images: [`${base}img/aviso_de_averias(1).png`, `${base}img/aviso_de_averias(2).png`, `${base}img/aviso_de_averias(3).png`],
  },
  {
    id: 'racimos', category: 'Producción agrícola', title: 'Registro y evaluación de racimos por planta',
    text: 'Aplicación móvil para capturar evaluaciones productivas directamente en campo, organizadas por lote, variedad y planta.',
    problem: 'Las evaluaciones se registraban en formatos manuales o archivos separados, dificultando la consolidación y trazabilidad de la información de campo.',
    solution: 'Aplicación Power Apps para digitalizar evaluaciones productivas y centralizar los registros por fundo, lote, variedad y planta.',
    benefits: ['Captura móvil en campo', 'Validaciones de datos', 'Información centralizada', 'Seguimiento agronómico estructurado'],
    tags: ['Power Apps', 'SQL Server'],
    images: [`${base}img/racimo_por_planta(1).png`, `${base}img/racimo_por_planta(2).png`, `${base}img/racimo_por_planta(3).png`],
  },
  {
    id: 'preacondicionamiento', category: 'Operaciones y calidad', title: 'Control del proceso de preacondicionamiento',
    text: 'Solución para digitalizar registros operativos, aplicar validaciones y centralizar la información del proceso.',
    problem: 'La información se registraba en formatos manuales o archivos independientes, dificultando su revisión y disponibilidad para otras áreas.',
    solution: 'Aplicación Power Apps para capturar parámetros operativos, validar campos y mantener un historial centralizado del proceso.',
    benefits: ['Registro operativo guiado', 'Campos y reglas validadas', 'Historial de actividades', 'Datos preparados para reportes'],
    tags: ['Power Apps', 'SQL Server'],
    images: [`${base}img/registro_pre_acondicionamiento(1).png`, `${base}img/registro_pre_acondicionamiento(2).png`, `${base}img/registro_pre_acondicionamiento(3).png`],
  },
  {
    id: 'brotacion', category: 'Producción agrícola', title: 'Evaluación y seguimiento de brotación',
    text: 'Aplicación de campo para registrar evaluaciones de brotación por lote, válvula, planta y cuadrante con información estructurada.',
    problem: 'Las evaluaciones de brotación requerían consolidar registros manuales de múltiples plantas y cuadrantes, aumentando el riesgo de omisiones, duplicados y errores de digitación.',
    solution: 'Aplicación Power Apps que organiza la captura por secuencias de plantas y cuadrantes, aplica validaciones y centraliza los resultados para el seguimiento de campaña.',
    benefits: ['Registro por planta y cuadrante', 'Generación guiada de secuencias', 'Validación de registros duplicados', 'Trazabilidad por lote y fecha'],
    tags: ['Power Apps', 'SQL Server'],
    images: [`${base}img/evaluacion_de_brotacion(1).png`, `${base}img/evaluacion_de_brotacion(2).png`, `${base}img/evaluacion_de_brotacion(3).png`],
  },
  {
    id: 'crecimiento-brote', category: 'Producción agrícola', title: 'Evaluación de crecimiento de brote y racimo',
    text: 'Solución móvil para registrar mediciones de brotes y racimos, observaciones y datos de evaluación directamente en campo.',
    problem: 'Las mediciones de crecimiento se recopilaban en formatos separados, dificultando comparar evaluaciones, conservar el orden de captura y disponer de datos consolidados.',
    solution: 'Aplicación Power Apps conectada a SQL Server para registrar longitud de brotes y racimos, mantener la secuencia de evaluación y consultar información histórica.',
    benefits: ['Captura de mediciones en campo', 'Orden estructurado de evaluación', 'Registro de observaciones', 'Historial centralizado por campaña'],
    tags: ['Power Apps', 'SQL Server'],
    images: [`${base}img/evaluacion_de_crecimiento de_brote(1).png`, `${base}img/evaluacion_de_crecimiento de_brote(2).png`, `${base}img/evaluacion_de_crecimiento de_brote(3).png`],
  },
  {
    id: 'registro-peso', category: 'Producción y calidad', title: 'Registro de peso de producto terminado',
    text: 'Aplicación para registrar pesos, formatos, proveedores y datos productivos con validaciones orientadas al control de calidad.',
    problem: 'El control de pesos dependía de registros manuales y archivos dispersos, dificultando validar formatos, consultar históricos y detectar desviaciones durante la operación.',
    solution: 'Aplicación Power Apps conectada a SQL Server que guía el registro de pesos y formatos, aplica parámetros configurables y centraliza la información del producto terminado.',
    benefits: ['Registro móvil de pesos', 'Validación de formatos y parámetros', 'Consulta histórica de registros', 'Información disponible para análisis'],
    tags: ['Power Apps', 'SQL Server', 'Power Automate'],
    images: [`${base}img/registro_de_peso(1).png`, `${base}img/registro_de_peso(2).png`, `${base}img/registro_de_peso(3).png`],
  },
  {
    id: 'floracion-cuajado', category: 'Producción agrícola', title: 'Evaluación de floración y cuajado',
    text: 'Aplicación móvil para registrar estados de floración, cuajado y calidad de racimos por lote, planta y cuadrante directamente en campo.',
    problem: 'La evaluación de floración y cuajado se realizaba mediante registros manuales, dificultando mantener criterios homogéneos, consolidar resultados y comparar el avance entre lotes y campañas.',
    solution: 'Aplicación Power Apps conectada a SQL Server que estructura la captura por planta y cuadrante, permite clasificar el estado del racimo y centraliza la información para seguimiento productivo.',
    benefits: ['Registro por planta y cuadrante', 'Clasificación estandarizada del racimo', 'Cálculo y consolidación de resultados', 'Trazabilidad por lote, fecha y campaña'],
    tags: ['Power Apps', 'SQL Server'],
    images: [`${base}img/evaluacion_floracion_cuajado(1).png`, `${base}img/evaluacion_floracion_cuajado(2).png`, `${base}img/evaluacion_floracion_cuajado(3).png`],
  },
  {
    id: 'zonificacion', category: 'Planificación agrícola', title: 'Zonificación y organización de áreas de campo',
    text: 'Aplicación para registrar y consultar la distribución de sectores, lotes y zonas productivas, facilitando la organización territorial de las operaciones agrícolas.',
    problem: 'La distribución de zonas y sectores se gestionaba mediante archivos y referencias dispersas, dificultando mantener una estructura uniforme y disponible para los equipos operativos.',
    solution: 'Aplicación Power Apps que centraliza la zonificación por fundo, lote y sector, permitiendo consultar y actualizar la estructura territorial utilizada por otros procesos agrícolas.',
    benefits: ['Registro estructurado de zonas', 'Consulta por fundo, lote y sector', 'Catálogo centralizado para otras aplicaciones', 'Mejor organización de la operación de campo'],
    tags: ['Power Apps', 'SQL Server'],
    images: [`${base}img/app_zonificacion(1).png`, `${base}img/app_zonificacion(2).png`, `${base}img/app_zonificacion(3).png`],
  },
  {
    id: 'registro-cosecha', category: 'Producción agrícola', title: 'Registro y control de cosecha',
    text: 'Aplicación móvil para registrar jornadas de cosecha, personal, lotes y cantidades recolectadas directamente desde el campo.',
    problem: 'Los datos de cosecha se consolidaban desde formatos manuales y diferentes fuentes, generando demoras, duplicidad y poca visibilidad del avance diario.',
    solution: 'Solución Power Apps conectada a SQL Server que guía el registro de cosecha y centraliza los datos por campaña, fundo, lote, cuadrilla y fecha.',
    benefits: ['Captura móvil durante la jornada', 'Seguimiento por lote y cuadrilla', 'Validación de datos productivos', 'Información disponible para reportes diarios'],
    tags: ['Power Apps', 'SQL Server', 'Power Automate'],
    images: [`${base}img/registro_cosecha(1).png`, `${base}img/registro_cosecha(2).png`, `${base}img/registro_cosecha(3).png`],
  },
  {
    id: 'peso-arandano', category: 'Producción y calidad', title: 'Registro de peso de arándano',
    text: 'Aplicación para registrar pesos de arándano, formatos de presentación y datos operativos con controles orientados a producción y calidad.',
    problem: 'El registro de pesos requería consolidar información de diferentes formatos y proveedores, aumentando el riesgo de errores y dificultando la consulta histórica.',
    solution: 'Aplicación Power Apps integrada con SQL Server que estandariza la captura del peso, aplica parámetros de formato y conserva la trazabilidad de cada registro.',
    benefits: ['Registro móvil de peso', 'Parámetros configurables por formato', 'Trazabilidad por fecha y usuario', 'Datos centralizados para control y análisis'],
    tags: ['Power Apps', 'SQL Server'],
    images: [`${base}img/registro_peso_arandano(1).png`, `${base}img/registro_peso_arandano(2).png`, `${base}img/registro_peso_arandano(3).png`],
  },
]

const technologies = ['Power Apps', 'Power Automate', 'Power BI', 'SQL Server', 'SharePoint', 'React', 'React Native', 'TypeScript', 'Java', 'Quarkus', 'Docker', 'GitHub']
type FormStatus = 'idle' | 'sending' | 'success' | 'error' | 'configuration-error'
type Project = typeof projects[number]

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim()
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!endpoint) return setStatus('configuration-error')
    const form = event.currentTarget
    const formData = new FormData(form)
    if (formData.get('_gotcha')) return
    setStatus('sending')
    try {
      const response = await fetch(endpoint, { method: 'POST', body: formData, headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error()
      form.reset(); setStatus('success')
    } catch { setStatus('error') }
  }
  return <form className="contact-form" onSubmit={handleSubmit} noValidate>
    <input className="form-honeypot" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <input type="hidden" name="_subject" value="Nueva consulta desde el portafolio" />
    <div className="form-row"><label>Nombre completo<input name="name" required minLength={2} maxLength={80} placeholder="Tu nombre" /></label><label>Empresa<input name="company" maxLength={100} placeholder="Empresa u organización" /></label></div>
    <div className="form-row"><label>Correo electrónico<input type="email" name="email" required maxLength={120} placeholder="correo@empresa.com" /></label><label>WhatsApp<input type="tel" name="phone" maxLength={30} placeholder="Número de contacto" /></label></div>
    <label>¿Qué solución necesitas?<select name="service" required defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Aplicación Power Apps</option><option>Automatización Power Automate</option><option>Dashboard Power BI</option><option>Integración SQL Server</option><option>Consultoría</option><option>Otra solución</option></select></label>
    <label>Cuéntame sobre tu proyecto<textarea name="message" required minLength={20} maxLength={2000} rows={5} placeholder="Describe brevemente el proceso, problema y resultado que esperas..." /></label>
    <button className="button button-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? <><LoaderCircle className="spin" size={18}/> Enviando...</> : <><Send size={18}/> Enviar solicitud</>}</button>
    <div className="form-feedback" aria-live="polite">{status === 'success' && <p className="form-success"><CheckCircle2/> Tu solicitud fue enviada correctamente.</p>}{status === 'error' && <p className="form-error">No se pudo enviar. Inténtalo nuevamente o usa WhatsApp.</p>}{status === 'configuration-error' && <p className="form-error">El formulario no tiene configurado Formspree.</p>}{status === 'idle' && <p className="form-note">Tus datos serán utilizados únicamente para responder esta consulta.</p>}</div>
  </form>
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [imageIndex, setImageIndex] = useState(0)
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'; window.addEventListener('keydown', close)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', close) }
  }, [onClose])
  const move = (direction: number) => setImageIndex((imageIndex + direction + project.images.length) % project.images.length)
  return <div className="project-modal-backdrop" role="presentation" onMouseDown={onClose}>
    <section className="project-modal" role="dialog" aria-modal="true" aria-label={project.title} onMouseDown={event => event.stopPropagation()}>
      <button className="modal-close" onClick={onClose} aria-label="Cerrar"><X/></button>
      <div className="modal-gallery">
        <img src={project.images[imageIndex]} alt={`${project.title}, pantalla ${imageIndex + 1}`} />
        <button className="gallery-arrow left" onClick={() => move(-1)} aria-label="Imagen anterior"><ChevronLeft/></button>
        <button className="gallery-arrow right" onClick={() => move(1)} aria-label="Imagen siguiente"><ChevronRight/></button>
        <div className="gallery-thumbs">{project.images.map((image, index) => <button key={image} className={index === imageIndex ? 'active' : ''} onClick={() => setImageIndex(index)}><img src={image} alt="" /></button>)}</div>
      </div>
      <div className="modal-copy"><span className="section-kicker">{project.category}</span><h2>{project.title}</h2><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>Problema</h3><p>{project.problem}</p><h3>Solución</h3><p>{project.solution}</p><h3>Funciones y aportes</h3><ul>{project.benefits.map(item => <li key={item}><CheckCircle2/>{item}</li>)}</ul><a className="button button-primary" href="#contacto" onClick={onClose}>Consultar una solución similar <ArrowRight size={18}/></a></div>
    </section>
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const whatsapp = 'https://wa.me/51980029687?text=Hola%20Alejandro%2C%20vi%20tu%20portafolio%20y%20quisiera%20conversar%20sobre%20un%20proyecto.'
  return <div className="site-shell">
    <header className="header"><a className="brand" href="#inicio"><span className="brand-mark">AA</span><span><strong>Alejandro Anyarín</strong><small>Transformación Digital · Power Platform</small></span></a><nav className={menuOpen ? 'nav open' : 'nav'}>{['inicio','servicios','proyectos','tecnologias','sobre-mi','contacto'].map(item => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item.replace('-',' ')}</a>)}</nav><a className="button button-primary header-cta" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Hablemos</a><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button></header>
    <main>
      <section id="inicio" className="hero"><div className="hero-content"><span className="eyebrow"><Zap size={16}/> Soluciones empresariales</span><motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}}>Digitalizo procesos empresariales con <span>Power Apps</span> y <em>Power Automate</em></motion.h1><p>Desarrollo aplicaciones, automatizaciones y dashboards que mejoran el control operativo, reducen errores y convierten información dispersa en decisiones claras.</p><div className="hero-actions"><a className="button button-primary" href="#proyectos">Ver mis proyectos <ArrowRight size={18}/></a><a className="button button-secondary" href="#contacto">Solicitar una consulta</a></div><div className="trust-row"><span><CheckCircle2/> Soluciones escalables</span><span><CheckCircle2/> Enfoque empresarial</span><span><CheckCircle2/> Diseño responsive</span></div></div><div className="hero-visual"><div className="glow"></div><div className="dashboard-window"><div className="window-bar"><i/><i/><i/><span>Panel de operaciones</span></div><div className="dashboard-body"><aside><b>AA</b><span/><span/><span/><span/></aside><div className="dashboard-main"><div className="mini-stats"><div><small>Registros</small><strong>1,248</strong></div><div><small>Cumplimiento</small><strong>96%</strong></div><div><small>Alertas</small><strong>08</strong></div></div><div className="chart"><div className="bars"><i/><i/><i/><i/><i/><i/></div></div><div className="table-lines"><span/><span/><span/><span/></div></div></div></div><div className="phone-card"><div className="phone-notch"></div><strong>Nuevo registro</strong><label>Proceso<input value="Control operativo" readOnly/></label><label>Estado<input value="Completado" readOnly/></label><button>Guardar</button></div></div></section>
      <section className="problem-section"><div><span className="section-kicker">Transformación digital</span><h2>¿Tu empresa todavía trabaja con archivos dispersos y procesos manuales?</h2></div><div className="problem-grid">{['Registros duplicados en Excel','Procesos sin seguimiento','Aprobaciones por mensajes','Reportes elaborados manualmente'].map((item,index)=><article key={item}><span>0{index+1}</span><p>{item}</p></article>)}</div></section>
      <section id="servicios" className="section"><div className="section-heading"><div><span className="section-kicker">Servicios</span><h2>Soluciones para digitalizar y automatizar tu empresa</h2></div><p>Desde el análisis inicial hasta la implementación y acompañamiento.</p></div><div className="services-grid">{services.map(({icon:Icon,title,text},index)=><motion.article whileHover={{y:-6}} className="service-card" key={title}><span className="icon-box"><Icon/></span><small>0{index+1}</small><h3>{title}</h3><p>{text}</p><a href="#contacto">Consultar <ChevronRight size={16}/></a></motion.article>)}</div></section>
      <section id="proyectos" className="section projects-section"><div className="section-heading"><div><span className="section-kicker">Portafolio</span><h2>Casos reales de digitalización empresarial</h2></div><p>Proyectos presentados con información anonimizada para proteger datos empresariales.</p></div><div className="projects-grid projects-grid-real">{projects.map(project => <article className="project-card project-card-real" key={project.id}><button className="project-image" onClick={() => setSelectedProject(project)}><img src={project.images[0]} alt={project.title}/><span>{project.category}</span></button><div className="project-body"><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><h3>{project.title}</h3><p>{project.text}</p><button className="project-link" onClick={() => setSelectedProject(project)}>Ver caso de estudio <ArrowRight size={16}/></button></div></article>)}</div></section>
      <section id="tecnologias" className="section technologies-section"><div className="section-heading"><div><span className="section-kicker">Stack tecnológico</span><h2>Tecnologías que utilizo</h2></div><p>Power Platform como núcleo, complementado con desarrollo e integración empresarial.</p></div><div className="tech-grid">{technologies.map((tech,index)=><div key={tech}><span>{String(index+1).padStart(2,'0')}</span><strong>{tech}</strong></div>)}</div></section>
      <section className="section process-section"><div className="section-heading"><div><span className="section-kicker">Metodología</span><h2>Mi proceso de trabajo</h2></div></div><div className="process-grid">{[['01','Análisis','Entiendo el proceso, usuarios, problemas y objetivos.'],['02','Diseño','Defino pantallas, experiencia, datos y reglas de negocio.'],['03','Desarrollo','Construyo la aplicación, flujos e integraciones.'],['04','Validación','Pruebo con usuarios y ajusto según observaciones.'],['05','Implementación','Publico, documento y acompaño la adopción.']].map(step=><article key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div></section>
      <section id="sobre-mi" className="section about-section"><div className="profile-visual"><div className="profile-monogram">AA</div><div className="profile-badge"><ShieldCheck/> Enfoque en resultados</div></div><div className="about-copy"><span className="section-kicker">Sobre mí</span><h2>Convierto necesidades operativas en herramientas digitales simples y escalables</h2><p>Soy Alejandro Anyarín, Analista de Transformación Digital y desarrollador especializado en Microsoft Power Platform.</p><p>Diseño aplicaciones con Power Apps, automatizo procesos mediante Power Automate y construyo soluciones conectadas con SQL Server, Power BI y servicios personalizados.</p><div className="about-points"><span><CheckCircle2/> Experiencia en procesos reales</span><span><CheckCircle2/> Orientación al usuario</span><span><CheckCircle2/> Integración de datos</span></div><a className="button button-secondary" href={`${base}cv/cv-alejandro-anyarin.pdf`} download><Download size={18}/> Descargar CV</a></div></section>
      <section id="contacto" className="contact-section"><div className="contact-copy"><span className="section-kicker light">Contacto</span><h2>Hablemos de tu próximo proyecto</h2><p>Cuéntame qué proceso deseas digitalizar. Podemos revisar el problema y definir una primera propuesta de solución.</p><div className="contact-links"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle/><span><small>WhatsApp</small><strong>+51 980 029 687</strong></span></a><a href="mailto:alejandro.anyarin@gmail.com"><Mail/><span><small>Correo</small><strong>alejandro.anyarin@gmail.com</strong></span></a></div></div><ContactForm/></section>
    </main>
    <footer className="footer"><div className="brand"><span className="brand-mark">AA</span><span><strong>Alejandro Anyarín</strong><small>Power Platform Developer</small></span></div><p>© 2026 Alejandro Anyarín. Todos los derechos reservados.</p><div><a href="https://github.com/jaanyarin" target="_blank" rel="noreferrer"><span className="social-icon">GH</span></a><a href="https://www.linkedin.com/in/jaanyarin/" target="_blank" rel="noreferrer"><span className="social-icon">in</span></a><a href="mailto:alejandro.anyarin@gmail.com"><Mail/></a></div></footer>
    <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle/></a>
    {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)}/>} 
  </div>
}

export default App
