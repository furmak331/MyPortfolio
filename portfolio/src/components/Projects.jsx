import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaExternalLinkAlt, FaPython } from 'react-icons/fa';
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
    github: 'https://github.com/yourusername/ez-reserve',
    live: 'https://ez-reserve.com',
  },
  {
    title: 'Car Rental Platform',
    description: 'A comprehensive car rental solution that connects vehicle owners with potential renters.',
    features: [
      'Advanced search and filtering options',
      'User authentication and profile management',
      'Booking system with real-time updates',
      'Review and rating system for both renters and car owners',
    ],
    techStack: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'MySQL', icon: SiMysql },
      { name: 'React', icon: FaReact },
    ],
    github: 'https://github.com/yourusername/car-rental-platform',
    live: 'https://car-rental-platform.com',
  },
  {
    title: 'Automated Web Accessibility Tester',
    description: 'A Python-based tool that automates web accessibility testing, helping developers create more inclusive websites.',
    features: [
      'Scans websites for common accessibility issues',
      'Generates detailed reports with suggestions for improvements',
      'Supports multiple accessibility guidelines (WCAG 2.1, Section 508)',
      'Integrates with CI/CD pipelines for automated testing',
      'Exports results to various formats (PDF, CSV, JSON)',
    ],
    techStack: [
      { name: 'Python', icon: FaPython },
      { name: 'Selenium', icon: SiSelenium },
      { name: 'Google Sheets API', icon: SiGooglesheets },
    ],
    github: 'https://github.com/yourusername/web-accessibility-tester',
    live: 'https://web-accessibility-tester.com',
  },
  {
    title: 'Food Delivery App',
    description: 'A responsive food delivery application that connects local restaurants with hungry customers.',
    features: [
      'Geolocation-based restaurant discovery',
      'Real-time order tracking',
      'In-app messaging between customers and delivery personnel',
      'Integration with popular payment gateways',
    ],
    techStack: [
      { name: 'React', icon: FaReact },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'MongoDB', icon: FaDatabase },
      { name: 'Express', icon: SiExpress },
    ],
    github: 'https://github.com/yourusername/food-delivery-app',
    live: 'https://food-delivery-app.com',
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
