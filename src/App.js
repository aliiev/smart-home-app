import Header from './components/Header'
import QuickActions from './components/QuickActions'
import Rooms from './components/Rooms'
import Navbar from './components/Navbar'
import './App.sass'

const App = () => {
  return (
    <div className="container lg:w-1/4 md:w-1/2 mx-auto">
      <Header />

      <div className="flex flex-col gap-4 p-4">
        <QuickActions />
        <Rooms />
      </div>

      <Navbar />
    </div>
  )
}

export default App
