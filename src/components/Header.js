import WeatherWidget from './WeatherWidget'
import Toolbar from './Toolbar'
import QuickActions from './QuickActions'

const Header = () => (
  <header className="sticky flex items-center justify-between bg-zinc-600 backdrop-blur-lg bg-opacity-30 rounded-2xl top-4 left-0 right-0 ml-4 mr-4 mb-4 p-4 z-10">
    <WeatherWidget />
    <Toolbar />
  </header>
)


export default Header