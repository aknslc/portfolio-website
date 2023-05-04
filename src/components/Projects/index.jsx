
import ProjectCard from '../ProjectCard'
import styles from './projects.module.css'

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ProjectCard />
          </div>
          <div className="col-lg-3">
            <ProjectCard />
          </div>
          <div className="col-lg-3">
            <ProjectCard />
          </div>
          <div className="col-lg-3">
            <ProjectCard />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects