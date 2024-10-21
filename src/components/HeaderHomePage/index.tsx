import "./styles.css";
import imgLogo from "../../assets/GCBarber-Logo.png";
import menuItem from "../../assets/menu-items-white.svg";
import closeMenuItem from "../../assets/close-items-white.svg";
import { Link } from "react-router-dom";
import InformationContact from "../InformationContact";

export default function HeaderHomePage() {
  function menuShow() {
    const menuMobile = document.querySelector(
      ".mobile-menu"
    ) as HTMLImageElement | null;
    const icon = document.querySelector(".icon") as HTMLImageElement | null;

    if (menuMobile?.classList.contains("open")) {
      menuMobile.classList.remove("open");
      icon?.setAttribute("src", menuItem);
    } else {
      menuMobile?.classList.add("open");
      icon?.setAttribute("src", closeMenuItem);
    }
  }

  function contactsShow() {
    const sectionContacts = document.querySelector(
      ".informations-contact-container"
    );
    sectionContacts?.classList.add("active");
  }

  return (
    <>
      <header>
        <nav className="nav-bar container">
          <div className="logo">
            <Link to="/">
              <img src={imgLogo} alt="Logo" />
            </Link>
          </div>

          <div className="list-navegation">
            <ul>
              <li className="nav-item">
                <Link to="/more-details">Mais detalhes</Link>
              </li>
              <li className="nav-item">
                <a href="#home-page-description-barbershop">Sobre Nós</a>
              </li>
              <li className="nav-item">
                <a onClick={contactsShow}>Fale Conosco</a>
              </li>
            </ul>
          </div>

          <div className="mobile-menu-icon">
            <button onClick={menuShow}>
              <img className="icon" src={menuItem} alt="Abrir Opções" />
            </button>
          </div>
        </nav>

        <div className="mobile-menu">
          <ul>
            <li className="nav-item">
              <Link to="/more-details">Mais detalhes</Link>
            </li>
            <li className="nav-item">
              <a href="#home-page-description-barbershop">Sobre Nós</a>
            </li>
            <li className="nav-item">
              <a onClick={contactsShow}>Fale Conosco</a>
            </li>
          </ul>
        </div>
      </header>
      <InformationContact />
    </>
  );
}
