
import ProjectCard from '../ProjectCard'
import styles from './projects.module.css'
import { projects } from '../../constants'
import { Link } from 'react-router-dom'

const Projects = () => {
  const featuredProject = projects.filter(item => item.featured)
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
          {featuredProject.map(project => (
            <div key={project.id} className="col-lg-4 col-md-6 col-sm-12 my-3">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
        <Link to={'/projects'} className='d-flex align-items-center justify-content-center my-5'>
          <button className={styles.AllProjects}>All Projects</button>
        </Link>
      </div>

      <div className={styles.line}>

      </div>
      <div className={styles.box}>

      </div>
    </section>
  )
}

export default Projects