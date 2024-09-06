import React from "react";
import CustomAccordion from "./custom-accordion";

const CustomServices = ({ items }: { items: any }) => {
  return (
    <section className="container">
      <h1 className="sport-services-heading">Services</h1>
      <CustomAccordion items={items} />
    </section>
  );
};

export default CustomServices;
