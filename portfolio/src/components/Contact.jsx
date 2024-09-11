// src/components/Contact.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #f3ec78, #af4261);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ContactInfo = styled(motion.p)`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ContactButton = styled(motion.a)`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #af4261;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
`;

function Contact() {
  return (
    <ContactContainer>
      <ContactTitle>Get in touch</ContactTitle>
      <ContactInfo
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        furmak331@gmail.com
      </ContactInfo>
      <ContactInfo
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        +91 9622 691113
      </ContactInfo>
      <ContactButton
        href="mailto:furmak331@gmail.com"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Send a message
      </ContactButton>
    </ContactContainer>
  );
}

export default Contact;