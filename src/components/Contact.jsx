import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    subject: "",
    access_key: process.env.ACCESS_KEY,
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
  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessageStatus(""); // Clear previous messages

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.subject
    ) {
      setMessageStatus("Please fill in all required fields.");
      return;
    }

    // Validate phone number (if provided)
    if (formData.phone) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phone)) {
        setMessageStatus("Phone number must be exactly 10 digits.");
        return;
      }
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setIsLoading(false);
      setMessageStatus(response.data?.message);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setIsLoading(false);
      setMessageStatus("Faild to send message!");
    }
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
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group col-12 col-md-6">
            <input
              type="number"
              className="form-control no-arrows"
              id="phoneContact"
              name="phone"
              placeholder="Phone Number (Optional)"
              value={formData.phone}
              min={1}
              onChange={handleChange}
            />
          </div>

          <div className="form-group col-12 col-md-6">
            <input
              type="text"
              className="form-control"
              id="subjectContact"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
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
