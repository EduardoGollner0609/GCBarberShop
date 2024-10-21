import './styles.css';

export default function InformationBarberShop() {
    return (
        <div className="informations">
        <h2>GC Barber Shop</h2>
        <div className="important-informations">
          <h3>Horário de funcionamento:</h3>
          <p>Terça a Sábado de 09:00 ás 19:00</p>
          <h3>Atendimento:</h3>
          <p>Atendemos tanto por agendamento quanto por ordem de chegada</p>
          <h3>Localização:</h3>
          <p>Av. Prof. Fernando Duarte Rabelo, 860 - Maria Ortiz</p>
        </div>
        <div className="invitation">
          <h3>Quer um corte fera com muita resenha?</h3>
          <a href="#section-location"><button>Quero</button></a>
        </div>
      </div>
    );
}