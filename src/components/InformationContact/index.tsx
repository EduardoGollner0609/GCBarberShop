import "./styles.css";

export default function InformationContact() {

  function closeContacts() {
    const sectionContacts = document.querySelector(".informations-contact-container");
    sectionContacts?.classList.remove("active");
  }

  return (
    <section className="informations-contact-container">
      <div className="informations-contact-content">
        <h1>Fale Conosco</h1>

        <div className="contact-item">
          <h3>Instagram</h3>
          <a href="https://www.instagram.com/gc__barbeer/">
            <i className="fa-brands fa-instagram fa-2x"></i>
            @gc__barbeer
          </a>
        </div>

        <div className="contact-item">
          <h3>WhatsApp</h3>
          <a href="https://api.whatsapp.com/send?phone=27 99613-1518&text=Fala Gc, De boas? Vim do seu site mano, queria saber mais sobre a loja.">
            <i className="fa-brands fa-whatsapp fa-2x"></i>
            27 99613-1518
          </a>
        </div>
        <div className="observation"></div>
        <h2>Obs:</h2>
        <p>
          Atendemos com agendamento mas também por ordem de chegada em caso de
          não agendamento.
        </p>
        <div className="btn">
          <button onClick={closeContacts}>Fechar</button>
        </div>
      </div>
    </section>
  );
}
