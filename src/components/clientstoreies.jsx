// src/components/ClientStories.jsx

import React, { useState } from "react";
import { motion } from "motion/react";
import "./ClientStories.css";

const ClientStories = () => {
  const storiesData = [
    {
      id: 1,
      name: "Ayesha Khan",
      city: "Gujranwala",
      result: "Lost 25 KG",
      duration: "8 Months",
      message:
        "KINETIX changed my life completely. The trainers were patient and supportive — they treated me like family. I finally feel confident in my own skin.",
      beforeImage: "/assets/ayesha.png",                 // ✅ PNG
      afterImage: "/assets/ayeshaafter.png",             // ✅ PNG
    },
    {
      id: 2,
      name: "Bilal Ahmed",
      city: "Gujranwala",
      result: "Lost 35 KG",
      duration: "10 Months",
      message:
        "From 115 KG to 80 KG — I never thought it was possible. The personalized diet plan and consistent training at KINETIX made all the difference.",
      beforeImage: "/assets/billalahmed.png",            // ✅ PNG
      afterImage: "/assets/billalahmedafter.png",        // ✅ PNG
    },
  ];

  return (
    <section className="clientstories-section">
      <div className="clientstories-container">

        {/* HEADER */}
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
            Hover on each photo to see their before and after transformation.
          </motion.p>
        </div>

        {/* GRID */}
        <div className="clientstories-grid">
          {storiesData.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ============================================
   Story Card — Hover Transition
   ============================================ */
const StoryCard = ({ story, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="story-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut",
      }}
    >

      {/* IMAGE CONTAINER */}
      <div
        className="story-image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Result Badge */}
        <div className="story-result-badge">
          ✅ {story.result}
        </div>

        {/* Before Image */}
        <motion.img
          src={story.beforeImage}
          alt={`${story.name} - Before`}
          className="story-img story-img-before"
          animate={{
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* After Image */}
        <motion.img
          src={story.afterImage}
          alt={`${story.name} - After`}
          className="story-img story-img-after"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 1.05,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* BEFORE Label */}
        <motion.div
          className="story-label story-label-before"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        >
          BEFORE
        </motion.div>

        {/* AFTER Label */}
        <motion.div
          className="story-label story-label-after"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          AFTER
        </motion.div>

        {/* Overlay */}
        <div className="story-image-overlay"></div>

        {/* Hint */}
        <motion.div
          className="story-hover-hint"
          animate={{ opacity: isHovered ? 0 : 0.85 }}
          transition={{ duration: 0.3 }}
        >
          👆 Hover to see After
        </motion.div>

      </div>

      {/* INFO */}
      <div className="story-info">
        <h3 className="story-name">{story.name}</h3>
        <p className="story-city">{story.city}</p>
        <p className="story-message">"{story.message}"</p>

        <div className="story-footer">
          <span className="story-duration">{story.duration}</span>
        </div>
      </div>

    </motion.div>
  );
};

export default ClientStories;