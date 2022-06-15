import { Icon } from '@iconify/react'
import NotificationsDropdown from './NotificationsDropdown'

const Toolbar = () => (
  <div className="flex gap-3">
    <NotificationsDropdown />
    <a className="bg-zinc-700 rounded-xl p-3" href="/">
      <Icon icon="akar-icons:person" width="18" />
    </a>
  </div>
)

export default Toolbar