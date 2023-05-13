
import ProjectCard from '../ProjectCard'
import styles from './projects.module.css'

const Projects = () => {
  return (
    <section id="projects" className={`${styles.projects}`}>
      <div className="custom-container">
        <h4>
          Portfolio
        </h4>
        <h3>
          Each project is a unique piece of development 🧩
        </h3>
        <div className="row">
          <div className="col-lg-4">
            <ProjectCard />
          </div>
          <div className="col-lg-4">
            <ProjectCard />
          </div>
          <div className="col-lg-4">
            <ProjectCard />
          </div>
        </div>
      </div>

      <div className={styles.line}>
        
      </div>
      <div className={styles.box}>

      </div>
    </section>
  )
}

export default Projects