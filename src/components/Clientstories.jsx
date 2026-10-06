// src/components/ClientStories.jsx

import React, { useState } from "react";
import "./ClientStories.css";

const ClientStories = () => {
  const clients = [
    {
      name: "Ayesha Khan",
      result: "Lost 25 KG",
      message: "KINETIX changed my life completely. Best decision ever!",
      before: "/assets/ayesha.png",
      after: "/assets/ayeshaafter.png",
    },
    {
      name: "Bilal Ahmed",
      result: "Lost 35 KG",
      message: "The trainers here are amazing. They truly care about you.",
      before: "/assets/billalahmed.png",
      after: "/assets/billalahmedafter.png",
    },
  ];

  return (
    <section className="cs-section">
      <h2 className="cs-title">See Their Transformations</h2>
      <p className="cs-subtitle">Hover on each photo to see the before & after</p>

      <div className="cs-grid">
        {clients.map((client, i) => (
          <ClientCard key={i} client={client} />
        ))}
      </div>
    </section>
  );
};

const ClientCard = ({ client }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="cs-card">
      <div
        className="cs-image-box"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Before Image */}
        <img
          src={client.before}
          alt={`${client.name} - Before`}
          className="cs-img"
          style={{ opacity: hover ? 0 : 1 }}
        />

        {/* After Image */}
        <img
          src={client.after}
          alt={`${client.name} - After`}
          className="cs-img cs-img-abs"
          style={{ opacity: hover ? 1 : 0 }}
        />

        {/* Label */}
        <span className="cs-label">{hover ? "AFTER" : "BEFORE"}</span>
      </div>

      {/* Client Info */}
      <div className="cs-info">
        <h3 className="cs-name">{client.name}</h3>
        <p className="cs-result">✅ {client.result}</p>
        <p className="cs-message">"{client.message}"</p>
      </div>
    </div>
  );
};

export default ClientStories;