import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
`;

const SkillItem = styled(motion.div)`
  background-color: rgba(17, 17, 17, 0.7);
  padding: 20px;
  border-radius: 15px;
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const skills = [
  { name: 'JavaScript', icon: FaJs },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Python', icon: FaPython },
  { name: 'C++', icon: SiCplusplus },
  { name: 'MySQL', icon: FaDatabase },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Docker', icon: FaDocker },
];

function Skills() {
  return (
    <SkillsContainer>
      {skills.map(({ name, icon: Icon }, index) => (
        <SkillItem
          key={name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ 
            scale: 1.1, 
            backgroundColor: 'rgba(34, 34, 34, 0.8)',
            boxShadow: '0px 0px 8px rgba(255,255,255,0.2)'
          }}
        >
          <Icon size={32} />
          {name}
        </SkillItem>
      ))}
    </SkillsContainer>
  );
}

export default Skills;
