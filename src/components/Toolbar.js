import { Icon } from '@iconify/react'

const WeatherWidget = () => (
  <div className="inline-flex bg-zinc-800 rounded-full py-3 px-6">
    <Icon className="mr-3" icon="ic:round-cloud-queue" width="24" />
    <span className="font-medium">Cloudy, 27°C</span>
  </div>
)

const Settings = () => (
  <div className="flex gap-3">
    <a className="bg-zinc-800 rounded-full p-3" href="/">
      <Icon icon="ic:round-notifications-none" width="24" />
    </a>
    <a className="bg-zinc-800 rounded-full p-3" href="/">
      <Icon icon="ic:round-person-outline" width="24" />
    </a>
  </div>
)

const Toolbar = () => {
  return (
    <div className="relative sticky top-0 flex items-center justify-between m-3">    
      <WeatherWidget />
      <Settings />
    </div>
  )
}

export default Toolbar