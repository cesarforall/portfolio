import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import './App.css'

function App () {
  return (
    <div className='flex flex-col m-auto text-white max-w-[1023px]'>
      <Header />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
