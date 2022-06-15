import { Icon } from '@iconify/react';

const items = [{
  title: 'Home',
  url: '/',
  icon: 'akar-icons:home',
  active: true
}, {
  title: 'Rooms',
  url: '/',
  icon: 'akar-icons:grid'
}, {
  title: 'Security',
  url: '/',
  icon: 'akar-icons:shield'
}, {
  title: 'Statistics',
  url: '/',
  icon: 'akar-icons:statistic-up'
}, {
  title: 'Settings',
  url: '/',
  icon: 'akar-icons:gear'
}]

const Navbar = () => {
  return (
    <nav className="fixed bg-zinc-600 backdrop-blur-lg bg-opacity-30 rounded-2xl h-20 bottom-4 left-0 right-0 ml-4 mr-4 overflow-hidden">
      <div className="flex items-center justify-between h-full px-6 py-2 py-3">
        { items.map(item => (
          <a key={ item.title } href={ item.url }>
            <Icon className={ item.active ? 'text-emerald-500 drop-shadow-navbar' : 'text-zinc-400' } icon={ item.icon } width="32" />
          </a>
        )) }
      </div>
    </nav>
  )
}

export default Navbar