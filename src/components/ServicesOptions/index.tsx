import './styles.css';
import imgService1 from '../../assets/corte-de-cabelo-1.jpg';
import imgService2 from '../../assets/corte-de-cabelo-7.jpg';
import imgService3 from '../../assets/corte-de-cabelo-4.jpg';
import imgService4 from '../../assets/corte-de-cabelo-6.jpg';

export default function ServicesOptions() {
    return(
        <div className="services-options">
          <div className="services-item">
            <div className="img-services">
              <img src={imgService1} alt="Corte de Cabelo" />
            </div>
            <div className="description-services">
              <h3>Corte de Cabelo</h3>
              <h4>R$ 20.00</h4>
            </div>
          </div>
          <div className="services-item">
            <div className="img-services">
              <img src={imgService2} alt="Descoloração" />
            </div>
            <div className="description-services">
              <h3>Corte + Platinado</h3>
              <h4>R$ 100.00</h4>
            </div>
          </div>
          <div className="services-item">
            <div className="img-services">
              <img src={imgService3} alt="Pigmentação" />
            </div>
            <div className="description-services">
              <h3>Corte + Pigmentação</h3>
              <h4>R$ 40.00</h4>
            </div>
          </div>
          <div className="services-item">
            <div className="img-services">
              <img src={imgService4} alt="Luzes/Reflexo" />
            </div>
            <div className="description-services">
              <h3>Corte + Reflexo</h3>
              <h4>R$ 80.00</h4>
            </div>
          </div>
        </div>
    );
}