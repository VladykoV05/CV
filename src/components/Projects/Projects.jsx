import React from 'react';
import styles from './Projects.module.css';
import lamodaImage from '../../images/lamoda.jpg';
import apiSpaImage from '../../images/api_spa.jpg';
import notionReduxImage from '../../images/notion_redux.jpg';
import rockScissorsPaperImage from '../../images/rockscissorspaper.jpg';

const Projects = () => {
  return (
    <section className={styles.projects}>
      <h2>My Works</h2>

      <div className={styles.project}>
        <h3>Lamoda</h3>
        <p>An online store with the ability to search, filter, and sort products.</p>
        <p>Technologies: JS, React</p>
        <a href="https://github.com/VladykoV05/lamoda">GitHub Link</a>
        <img src={lamodaImage} alt="Lamoda project" />
      </div>

      <div className={styles.project}>
        <h3>Api & Spa</h3>
        <p>A multi-page application that stores baskets and an ice album. The API and react-router-domain were used to create it.</p>
        <p>Technologies: JS, React</p>
        <a href="https://github.com/VladykoV05/api-spa">GitHub Link</a>
        <img src={apiSpaImage} alt="Api & Spa project" />
      </div>

      <div className={styles.project}>
        <h3>Notion Redux</h3>
        <p>An application for registering users and adding tasks. It works with many users.</p>
        <p>Technologies: React, Redux, Json Server</p>
        <a href="https://github.com/VladykoV05/notion-redux">GitHub Link</a>
        <img src={notionReduxImage} alt="Notion Redux project" />
      </div>

      <div className={styles.project}>
        <h3>Rock Scissors Paper</h3>
        <a href="https://github.com/VladykoV05/1.RockScissorspPaper">GitHub Link</a>
        <img src={rockScissorsPaperImage} alt="Rock Scissors Paper project" />
      </div>
    </section>
  );
};

export default Projects;
