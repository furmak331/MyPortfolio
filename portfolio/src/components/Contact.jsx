// src/components/Contact.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactCard = styled(motion.div)`
  background-color: rgba(17, 17, 17, 0.7);
  border-left: 3px solid #3DE67B;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 5px;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #3DE67B;
  font-family: 'Space Grotesk', monospace;
`;

const ContactInfo = styled(motion.p)`
  font-size: 18px;
  margin-bottom: 10px;
  color: #e0e0e0;
  font-family: 'Space Grotesk', monospace;
`;

const ContactButton = styled(motion.a)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background: linear-gradient(45deg, #3DE67B, #2cb863);
  color: #111;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease;
  font-family: 'Space Grotesk', monospace;
  
  &:hover {
    background: linear-gradient(45deg, #2cb863, #3DE67B);
    box-shadow: 0 0 10px rgba(61, 230, 123, 0.5);
  }
`;

function Contact() {
  return (
    <ContactContainer>
      <ContactCard
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <ContactTitle>
          <FaEnvelope /> ./contact_me
        </ContactTitle>
        <ContactInfo>
          furmak331@gmail.com
        </ContactInfo>
        <ContactInfo>
          00000000000
        </ContactInfo>
        <ContactButton
          href="mailto:furmak331@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send a message
        </ContactButton>
      </ContactCard>
    </ContactContainer>
  );
}

export default Contact;