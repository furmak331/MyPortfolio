import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const ProjectCard = styled(motion.div)`
  background-color: rgba(17, 17, 17, 0.7);
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`;

const ProjectContent = styled.div`
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #aaa;
`;

const ProjectIcons = styled.div`
  display: flex;
  gap: 10px;
  font-size: 24px;
`;

const projects = [
  { 
    title: 'EZ Reserve', 
    description: 'Centralized reservation app with React and 3js.',
    icons: [FaReact, FaNodeJs]
  },
  { 
    title: 'Car Rental Platform', 
    description: 'Full-stack application with Node.js, Express.js, and MySQL.',
    icons: [FaNodeJs, FaDatabase]
  },
  { 
    title: 'Food Delivery App', 
    description: 'Responsive frontend app using React with efficient state management.',
    icons: [FaReact]
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
          whileHover={{ 
            scale: 1.05, 
            boxShadow: '0px 0px 8px rgba(255,255,255,0.2)'
          }}
        >
          <ProjectContent>
            <div>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </div>
            <ProjectIcons>
              {project.icons.map((Icon, i) => (
                <Icon key={i} />
              ))}
            </ProjectIcons>
          </ProjectContent>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}

export default Projects;
