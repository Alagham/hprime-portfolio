import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="py-20 max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <input type="text" name="user_name" placeholder="Your Name" required
          className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800" />
        <input type="email" name="user_email" placeholder="Your Email" required
          className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800" />
        <textarea name="message" placeholder="Your Message" rows="5" required
          className="w-full p-3 rounded-lg border dark:border-gray-700 dark:bg-gray-800"></textarea>
        <button type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
