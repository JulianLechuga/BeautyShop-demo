import './Services.css';

const services = [
  {
    title: 'Radiofrecuencia INDIBA',
    description: 'Tecnología líder para reafirmar y rejuvenecer la piel desde el interior.',
    image: '/radiofrecuencia.png',
    category: 'Facial & Corporal'
  },
  {
    title: 'Presoterapia Avanzada',
    description: 'Drenaje linfático profundo para eliminar toxinas y reducir volumen.',
    image: '/presoterapia.png',
    category: 'Bienestar'
  },
  {
    title: 'Cavitación Médica',
    description: 'Eliminación selectiva de grasa localizada sin cirugía.',
    image: '/cavitacion.png',
    category: 'Corporal'
  },
  {
    title: 'Vacumterapia',
    description: 'Remodelación corporal y reducción de celulitis mediante succión controlada.',
    image: '/vacumterapia.png',
    category: 'Corporal'
  },
  {
    title: 'Tratamientos Lipedema',
    description: 'Especialistas en el cuidado y mejora de la calidad de vida con Lipedema.',
    image: '/hero.png', // Fallback for now or I can generate another
    category: 'Salud'
  },
  {
    title: 'VacuSlim 48',
    description: 'Tratamiento intensivo reductor con resultados visibles en 48 horas.',
    image: '/radiofrecuencia.png', // Fallback
    category: 'Express'
  }
];

const Services = () => {
  return (
    <section id="treatments" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Tratamientos</h2>
          <p>Resultados reales con tecnología de última generación</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-overlay">
                  <span className="service-category">{service.category}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <button className="btn-small">Saber más</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
