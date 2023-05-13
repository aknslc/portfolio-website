import aboutImage from '../../assets/developer.jpg'

import styles from './about.module.css'
const About = () => {
  return (
    <section id='about' className={styles.about}>
      <div className='custom-container'>
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
                I am a Front End Developer with 1 years of experience
                based in Izmir. I am a self-taught developer with a
                background. I have with a passion for creating beautiful
                and functional websites. I have a strong passion for
                learning new technologies and I am always looking for
                new opportunities to learn and grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About