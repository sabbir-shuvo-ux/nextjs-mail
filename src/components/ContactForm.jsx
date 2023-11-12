"use client";

import React, { useState } from "react";
import InputBox from "./InputBox";
import toast from "react-hot-toast";

const initialState = {
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await fetch("/api/send-mail", {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = await res.json();

      if (data.sucess) {
        toast.success("we'll get back to you as ASAP 🚀");
      } else {
        toast.error("error occurred while processing 😓");
      }
    } catch (err) {
      toast.error("Please try again");
    } finally {
      setState(initialState);
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <InputBox
        inputId="email"
        labelText="Your Email"
        inputType="email"
        placeholderText="name@email.com"
        val={state.email}
        handleChange={handleChange}
      />
      <InputBox
        inputId="subject"
        labelText="Subject"
        inputType="text"
        val={state.subject}
        handleChange={handleChange}
        placeholderText="Let us know how we can help you"
      />
      <InputBox
        inputId="message"
        labelText="Your message"
        val={state.message}
        inputType="text"
        placeholderText="Leave a comment..."
        handleChange={handleChange}
        isTextArea={true}
        rows={6}
      />

      <button
        type="submit"
        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={isLoading}
      >
        {!isLoading ? (
          "Send message"
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 animate-spin"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
