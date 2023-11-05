import { ArrowRightIcon } from '@heroicons/react/24/solid'
import githubLogoSvg from '../../assets/github-mark.svg'
import linkedinLogoPng from '../../assets/LI-In-Bug.png'

function Footer () {
  return (
    <footer>
      <div>
        <img src='' alt='the developer' />
        <h4>César Almeida</h4>
        <p>Frontend Developer</p>
      </div>
      <section>
        <div>
          <h5>Get in youch</h5>
          <ArrowRightIcon className='w-6 h-6 text-blue-500' />
        </div>
        <ul>
          <li><a href=''><img src={githubLogoSvg} alt='' /></a></li>
          <li><a href=''><img src={linkedinLogoPng} alt='' /></a></li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
