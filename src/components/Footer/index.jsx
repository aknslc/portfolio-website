import React from 'react'
import { GoMailRead } from 'react-icons/go'
import styles from './footer.module.css'
const Footer = () => {
  return (
    <section id='footer' className={styles.footer}>
      <div className='custom-container'>

        <div className={styles.footerContent}>
          <div className="row">
            <div className="col-lg-6" id='contact'>
              <div className={styles.footerHead}>
                <h4>Contact</h4>
                <p>Don't be shy! Hit me up! 👇</p>
              </div>

              <div className="d-flex align-items-center">
                <div className={styles.mail}>
                  <GoMailRead size={30} color='#E36D60' />
                </div>
                <div className={styles.content}>
                  <h5>Mail</h5>
                  <a href='mailto:aknselc1112@gmail.com'>aknselc1112@gmail.com</a>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        Copyright © 2023. All rights are reserved
      </div>
    </section>
  )
}

export default Footer