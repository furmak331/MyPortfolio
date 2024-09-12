


// src/components/About.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaTools, FaTrophy } from 'react-icons/fa';

const AboutContainer = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
  color: #00acee;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled(motion.div)`
  background-color: rgba(17, 17, 17, 0.7);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #00acee;
`;

const CardContent = styled.div`
  font-size: 16px;
  line-height: 1.6;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  &:before {
    content: '•';
    color: #00acee;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

function About() {
  return (
    <AboutContainer id="about">
      <SectionTitle>About Me</SectionTitle>
      <ContentWrapper>
        <InfoCard
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardTitle>
            <FaGraduationCap /> Education
          </CardTitle>
          <CardContent>
            <List>
              <ListItem>
                <strong>Bachelor of Technology - Information Technology</strong>
                <br />
                National Institute of Technology (NIT) Srinagar, India
                <br />
                2022 - 2026 (expected)
              </ListItem>
              <ListItem>
                <strong>Higher Secondary Education</strong>
                <br />
                Crescent Public School, Srinagar, India
                <br />
                Completed in 2022
              </ListItem>
              <ListItem>Scored 96.0% in 12th & 96%ile in JEE main</ListItem>
            </List>
          </CardContent>
        </InfoCard>

        <InfoCard
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CardTitle>
            <FaCode /> Technical Skills
          </CardTitle>
          <CardContent>
            <List>
              <ListItem>
                <strong>Programming Languages:</strong> C, C++, Python, JavaScript, Rust, Go
              </ListItem>
              <ListItem>
                <strong>Web Development:</strong> HTML, CSS, JavaScript, jQuery, Node.js, Express.js, React, MySQL, PostgreSQL, PHP
              </ListItem>
              <ListItem>
                <strong>Tools & Technologies:</strong> Git, GitHub, VS Code, Postman, Docker
              </ListItem>
              <ListItem>
                <strong>Concepts:</strong> Data Structures & Algorithms, OOP, RESTful APIs, Responsive Design
              </ListItem>
              <ListItem>
                <strong>Operating Systems:</strong> Ubuntu, Kali Linux, Windows, xv6
              </ListItem>
            </List>
          </CardContent>
        </InfoCard>

        <InfoCard
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <CardTitle>
            <FaTools /> Additional Skills
          </CardTitle>
          <CardContent>
            <List>
              <ListItem>
                <strong>Security:</strong> Basic understanding of network security and ethical hacking practices
              </ListItem>
              <ListItem>
                <strong>DevOps:</strong> Familiarity with Docker
              </ListItem>
              <ListItem>
                <strong>Version Control:</strong> Git (GitHub, GitLab)
              </ListItem>
              <ListItem>
                <strong>Soft Skills:</strong> Problem-solving, communication, teamwork, quick learning, time management
              </ListItem>
            </List>
          </CardContent>
        </InfoCard>

        <InfoCard
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <CardTitle>
            <FaTrophy /> Achievements & Activities
          </CardTitle>
          <CardContent>
            <List>
              <ListItem>Active participation in coding competitions and hackathons</ListItem>
              <ListItem>Completed online courses in advanced web development, data structures, Rust programming, and Linux-based systems</ListItem>
              <ListItem>Strong problem-solving and analytical skills</ListItem>
              <ListItem>Passion for new technologies and continuous learning</ListItem>
            </List>
          </CardContent>
        </InfoCard>
      </ContentWrapper>
    </AboutContainer>
  );
}

export default About;