import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.div`
  text-align: center;
  background: linear-gradient(135deg, #121212, #1a1a1a);
  color: #ffffff;
  padding: 50px 20px;
  position: relative;
  overflow: hidden;
`;

const MainHeading = styled(motion.h1)`
  font-family: 'Montserrat', sans-serif;
  font-size: 64px;
  color: #00acee;  // Bright accent color
`;

const CTAButton = styled(motion.button)`
  font-family: 'Poppins', sans-serif;
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #00acee;  // Bright accent color
    color: #000;
  }
`;

function HeroSection() {
  return (
    <HeroContainer>
      <MainHeading
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Building cutting-edge software solutions...
      </MainHeading>
      <CTAButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Explore My Work
      </CTAButton>
    </HeroContainer>
  );
}

export default HeroSection;
