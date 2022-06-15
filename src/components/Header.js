import WeatherWidget from './WeatherWidget'
import Toolbar from './Toolbar'
import ActionBtn from './ActionBtn'

const scenes = [{
  title: 'Awakening',
  icon: 'mi:sunrise-alt'
}, {
  title: 'Sleep',
  icon: 'charm:moon'
}, {
  title: 'Party',
  icon: 'bx:party'
}]

const Header = () => (
  <header className="flex flex-col bg-zinc-800 rounded-b-3xl mb-4 p-4">
    <div className="flex items-center justify-between">    
      <WeatherWidget />
      <Toolbar />
    </div>
    <div className="flex gap-3 -mx-4 mt-4 px-4 overflow-auto">
      { scenes.map(scene => (
        <ActionBtn key={ scene.title } title={ scene.title } icon={ scene.icon } />
      )) }
    </div>
  </header>
)


export default Header