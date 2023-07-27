import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //toast
  const notify = () => toast("Message sent!");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { email, message };
    axios
      .post("http://localhost:3000/contact", formData)
      .then((res) => {
        console.log(res);
        setEmail("");
        setMessage("");
        notify();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="animate-fade-down flex flex-col w-4/5 mx-auto text-center items-center mt-12">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 border-slate-400 rounded-md p-2"
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border-2 border-slate-400 rounded-md mt-3 p-2"
          />
          <button
            className="mt-3 px-5 py-2 bg-blue-400 rounded-md text-white font-semibold uppercase hover:bg-blue-500"
            type="submit"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default ContactForm;
