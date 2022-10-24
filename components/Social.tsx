import styles from '../styles/components/Social.module.scss'
import { Email, Linkdin, Telegram } from '../common/icons'

export default function Social() {
  return (
    <div className={styles.social}>
      <a href="https://telegram.me/tima_vol" target={'_blank'} rel="noreferrer">
        <Telegram />
      </a>
      <a
        href="https://www.linkedin.com/in/tima-voloshuk-44b0ab1b3/"
        target={'_blank'}
        rel="noreferrer"
      >
        <Linkdin />
      </a>
      <a
        href="mailto:tima.voloshuk@gmail.com"
        target={'_blank'}
        rel="noreferrer"
      >
        <Email />
      </a>
    </div>
  )
}
