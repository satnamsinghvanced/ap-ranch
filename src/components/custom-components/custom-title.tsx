import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../consts/routes.consts";

const CustomTittle = ({ title }: { title: any }) => {
  const navigate = useNavigate();
  return (
    <>
      <p>{title}</p>
      <button
        className="contact-white-btn"
        onClick={() => navigate(ROUTES.CONTACT)}
      >
        CONTACT
      </button>
    </>
  );
};

export default CustomTittle;
