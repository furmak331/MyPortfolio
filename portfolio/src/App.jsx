import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CrystalBackground from './components/CrystalBackground';
import Loader from './components/Loader'; // We'll create this new component
import { theme } from './theme';

const AppContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  min-height: 100vh;
  font-family: 'Space Grotesk', sans-serif;
  position: relative;
`;

const Section = styled(motion.section)`
  padding: 100px 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 70px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #00acee, #af4261);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background: linear-gradient(45deg, #00acee, #af4261);
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

function FadeInSection({ children, delay = 0 }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.7, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate assets loading
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <CrystalBackground />
        
        <AnimatePresence>
          {loading ? (
            <Loader key="loader" />
          ) : (
            <>
              <Header />
              <Hero />
              
              <FadeInSection delay={0.1}>
                <Section id="about">
                  <SectionTitle>About Me</SectionTitle>
                  <About />
                </Section>
              </FadeInSection>
              
              <FadeInSection delay={0.1}>
                <Section id="projects">
                  <SectionTitle>My Projects</SectionTitle>
                  <Projects />
                </Section>
              </FadeInSection>
              
              <FadeInSection delay={0.1}>
                <Section id="skills">
                  <SectionTitle>Skills & Technologies</SectionTitle>
                  <Skills />
                </Section>
              </FadeInSection>
              
              <FadeInSection delay={0.1}>
                <Section id="contact">
                  <SectionTitle>Get In Touch</SectionTitle>
                  <Contact />
                </Section>
              </FadeInSection>
              
              <Footer />
            </>
          )}
        </AnimatePresence>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
