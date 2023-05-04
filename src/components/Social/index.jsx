import styles from './social.module.css'
import {SlSocialLinkedin} from 'react-icons/sl'
import {SlSocialInstagram} from 'react-icons/sl'
import {FiGithub} from 'react-icons/fi'

const Social = () => {
  return (
    <section className={styles.social}>
      <div className={styles.line}>

      </div>
      <div className={styles.socialLinks}>
        <div className={styles.socialLink}>
          <SlSocialLinkedin/>
        </div>
        <div className={styles.socialLink}>
          <FiGithub/>
        </div>
        <div className={styles.socialLink}>
    
        <SlSocialInstagram/>
        </div>
      </div>
    </section>
  )
}

export default Social