import githubLogoSvg from '../../assets/github-mark.svg'

function ProjectCard ({ project }) {
  const { name, description, technologies, link } = project

  return (
    <li className='h-[360px] bg-[#2d343f] rounded-3xl'>
      <img src='' alt='screenshot' />
      <ul>
        {
            technologies.map((technology, index) => <li key={index}>{technology}</li>)
          }
      </ul>
      <h3>{name}</h3>
      <p>{description}</p>
      <a className='flex gap-1' href={link} target='_blank'>
        <img src={githubLogoSvg} alt='github logo' />
        <p>Ver repositorio en GitHub</p>
      </a>
    </li>
  )
}

export default ProjectCard
