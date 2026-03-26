import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-content">
        <div className="about-image">
          <img src="/hero.png" alt="Nuestra clínica" />
          <div className="stats-box">
            <div className="stat-item">
              <h4>15+</h4>
              <p>Años de experiencia</p>
            </div>
            <div className="stat-item">
              <h4>10k+</h4>
              <p>Pacientes felices</p>
            </div>
          </div>
        </div>
        
        <div className="about-text">
          <span className="subtitle">Sobre Nosotros</span>
          <h2>Excelencia en medicina estética y bienestar</h2>
          <p>En <strong>Vanguardia Estética</strong>, creemos que la belleza es una extensión de la salud. Nuestro equipo de profesionales altamente cualificados utiliza las tecnologías más avanzadas del mercado para ofrecerte resultados naturales y duraderos.</p>
          
          <ul className="features-list">
            <li><span>✓</span> Diagnóstico personalizado gratuito</li>
            <li><span>✓</span> Tecnología de vanguardia (INDIBA, LPG, etc.)</li>
            <li><span>✓</span> Protocolos de seguridad certificados</li>
            <li><span>✓</span> Ambiente exclusivo y relajante</li>
          </ul>
          
          <button className="btn-primary">Conócenos más</button>
        </div>
      </div>
    </section>
  );
};

export default About;
