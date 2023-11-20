import { PROJECTS } from '../../data'
import ProjectCard from '../../components/ProjectCard'

function Portfolio () {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-center text-4xl font-semibold underline underline-offset-8'>Portfolio</h2>
      <p className='text-center text-xs'>Featured projects</p>
      <ul className='grid grid-cols-autoFit200 p-4 gap-3'>
        {
            PROJECTS.map((project, index) => <ProjectCard key={index} project={project} />)
        }
      </ul>
    </section>
  )
}

export default Portfolio
