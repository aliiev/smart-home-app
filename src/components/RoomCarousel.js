import { Icon } from '@iconify/react'
const rooms = [{
  title: 'Living room',
  icon: 'mdi:sofa-outline',
  active: true
}, {
  title: 'Bedroom',
  icon: 'mdi:bed-double-outline',
  active: false
}, {
  title: 'Kitchen',
  icon: 'mdi:countertop-outline',
  active: false
}, {
  title: 'Bathroom',
  icon: 'mdi:shower',
  active: false
}, {
  title: 'Garage',
  icon: 'mdi:garage-variant',
  active: false
}]

const RoomButton = ({ title, icon, active }) => {
  return (
    <button className={ `snap-start ${ active ? 'bg-yellow-50' : 'bg-zinc-800' } rounded-xl w-26 p-3 transition-colors` }>
      <Icon className={ `${ active ? 'bg-yellow-500' : 'bg-zinc-600' } rounded-lg mx-auto mb-1 p-3` } icon={ icon } width="60" />
      <span className={ `${ active ? 'text-zinc-800' : '' } text-xs font-semibold truncate` }>{ title }</span>
    </button>
  )
}

const RoomCarousel = () => {
  return (
    <div className="flex gap-3 m-3 mr-0 snap-x overflow-auto">
      { rooms.map(room => (
        <RoomButton key={ room.title } title={ room.title } icon={ room.icon } active={ room.active } />
      )) }
    </div>
  )
}


export default RoomCarousel