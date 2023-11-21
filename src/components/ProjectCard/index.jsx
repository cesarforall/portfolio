import { PlayIcon } from '@heroicons/react/24/outline'
import githubLogoSvg from '../../assets/github-mark.svg'

function ProjectCard ({ project }) {
  const { name, description, imgLink, technologies, appLink, repoLink } = project

  return (
    <li className='max-w-md grid gap-1 h-[360px] bg-[#2d343f] rounded-3xl overflow-hidden p-4'>
      <img className='w-full h-44 object-cover object-top rounded rounded-lg' src={imgLink} alt='screenshot' />
      <ul className='flex gap-2 flex-wrap p-2'>
        {
            technologies.map((technology, index) => <li key={index} className='text-xs bg-slate-300 px-2 rounded-lg text-gray-500'>{technology}</li>)
          }
      </ul>
      <h3 className='font-semibold'>{name}</h3>
      <p className='text-sm text-gray-400'>{description}</p>
      <div className='flex justify-between'>
        <a className='flex gap- cursor-pointer items-center' style={{ lineHeight: 1 }} href={appLink} target='_blank'>
          <PlayIcon className='w-8 h-8' />
          <p>See project</p>
        </a>
        <a className='flex gap-2 cursor-pointer items-center' href={repoLink} target='_blank'>
          <img className='w-8 h-8' src={githubLogoSvg} alt='github logo' />
          <p className='leading-normal' style={{ lineHeight: 1 }}>See GitHub repository</p>
        </a>
      </div>
    </li>
  )
}

export default ProjectCard
