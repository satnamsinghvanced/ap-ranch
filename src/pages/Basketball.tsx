import CustomServices from "../components/custom-components/custom-services";
import CustomTittle from "../components/custom-components/custom-title";
import GraphicSection from "../components/custom-components/graphic-section";
import Footer from "./Footer";

const Basketball = () => {
  return (
    <div>
      Basketball
      <CustomTittle
        title={
          "Our basketball program offers everything you need - being a one stop shop to success. Working with individual athletes and teams at all levels from beginner to professional. We value & preach accountability, respect, teamwork, skillwork, and the benefit of hard work, both on and off the court - Everything that goes into performing at the highest level in every aspect of life. Our goal and mission is to create the complete student athlete, one player at a time! "
        }
      />
      <GraphicSection />
      <CustomServices />
      <Footer />
    </div>
  );
};

export default Basketball;
