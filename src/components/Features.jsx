// src/components/Features.jsx

import React from "react";
import { motion } from "motion/react";
import "./Features.css";

const Features = () => {
  // ✅ 4 Features — Screenshot wale EXACT icons
  const featuresData = [
    {
      id: 1,
      title: "EXPERT STAFF",
      description:
        "Our team of fitness professionals is here to guide and support you every step of the way.",
      icon: (
        // 💪 Muscle Arm Icon (bicep flex with head)
        <svg
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Head */}
          <circle cx="26" cy="12" r="5" />
          {/* Body/Arm outline */}
          <path d="M26 17 L26 28 L12 28 L8 34 L8 44 L14 44 L18 38 L24 38" />
          <path d="M26 28 L38 28 L44 34 L44 44 L38 44" />
          {/* Bicep curve */}
          <path d="M38 28 Q46 20 52 22 Q54 24 54 28 L54 38" />
          {/* Left bicep */}
          <path d="M12 28 Q6 22 12 18 Q14 22 14 28" />
          {/* Handshake/base */}
          <path d="M22 44 L22 54 L38 54 L38 44" />
          <path d="M28 44 L28 50 M32 44 L32 50" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "COMMUNITY ATMOSPHERE",
      description:
        "Join a welcoming community of fitness enthusiasts who motivate and inspire each other.",
      icon: (
        // ☁️ Cloud Icon (with wind lines)
        <svg
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Cloud */}
          <path d="M42 24 A8 8 0 0 1 50 32 A8 8 0 0 1 42 40 L20 40 A10 10 0 0 1 20 20 A10 10 0 0 1 30 22 A8 8 0 0 1 42 24 Z" />
          {/* Wind lines */}
          <line x1="14" y1="32" x2="22" y2="32" />
          <line x1="10" y1="36" x2="20" y2="36" />
          <line x1="14" y1="44" x2="24" y2="44" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "CONVENIENT HOURS",
      description:
        "Our team of fitness professionals is here to guide and support you every step of the way.",
      icon: (
        // 🕐 Clock Icon (with dots around)
        <svg
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Circle */}
          <circle cx="32" cy="32" r="18" />
          {/* Clock hands */}
          <line x1="32" y1="32" x2="32" y2="22" />
          <line x1="32" y1="32" x2="40" y2="36" />
          {/* Dots around */}
          <circle cx="32" cy="14" r="1.5" fill="currentColor" />
          <circle cx="32" cy="50" r="1.5" fill="currentColor" />
          <circle cx="14" cy="32" r="1.5" fill="currentColor" />
          <circle cx="50" cy="32" r="1.5" fill="currentColor" />
          <circle cx="19" cy="19" r="1.5" fill="currentColor" />
          <circle cx="45" cy="45" r="1.5" fill="currentColor" />
          <circle cx="45" cy="19" r="1.5" fill="currentColor" />
          <circle cx="19" cy="45" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "CLEAN & SAFE ENVIRONMENT",
      description:
        "Your health and safety are our top priorities. We maintain a clean and sanitized facility at all times.",
      icon: (
        // 🌳 Trees Icon (with sun/circle)
        <svg
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Center tree */}
          <path d="M32 50 L32 26" />
          <path d="M32 26 Q22 26 22 34 Q22 42 32 42" />
          <path d="M32 26 Q42 26 42 34 Q42 42 32 42" />
          <path d="M32 20 Q24 20 24 26 L40 26 Q40 20 32 20 Z" />
          {/* Left tree */}
          <path d="M14 50 L14 34" />
          <path d="M14 34 Q6 34 6 40 Q6 46 14 46" />
          <path d="M14 34 Q22 34 22 40 Q22 46 14 46" />
          {/* Right tree */}
          <path d="M50 50 L50 34" />
          <path d="M50 34 Q42 34 42 40 Q42 46 50 46" />
          <path d="M50 34 Q58 34 58 40 Q58 46 50 46" />
          {/* Sun/bush circle */}
          <circle cx="48" cy="14" r="4" />
          {/* Ground */}
          <line x1="4" y1="50" x2="60" y2="50" />
        </svg>
      ),
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">

        {/* ✅ Title Section — KINETIX */}
        <div className="features-header">
          <motion.h2
            className="features-title"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            WHY CHOOSE
          </motion.h2>

          <motion.h2
            className="features-title highlighted"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            KINETIX?
          </motion.h2>
        </div>

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

      <motion.div
        className="feature-icon-wrapper"
        initial={{ opacity: 0, y: -30, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: index * 0.15 + 0.2,
          ease: "easeOut",
        }}
        whileHover={{
          rotate: 12,
          scale: 1.15,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
      >
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
        <div className="feature-icon">{feature.icon}</div>
      </motion.div>

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