// src/components/ClientStories.jsx

import React from "react";
import { motion } from "motion/react";
import "./ClientStories.css";

const ClientStories = () => {
  const storiesData = [
    {
      id: 1,
      name: "HEIDI BOUND",
      result: "LOST 50 POUNDS",
      duration: "6 MONTHS",
      message:
        "I never thought I could feel this good about myself. The trainers at KINETIX believed in me when I didn't believe in myself. This is more than a gym — it's family.",
      beforeImage: "/assets/heidi-before.jpg",
      afterImage: "/assets/heidi-after.jpg",
    },
    {
      id: 2,
      name: "ALAN",
      result: "LOST 90 POUNDS",
      duration: "10 MONTHS",
      message:
        "The personalized plan made all the difference. Every workout was tailored to my body and goals. I finally have the energy to keep up with my kids.",
      beforeImage: "/assets/alan-before.jpg",
      afterImage: "/assets/alan-after.jpg",
    },
    {
      id: 3,
      name: "JOHN PIKE",
      result: "LOST 120 POUNDS",
      duration: "14 MONTHS",
      message:
        "At 52, I thought it was too late. KINETIX proved me wrong. The community, the coaching, the support — everything combined to change my life completely.",
      beforeImage: "/assets/john-before.jpg",
      afterImage: "/assets/john-after.jpg",
    },
    {
      id: 4,
      name: "EVAN",
      result: "LOST 110 POUNDS",
      duration: "12 MONTHS",
      message:
        "From barely walking a mile to running 5Ks — this journey has been incredible. The KINETIX trainers didn't just transform my body, they transformed my mindset.",
      beforeImage: "/assets/evan-before.jpg",
      afterImage: "/assets/evan-after.jpg",
    },
  ];

  return (
    <section className="clientstories-section">
      <div className="clientstories-container">

        {/* ============ HEADER ============ */}
        <div className="clientstories-header">
          <motion.p
            className="clientstories-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            REAL PEOPLE, REAL RESULTS
          </motion.p>

          <motion.h2
            className="clientstories-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            See Their Transformations
          </motion.h2>

          <motion.p
            className="clientstories-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            Real people, real results. Discover how our members transformed
            their lives at KINETIX through dedication and expert guidance.
          </motion.p>
        </div>

        {/* ============ STORIES GRID ============ */}
        <div className="clientstories-grid">
          {storiesData.map((story, index) => (
            <StoryCard
              key={story.id}
              story={story}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ============================================
   Story Card Component
   ============================================ */
const StoryCard = ({ story, index }) => {
  return (
    <motion.div
      className="story-card"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
    >
      {/* ✅ Result Badge (Top) */}
      <motion.div
        className="story-badge"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.5,
          delay: index * 0.15 + 0.4,
          ease: "easeOut",
        }}
      >
        ✅ {story.result}
      </motion.div>

      {/* ✅ Before/After Images */}
      <div className="story-images">

        {/* Before Image */}
        <motion.div
          className="story-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: index * 0.15 + 0.2,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.03 }}
        >
          <img
            src={story.beforeImage}
            alt={`${story.name} - Before`}
            className="story-image"
          />
          <div className="story-image-label before-label">BEFORE</div>
          <div className="story-image-overlay"></div>
        </motion.div>

        {/* After Image */}
        <motion.div
          className="story-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: index * 0.15 + 0.3,
            ease: "easeOut",
          }}
          whileHover={{ scale: 1.03 }}
        >
          <img
            src={story.afterImage}
            alt={`${story.name} - After`}
            className="story-image"
          />
          <div className="story-image-label after-label">AFTER</div>
          <div className="story-image-overlay"></div>
        </motion.div>

      </div>

      {/* ✅ Client Message */}
      <motion.div
        className="story-message-box"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: index * 0.15 + 0.5,
          ease: "easeOut",
        }}
      >
        {/* Quote Icon */}
        <div className="story-quote-icon">"</div>

        <p className="story-message">{story.message}</p>

        <div className="story-message-footer">
          <span className="story-author">— {story.name}</span>
          <span className="story-duration">({story.duration})</span>
        </div>
      </motion.div>

    </motion.div>
  );
};

export default ClientStories;