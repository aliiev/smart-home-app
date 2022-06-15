import { Icon } from '@iconify/react'

const StatsItem = ({ title, value, icon }) => (
  <div className="bg-zinc-700 text-center p-4">
    <span className="text-zinc-300 text-xs font-medium">{ title }</span>
    <div className="flex items-center justify-center gap-0.5">
      <Icon icon={ icon.name } width="18" color={ icon.color } />
      <span className="text-xs font-semibold">{ value }</span>
    </div>
  </div>
)

export default StatsItem