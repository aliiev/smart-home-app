import Icon from '@mdi/react'
import { mdiCeilingLightMultipleOutline, mdiTelevision, mdiSpeakerMultiple, mdiAirConditioner } from '@mdi/js'

const devices = [{
  title: 'Light',
  icon: mdiCeilingLightMultipleOutline,
  active: true
}, {
  title: 'TV',
  icon: mdiTelevision,
  active: false
}, {
  title: 'Speakers',
  icon: mdiSpeakerMultiple,
  active: false
}, {
  title: 'Conditioner',
  icon: mdiAirConditioner,
  active: false
}, ]

const DeviceBtn = ({ title, icon, active }) => (
  <button className={ `relative flex items-end rounded-xl w-26 h-32 p-3 overflow-hidden ${ active ? 'bg-yellow-50' : 'bg-zinc-800' }` }>
    <Icon className={ `absolute -top-3 -left-3 ${ active ? 'text-yellow-500' : 'text-zinc-600' }` } path={ icon } size={ 4 } />
    <span className={ `relative text-xl text-left font-semibold ${ active ? 'text-zinc-800' : '' }` }>{ title }</span>
  </button>
)

const RoomDevices = () => {
  return (
    <div className="grid grid-cols-2 gap-3 p-3">
      { devices.map(device => (
        <DeviceBtn key={ device.title } title={ device.title } icon={ device.icon } active={ device.active } />  
      )) }
    </div>
  )
}

export default RoomDevices