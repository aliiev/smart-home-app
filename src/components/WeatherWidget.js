import { Menu } from '@headlessui/react'
import { Icon } from '@iconify/react'

const weather = {
  today: [{
    time: '19:00',
    value: '21',
    icon: {
      name: 'mdi:weather-cloudy',
      color: '#d1d5db'
    }
  }, {
    time: '20:00',
    value: '21',
    icon: {
      name: 'mdi:weather-rainy',
      color: '#7dd3fc'
    }
  }, {
    time: '21:00',
    value: '19',
    icon: {
      name: 'mdi:weather-pouring',
      color: '#7dd3fc'
    }
  }, {
    time: '22:00',
    value: '18',
    icon: {
      name: 'mdi:weather-cloudy',
      color: '#d1d5db'
    }
  }, {
    time: '23:00',
    value: '17',
    icon: {
      name: 'mdi:weather-windy',
      color: '#d1d5db'
    }
  }],
  week: [{
    title: 'Sunday',
    max: 28,
    min: 21,
    icon: {
      name: 'mdi:weather-partly-cloudy',
      color: '#fcd34d'
    }
  }, {
    title: 'Monday',
    max: 27,
    min: 20,
    icon: {
      name: 'mdi:weather-cloudy',
      color: '#d1d5db'
    }
  }, {
    title: 'Tuesday',
    max: 25,
    min: 18,
    icon: {
      name: 'mdi:weather-pouring',
      color: '#7dd3fc'
    }
  }]
}

const WeatherWidget = () => (
  <Menu as="div">
    <Menu.Button className="inline-flex items-center gap-3 bg-zinc-700 hover:bg-zinc-600 rounded-xl px-5 py-3">
      <Icon icon="ic:outline-cloud" width="18" />
      <span className="text-sm font-medium">Cloudy, 27°C</span>
    </Menu.Button>
    <Menu.Items className="absolute bg-zinc-700 rounded-xl right-0 left-0 mt-4 p-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1">
          <Icon icon="akar-icons:location" width="18" />
          <span className="text-sm font-semibold">Kyiv</span>
        </div>
        <span className="text-sm text-zinc-300 font-medium">19:00</span>
      </div>
      <div className="flex justify-between">
        { weather.today.map((w, i) => (
          <div key={ i } className={ `${ !i && 'bg-zinc-600' } flex flex-col text-center p-3 rounded-xl` }>
            <span className="text-xs text-zinc-300 font-normal">{ w.time }</span>
            <Icon icon={ w.icon.name } width="32" color={ w.icon.color } />
            <span className="text-sm font-semibold">{ w.value }°</span>
          </div>
        )) }
      </div>
      <div className="flex flex-col gap-3 mt-3">
        { weather.week.map(w => (
          <div key={ w.title } className="flex justify-between items-center">
            <span className="text-md font-semibold">{ w.title }</span>
            <div className="flex gap-2 text-md font-normal">
              <span>{ w.max }°</span>
              <span className="text-zinc-300">{ w.min }°</span>
            </div>
            <Icon icon={ w.icon.name } width="32" color={ w.icon.color } />
          </div>
        )) }
      </div>
    </Menu.Items>
  </Menu>
)

export default WeatherWidget