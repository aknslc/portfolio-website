import ProjectCard from '../../components/ProjectCard'
import { projects } from '../../constants'
import styles from './projectsPage.module.css'
import { Link } from 'react-router-dom'
const ProjectsPage = () => {
    return (
        <>
            <div className="custom-container">
                <div className={styles.projectsPageHead}>
                    <h3><span className='display-3 text-decoration-line-through'>P</span>rojects</h3>
                </div>
                <div className={styles.projectsPageContent}>
                    <div className="row">
                        {projects.map(project => (
                            <div className="col-lg-4 col-md-6 col-sm-12 my-3">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>

                    <Link to={'/'} className='d-flex align-items-center justify-content-center my-5'>
                        <button className={styles.HomeBtn}>Home</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProjectsPage