import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCreateIndemnityAgreementMutation } from "../apis/indemnityAgreementAPI";

const IndemnityAgreement = () => {
  const [createAgreement] = useCreateIndemnityAgreementMutation();
  const [response, setResponse] = useState<any>("");
  const [formData, setFormData] = useState({
    name: "",
    activity: "",
    email: "",
    courseNumber: "",
    instructor: "",
    destination: "",
    semester: "",
    dateSigned: "",
    sign: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    activity: "",
    email: "",
    courseNumber: "",
    instructor: "",
    destination: "",
    semester: "",
    dateSigned: "",
    sign: "",
  });
  // Validation function
  const validate = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      activity: "",
      email: "",
      courseNumber: "",
      instructor: "",
      destination: "",
      semester: "",
      dateSigned: "",
      sign: "",
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
    if (!formData.courseNumber.trim()) {
      newErrors.courseNumber = "Course number is required.";
      isValid = false;
    } else if (!/^\d+$/.test(formData.courseNumber)) {
      newErrors.courseNumber = "Course number must be numeric.";
      isValid = false;
    }
    if (!formData.instructor.trim()) {
      newErrors.instructor = "Instructor is required.";
      isValid = false;
    }
    if (!formData.destination.trim()) {
      newErrors.destination = "Destination are required.";
      isValid = false;
    }
    if (!formData.semester.trim()) {
      newErrors.semester = "Semester are required.";
      isValid = false;
    }
    if (!formData.sign.trim()) {
      newErrors.sign = "Sign are required.";
      isValid = false;
    }
    if (!formData.dateSigned.trim()) {
      newErrors.dateSigned = "Date signed is required.";
      isValid = false;
    } else if (isNaN(Date.parse(formData.dateSigned))) {
      newErrors.dateSigned = "Invalid date format.";
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
      const res = await createAgreement(formData).unwrap();
      setResponse(res);
      toast.success(res.message);
      setFormData({
        name: "",
        activity: "",
        email: "",
        courseNumber: "",
        instructor: "",
        destination: "",
        semester: "",
        dateSigned: "",
        sign: "",
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
    }, 5000);
  }, [response?.message]);
  return (
    <div>

      <section className="code-of-conduct">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="indemnity-heading">Indemnity Agreement</h2>

              <div className="pt-5 row align-items-end">
                <div className="col-md-6">
                  <div className="d-flex flex-column position-relative">
                    <label className="contact-form-label">
                      Printed Name of Student/Participant
                    </label>
                    <input
                      type="text"
                      className="contact-from-input"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-column position-relative">
                    <label className="contact-form-label">
                      Course/Activity
                    </label>
                    <input
                      type="text"
                      className="contact-from-input"
                      name="activity"
                      value={formData.activity}
                      onChange={handleChange}
                    />
                    {errors.activity && (
                      <span className="error-message">{errors.activity}</span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-column position-relative">
                    <label className="contact-form-label">
                      Course Number (if applicable)
                    </label>
                    <input
                      type="text"
                      className="contact-from-input"
                      name="courseNumber"
                      value={formData.courseNumber}
                      onChange={handleChange}
                    />
                    {errors.courseNumber && (
                      <span className="error-message">
                        {errors.courseNumber}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-column position-relative">
                    <label className="contact-form-label">
                      Instructor/Sponsor
                    </label>
                    <input
                      type="text"
                      className="contact-from-input"
                      name="instructor"
                      value={formData.instructor}
                      onChange={handleChange}
                    />
                    {errors.instructor && (
                      <span className="error-message">{errors.instructor}</span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-column position-relative">
                    <label className="contact-form-label">
                      Destination (if travel required) (required)
                    </label>
                    <input
                      type="text"
                      className="contact-from-input"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                    />
                    {errors.destination && (
                      <span className="error-message">
                        {errors.destination}
                      </span>
                    )}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex flex-column position-relative">
                    <label className="contact-form-label">
                      Semester/Dates of Participation
                    </label>
                    <input
                      type="text"
                      className="contact-from-input"
                      name="semester"
                      value={formData.semester}
                      onChange={handleChange}
                    />
                    {errors.semester && (
                      <span className="error-message">{errors.semester}</span>
                    )}
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="d-flex flex-column position-relative">
                    <label className="contact-form-label">
                      Email (required)
                    </label>
                    <input
                      type="email"
                      className="contact-from-input"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>
                </div>
              </div>
              <p className="about-indemnity mb-3">
                For and in consideration of being permitted to participate in
                the Course/Activity above (including related travel, if any), I,
                THE UNDERSIGNED, HEREBY FULLY RELEASE AND FOREVER DISCHARGE AP
                Ranch and all instructors, sponsors, agents, employees,
                officers, trustees and affiliates of AP Ranch (collectively "AP
                RANCH"), of and from any and all liability to me, my personal
                representatives, assigns, heirs and next of kin, for any damage
                to or loss of my property, any injury to my person or my death
                or any one or more of the foregoing, arising directly or
                indirectly out of my participation for any purpose in the
                Course/Activity, INCLUDING ANY SUCH DAMAGE, LOSS OR INJURY THAT
                IS CAUSED BY ANY ACT OR OMISSION ON THE PART OF AP RANCH,
                INCLUDING ANY NEGLIGENT CONDUCT OF AP RANCH but excluding any
                gross negligence or willful misconduct of AP RANCH. IT IS MY
                EXPRESS INTENT THAT THE ABOVE RELEASE INCLUDES THE RELEASE BY ME
                OF AP RANCH FROM THE CONSEQUENCES OF AP RANCH'S OWN NEGLIGENCE.
                THE ONLY CIRCUMSTANCE UNDER WHICH MY RELEASE OF AP RANCH DOES
                NOT APPLY IS WITH RESPECT TO ANY OCCURRENCE RESULTING FROM THE
                GROSS NEGLIGENCE OR WILLFUL MISCONDUCT OF AP RANCH.
              </p>
              <p className="about-indemnity mb-3">
                I FURTHER AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS AP RANCH
                for, from and against any and all liabilities, damages, claims,
                lawsuits, costs (including court costs, attorneys fees and costs
                of investigation), and actions of any kind or description for
                any damage to or loss of my property or the property of another,
                any injury to me or my death, or the injury to or death of any
                other person or any one or more of the foregoing, arising out of
                my participation for any purpose in the Course/Activity,
                INCLUDING ANY DAMAGE, LOSS OR INJURY CAUSED BY ANY ACT OR
                OMISSION ON THE PART OF AP RANCH, INCLUDING ANY NEGLIGENT
                CONDUCT OF AP RANCH but excluding any gross negligence or
                willful misconduct of AP RANCH. IT IS MY EXPRESS INTENT THAT THE
                ABOVE INDEMNITY INCLUDES INDEMNIFICATION BY ME OF AP RANCH FROM
                THE CONSEQUENCES OF AP RANCH'S OWN NEGLIGENCE. THE ONLY
                CIRCUMSTANCE UNDER WHICH MY OBLIGATION TO INDEMNIFY AP RANCH
                DOES NOT APPLY IS WITH RESPECT TO AN OCCURRENCE RESULTING FROM
                THE GROSS NEGLIGENCE OR WILLFUL MISCONDUCT OF AP RANCH.
              </p>
              <p className="about-indemnity mb-3">
                By execution below I hereby acknowledge that I recognize and
                assume all of the risks associated with the Course/Activity. I
                ACKNOWLEDGE THAT IT IS IMPORTANT THAT I VERIFY THAT I HAVE
                INSURANCE COVERAGE WHICH EXTENDS TO ME WHILE PARTICIPATING IN
                THE COURSE/ACTIVITY, AND THAT I SECURE SUCH COVERAGE IF I DO NOT
                ALREADY HAVE IT. I understand that AP RANCH does not provide
                such coverage, and that no insurance coverage may exist through
                AP RANCH to cover any injuries or damages which I may sustain or
                claims which may arise as a result of my participation in the
                Course/Activity.
              </p>
              <p className="about-indemnity mb-3">
                The terms of this Release and Indemnity Agreement are to be
                governed by and construed under the laws of the State of Texas,
                and venue with respect to any dispute arising between AP RANCH
                and any other party that involves this Release and Indemnity
                Agreement or my participation in the Course/Activity shall be
                exclusively in Tarrant County, Texas.
              </p>
              <p className="about-indemnity mb-3">
                Each provision of this Release and Indemnity Agreement is
                severable and if one portion is invalid or illegal, such invalid
                or illegal portion shall not apply, but the remaining portions
                shall nevertheless remain in full force and effect. I understand
                that the terms of the Release and Indemnity Agreement are
                contractual and not mere recitals, and that such terms are
                binding upon me, my heirs, personal representatives and assigns.
              </p>
              <p className="about-indemnity mb-3">
                In making this Release and Indemnity Agreement, I have not
                relied upon any statement or representation pertaining to this
                matter made by AP RANCH or any other person or entity which is
                hereby released.
              </p>
              <p className="about-indemnity mb-3">
                I WARRANT THAT I HAVE CAREFULLY READ THIS DOCUMENT AND KNOW ITS
                CONTENTS, AND THAT I AM 18 YEARS OF AGE OR OLDER AND HAVE FULL
                AUTHORITY TO EXECUTE THIS DOCUMENT AND THAT I HAVE EXECUTED THIS
                DOCUMENT VOLUNTARILY AND AS MY OWN FREE ACT. I EXECUTE THIS
                DOCUMENT FULLY INTENDING TO BE BOUND BY ITS TERMS.
              </p>
              <p className="about-indemnity mb-3">
                If the Student/Participant is not eighteen (18) years of age or
                older, the signature of Student/Participant's parent or legal
                guardian is required.
              </p>
              <p className="about-indemnity mb-3">
                As parent or legal guardian of the above-mentioned
                Student/Participant, I agree to and approve the terms of this
                Release and Indemnity Agreement and consent to the
                Student/Participant's participation in the Course/Activity and
                warrant that I have full authority to do so on behalf of myself,
                the Student/Participant and the Student/Participant's heirs,
                personal representatives and assigns. I understand and assume
                the risks of the Student/Participant's participation in the
                Course/Activity.
              </p>
              <p className="about-indemnity mb-3">
                I, THE UNDERSIGNED, HEREBY FULLY RELEASE AND FOREVER DISCHARGE
                AP Ranch and all instructors, sponsors, agents, employees,
                officers, trustees and affiliates of AP Ranch (collectively "AP
                RANCH"), of and from any and all liability to me, my personal
                representatives, assigns, heirs and next of kin, from any and
                all claims, demands, controversies, actions or causes of action,
                belonging to me or Student/Participant now or in the future for
                any damage to or loss of Student/Participant's property, and any
                injury to Student/Participant's person or Student/Participant's
                death or any one or more of the foregoing, arising directly or
                indirectly out of Student/Participant's participation for any
                purpose in the Course/Activity, INCLUDING ANY DAMAGE, LOSS OR
                INJURY CAUSED BY ANY ACT OR OMISSION ON THE PART OF AP RANCH,
                INCLUDING ANY NEGLIGENT CONDUCT OF AP RANCH but excluding any
                gross negligence or willful misconduct of AP RANCH. IT IS MY
                EXPRESS INTENT THAT THE ABOVE RELEASE INCLUDES THE RELEASE BY ME
                OF AP RANCH FROM THE CONSEQUENCES OF AP RANCH'S OWN NEGLIGENCE.
                THE ONLY CIRCUMSTANCE UNDER WHICH MY RELEASE OF AP RANCH DOES
                NOT APPLY IS WITH RESPECT TO ANY OCCURRENCE RESULTING FROM THE
                GROSS NEGLIGENCE OR WILLFUL MISCONDUCT OF AP RANCH.
              </p>
              <p className="about-indemnity mb-3">
                I FURTHER AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS AP RANCH
                for, from and against any and all liabilities, damages, claims,
                lawsuits, costs (including court costs, attorneys fees and costs
                of investigation), and actions of any kind or description for
                any damage to or loss of Student/Participant's property or the
                property of another, any injury to Student/Participant or any
                other person, any injury resulting in Student/Participant's
                death or the death of another or any one or more of the
                foregoing, arising out of Student/Participant's participation
                for any purpose in the Course/Activity, INCLUDING ANY DAMAGE,
                LOSS OR INJURY CAUSED BY ANY ACT OR OMISSION ON THE PART OF AP
                RANCH, INCLUDING ANY NEGLIGENT CONDUCT OF AP RANCH but excluding
                any gross negligence or willful misconduct of AP RANCH. IT IS MY
                EXPRESS INTENT THAT THE ABOVE INDEMNITY INCLUDES INDEMNIFICATION
                BY ME OF AP RANCH FROM THE CONSEQUENCES OF AP RANCH'S OWN
                NEGLIGENCE. THE ONLY CIRCUMSTANCE UNDER WHICH MY OBLIGATION TO
                INDEMNIFY AP RANCH DOES NOT APPLY IS WITH RESPECT TO AN
                OCCURRENCE RESULTING FROM THE GROSS NEGLIGENCE OR WILLFUL
                MISCONDUCT OF AP RANCH.
              </p>
            </div>

            <div className="row mt-5 align-items-end">
              <div className="col-md-6">
                <div className="d-flex flex-column position-relative">
                  <label className="contact-form-label">Date Signed</label>
                  <input
                    type="date"
                    className="contact-from-input"
                    name="dateSigned"
                    value={formData.dateSigned}
                    onChange={handleChange}
                  />
                  {errors.dateSigned && (
                    <span className="error-message">{errors.dateSigned}</span>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="d-flex flex-column position-relative">
                  <label className="contact-form-label">
                    Signature of Parent or Legal Guardian (print you name)
                  </label>
                  <input
                    type="text"
                    className="contact-from-input"
                    name="sign"
                    value={formData.sign}
                    onChange={handleChange}
                  />
                  {errors.sign && (
                    <span className="error-message">{errors.sign}</span>
                  )}
                </div>
              </div>
              <div className="col-md-12 d-flex justify-content-end">
                <button className="send-btn" onClick={handleAddComment}>
                  SEND
                </button>
              </div>
              <h1 className="success-message">{response?.message}</h1>  
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndemnityAgreement;
