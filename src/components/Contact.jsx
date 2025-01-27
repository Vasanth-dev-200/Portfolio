import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageStatus, setMessageStatus] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);

    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      setMessageStatus("Please fill in the form...");
      return;
    }

    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        formData,
        process.env.USER_ID
      )
      .then(
        (response) => {
          setMessageStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          navigate("/");
          setIsLoading(!isLoading);
        },
        (error) => {
          setMessageStatus("Failed to send message. Please try again.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div id="contact-tab" className="tabcontent">
      <div className="pb-2">
        <h1 className="title title--h1 first-title title__separate">Contact</h1>
      </div>

      <h2 className="title title--h3">Contact Form</h2>
      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group col-12 col-md-6">
            <input
              type="text"
              className="form-control"
              id="nameContact"
              name="name"
              placeholder="Full name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group col-12 col-md-6">
            <input
              type="email"
              className="form-control"
              id="emailContact"
              name="email"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group col-12 col-md-12">
            <textarea
              className="textarea form-control"
              id="messageContact"
              name="message"
              placeholder="Your Message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
            {messageStatus && (
              <div
                id="validator-contact"
                className={
                  messageStatus.includes("success")
                    ? "validation-success"
                    : "validation-danger"
                }
              >
                {messageStatus}
              </div>
            )}
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2 text-right">
            <button type="submit" className="btn" disabled={isLoading}>
              <i className="font-icon icon-send" />{" "}
              {isLoading ? "Sending Message..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
