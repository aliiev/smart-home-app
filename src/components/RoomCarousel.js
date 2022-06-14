import Icon from '@mdi/react'
import { mdiSofaOutline, mdiBedDoubleOutline, mdiCountertopOutline, mdiShower, mdiGarageVariant } from '@mdi/js'

const rooms = [{
  title: 'Living room',
  icon: mdiSofaOutline,
  active: true
}, {
  title: 'Bedroom',
  icon: mdiBedDoubleOutline,
  active: false
}, {
  title: 'Kitchen',
  icon: mdiCountertopOutline,
  active: false
}, {
  title: 'Bathroom',
  icon: mdiShower,
  active: false
}, {
  title: 'Garage',
  icon: mdiGarageVariant,
  active: false
}]

const RoomButton = ({ title, icon, active }) => {
  return (
    <button className={ `snap-start ${ active ? 'bg-yellow-50' : 'bg-zinc-800' } rounded-xl w-26 p-3 transition-colors` }>
      <Icon className={ `${ active ? 'bg-yellow-500' : 'bg-zinc-600' } rounded-lg mx-auto mb-1 p-3` } path={ icon } size={ 3 } />
      <span className={ `${ active ? 'text-zinc-800' : '' } text-sm font-bold truncate` }>{ title }</span>
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