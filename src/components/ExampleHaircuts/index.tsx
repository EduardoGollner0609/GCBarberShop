import './styles.css';
import imgSlide1 from '../../assets/corte-de-cabelo-1.jpg';
import imgSlide2 from '../../assets/corte-de-cabelo-4.jpg';
import imgSlide3 from '../../assets/corte-de-cabelo-6.jpg';
import imgSlide4 from '../../assets/corte-de-cabelo-7.jpg';
import imgSlide5 from '../../assets/corte-de-cabelo-3.jpg';


export default function ExampleHaircuts() {
    return (
        <div className="example-haircuts">
        <h1>Cortes</h1>
<div className="slides">
    <input type="radio" name="slide" id="slide1" defaultChecked  />
    <input type="radio" name="slide" id="slide2" />
    <input type="radio" name="slide" id="slide3" />
    <input type="radio" name="slide" id="slide4" />
    <input type="radio" name="slide" id="slide5" />

    <div className="slide slide1">
        <img src={imgSlide1} alt="Corte de Cabelo" />
    </div>

    <div className="slide">
        <img src={imgSlide2} alt="Corte de Cabelo" />
    </div>

    <div className="slide">
        <img src={imgSlide3} alt="Corte de Cabelo" />
    </div>

    <div className="slide">
        <img src={imgSlide4} alt="Corte de Cabelo" />
    </div>

    <div className="slide">
        <img src={imgSlide5} alt="Corte de Cabelo" />
    </div>
</div>
<div className="slides-navegation-bar">
<label className="slide-bar" htmlFor="slide1"></label>
<label className="slide-bar" htmlFor="slide2"></label>
<label className="slide-bar" htmlFor="slide3"></label>
<label className="slide-bar" htmlFor="slide4"></label>
<label className="slide-bar" htmlFor="slide5"></label>
</div>
      </div>
   );
}