import React, { useEffect, useState } from "react";
import "../RainAnimation.css";

export default function RainAnimation({ numDrops = 100 }) {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const newDrops = Array.from({ length: numDrops }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * -20 - 10,
      delay: Math.random() * -5,
      duration: 1 + Math.random() * 1.5,
      opacity: 0.2 + Math.random() * 0.6,
      height: 15,
    }));

    setDrops(newDrops);
  }, [numDrops]);

  return (
    <div className="rain-container">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="raindrop"
          style={{
            left: `${drop.left}%`,
            top: `${drop.top}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            opacity: drop.opacity,
            height: `${drop.height}px`,
          }}
        />
      ))}
    </div>
  );
}
