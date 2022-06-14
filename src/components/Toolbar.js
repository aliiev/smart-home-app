import Icon from '@mdi/react'
import { mdiCloudOutline, mdiBellOutline, mdiAccountOutline } from '@mdi/js'

const WeatherWidget = () => (
  <div className="inline-flex bg-zinc-800 rounded-full py-3 px-6">
    <Icon className="mr-3" path={ mdiCloudOutline } size={ 1 } />
    <span className="font-medium">Cloudy, 27°C</span>
  </div>
)

const Settings = () => (
  <div className="flex gap-3">
    <a className="bg-zinc-800 rounded-full p-3" href="/">
      <Icon path={ mdiBellOutline } size={ 1 } />
    </a>
    <a className="bg-zinc-800 rounded-full p-3" href="/">
      <Icon path={ mdiAccountOutline } size={ 1 } />
    </a>
  </div>
)

const Toolbar = () => {
  return (
    <div className="flex items-center justify-between m-3">    
      <WeatherWidget />
      <Settings />
    </div>
  )
}

export default Toolbar