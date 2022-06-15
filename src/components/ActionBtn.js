import { Icon } from '@iconify/react'

const ActionBtn = ({ title, icon }) => (
  <div className="flex items-center gap-3 rounded-xl bg-zinc-700 px-5 py-3">
    <span className="text-sm font-medium">{ title }</span>
    <Icon icon={ icon } width="24" />
  </div>
)

export default ActionBtn