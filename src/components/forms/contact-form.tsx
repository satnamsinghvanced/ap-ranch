import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCreateContactMutation } from "../apis/contactAPi";

const ContactForm = () => {
  const [addContact] = useCreateContactMutation();
  const [response, setResponse] = useState<any>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    reason: "",
    comments: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    reason: "",
    comments: "",
  });
  // Validation function
  const validate = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phoneNumber: "",
      reason: "",
      comments: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
      isValid = false;
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
      isValid = false;
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be numeric.";
      isValid = false;
    }
    if (!formData.reason.trim()) {
      newErrors.reason = "Reason is required.";
      isValid = false;
    }
    if (!formData.comments.trim()) {
      newErrors.comments = "Comments are required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear error when user starts typing
    }));
  };
  const handleAddComment = async () => {
    if (!validate()) {
      toast.error("Please correct the errors in the form.");
      return;
    }
    try {
      const res = await addContact(formData).unwrap();
      console.log(res);
      setResponse(res);
      toast.success(res.message);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        reason: "",
        comments: "",
      });
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      if (response?.message !== "") {
        setResponse("");
      }
    }, 1000);
  }, [response?.message]);

  return (
    <div className="contact-form-inner">
      {/* <form action=""> */}
      <div className="d-flex flex-column position-relative">
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
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className="d-flex flex-column position-relative">
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
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="d-flex flex-column position-relative">
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
        {errors.phoneNumber && (
          <span className="error-message">{errors.phoneNumber}</span>
        )}
      </div>

      <div className="d-flex flex-column position-relative">
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
        {errors.reason && (
          <span className="error-message">{errors.reason}</span>
        )}
      </div>
      <div className="d-flex flex-column position-relative">
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
        {errors.comments && (
          <span className="error-message">{errors.comments}</span>
        )}
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
