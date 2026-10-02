// src/components/FAQ.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const faqData = [
    {
      id: 1,
      question: "How do I sign up for a membership?",
      answer:
        "Signing up is easy! You can register online through our website, visit our front desk in person, or call us at 0306-789-5432. All you need is a valid ID and a payment method. Your membership activates the same day!",
    },
    {
      id: 2,
      question: "Is there a joining or registration fee?",
      answer:
        "Yes, there's a one-time registration fee of $29 that covers your membership card, locker assignment, and a free orientation session with one of our trainers. No hidden charges — this is a one-time payment only.",
    },
    {
      id: 3,
      question: "What equipment do you have in the gym?",
      answer:
        "We have everything you need: premium cardio machines (treadmills, ellipticals, bikes), free weights up to 50kg, power racks, cable machines, functional training area, and a dedicated stretching zone. All equipment is sanitized daily.",
    },
    {
      id: 4,
      question: "Do you offer group fitness classes?",
      answer:
        "Absolutely! We offer 20+ group classes every week including Yoga, Zumba, CrossFit, HIIT, Spin, and Boxing. All classes are included in Pro and Premium memberships. Check our schedule page for timings and book your spot!",
    },
    {
      id: 5,
      question: "Can I cancel my membership anytime?",
      answer:
        "Yes, you can cancel anytime with no penalties. Just give us 30 days' notice in writing (email or at the front desk). Any prepaid fees for unused months will be refunded within 14 business days.",
    },
    {
      id: 6,
      question: "Do you have a nutritionist or diet plans?",
      answer:
        "Yes! We have certified nutritionists available for consultations. Premium members get one free diet plan consultation per month. Custom meal plans start at $19 for non-members. Book at the front desk.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">

      {/* ✅ TOP — Header */}
      <div className="faq-header-block">
        <motion.h2
          className="faq-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          Got Questions? <br /> We've Got Answers
        </motion.h2>

        <motion.p
          className="faq-subtitle-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          Find answers to common questions about our gym, memberships,
          facilities, and training programs.
        </motion.p>
      </div>

      {/* ✅ BOTTOM — FAQ List + Video */}
      <div className="faq-container">

        {/* LEFT — FAQ List */}
        <div className="faq-left">
          <div className="faq-list">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={item.id}
                  className={`faq-item ${isOpen ? "open" : ""}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="faq-q-text">{item.question}</h3>

                    <motion.div
                      className="faq-icon"
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

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <p className="faq-a-text">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — Video */}
        <motion.div
          className="faq-right-video"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Rotating Glow */}
          <motion.div
            className="faq-video-glow"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Video Wrapper */}
          <motion.div
            className="faq-video-wrapper"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            {/* ✅ Video */}
            <motion.video
              className="faq-video"
              autoPlay
              loop
              muted
              playsInline
              animate={{
                y: [0, -8, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <source src="/assets/FAQmp4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </motion.video>

            {/* Green Overlay */}
            <div className="faq-video-overlay"></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;