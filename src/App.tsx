import React from 'react';
import Layout from './components/Layout';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import SkillsContact from './sections/SkillsContact';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Projects />
      <SkillsContact />
    </Layout>
  );
}

export default App;