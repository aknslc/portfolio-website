import React from 'react'
import styles from './projectCard.module.css'
import projectImg from '../../assets/project.png'
const ProjectCard = () => {
  return (
    <div className={styles.projectCard}>
      <img src={projectImg} alt="" />
      <div className={styles.cardContent}>
        <div className={styles.tags}>
          <div className={styles.tag}>
            #react
          </div>
          <div className={styles.tag}>
            #javascript
          </div>
          <div className={styles.tag}>
            #bootstrap
          </div>
        </div>
        <h4 className={styles.projectTitle}>E-commerce</h4>
      </div>
    </div>
  )
}

export default ProjectCard