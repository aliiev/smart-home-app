import { Menu } from '@headlessui/react'
import { Icon } from '@iconify/react'

const notifications = [{
  content: 'Added new user to home management.',
  date: 'Jun 15, 2022 at 09:15',
  icon: 'akar-icons:circle-plus'
}, {
  content: 'Monthly reporting is ready.',
  date: 'Jun 14, 2022 at 13:25',
  icon: 'akar-icons:schedule'
}, {
  content: 'Suspicious activity detected!',
  date: 'Jun 12, 2022 at 18:36',
  icon: 'akar-icons:circle-alert'
}]

const NotificationsDropdown = () => (
  <Menu as="div">
    <Menu.Button className="relative bg-zinc-700 hover:bg-zinc-600 rounded-xl p-3" href="/">
      <Icon icon="akar-icons:bell" width="18" />
      <span className="absolute top-0 right-0 w-2 h-2 bg-emerald-500 rounded-full"></span>
    </Menu.Button>
    <Menu.Items className="absolute bg-zinc-700 rounded-xl right-0 left-0 mt-4 p-4">
      <div className="flex justify-between">
        <span className="text-md font-semibold">Notifications</span>
        <button className="flex items-center gap-1 bg-zinc-600 rounded-lg px-3 py-1">
          <Icon icon="akar-icons:double-check" width="18" />
          <span className="text-xs">Mark as read</span>
        </button>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        { notifications.map(n => (
          <div key={ n.date } className="flex justify-between items-center gap-3 pb-3 border-b border-zinc-600 last:border-none last:pb-0">
            <span className="w-2 h-2 shrink-0 bg-emerald-500 rounded-full"></span>
            <div className="w-full">
              <p className="text-sm font-normal -mb-1">{ n.content }</p>
              <span className="text-xs text-zinc-300 font-normal">{ n.date }</span>
            </div>
            <Icon className="shrink-0" icon={ n.icon } width="32" /> 
          </div>
        )) }
      </div>
    </Menu.Items>
  </Menu>
)

export default NotificationsDropdown