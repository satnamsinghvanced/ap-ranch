import React from "react";
import CustomTittle from "../components/custom-components/custom-title";
import CustomServices from "../components/custom-components/custom-services";
import Footer from "./Footer";
import GraphicSection from "../components/custom-components/graphic-section";

const Football = () => {
  return (
    <div>
      Football
      <CustomTittle
        title={
          "At AP Ranch, we believe that football is more than just a game; it’s an opportunity to develop important life skills like teamwork, leadership, and perseverance. By providing a supportive and inclusive environment, we aim to help our student athletes grow into confident and well-rounded individuals who are prepared to succeed in all aspects of life."
        }
      />
      <GraphicSection />
      <CustomServices />
      <Footer />
    </div>
  );
};

export default Football;
