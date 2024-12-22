import React from 'react';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts'; 
import './App.module.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <WorkExperience />
      <Projects />
      <Contacts /> 
      <Footer />
    </div>
  );
};

export default App;
