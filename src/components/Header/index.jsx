import { CodeBracketIcon } from '@heroicons/react/24/solid'

function Header () {
  return (
    <header>
      <nav className='p-4'>
        <div className='flex gap-2 justify-center md:justify-normal'>
          <CodeBracketIcon className='h-8 w-8 text-blue-600' />
          <h1 className=' text-3xl font-medium'>Programador</h1>
        </div>
      </nav>
    </header>
  )
}

export default Header
