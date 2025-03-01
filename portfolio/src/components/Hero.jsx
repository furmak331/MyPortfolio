import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowDown, FaLock, FaShieldAlt, FaTerminal } from 'react-icons/fa';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 0 20px;
`;

const TypewriterWrapper = styled.div`
  min-height: 40px;
  margin-bottom: 20px;
`;

const GlowingName = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #3DE67B, #2cb863);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  cursor: default;
  z-index: 1;
  transition: text-shadow 0.3s ease;
  font-family: 'Space Grotesk', sans-serif;

  &:hover {
    text-shadow: 0 0 10px rgba(61, 230, 123, 0.5), 0 0 20px rgba(44, 184, 99, 0.3);
  }
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.25rem;
  color: #3DE67B;
  margin-bottom: 20px;
  font-family: 'Space Grotesk', monospace;
  
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  max-width: 700px;
  line-height: 1.5;
  margin-bottom: 30px;
  color: #e0e0e0;
  font-family: 'Space Grotesk', monospace;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const CTAButton = styled(motion.a)`
  background: linear-gradient(45deg, #3DE67B, #2cb863);
  color: #111;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  font-family: 'Space Grotesk', monospace;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 0 15px rgba(61, 230, 123, 0.3);
  margin-bottom: 40px;
  
  &:hover {
    box-shadow: 0 0 20px rgba(61, 230, 123, 0.5);
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ScrollText = styled.span`
  font-size: 12px;
  letter-spacing: 2px;
  margin-bottom: 8px;
  color: #3DE67B;
  font-family: 'Space Grotesk', monospace;
`;

const ScrollIcon = styled(motion.div)`
  color: #3DE67B;
`;

const CursorCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
`;

const MatrixBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.15;
`;

const SecurityIcons = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  color: #3DE67B;
  opacity: ${props => props.opacity || 0.2};
  font-size: ${props => props.size || '2rem'};
`;

const TerminalBox = styled(motion.div)`
  background-color: rgba(17, 17, 17, 0.8);
  border-left: 3px solid #3DE67B;
  padding: 15px 20px;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  text-align: left;
  font-family: 'Space Grotesk', monospace;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  margin: 0 auto;
`;

const TerminalLine = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: #e0e0e0;
`;

const TerminalPrompt = styled.span`
  color: #3DE67B;
  margin-right: 10px;
`;

const TerminalCommand = styled.span`
  color: #e0e0e0;
`;

const TerminalOutput = styled.div`
  color: #3DE67B;
  margin-left: 20px;
  margin-bottom: 8px;
`;

function Hero() {
  const canvasRef = useRef(null);
  const nameRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  
  // Typewriter effect
  useEffect(() => {
    const text = "Cybersec Professional & Web Dev";
    let i = 0;
    
    const typing = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 50);
    
    return () => clearInterval(typing);
  }, []);
  
  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const characters = "01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#3DE67B';
      ctx.font = `${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 33);
    
    return () => clearInterval(interval);
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
      <MatrixBackground>
        <CursorCanvas ref={canvasRef} />
      </MatrixBackground>
      
      <SecurityIcons
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <FloatingIcon
            key={i}
            size={`${Math.random() * 2 + 1}rem`}
            opacity={Math.random() * 0.3 + 0.1}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 5 + 5,
            }}
          >
            {i % 3 === 0 ? <FaLock /> : i % 3 === 1 ? <FaShieldAlt /> : <FaTerminal />}
          </FloatingIcon>
        ))}
      </SecurityIcons>
      
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
        Breaking systems to build them stronger
      </Subtitle>
      
      <CTAButton
        href="#contact"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaShieldAlt /> Get In Touch
      </CTAButton>
      
      <TerminalBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <TerminalLine>
          <TerminalPrompt>$</TerminalPrompt>
          <TerminalCommand>whoami</TerminalCommand>
        </TerminalLine>
        <TerminalOutput>security_researcher</TerminalOutput>
        <TerminalLine>
          <TerminalPrompt>$</TerminalPrompt>
          <TerminalCommand>./explore_portfolio.sh</TerminalCommand>
        </TerminalLine>
      </TerminalBox>
      
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
    </HeroContainer>
  );
}

export default Hero;
