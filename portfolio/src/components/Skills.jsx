// src/components/Skills.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt, FaLinux, FaAws, FaBootstrap
} from 'react-icons/fa';
import { 
  SiCplusplus, SiRust, SiGo, SiMysql, SiPostgresql, SiMongodb, SiExpress, SiJquery, SiPhp, SiVisualstudiocode, SiPostman, SiUbuntu, SiKalilinux, SiGraphql, SiEmberdotjs
} from 'react-icons/si';

const SkillsContainer = styled.section`
  padding: 80px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #00ffff;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1.5rem;
  padding: 0 20px;
`;

const SkillItem = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(0, 255, 255, 0.2) 0%, rgba(0, 255, 255, 0) 70%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  color: #00ffff;
  transition: all 0.3s ease;

  ${SkillItem}:hover & {
    transform: scale(1.1);
  }
`;

const SkillName = styled.p`
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.3s ease;

  ${SkillItem}:hover & {
    color: #00ffff;
  }
`;

const ShowMoreItem = styled(motion.div)`
  background-color: rgba(0, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(0, 255, 255, 0.2);
  }
`;

const ShowMoreText = styled.p`
  font-size: 1rem;
  color: #00ffff;
  margin: 0;
`;

const ShowMoreIcon = styled.span`
  font-size: 2rem;
  color: #00ffff;
  margin-bottom: 0.5rem;
`;

const skills = [
  { name: 'JavaScript', icon: FaJs },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Python', icon: FaPython },
  { name: 'C++', icon: SiCplusplus },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Docker', icon: FaDocker },
  { name: 'AWS', icon: FaAws },
  { name: 'Linux', icon: FaLinux },
  { name: 'Ubuntu', icon: SiUbuntu },
  { name: 'Kali Linux', icon: SiKalilinux },
  { name: 'VS Code', icon: SiVisualstudiocode },
  { name: 'Postman', icon: SiPostman },
  { name: 'jQuery', icon: SiJquery },
  { name: 'PHP', icon: SiPhp },
  { name: 'Go', icon: SiGo },
  { name: 'Rust', icon: SiRust },
  { name: 'EJS', icon: SiEmberdotjs },
  { name: 'Bootstrap', icon: FaBootstrap },
];

function Skills() {
  const [showAll, setShowAll] = useState(false);
  const visibleSkillsCount = showAll ? skills.length : 11; // Show 11 skills + "Show More" button
  const remainingSkills = skills.length - visibleSkillsCount;

  return (
    <SkillsContainer id="skills">
      <SectionTitle>Skills & Technologies</SectionTitle>
      <SkillsGrid
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        <AnimatePresence>
          {skills.slice(0, visibleSkillsCount).map(({ name, icon: Icon }) => (
            <SkillItem
              key={name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <SkillIcon>
                <Icon />
              </SkillIcon>
              <SkillName>{name}</SkillName>
            </SkillItem>
          ))}
        </AnimatePresence>
        {!showAll && remainingSkills > 0 && (
          <ShowMoreItem
            key="show-more"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(true)}
          >
            <ShowMoreIcon>+</ShowMoreIcon>
            <ShowMoreText>{remainingSkills} More</ShowMoreText>
          </ShowMoreItem>
        )}
      </SkillsGrid>
    </SkillsContainer>
  );
}

export default Skills;