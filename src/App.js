import Header from './components/Header'
import Rooms from './components/Rooms'
import Navbar from './components/Navbar'
import './App.sass'

const App = () => {
  return (
    <div className="container lg:w-1/4 md:w-1/2 mx-auto">
      <Header />
      <Rooms />
      <Navbar />
    </div>
  )
}

export default App
