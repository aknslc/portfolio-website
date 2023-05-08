import hero from '../../assets/Hero.png'
import styles from './hero.module.css'
import hand from '../../assets/greeting.png'
import { skills } from '../../constants'


const Hero = () => {
  return (
    <section id={styles.hero}>
      <div className='container'>
        <div className="row d-flex align-items-center">
          <div className="col-lg-6">
            <div className={styles.heroLeftContent}>
              <h1 className={styles.heroTitle}>
                Front-End React Developer
                <img src={hand} alt="greeting" />
              </h1>
              <p className={styles.heroParagraph}>
                Hi, I'm Akin Sel Coskun. A passionate Software Developer based in Izmir, Turkey.
              </p>
              <div className={styles.techStack}>
                <ul className='row'>
                  {skills.map(item => (
                    <li className='col-lg-2 col-md-3 col-sm-6'>
                      <img src={item.img} alt={item.title} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.heroImage}>
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Hero