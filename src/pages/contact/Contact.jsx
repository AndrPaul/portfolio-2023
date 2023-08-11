import React, { useState } from "react";
import "./contact.scss";
import { useFormspark } from "@formspark/use-formspark";
import { motion } from "framer-motion";
const FORMSPARK_FORM_ID = import.meta.env.VITE_FORMS_SPARK_ID;
//const FORMSPARK_FORM_ID = 'echo'; // Replace with your actual Formspark form ID

function Contact() {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all the fields");
    } else {
      await submit({
        name,
        email,
        message,
      });
      alert("Your message has been sent");
      console.log("✅ Input is not empty");
    }
  };

  return (
    <motion.div
      className="contact page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="heading">
        <h1>Let's talk</h1>
      </div>
      <div className="section">
        <form className="form" onSubmit={onSubmit}>
          <div className="inputs">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              name="name"
            />

            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
            />
          </div>

          <textarea
            value={message}
            placeholder="Type your message..."
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="sumbit-btn" type="submit" disabled={submitting}>
            Send
          </button>
          <p>
            Or send me an email - <strong>andpau96@gmail.com</strong>
          </p>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
