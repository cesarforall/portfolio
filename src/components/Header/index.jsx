import { CodeBracketIcon } from '@heroicons/react/24/solid'

function Header () {
  return (
    <header>
      <nav className='p-6'>
        <div className='flex gap-2 justify-center md:justify-normal'>
          <CodeBracketIcon className='h-6 w-6 text-blue-600' />
          <div className='text-center'>
            <h1 className=' text-xl font-medium'>César Almeida</h1>
            <p className='text-xs font-semibold text-gray-500'>Frontend Developer</p>
          </div>
          <CodeBracketIcon className='h-6 w-6 text-blue-600' />
        </div>
      </nav>
    </header>
  )
}

export default Header
