import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaTerminal } from 'react-icons/fa';

const AboutContainer = styled.section`
  padding: 60px 0;
  background-color: #0a0a0a;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const IntroCard = styled(motion.div)`
  background-color: #111;
  border-left: 3px solid #3DE67B;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h2`
  font-size: 22px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #3DE67B;
  font-family: 'Courier New', monospace;
`;

const IntroText = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: #e0e0e0;
  font-family: 'Courier New', monospace;
  margin-bottom: 0;
`;

function About() {
  return (
    <AboutContainer id="about">
      <ContentWrapper>
        <IntroCard
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Title>
            <FaTerminal /> ./whoami
          </Title>
          <IntroText>
            Security professional. I break systems to build them stronger.
            Specializing in penetration testing and vulnerability research with a focus on web 
            application security and network exploitation. When systems say "keep out," 
            Lets dive in even more.
          </IntroText>
        </IntroCard>
      </ContentWrapper>
    </AboutContainer>
  );
}

export default About;
