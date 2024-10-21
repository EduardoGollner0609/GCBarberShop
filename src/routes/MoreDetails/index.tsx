import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Informations from "../../components/Informations";
import SectionHaircuts from "../../components/SectionHaircuts";
import SectionLocation from "../../components/SectionLocation";
import SectionServices from "../../components/SectionServices";
import "./styles.css";

export default function MoreDetails() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title">GC Barber Shop</h1>
        <Informations />
        <SectionServices />
        <SectionHaircuts />
        <SectionLocation />
      </main>
      <Footer />
    </>
  );
}
