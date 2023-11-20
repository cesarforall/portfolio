import githubLogoSvg from '../../assets/github-mark.svg'
import linkedinLogoPng from '../../assets/LI-In-Bug.png'
import cesarLogoJpg from '../../assets/tiny-cesar-2020-1080_74KB.jpg'

function Footer () {
  return (
    <footer className='flex flex-col md:flex-row md:items-start m-auto lg:m-0 md:pl-5 gap-5 md:gap-16 py-10 md:p-10 p-4'>
      <article className='flex items-center md:items-start gap-5'>
        <img className='w-24 rounded-full' src={cesarLogoJpg} alt='the developer' />
        <div>
          <h4 className='font-semibold text-2xl'>César Almeida</h4>
          <p className='font-semibold text-gray-500'>Frontend Developer</p>
        </div>
      </article>
      <section className='flex flex-col gap-5'>
        <div className='flex gap-2 items-center'>
          <h5 className='text-2xl font-bold underline underline-offset-8'>Get in touch</h5>
        </div>
        <ul className='flex gap-4 items-center'>
          <li><a className='flex gap-2 items-center' style={{ lineHeight: 1 }} href='https://www.linkedin.com/in/cesaralmeidadev/' target='_blank'><img className='w-10' src={linkedinLogoPng} alt='' />Go to LinkedIn</a></li>
          <li><a className='flex gap-2 items-center' style={{ lineHeight: 1 }} href='https://github.com/cesarforall' target='_blank'><img className='w-10 h-10' src={githubLogoSvg} alt='' />Go to GitHub</a></li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
