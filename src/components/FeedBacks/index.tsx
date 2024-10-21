import "./styles.css";

export default function Feedbacks() {
  return (
    <div className="container">
      <h1>O que estão dizendo</h1>

      <div className="card-feedback">
        <p>
          Ótimo atendimento, corta bem e por um preço super acessivel, estarei
          de volta em outras oportunidades.
        </p>
        <div className="card-feedback-bottom">
        <p>- Eduardo Gollner</p>
        <div className="avaliable">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        </div>
        </div>
      </div>

      <div className="card-feedback">
        <p>Corte fera demais, manda muito mano!! tmjj sempre.</p>
        <div className="card-feedback-bottom">
        <p>- Gabriel Simas</p>
        <div className="avaliable"> 
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span> 
        </div>
        </div>
      </div>

      <div className="card-feedback">
        <p>O reflexo ficou bala mano, bem demais, e o atendimento também é diferenciado.</p>
        <div className="card-feedback-bottom">
        <p>- Josué</p>
        <div className="avaliable">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        </div>
        </div>
      </div>

      <div className="card-feedback">
        <p>Sempre surpreende no corte irmão, meu barbeiro titular!! Recomendo muito.</p>
        <div className="card-feedback-bottom">
        <p>- Matheuzin</p>
        <div className="avaliable">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        </div>
        </div>
        </div>

        <div className="card-feedback">
        <p>Excelente profissional, gente boa demais e afiado nos cortes, vou recomendar pra geral mano, só força.</p>
        <div className="card-feedback-bottom">
        <p>- Luizin</p>
        <div className="avaliable">
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        <span className="star">&#9733;</span>
        </div>
        </div>

      </div>
    </div>
  );
}
