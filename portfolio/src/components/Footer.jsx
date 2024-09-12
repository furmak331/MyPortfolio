import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: rgba(17, 17, 17, 0.7);
  padding: 20px 0;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  color: #00acee;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <p>&copy; 2024 Furqan Makhdoomi. All rights reserved.</p>
      <SocialLinks>
        <SocialLink href="https://github.com/furmak331" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/furqan-makhdoomi-b69651284/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="mailto:furmak331@gmail.com">
          <FaEnvelope />
        </SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer;
