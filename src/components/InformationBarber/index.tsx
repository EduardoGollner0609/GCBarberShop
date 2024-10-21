import "./styles.css";
import imgBarber from "../../assets/foto-gc.jpg";
import InformationContact from "../InformationContact";

export default function InformationBarber() {
  function contactsShow() {
    const sectionContacts = document.querySelector(
      ".informations-contact-container"
    );
    sectionContacts?.classList.add("active");
  }

  return (
    <>
      <div className="information-barber">
        <h2>Seja Bem Vindo</h2>
        <div className="apresentation-barber">
          <img src={imgBarber} alt="Foto do Barbeiro" />
          <div className="description-barber">
            <p>
              Fala Galera, Gerson aqui, sou o barbeiro da GC BARBER SHOP e é um prazer enorme te-lô aqui, seja muito bem vindo e fique a vontade,
              qualquer dúvida,
              <a onClick={contactsShow}> Clique Aqui e Fale Conosco</a>
            </p>
          </div>
        </div>
      </div>
      <InformationContact />
    </>
  );
}
