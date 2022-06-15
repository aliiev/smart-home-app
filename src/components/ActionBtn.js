import { Icon } from '@iconify/react'

const ActionBtn = ({ title, icon, active }) => (
  <div className={ `${ active ? 'bg-zinc-600 border-emerald-700' : 'bg-zinc-700 border-transparent' } border-2 flex items-center gap-3 rounded-xl px-5 py-3` }>
    <span className="text-sm font-medium">{ title }</span>
    <Icon icon={ icon } width="18" />
  </div>
)

export default ActionBtn