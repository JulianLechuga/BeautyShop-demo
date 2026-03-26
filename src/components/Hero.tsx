import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-subtitle">Ciencia y Belleza en Armonía</span>
          <h1>Tu mejor versión comienza aquí</h1>
          <p>Tratamientos avanzados de estética facial y corporal con tecnología de vanguardia y resultados garantizados.</p>
          <div className="hero-btns">
            <button className="btn-primary">Ver Tratamientos</button>
            <button className="btn-outline">Saber Más</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
