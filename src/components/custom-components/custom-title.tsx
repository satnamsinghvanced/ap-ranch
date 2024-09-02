import React from "react";

const CustomTittle = ({ title }: { title: any }) => {
  return (
    <div>
      <p>{title}</p>
      <button>Contact</button>
    </div>
  );
};

export default CustomTittle;
