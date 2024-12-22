import React from 'react';
import styles from './WorkExperience.module.css';
import photo from '../../images/photo.jpg'; // Импорт изображения

const WorkExperience = () => {
  return (
    <div className={styles.wrapper}> {/* Обернули контейнер для центрирования */}
      <div className={styles.container}>
        <div className={styles.photoWrapper}>
          <img src={photo} alt="Profile" className={styles.photo} />
        </div>

        <div className={styles.textContent}>
          <section className={styles.workExperience}>
            <h2>Work Experience</h2>
            <p>
              I am a 2nd year student of the Faculty of Mechanics and Mathematics of BSU, specialty "provision of mobile devices".
            </p>
            <p>Freelance, self-employment.</p>
          </section>

          <section className={styles.skills}>
            <h2>Skills</h2>
            <ul>
              <li>C++</li>
              <li>HTML, CSS</li>
              <li>Figma</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
          </section>

          <section className={styles.languages}>
            <h2>Languages</h2>
            <ul>
              <li>Russian — native</li>
              <li>English — B2</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
