import Accordion from "../Accordion/Accordion";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import CarouselComponent from "../CarouselComponent/CarouselComponent";
import DummySection from "../DummySection/DummySection";
import ExploreMassart from "../ExploreMassart/ExploreMassart";
import Footer from "../Footer/Footer";
import Gallery from "../Gallery/Gallery";
import MasterClass from "../MasterClass/MasterClass";
import UnicefLogo from "../UnicefLogo/UnicefLogo";
import Visual from "../Visual/Visual";

const Home = () => {
  return (
    <div className="  ">
      <Banner></Banner>
      <Visual></Visual>
      <DummySection></DummySection>
      <Gallery></Gallery>
      <ExploreMassart></ExploreMassart>
      <Button></Button>
      <CarouselComponent></CarouselComponent>
      <Accordion></Accordion>
      <UnicefLogo></UnicefLogo>
    </div>
  );
};

export default Home;
