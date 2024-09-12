// src/components/ProjectCard.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 300px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const ProjectTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #f3ec78;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 15px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechTag = styled.span`
  background-color: rgba(0, 172, 238, 0.2);
  color: #00acee;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(243, 236, 120, 0.2), rgba(175, 66, 97, 0.2));
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
`;

const ViewButton = styled.button`
  background-color: #00acee;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0086b3;
  }
`;

function ProjectCard({ project }) {
  return (
    <Card
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <ProjectImage src={project.image} alt={project.title} />
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <TechStack>
        {project.techStack.map((tech, index) => (
          <TechTag key={index}>{tech}</TechTag>
        ))}
      </TechStack>
      <Overlay
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <ViewButton>View Project</ViewButton>
      </Overlay>
    </Card>
  );
}

export default ProjectCard;