import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa';
import { SiExpress, SiMysql, SiThreedotjs, SiSelenium, SiGooglesheets } from 'react-icons/si';

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

const ProjectCard = styled(motion.div)`
  background-color: rgba(17, 17, 17, 0.7);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectHeader = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin: 0;
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
    color: #00acee;
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
  &:before {
    content: '•';
    color: #00acee;
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
  background-color: rgba(0, 172, 238, 0.1);
  color: #00acee;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const projects = [
  {
    title: 'EZ Reserve',
    description: 'A centralized reservation system that streamlines the booking process for various services.',
    features: [
      'User-friendly interface for easy booking management',
      'Real-time availability updates',
      'Integration with 3D visualization for venue layouts',
      'Secure payment processing',
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
    title: 'Identity Theft Analysis',
    description: 'Analyzed trends in identity theft cases over 25 years using Python data analysis tools.',
    features: [
      'Created visualizations to present insights for policy development',
      'Examined correlations with socio-economic factors using statistical analysis',
    ],
    techStack: [
      { name: 'Python', icon: FaPython },
      { name: 'Pandas', icon: FaDatabase },
      { name: 'Matplotlib', icon: FaDatabase },
    ],
    github: 'https://github.com/furmak331/identitytheftanalysis',
    live: '',
  },
  {
    title: 'Vision OCR',
    description: 'Developing OCR system for regional languages using computer vision language models.',
    features: [
      'Implementing Transformers Qwen 2-VL model for improved text recognition accuracy',
      'Implementing it with tesseract library',
    ],
    techStack: [
      { name: 'Computer Vision', icon: FaDatabase },
      { name: 'Deep Learning', icon: FaDatabase },
    ],
    github: 'https://github.com/furmak331/Vision-OCR',
    live: '',
  },
  {
    title: 'Zimbra Email Server Automation',
    description: 'Developed a script to automate user management on a Zimbra mail server.',
    features: [
      'Implemented automated DNS configuration using dnsmasq to streamline domain management tasks',
      'Reduced manual workload by 80% and ensured consistency in server setup',
    ],
    techStack: [
      { name: 'Bash', icon: FaDatabase },
      { name: 'Python', icon: FaPython },
    ],
    github: 'https://github.com/furmak331/zimbra-automation',
    live: '',
  },
  {
    title: 'Agrobot',
    description: 'AI-based advisory bot for farmers in Kashmir that provides real-time guidance on crop choices, pest management, weather conditions, and market prices.',
    features: [
      'Uses local language processing, regional datasets, and automation to make it accessible and effective for farmers in the valley',
    ],
    techStack: [
      { name: 'Python', icon: FaPython },
      { name: 'NLP', icon: FaDatabase },
      { name: 'Data Analysis', icon: FaDatabase },
    ],
    github: 'https://github.com/furmak331/agrobot',
    live: '',
  },
  {
    title: 'CarWar: Car Rental Website',
    description: 'Developed a responsive car rental platform with Node.js backend and MySQL database.',
    features: [
      'Implemented user authentication and concurrent booking management system',
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
              <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </ProjectLink>
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