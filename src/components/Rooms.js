import RoomBtn from './RoomBtn'
import { LivingRoomImg, BedroomImg, KitchenImg, BathroomImg } from '../images/'

const rooms = [{
  title: 'Living room',
  image: LivingRoomImg,
  devices: 5
}, {
  title: 'Bedroom',
  image: BedroomImg,
  devices: 3
}, {
  title: 'Kitchen',
  image: KitchenImg,
  devices: 6
}, {
  title: 'Bathroom',
  image: BathroomImg,
  devices: 2
}, ]

const Rooms = () => (
  <div className="grid grid-cols-2 gap-4">
    { rooms.map(room => (
      <RoomBtn key={ room.title } title={ room.title } image={ room.image } devices={ room.devices } />  
    )) }
  </div>
)

export default Rooms