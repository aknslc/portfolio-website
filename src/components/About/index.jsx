import aboutImage from '../../assets/developer.jpg'

import styles from './about.module.css'
const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className='container'>
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className={styles.imageSide}>
              <img src={aboutImage} alt="hero" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className={styles.textSide}>
              <h4>About Me</h4>
              <h3>
                A dedicated Front-end Developer
                <br />
                based in Izmir, Turkey 📍
              </h3>
              <p>
                As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About