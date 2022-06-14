import { Icon } from '@iconify/react';

const Navbar = () => {
  return (
    <nav className="fixed bg-zinc-600 backdrop-filter backdrop-blur-lg bg-opacity-30 rounded-t-2xl h-20 left-0 right-0 bottom-0 overflow-hidden">
      <div className="flex items-center justify-between h-full px-6 py-2 py-3">
        <a href="/">
          <Icon className="text-yellow-50" icon="ic:round-home" width="36" />
        </a>
        <a href="/">
          <Icon className="text-zinc-400" icon="ic:round-dashboard" width="36" />
        </a>
        <a href="/">
          <Icon className="text-zinc-400" icon="ic:round-security" width="36" />
        </a>
        <a href="/">
          <Icon className="text-zinc-400" icon="ic:round-insert-chart-outlined" width="36" />
        </a>
      </div>
    </nav>
  )
}

export default Navbar