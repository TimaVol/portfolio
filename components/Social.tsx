import { Email, Linkdin, Telegram } from '../common/icons'

export default function Social() {
  return (
    <div className="flex mb-5">
      <a
        className="fill-primaryText mr-5"
        href="https://telegram.me/tima_vol"
        target={'_blank'}
        rel="noreferrer"
      >
        <Telegram className="w-7 h-7 sm:w-9 sm:h-9" />
      </a>
      <a
        className="fill-primaryText mr-5"
        href="https://www.linkedin.com/in/tima-voloshuk-44b0ab1b3/"
        target={'_blank'}
        rel="noreferrer"
      >
        <Linkdin className="w-7 h-7 sm:w-9 sm:h-9" />
      </a>
      <a
        className="fill-primaryText mr-5"
        href="mailto:tima.voloshuk@gmail.com"
        target={'_blank'}
        rel="noreferrer"
      >
        <Email className="w-7 h-7 sm:w-9 sm:h-9" />
      </a>
    </div>
  )
}
