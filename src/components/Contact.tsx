import { Mail, Phone, MapPin, Globe, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <footer id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Hablemos de tu belleza</h2>
            <p>Reserva una cita o solicita información sin compromiso. Estamos aquí para ayudarte a brillar.</p>
            
            <div className="info-items">
              <div className="info-item">
                <MapPin className="icon" />
                <div>
                  <h4>Dirección</h4>
                  <p>Calle Velázquez 45, 28001 Madrid</p>
                </div>
              </div>
              <div className="info-item">
                <Phone className="icon" />
                <div>
                  <h4>Teléfono</h4>
                  <p>+34 912 345 678</p>
                </div>
              </div>
              <div className="info-item">
                <Mail className="icon" />
                <div>
                  <h4>Email</h4>
                  <p>info@vanguardiaestetica.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Nombre completo" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Correo electrónico" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Selecciona un tratamiento</option>
                  <option value="radiofrecuencia">Radiofrecuencia INDIBA</option>
                  <option value="presoterapia">Presoterapia</option>
                  <option value="cavitacion">Cavitación</option>
                  <option value="lipedema">Tratamiento Lipedema</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Tu mensaje..." rows={4}></textarea>
              </div>
              <button className="btn-primary w-full">Enviar Mensaje</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-logo">
            <h3>VANGUARDIA<span>ESTÉTICA</span></h3>
            <p>© 2026 Vanguardia Estética. Todos los derechos reservados.</p>
          </div>
          <div className="social-links">
            <a href="#"><Globe /></a>
            <a href="#"><MessageSquare /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
