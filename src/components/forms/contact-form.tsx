import React, { useState } from "react";
import { toast } from "react-toastify";
import { useCreateContactMutation } from "../apis/contactAPi";

const ContactForm = () => {
  const [addContact] = useCreateContactMutation();
  const [response, setResponse] = useState<any>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    reason: "",
    comments: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleAddComment = async () => {
    try {
      const res = await addContact(formData).unwrap();
      console.log(res);
      setResponse(res);
      toast.success(res.message);
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };
  return (
    <div className="contact-form-inner">
      {/* <form action=""> */}
      <div className="d-flex flex-column">
        <label htmlFor="" className="contact-form-label">
          Name
        </label>
        <input
          type="text"
          className="contact-from-input"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex flex-column">
        <label htmlFor="" className="contact-form-label">
          Email
        </label>
        <input
          type="text"
          className="contact-from-input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex flex-column">
        <label htmlFor="" className="contact-form-label">
          Phone number
        </label>
        <input
          type="text"
          className="contact-from-input"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div className="d-flex flex-column">
        <label htmlFor="" className="contact-form-label">
          What are you contacting about?
        </label>
        <input
          type="text"
          className="contact-from-input"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex flex-column">
        <label htmlFor="" className="contact-form-label">
          Comments
        </label>
        <textarea
          cols={30}
          rows={5}
          className="contact-from-input"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </div>

      <div>
        <button className="submit-btn" onClick={handleAddComment}>
          Submit
        </button>
      </div>
      {/* </form> */}
      <h1 className="success-message">{response?.message}</h1>
    </div>
  );
};

export default ContactForm;
