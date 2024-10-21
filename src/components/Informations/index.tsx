import InformationBarber from "../InformationBarber";
import InformationBarberShop from "../InformationBarberShop";
import "./styles.css";

export default function Informations() {
  return (
    <section className="information-introduction">
        <InformationBarber />
        <InformationBarberShop />
    </section>
  );
}
