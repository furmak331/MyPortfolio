import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoaderContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  z-index: 9999;
`;

const LogoWrapper = styled(motion.div)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #00acee, #af4261);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LoadingBar = styled(motion.div)`
  width: 200px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const LoadingProgress = styled(motion.div)`
  height: 100%;
  background: linear-gradient(45deg, #00acee, #af4261);
  border-radius: 2px;
`;

const LoadingText = styled(motion.p)`
  margin-top: 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 3px;
`;

const Loader = () => {
  return (
    <LoaderContainer
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <LogoWrapper
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        FM
      </LogoWrapper>
      
      <LoadingBar>
        <LoadingProgress
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </LoadingBar>
      
      <LoadingText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        LOADING
      </LoadingText>
    </LoaderContainer>
  );
};

export default Loader;
