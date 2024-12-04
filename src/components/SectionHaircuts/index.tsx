import "./styles.css";
import imgSlide1 from '../../assets/corte-de-cabelo-1.jpg';
import imgSlide2 from '../../assets/corte-de-cabelo-7.jpg';
import imgSlide3 from '../../assets/corte-de-cabelo-3.jpg';
import imgSlide4 from '../../assets/corte-de-cabelo-4.jpg';
import imgSlide5 from '../../assets/corte-de-cabelo-6.jpg';
import { SwiperProps, SwiperSlide } from "swiper/react";
import Slider from "../Slider/slider";

export default function SectionHaircuts() {

  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true
    }
  }

  return (
    <section className="section-haircuts">
      <div className="haircuts-examples-slide container">
        <Slider settings={settings}>
          <SwiperSlide>
            <img src={imgSlide1} alt="Corte de Cabelo" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={imgSlide2} alt="Corte de Cabelo" />
          </SwiperSlide>


          <SwiperSlide>
            <img src={imgSlide3} alt="Corte de Cabelo" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={imgSlide4} alt="Corte de Cabelo" />
          </SwiperSlide>

          <SwiperSlide>
            <img src={imgSlide5} alt="Corte de Cabelo" />
          </SwiperSlide>
        </Slider>
      </div>

    </section>
  );
}
