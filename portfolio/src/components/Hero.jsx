import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

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

const TypewriterWrapper = styled.div`
  min-height: 40px;
  margin-bottom: 20px;
`;

const GlowingName = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #C0C0C0, #E8E8E8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  cursor: default;
  z-index: 1;
  transition: text-shadow 0.3s ease;
  font-family: 'Space Grotesk', sans-serif;

  &:hover {
    text-shadow: 0 0 10px rgba(192, 192, 192, 0.5), 0 0 20px rgba(232, 232, 232, 0.3);
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.25rem;
  color: #00acee;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 700px;
  line-height: 1.5;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    padding: 0 20px;
  }
`;

const CTAButton = styled(motion.a)`
  background: linear-gradient(45deg, #00acee, #0086b3);
  color: #fff;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #af4261, #f3ec78);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover:before {
    opacity: 1;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ScrollText = styled.span`
  font-size: 12px;
  letter-spacing: 2px;
  margin-bottom: 8px;
  opacity: 0.8;
`;

const ScrollIcon = styled(motion.div)`
  font-size: 20px;
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
  const [typedText, setTypedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  
  const phrases = [
    'Full Stack Web Developer',
    'Software Engineer',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];
  
  // Typewriter effect
  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    let charIndex = 0;
    let isDeleting = false;
    let timeout;
    
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          timeout = setTimeout(type, 1500); // Pause at full phrase
          return;
        }
      } else {
        setTypedText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          setCurrentPhraseIndex((prevIndex) => 
            (prevIndex + 1) % phrases.length
          );
        }
      }
      
      // Adjust typing speed
      const typingSpeed = isDeleting ? 40 : 80;
      timeout = setTimeout(type, typingSpeed);
    };
    
    timeout = setTimeout(type, 500);
    
    return () => clearTimeout(timeout);
  }, [currentPhraseIndex]);

  // Mouse effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;

    const cursorTrail = [];
    const trailLength = 20;
    const colors = ['#00acee', '#af4261'];

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

        ctx.lineWidth = 2;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.stroke();
      }
      
      // Reset composite operation and filter
      ctx.globalCompositeOperation = 'source-over';
      ctx.filter = 'none';
      
      animationFrameId = requestAnimationFrame(animate);
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function handleMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Scroll to next section
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <HeroContainer>
      <GlowingName 
        ref={nameRef}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Furqan Makhdoomi
      </GlowingName>
      
      <TypewriterWrapper>
        <Title
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {typedText}
          <span className="cursor">|</span>
        </Title>
      </TypewriterWrapper>
      
      <Subtitle
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Creating modern, responsive web applications with cutting-edge technologies
      </Subtitle>
      
      <CTAButton
        href="#contact"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get In Touch
      </CTAButton>
      
      <ScrollIndicator
        onClick={scrollToNextSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <ScrollText>SCROLL DOWN</ScrollText>
        <ScrollIcon
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaArrowDown />
        </ScrollIcon>
      </ScrollIndicator>
      
      <CursorCanvas ref={canvasRef} />
    </HeroContainer>
  );
}

export default Hero;
