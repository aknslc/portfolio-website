import styles from './social.module.css'
import { SlSocialLinkedin } from 'react-icons/sl'
import { SlSocialInstagram } from 'react-icons/sl'
import { FiGithub } from 'react-icons/fi'

const Social = () => {
  return (
    <section className={styles.social}>
      <div className={styles.line}>

      </div>
      <div className={styles.socialLinks}>
        <div className={styles.socialLink}>
          <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/ak%C4%B1n-sel-co%C5%9Fkun-355007208/">
            <SlSocialLinkedin />
          </a>
        </div>
        <div className={styles.socialLink}>
          <a target='_blank' rel='noreferrer' href="https://github.com/aknslc">
            <FiGithub />
          </a>
        </div>
        <div className={styles.socialLink}>
          <a target='_blank' rel='noreferrer' href="https://www.instagram.com/aknselc">
            <SlSocialInstagram />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Social