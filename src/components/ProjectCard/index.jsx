import styles from './projectCard.module.css'
import projectImg from '../../assets/project.png'
import { AiOutlineEye } from 'react-icons/ai'
import ProjectModal from '../Modal/Modal'

const ProjectCard = () => {

  return (
    <div className={styles.projectCard}>
      <img src={projectImg} alt="project" />
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
        <h6 className={styles.projectTitle}>E-commerce</h6>
      </div>
      <div className={styles.viewProject}>
        <AiOutlineEye size={40} color='#E36B5D' />
      </div>
      <ProjectModal />
    </div>
  )
}

export default ProjectCard