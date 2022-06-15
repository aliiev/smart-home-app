import Header from './components/Header'
import QuickActions from './components/QuickActions'
import Rooms from './components/Rooms'
import Stats from './components/Stats'
import Navbar from './components/Navbar'
import './App.sass'

const App = () => {
  return (
    <div className="container lg:w-1/4 md:w-1/2 mx-auto">
      <Header />

      <div className="flex flex-col gap-4 mb-24 p-4">
        <QuickActions />
        <Rooms />
        <Stats />
      </div>

      <Navbar />
    </div>
  )
}

export default App
