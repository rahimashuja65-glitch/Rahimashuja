// src/components/AboutFAQ.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./AboutFAQ.css";

const AboutFAQ = () => {
  // ✅ State — kaunsa FAQ open hai
  const [openIndex, setOpenIndex] = useState(0);

  // ✅ About Page FAQ Data
  const faqData = [
    {
      id: 1,
      question: "When was KINETIX founded?",
      answer:
        "KINETIX was founded in 2018 with a simple mission: to create a fitness community where everyone feels welcome. What started as a small gym with just 5 trainers has grown into one of the most trusted fitness clubs in Gujranwala.",
    },
    {
      id: 2,
      question: "What is your mission and vision?",
      answer:
        "Our mission is to make fitness accessible, enjoyable, and sustainable for everyone — regardless of age, gender, or fitness level. We envision a community where health is a lifestyle, not a chore.",
    },
    {
      id: 3,
      question: "Who are the trainers at KINETIX?",
      answer:
        "Our team consists of 25+ certified trainers, nutritionists, and fitness coaches. Each trainer specializes in different areas — strength training, yoga, CrossFit, cardio, and rehabilitation. All our trainers are internationally certified.",
    },
    {
      id: 4,
      question: "What makes KINETIX different from other gyms?",
      answer:
        "Three things: our community-first approach, premium equipment, and personalized attention. We don't just sell memberships — we build relationships. Our members stay with us for years because they feel like family.",
    },
    {
      id: 5,
      question: "What are your core values?",
      answer:
        "We live by five values: Respect (for every body type), Consistency (small steps every day), Community (we grow together), Excellence (in everything we do), and Fun (fitness should be enjoyable).",
    },
    {
      id: 6,
      question: "How many members do you have today?",
      answer:
        "We're proud to serve over 2,500 active members across all our programs. From beginners to professional athletes, our community continues to grow every single month.",
    },
    {
      id: 7,
      question: "Do you support local fitness events?",
      answer:
        "Absolutely! We organize and sponsor local fitness events, charity runs, and community challenges throughout the year. Giving back to the community is at the heart of what we do.",
    },
    {
      id: 8,
      question: "What's your future plan for KINETIX?",
      answer:
        "We're expanding! In the next 2 years, we plan to open 3 more branches across Punjab, launch a mobile fitness app, and introduce online training programs so members can work out from anywhere.",
    },
  ];

  // ✅ Toggle FAQ
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="aboutfaq-section">
      <div className="aboutfaq-container">

        {/* ============ FAQ SECTION ============ */}
        <div className="aboutfaq-left">

          <motion.h2
            className="aboutfaq-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            About Us <br /> & Our Story
          </motion.h2>

          <motion.p
            className="aboutfaq-subtitle-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Learn more about KINETIX — our journey, our team, our mission,
            and everything that makes our fitness community special.
          </motion.p>

          {/* FAQ Items */}
          <div className="aboutfaq-list">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.id}
                  className={`aboutfaq-item ${isOpen ? "open" : ""}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  {/* Question Row */}
                  <div
                    className="aboutfaq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="aboutfaq-q-text">{item.question}</h3>

                    {/* Arrow Icon */}
                    <motion.div
                      className="aboutfaq-icon"
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 6 15 12 9 18" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="aboutfaq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <p className="aboutfaq-a-text">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutFAQ;