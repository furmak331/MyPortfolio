// src/components/Skills.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaDocker, FaHtml5, FaCss3Alt, FaLinux, FaAws, FaBootstrap,
  FaLock, FaShieldAlt, FaBug, FaNetworkWired, FaServer, FaUserSecret, FaCode, FaWifi
} from 'react-icons/fa';
import { 
  SiCplusplus, SiRust, SiGo, SiMysql, SiPostgresql, SiMongodb, SiExpress, SiJquery, SiPhp, SiVisualstudiocode, 
  SiPostman, SiUbuntu, SiKalilinux, SiGraphql, SiEmberdotjs, SiWireshark, SiMetasploit, SiBurpsuite, SiOwasp
} from 'react-icons/si';

const SkillsContainer = styled.section`
  padding: 40px 0;
  max-width: 1000px;
  margin: 0 auto;
  background-color: transparent;
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 1.5rem;
  padding: 0 20px;
`;

const SkillItem = styled(motion.div)`
  background-color: rgba(17, 17, 17, 0.7);
  border-left: 3px solid #3DE67B;
  border-radius: 5px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(61, 230, 123, 0.2);
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
  color: #3DE67B;
  transition: all 0.3s ease;
`;

const SkillName = styled.p`
  font-size: 1rem;
  color: #ffffff;
  transition: all 0.3s ease;
  font-family: 'Space Grotesk', monospace;

  ${SkillItem}:hover & {
    color: #3DE67B;
  }
`;

const ShowMoreItem = styled(motion.div)`
  background-color: rgba(61, 230, 123, 0.1);
  border-radius: 5px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  border-left: 3px solid #3DE67B;
  backdrop-filter: blur(5px);

  &:hover {
    background-color: rgba(61, 230, 123, 0.2);
    transform: translateY(-5px);
  }
`;

const ShowMoreText = styled.p`
  font-size: 1rem;
  color: #3DE67B;
  margin: 0;
  font-family: 'Space Grotesk', monospace;
`;

const ShowMoreIcon = styled.span`
  font-size: 2rem;
  color: #3DE67B;
  margin-bottom: 0.5rem;
`;

const skills = [
  { name: 'Log Analysis', icon: FaCode },
  { name: 'Network Security Monitoring', icon: FaNetworkWired },
  { name: 'SIEM (Google Chronicle)', icon: FaDatabase },
  { name: 'Wireshark', icon: SiWireshark },
  { name: 'tcpdump', icon: FaWifi },
  { name: 'Nmap', icon: FaNetworkWired },
  { name: 'Suricata', icon: FaShieldAlt },
  { name: 'Burp Suite', icon: SiBurpsuite },
  { name: 'C', icon: SiCplusplus },
  { name: 'Python', icon: FaPython },
  { name: 'C++', icon: SiCplusplus },
  { name: 'JavaScript', icon: FaJs },
  { name: 'Selenium', icon: FaBug },
  { name: 'ChromeDriver', icon: FaCode },
  { name: 'REST APIs', icon: FaServer },
  { name: 'Postman', icon: SiPostman },
  { name: 'Linux', icon: FaLinux },
  { name: 'Security Protocols', icon: FaLock },
  { name: 'Cryptography', icon: FaLock },
  { name: 'Networks', icon: FaNetworkWired },
  { name: 'Operating Systems', icon: FaServer },
  { name: 'Data Structures & Algorithms', icon: FaCode },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Express.js', icon: SiExpress },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  {name: 'PostgresSQL', icon: FaDatabase },
];

function Skills() {
  const [showAll, setShowAll] = useState(false);
  const visibleSkillsCount = showAll ? skills.length : 11; // Show 11 skills + "Show More" button
  const remainingSkills = skills.length - visibleSkillsCount;

  return (
    <SkillsContainer id="skills">
     
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