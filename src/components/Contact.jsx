import React from "react";

const Contact = () => {
  return (
    <div id="contact-tab" className="tabcontent">
      <div className="pb-2">
        <h1 className="title title--h1 first-title title__separate">Contact</h1>
      </div>
      {/* Contact */}
      {/* <div class="map" id="map"></div> */}
      <h2 className="title title--h3">Contact Form</h2>
      <form id="contact-form" className="contact-form" data-toggle="validator">
        <div className="row">
          <div className="form-group col-12 col-md-6">
            <input
              type="text"
              className="form-control"
              id="nameContact"
              name="nameContact"
              placeholder="Full name"
              required="required"
              autoComplete="on"
              oninvalid="setCustomValidity('Fill in the field')"
              onkeyup="setCustomValidity('')"
            />
            <div className="help-block with-errors" />
          </div>
          <div className="form-group col-12 col-md-6">
            <input
              type="email"
              className="form-control"
              id="emailContact"
              name="emailContact"
              placeholder="Email address"
              required="required"
              autoComplete="on"
              oninvalid="setCustomValidity('Email is incorrect')"
              onkeyup="setCustomValidity('')"
            />
            <div className="help-block with-errors" />
          </div>
          <div className="form-group col-12 col-md-12">
            <textarea
              className="textarea form-control"
              id="messageContact"
              name="messageContact"
              placeholder="Your Message"
              rows={4}
              required="required"
              oninvalid="setCustomValidity('Fill in the field')"
              onkeyup="setCustomValidity('')"
              defaultValue={""}
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 order-2 order-md-1 text-center text-md-left">
            <div id="validator-contact" className="hidden" />
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2 text-right">
            <button type="submit" className="btn">
              <i className="font-icon icon-send" /> Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
