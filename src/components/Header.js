import Toolbar from './Toolbar'
import RoomCarousel from './RoomCarousel'

const Header = () => {
  return (
    <header className="bg-home bg-cover rounded-b-3xl h-64 min-h-screen-1/2 overflow-hidden">
      <div className="backdrop-brightness-50 rounded-b-3xl flex flex-col h-full">
        <Toolbar />
        
        {/* --- HEADER TITLE --- */}
        <div className="m-3 grow">
          <h2 className="text-3xl font-semibold">Welcome Home,</h2>
          <h2 className="text-3xl font-semibold">John Doe</h2>
        </div>
        {/* --- /HEADER TITLE --- */}

        <RoomCarousel />
      </div>
    </header>
  )
}

export default Header