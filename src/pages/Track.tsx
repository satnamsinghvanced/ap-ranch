import React from "react";
import CustomServices from "../components/custom-components/custom-services";
import CustomTittle from "../components/custom-components/custom-title";
import GraphicSection from "../components/custom-components/graphic-section";
import Footer from "./Footer";
import Header from "../components/layout/header";

const Track = () => {
  return (
    <div>      <Header /> 
      Track
      <CustomTittle
        title={
          "AP Ranch is proud to offer a world-class track club and training, coached by three-time NCAA National Champion Greg Sholars and his team of professional coaches. Athletes will receive an elite-level of training and an unprecedented opportunity to achieve at a level they may have only have dreamed of. We teach our athletes the importance of hard work, dedication, determination and perseverance both in the classroom and on the track. "
        }
      />
      <GraphicSection />
      <CustomServices />
      <Footer />
    </div>
  );
};

export default Track;
