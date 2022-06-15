import { Icon } from '@iconify/react'

const Toolbar = () => (
  <div className="flex gap-3">
    <a className="bg-zinc-700 rounded-xl p-3" href="/">
      <Icon icon="ic:round-notifications-none" width="24" />
    </a>
    <a className="bg-zinc-700 rounded-xl p-3" href="/">
      <Icon icon="ic:outline-settings" width="24" />
    </a>
  </div>
)

export default Toolbar