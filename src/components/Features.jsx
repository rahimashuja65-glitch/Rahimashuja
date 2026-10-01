// src/components/Features.jsx

import React from "react";
import { motion } from "motion/react";
import "./Features.css";

const Features = () => {
  // ✅ 4 Features — Icons ke saath
  const featuresData = [
    {
      id: 1,
      title: "FITNESS",
      description:
        "Achieve your fitness goals with premium strength and cardio equipment, designed for every workout style.",
      icon: (
        // Dumbbell Icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6.5 6.5h11v11h-11z" />
          <path d="M3 9v6M21 9v6M5 7.5v9M19 7.5v9" />
          <line x1="9" y1="12" x2="15" y2="12" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "STRENGTH",
      description:
        "Build muscle and power with our heavy-duty free weights, power racks, and expert strength coaching.",
      icon: (
        // Flexed Arm / Muscle Icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 6a4 4 0 0 0-4 4v3a4 4 0 0 0 8 0v-3" />
          <path d="M8 13v3a5 5 0 0 0 10 0" />
          <path d="M4 10v5M2 12v1M20 10v5M22 12v1" />
          <circle cx="12" cy="6" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "ATMOSPHERE",
      description:
        "Stay motivated in a vibrant, inspiring atmosphere with stunning aesthetics designed to elevate your experience.",
      icon: (
        // Sparkles Icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3l1.9 5.8L19 11l-5.1 2.2L12 19l-1.9-5.8L5 11l5.1-2.2z" />
          <path d="M19 4l.5 1.5L21 6l-1.5.5L19 8l-.5-1.5L17 6l1.5-.5z" />
          <path d="M5 18l.4 1.2L6.5 20l-1.1.8L5 22l-.4-1.2L3.5 20l1.1-.8z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "SUPPORT",
      description:
        "Get expert guidance anytime with our dedicated team of trainers and support staff ready to help you.",
      icon: (
        // Headset / Support Icon
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">

        {/* ✅ 4 Boxes in ONE Row */}
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <FeatureBox
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ============================================
   Reusable Feature Box Component
   ============================================ */
const FeatureBox = ({ feature, index }) => {
  return (
    <motion.div
      className="feature-box"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        borderColor: "rgba(74, 222, 128, 0.6)",
        boxShadow: "0 0 40px rgba(74, 222, 128, 0.15)",
        y: -8,
        transition: { duration: 0.3 },
      }}
    >
      {/* Pulse glow inside box */}
      <motion.div
        className="box-glow"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.4,
        }}
      />

      {/* ============================================
          ✅ NEW — Icon with Multiple Animations
          ============================================ */}
      <motion.div
        className="feature-icon-wrapper"
        // 1️⃣ Entrance animation (from top)
        initial={{ opacity: 0, y: -30, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: index * 0.15 + 0.2,
          ease: "easeOut",
        }}
        // 2️⃣ Hover — rotate + scale
        whileHover={{
          rotate: 12,
          scale: 1.15,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
      >
        {/* Pulsing glow behind icon — infinite */}
        <motion.div
          className="icon-glow"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        />

        {/* Actual icon */}
        <div className="feature-icon">{feature.icon}</div>
      </motion.div>

      {/* Title */}
      <motion.h3
        className="feature-title"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: index * 0.15 + 0.3,
          ease: "easeOut",
        }}
      >
        {feature.title}
      </motion.h3>

      {/* Green underline */}
      <motion.div
        className="title-underline"
        initial={{ width: 0 }}
        whileInView={{ width: "50px" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.7,
          delay: index * 0.15 + 0.5,
          ease: "easeOut",
        }}
      />

      {/* Description */}
      <motion.p
        className="feature-desc"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: index * 0.15 + 0.6,
        }}
      >
        {feature.description}
      </motion.p>
    </motion.div>
  );
};

export default Features;