import { Icon } from '@iconify/react'

const WeatherWidget = () => (
  <div className="inline-flex items-center gap-3 bg-zinc-700 rounded-xl px-5 py-3">
    <Icon icon="ic:outline-cloud" width="18" />
    <span className="text-sm font-medium">Cloudy, 27°C</span>
  </div>
)

export default WeatherWidget