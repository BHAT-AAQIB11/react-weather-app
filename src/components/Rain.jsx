import { useEffect, useRef } from "react";

const RainEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

   
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

   
    const maxDrops = 100; 
    const drops = [];

    
    for (let i = 0; i < maxDrops; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 20 + 10,
        speed: Math.random() * 15 + 10,
        opacity: Math.random() * 0.3 + 0.1,
        angle: Math.random() * 2 - 1,
      });
    }

    
    const draw = () => {
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";

      for (let i = 0; i < maxDrops; i++) {
        const p = drops[i];

        
        ctx.strokeStyle = `rgba(174, 194, 224, ${p.opacity})`;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.angle, p.y + p.length);
        ctx.stroke();

        
        p.y += p.speed;
        p.x += p.angle;

        
        if (p.y > canvas.height) {
          p.y = -p.length;
          p.x = Math.random() * canvas.width;
          p.speed = Math.random() * 15 + 10;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", 
        zIndex: 1,
      }}
    />
  );
};

export default RainEffect;
