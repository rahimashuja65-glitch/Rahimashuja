// src/components/Features.jsx

import React from "react";
import { motion } from "motion/react";
import "./Features.css";

const Features = () => {
  const featuresData = [
    {
      id: 1,
      number: "01",
      title: "EXPERT STAFF",
      description:
        "Our team of fitness professionals is here to guide and support you every step of the way.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 6a4 4 0 0 0-4 4v3a4 4 0 0 0 8 0v-3" />
          <path d="M8 13v3a5 5 0 0 0 10 0" />
          <path d="M4 10v5M2 12v1M20 10v5M22 12v1" />
          <circle cx="12" cy="6" r="0.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 2,
      number: "02",
      title: "COMMUNITY ATMOSPHERE",
      description:
        "Join a welcoming community of fitness enthusiasts who motivate and inspire each other.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          <line x1="8" y1="14" x2="16" y2="14" />
          <line x1="8" y1="17" x2="13" y2="17" />
        </svg>
      ),
    },
    {
      id: 3,
      number: "03",
      title: "CONVENIENT HOURS",
      description:
        "Our team of fitness professionals is here to guide and support you every step of the way.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
    },
    {
      id: 4,
      number: "04",
      title: "CLEAN & SAFE ENVIRONMENT",
      description:
        "Your health and safety are our top priorities. We maintain a clean and sanitized facility at all times.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22v-8" />
          <path d="M12 14a5 5 0 0 0-5-5H3a5 5 0 0 0 5 5h4z" />
          <path d="M12 14a5 5 0 0 1 5-5h4a5 5 0 0 1-5 5h-4z" />
          <path d="M12 10V6a3 3 0 1 1 3 3" />
          <circle cx="19" cy="5" r="1.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="features-section">

      {/* 🌄 Background Image */}
      <div className="features-bg-image"></div>

      {/* 🌑 Dark Overlay */}
      <div className="features-bg-overlay"></div>

      {/* 🌊 Background Decorative Circles */}
      <div className="features-bg-deco">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      <div className="features-container">

        {/* ✅ Title Section */}
        <div className="features-header">
          <motion.p
            className="features-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            WHAT WE OFFER
          </motion.p>

          <motion.h2
            className="features-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            WHY CHOOSE
          </motion.h2>

          <motion.h2
            className="features-title highlighted"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            KINETIX?
          </motion.h2>

          {/* ✅ Description Paragraph */}
          <motion.p
            className="features-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            At KINETIX, we don't just build bodies — we build confidence, community,
            and lasting habits. With world-class equipment, certified trainers, and
            an atmosphere that pushes you to be your best, every workout becomes a
            step toward a stronger you.
          </motion.p>
        </div>

        {/* ✅ 4 Feature Cards */}
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <FeatureCard
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
   Feature Card Component
   ============================================ */
const FeatureCard = ({ feature, index }) => {
  return (
    <motion.div
      className="feature-card"
      initial={{ opacity: 0, y: 80, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.9,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{
        y: -15,
        scale: 1.02,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
    >
      {/* ✨ Animated Gradient Border */}
      <div className="card-border-glow"></div>

      {/* 💫 Shine Sweep Effect */}
      <div className="card-shine"></div>

      {/* 🎯 Number Badge */}
      <motion.div
        className="card-number"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15 + 0.4,
          ease: "easeOut",
        }}
      >
        {feature.number}
      </motion.div>

      {/* 🌟 Icon with Rotating Rings */}
      <motion.div
        className="feature-icon-wrapper"
        initial={{ opacity: 0, scale: 0.3, rotate: -180 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 1,
          delay: index * 0.15 + 0.2,
          ease: "easeOut",
        }}
        whileHover={{
          rotate: 360,
          transition: { duration: 0.8, ease: "easeInOut" },
        }}
      >
        {/* Rotating Outer Ring */}
        <motion.div
          className="icon-ring-outer"
          animate={{ rotate: 360 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5,
          }}
        />

        {/* Icon Glow */}
        <motion.div
          className="icon-glow"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        />

        {/* Icon Circle */}
        <div className="feature-icon">{feature.icon}</div>
      </motion.div>

      {/* Title */}
      <motion.h3
        className="feature-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: index * 0.15 + 0.5,
          ease: "easeOut",
        }}
      >
        {feature.title}
      </motion.h3>

      {/* Animated Underline */}
      <motion.div
        className="title-underline"
        initial={{ width: 0 }}
        whileInView={{ width: "60px" }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: index * 0.15 + 0.7,
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
          delay: index * 0.15 + 0.8,
        }}
      >
        {feature.description}
      </motion.p>

    </motion.div>
  );
};

export default Features;