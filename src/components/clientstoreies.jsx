// src/components/ClientStories.jsx

import React, { useState } from "react";
import { motion } from "motion/react";
import "./ClientStories.css";

const ClientStories = () => {
  // ✅ Guaranteed working images
  const storiesData = [
    {
      id: 1,
      name: "Ayesha Khan",
      city: "Gujranwala",
      result: "Lost 25 KG",
      duration: "8 Months",
      message:
        "KINETIX changed my life completely. The trainers were patient and supportive — they treated me like family. I finally feel confident in my own skin.",
      beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=533&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=533&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Bilal Ahmed",
      city: "Gujranwala",
      result: "Lost 35 KG",
      duration: "10 Months",
      message:
        "From 115 KG to 80 KG — I never thought it was possible. The personalized diet plan and consistent training at KINETIX made all the difference.",
      beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=533&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=533&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Hassan Raza",
      city: "Gujranwala",
      result: "Lost 45 KG",
      duration: "14 Months",
      message:
        "At 45, I thought it was too late. KINETIX proved me wrong. I've never felt this energetic in my entire life. This gym is truly life-changing.",
      beforeImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=533&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=533&fit=crop&q=80",
    },
    {
      id: 4,
      name: "Usman Tariq",
      city: "Gujranwala",
      result: "Lost 30 KG",
      duration: "12 Months",
      message:
        "The trainers at KINETIX didn't just transform my body — they transformed my mindset. I owe everything to this community.",
      beforeImage: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=533&fit=crop&q=80",
      afterImage: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=533&fit=crop&q=80",
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
            Real people, real results. Hover on each photo to see their
            before and after transformation.
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
   Story Card
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
        delay: index * 0.12,
        ease: "easeOut",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="story-image-container">

        {/* Badge */}
        <motion.div
          className="story-result-badge"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.12 + 0.3 }}
        >
          ✅ {story.result}
        </motion.div>

        {/* Before Image */}
        <motion.img
          src={story.beforeImage}
          alt={`${story.name} - Before`}
          className="story-img story-img-before"
          loading="lazy"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* After Image */}
        <motion.img
          src={story.afterImage}
          alt={`${story.name} - After`}
          className="story-img story-img-after"
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />

        {/* Labels */}
        <motion.div
          className="story-label story-label-before"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          BEFORE
        </motion.div>

        <motion.div
          className="story-label story-label-after"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
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
          👆 Hover
        </motion.div>
      </div>

      {/* Info */}
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