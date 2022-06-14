import { Icon } from '@iconify/react'

const devices = [{
  title: 'Light',
  icon: 'mdi:ceiling-light-multiple-outline',
  active: true
}, {
  title: 'TV',
  icon: 'mdi:television',
  active: false
}, {
  title: 'Speakers',
  icon: 'mdi:speaker-multiple',
  active: false
}, {
  title: 'Conditioner',
  icon: 'mdi:air-conditioner',
  active: false
}, ]

const DeviceBtn = ({ title, icon, active }) => (
  <button className={ `relative flex items-end rounded-xl w-26 h-32 p-3 overflow-hidden ${ active ? 'bg-yellow-50' : 'bg-zinc-800' }` }>
    <Icon className={ `absolute -top-3 -left-3 ${ active ? 'text-yellow-500' : 'text-zinc-600' }` } icon={ icon } width="96" />
    <span className={ `relative text-xl text-left font-semibold ${ active ? 'text-zinc-800' : '' }` }>{ title }</span>
  </button>
)

const RoomDevices = () => {
  return (
    <div className="grid grid-cols-2 gap-5 p-3">
      { devices.map(device => (
        <DeviceBtn key={ device.title } title={ device.title } icon={ device.icon } active={ device.active } />  
      )) }
    </div>
  )
}

export default RoomDevices