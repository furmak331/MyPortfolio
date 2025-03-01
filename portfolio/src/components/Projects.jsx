import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaDatabase, FaLock, FaShieldAlt, FaCode, FaServer } from 'react-icons/fa';
import { SiExpress, SiMysql, SiThreedotjs, SiC, SiRust, SiKalilinux, SiLinux } from 'react-icons/si';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background-color: rgba(17, 17, 17, 0.7);
  border-left: 3px solid #3DE67B;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

const ProjectHeader = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #3DE67B;
  font-family: 'Space Grotesk', monospace;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  color: #fff;
  font-size: 20px;
  transition: color 0.3s ease;
  &:hover {
    color: #3DE67B;
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #ddd;
  line-height: 1.6;
  margin-bottom: 20px;
  font-family: 'Space Grotesk', monospace;
`;

const ProjectFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`;

const ProjectFeature = styled.li`
  font-size: 14px;
  color: #bbb;
  margin-bottom: 8px;
  font-family: 'Space Grotesk', monospace;
  &:before {
    content: '>';
    color: #3DE67B;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechItem = styled.span`
  background-color: rgba(61, 230, 123, 0.1);
  color: #3DE67B;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'Space Grotesk', monospace;
`;

const projects = [
  {
    title: 'DiTRU: Quantum-Resistant Cryptography',
    description: 'Implemented advanced lattice-based post-quantum cryptosystems using a novel dihedral polynomial structure to ensure security against quantum computing threats.',
    features: [
      'Developed novel cryptographic primitives resistant to quantum attacks',
      'Implemented key exchange and digital signature schemes',
      'Optimized performance for resource-constrained environments',
      'Conducted security analysis against known quantum algorithms',
    ],
    techStack: [
      { name: 'C', icon: SiC },
      { name: 'Python', icon: FaPython },
      { name: 'SageMath', icon: FaCode },
      { name: 'Cryptography', icon: FaLock },
    ],
    github: 'https://github.com/furmak331/DiTRU_',
    live: '',
  },
  {
    title: 'Exploitohorizon',
    description: 'A modular, gamified cybersecurity training platform designed to teach offensive security techniques in an engaging, hands-on environment.',
    features: [
      'Interactive labs for practicing real-world exploitation techniques',
      'Progressive difficulty levels with achievement system',
      'Realistic vulnerable environments for ethical hacking practice',
      'Comprehensive tracking of skills development and progress',
    ],
    techStack: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Docker', icon: FaServer },
      { name: 'Kali Linux', icon: SiKalilinux },
    ],
    github: 'https://github.com/furmak331/exploitohorizon',
    live: '',
  },
  {
    title: 'EZ Reserve',
    description: 'A centralized reservation system that streamlines the booking process for various services with enhanced security features to protect user data.',
    features: [
      'End-to-end encrypted user data and payment processing',
      'Secure authentication with multi-factor options',
      'Real-time availability updates with tamper-proof logging',
      'Integration with 3D visualization for venue layouts',
    ],
    techStack: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'Three.js', icon: SiThreedotjs },
    ],
    github: 'https://github.com/furmak331/EZ-Reserve',
    live: '',
  },
  {
    title: 'Agrobot',
    description: 'AI-based advisory bot for farmers in Kashmir with robust security measures to protect sensitive agricultural data and prevent unauthorized access.',
    features: [
      'Secure API implementation with rate limiting and input validation',
      'End-to-end encrypted communications for farmer data privacy',
      'Uses local language processing and regional datasets',
      'Secure cloud infrastructure with regular security audits',
    ],
    techStack: [
      { name: 'Python', icon: FaPython },
      { name: 'NLP', icon: FaDatabase },
      { name: 'Security', icon: FaShieldAlt },
      { name: 'Linux', icon: SiLinux },
    ],
    github: 'https://github.com/furmak331/agrobot',
    live: '',
  },
  {
    title: 'CarWar: Secure Car Rental Platform',
    description: 'Developed a responsive car rental platform with enhanced security features to protect user data and prevent common web vulnerabilities.',
    features: [
      'Implemented secure authentication with JWT and refresh token rotation',
      'Built-in protection against SQL injection, XSS, and CSRF attacks',
      'Secure payment processing with PCI-DSS compliance',
      'Comprehensive logging and monitoring for security incidents',
    ],
    techStack: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'MySQL', icon: SiMysql },
      { name: 'React', icon: FaReact },
    ],
    github: 'https://github.com/furmak331/carwar',
    live: '',
  },
];

function Projects() {
  return (
    <ProjectsContainer>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectHeader>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectLinks>
              <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </ProjectLink>
              {project.live && (
                <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt />
                </ProjectLink>
              )}
            </ProjectLinks>
          </ProjectHeader>
          <ProjectContent>
            <ProjectDescription>{project.description}</ProjectDescription>
            <ProjectFeatures>
              {project.features.map((feature, i) => (
                <ProjectFeature key={i}>{feature}</ProjectFeature>
              ))}
            </ProjectFeatures>
            <TechStack>
              {project.techStack.map(({ name, icon: Icon }) => (
                <TechItem key={name}>
                  <Icon /> {name}
                </TechItem>
              ))}
            </TechStack>
          </ProjectContent>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}

export default Projects;