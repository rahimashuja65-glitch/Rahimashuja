// src/components/ClientStories.jsx

import React, { useState } from "react";
import "./ClientStories.css";

const ClientStories = () => {
  const clients = [
    {
      name: "Ayesha Khan",
      city: "Gujranwala",
      result: "Lost 25 KG",
      before: "/assets/ayesha.png",
      after: "/assets/ayeshaafter.png",
    },
    {
      name: "Bilal Ahmed",
      city: "Gujranwala",
      result: "Lost 35 KG",
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
          alt={client.name}
          className="cs-img"
          style={{ opacity: hover ? 0 : 1 }}
        />

        {/* After Image */}
        <img
          src={client.after}
          alt={client.name}
          className="cs-img cs-img-abs"
          style={{ opacity: hover ? 1 : 0 }}
        />

        {/* Label */}
        <span className="cs-label">{hover ? "AFTER" : "BEFORE"}</span>
      </div>

      <div className="cs-info">
        <h3 className="cs-name">{client.name}</h3>
        <p className="cs-city">{client.city}</p>
        <p className="cs-result">✅ {client.result}</p>
      </div>
    </div>
  );
};

export default ClientStories;