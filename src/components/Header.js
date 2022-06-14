import Toolbar from './Toolbar'
import RoomCarousel from './RoomCarousel'

const HeaderTitle = () => (
  <div className="m-3 grow">
    <h2 className="text-3xl font-semibold">Welcome Home,</h2>
    <h2 className="text-3xl font-semibold">John Doe</h2>
  </div>
)

const Header = () => {
  return (
    <header className="bg-home bg-cover rounded-b-3xl h-64 min-h-screen-1/2 mb-3 overflow-hidden">
      <div className="backdrop-brightness-50 rounded-b-3xl flex flex-col h-full">
        <Toolbar />
        <HeaderTitle />
        <RoomCarousel />
      </div>
    </header>
  )
}

export default Header