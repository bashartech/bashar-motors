import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Section1 from "./components/Section-1/Section-1";
import SwiperComponent from "./components/Section-2/Section-2";
import Section3 from "./components/Section-3/Section-3";

export default function Home() {
  return (
    <div>
     <Header />
     <Hero />
     <Section1 />
     <SwiperComponent />
     <Section3 />
     <Footer name = "Product Name" price = "Price"/>
    </div>
  );
}
