import styles from './projectCard.module.css'
import { AiOutlineEye } from 'react-icons/ai'
import ProjectModal from '../Modal/Modal'
import { useState } from 'react'

const ProjectCard = ({ project }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }



  return (
    <>
      {!modalIsOpen &&
        <div className={styles.projectCard}>
          <img src={project.img} alt="project" />
          <div className={styles.cardContent}>
            <div className={styles.tags}>
              {project.tags.map((item, index) => (
                <div key={index} className={styles.tag}>
                  {`#${item}`}
                </div>
              ))}
            </div>
            <h6 className={styles.projectTitle}>{project.title}</h6>
          </div>
          <div className={styles.viewProject}>
            <AiOutlineEye onClick={openModal} size={40} color='#E36B5D' />
          </div>

          
        </div>
      }
      <ProjectModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} project={project} />
    </>
  )
}

export default ProjectCard