// src/components/Features.jsx

import React from "react";
import { motion } from "motion/react";
import "./Features.css";

const Features = () => {
  // ✅ 4 Features — sab ek row mein
  const featuresData = [
    {
      id: 1,
      title: "FITNESS",
      description:
        "Achieve your fitness goals with premium strength and cardio equipment, designed for every workout style.",
    },
    {
      id: 2,
      title: "STRENGTH",
      description:
        "Build muscle and power with our heavy-duty free weights, power racks, and expert strength coaching.",
    },
    {
      id: 3,
      title: "ATMOSPHERE",
      description:
        "Stay motivated in a vibrant, inspiring atmosphere with stunning aesthetics designed to elevate your experience.",
    },
    {
      id: 4,
      title: "SUPPORT",
      description:
        "Get expert guidance anytime with our dedicated team of trainers and support staff ready to help you.",
    },
  ];

  return (
    <section className="features-section">
      <div className="features-container">

        {/* ✅ 4 Boxes in ONE Row */}
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <FeatureBox key={feature.id} feature={feature} index={index} />
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