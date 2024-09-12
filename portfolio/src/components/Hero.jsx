// src/components/Hero.jsx
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const GlowingName = styled(motion.h1)`
  font-size: 64px;
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #f3ec78, #af4261);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  cursor: default;
  z-index: 1;
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 0 0 10px rgba(243, 236, 120, 0.5), 0 0 20px rgba(175, 66, 97, 0.3);
  }
`;

const Title = styled(motion.h2)`
  font-size: 36px;
  color: #00acee;
  margin-bottom: 20px;
`;

const Subtitle = styled(motion.p)`
  font-size: 24px;
  max-width: 600px;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const CTAButton = styled(motion.a)`
  background-color: #00acee;
  color: #fff;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0086b3;
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 172, 238, 0.3);
  }
`;

const CursorCanvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
`;

function Hero() {
  const canvasRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;

    const cursorTrail = [];
    const trailLength = 20;
    const colors = ['#f3ec78', '#af4261']; // Colors from the GlowingName gradient

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update cursor trail
      cursorTrail.push({ x: mouseX, y: mouseY });
      if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
      }

      // Draw smooth cursor trail
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (cursorTrail.length > 2) {
        ctx.beginPath();
        ctx.moveTo(cursorTrail[0].x, cursorTrail[0].y);

        for (let i = 1; i < cursorTrail.length - 2; i++) {
          const xc = (cursorTrail[i].x + cursorTrail[i + 1].x) / 2;
          const yc = (cursorTrail[i].y + cursorTrail[i + 1].y) / 2;
          ctx.quadraticCurveTo(cursorTrail[i].x, cursorTrail[i].y, xc, yc);
        }

        ctx.quadraticCurveTo(
          cursorTrail[cursorTrail.length - 2].x,
          cursorTrail[cursorTrail.length - 2].y,
          cursorTrail[cursorTrail.length - 1].x,
          cursorTrail[cursorTrail.length - 1].y
        );

        const gradient = ctx.createLinearGradient(
          cursorTrail[0].x, cursorTrail[0].y,
          cursorTrail[cursorTrail.length - 1].x, cursorTrail[cursorTrail.length - 1].y
        );
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(1, colors[1]);

        ctx.strokeStyle = gradient;
        ctx.stroke();
      }

      // Glow effect
      ctx.filter = 'blur(8px)';
      ctx.globalCompositeOperation = 'lighter';
      ctx.drawImage(canvas, 0, 0);
      ctx.filter = 'none';
      ctx.globalCompositeOperation = 'source-over';

      animationFrameId = requestAnimationFrame(animate);
    }

    function handleMouseMove(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (nameRef.current) {
        const rect = nameRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angleX = (mouseX - centerX) / (window.innerWidth / 2);
        const angleY = (mouseY - centerY) / (window.innerHeight / 2);
        nameRef.current.style.transform = `perspective(1000px) rotateY(${angleX * 5}deg) rotateX(${-angleY * 5}deg)`;
      }
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <HeroContainer>
      <CursorCanvas ref={canvasRef} />
      <GlowingName
        ref={nameRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Furqan Makhdoomi
      </GlowingName>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Full Stack Web Developer
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Crafting cutting-edge software solutions, innovative products, and immersive digital experiences.
      </Subtitle>
      <CTAButton
        href="#about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Learn More
      </CTAButton>
    </HeroContainer>
  );
}

export default Hero;