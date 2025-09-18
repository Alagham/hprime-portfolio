import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a49wbl2",     // replace with your service ID
        "template_98sml9i",    // replace with your template ID
        form.current,
        "-3oasMuNafnpVAGJw"      // replace with your public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset(); // clear form
        },
        (error) => {
          alert("❌ Failed to send: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          I’d love to hear from you, whether it’s a project idea, job
          opportunity, or just to say hi.
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <Mail className="text-blue-500 mb-2" size={28} />
            <a
              href="mailto:hamzahalagbe27@gmail.com"
              className="text-lg hover:text-blue-600"
            >
              hamzahalagbe27@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <Phone className="text-blue-500 mb-2" size={28} />
            <p className="text-lg">+234 7046441783</p>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="text-blue-500 mb-2" size={28} />
            <p className="text-lg">Lagos, Nigeria</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/Alagham"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/hamzah-adegbola-alagbe/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://x.com/hprime0"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <Twitter size={28} />
          </a>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="max-w-xl mx-auto space-y-6">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg border dark:bg-gray-800"
            required
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg border dark:bg-gray-800"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-lg border dark:bg-gray-800"
            required
          ></textarea>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}
