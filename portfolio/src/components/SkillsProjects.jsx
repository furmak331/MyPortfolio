import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faTools } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const SectionContainer = styled.div`
  background-color: #121212;
  color: #ffffff;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const SkillCard = styled(motion.div)`
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin: 10px;
  width: 30%;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.3);
  }
`;

function SkillsProjects() {
  return (
    <SectionContainer>
      <SkillCard
        whileHover={{ y: -10 }}
      >
        <FontAwesomeIcon icon={faCode} size="2x" />
        <h3>Programming Languages</h3>
        <p>C, C++, Python, JavaScript, Rust, Go</p>
      </SkillCard>
      <SkillCard
        whileHover={{ y: -10 }}
      >
        <FontAwesomeIcon icon={faLaptopCode} size="2x" />
        <h3>Web Development</h3>
        <p>HTML, CSS, JavaScript, React, Node.js, Express.js</p>
      </SkillCard>
      <SkillCard
        whileHover={{ y: -10 }}
      >
        <FontAwesomeIcon icon={faTools} size="2x" />
        <h3>Tools & Technologies</h3>
        <p>Git, Docker, MySQL, PostgreSQL, 3js</p>
      </SkillCard>
    </SectionContainer>
  );
}

export default SkillsProjects;
