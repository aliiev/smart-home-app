import Header from './components/Header'
import RoomDevices from './components/RoomDevices'
import './App.sass'

const App = () => {
  return (
    <div className="container lg:w-1/4 md:w-1/2 mx-auto">
      <Header />
      <RoomDevices />
    </div>
  )
}

export default App
