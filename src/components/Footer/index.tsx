import './styles.css';
import imgLogo from '../../assets/GCBarber-Logo.png';

export default function Footer() {
    return (
        <footer>
        <div className="footer-informations container">
          <div className="footer-contacts container">
            <h2>GC Barber Shop</h2>
            <div className="footer-contacts-item">
              <a href="https://www.instagram.com/gc__barbeer/">
                <i className="fa-brands fa-instagram fa-2x"></i>
                @gc__barbeer
              </a>
            </div>
            <div className="footer-contacts-item">
              <a
                href="https://api.whatsapp.com/send?phone=27 99613-1518&text=Fala Gc, De boas? Vim do seu site mano, queria saber mais sobre a barbearia."
                ><i className="fa-brands fa-whatsapp fa-2x"></i>
                27 99613-1518
            </a>
            </div>
            <div className="footer-localization">
               <a href="https://maps.app.goo.gl/Gv3e7N6U1KdaJf4s6"><address>Av. Prof. Fernando Duarte Rabelo, 860 - Maria Ortiz</address></a>
            </div>
          </div>
          <div className="footer-img">
            <img src={imgLogo} alt="Logo" />
          </div>
        </div>
      </footer>
    );
}