import { Link } from "react-router-dom";
import Button from "../Button";
import "./styles.css";

export default function IntroductionDescription() {
  return (
    <div className="introduction-description">
      <h3>GC Barber Shop</h3>
      <p>
        Está preparado para o MELHOR CORTE de sua vida junto de muita resenha?
        então cola na GC BARBER SHOP.
      </p>
      <p>Clique no botão abaixo para mais detalhes:</p>
      <Link to="/more-details">
        <Button />
      </Link>
    </div>
  );
}
