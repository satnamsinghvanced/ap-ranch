import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../consts/routes.consts";
import DOMPurify from "dompurify";

const CustomTittle = ({ title }: { title: any }) => {
  const navigate = useNavigate();
  const description = DOMPurify.sanitize(title);
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        style={{ fontFamily: "Satoshi",}}
        className="description"
      />

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
