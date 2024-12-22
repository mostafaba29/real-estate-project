import React from 'react';

const ContactFormagent = () => {
  return (
    <div className="contactagent-form col-lg-4 col-12 mt-lg-0 mt-5 px-4 py-2">
      <h3 className="mt-2">Contact Me</h3>
      <br />
      <form action="#" method="post">
        <input
          type="text"
          placeholder="Your name"
          className="form-control"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="form-control"
          required
        />
        <input
          type="tel"
          placeholder="Your phone number"
          className="form-control"
          required
        />
        <textarea
          placeholder="Message"
          className="form-control"
          rows="4"
          required
        ></textarea>
        <button type="submit" className="send-message">
          <i
            className="fa-regular fa-envelope m-1"
            style={{ color: 'white' }}
          ></i>
          Send message
        </button>
        <button type="button" className="call">
          <i
            className="fa-solid fa-phone m-1"
            style={{ color: '#f1913d' }}
          ></i>
          Call
        </button>
      </form>
    </div>
  );
};

export default ContactFormagent;
