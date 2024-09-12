import React from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CrystalBackground from './components/CrystalBackground';
import Footer from './components/Footer';
const AppContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  min-height: 100vh;
  font-family: 'Space Grotesk', sans-serif;
`;

const Section = styled(motion.section)`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

function FadeInSection({ children }) {
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
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 }
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <AppContainer>
      <CrystalBackground />
      <Header />
      <Hero />
      <FadeInSection>
        <Section>
          <Projects />
        </Section>
      </FadeInSection>
      <FadeInSection>
        <Section>
          <Skills />
        </Section>
      </FadeInSection>
      <FadeInSection>
        <Section>
          <Contact />
        </Section>
      </FadeInSection>
      <FadeInSection>
        <Section>
          <Footer />
        </Section>
      </FadeInSection>
    </AppContainer>
  );
}

export default App;
