import DescriptionBarberShop from "../../components/DescriptionBarberShop";
import Feedbacks from "../../components/FeedBacks";
import Footer from "../../components/Footer";
import HeaderHomePage from "../../components/HeaderHomePage";
import InformationContact from "../../components/InformationContact";
import IntroductionDescription from "../../components/IntroductionDescription";
import "./styles.css";

export default function HomePage() {

  return (
    <>
      <HeaderHomePage />
      <main>
        <section className="home-page-introduction">
          <div className="home-page-content container">
            <IntroductionDescription />
          </div>
        </section>

        <section id="home-page-description-barbershop">
<DescriptionBarberShop />
</section>

        <section className="home-page-feedbacks">
         <Feedbacks /> 
        </section>


  
      </main>
      <Footer />
      <InformationContact />

    </>
  );
}
