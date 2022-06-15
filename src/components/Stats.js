import StatsItem from './StatsItem'

const stats = [{
  title: 'Temperature',
  value: '24°C',
  icon: {
    name: 'ic:round-thermostat',
    color: '#06b6d4'
  }
}, {
  title: 'Humidity',
  value: '90%',
  icon: {
    name: 'ic:round-water-drop',
    color: '#10b981'
  }
}, {
  title: 'Energy Used',
  value: '51.12kWh',
  icon: {
    name: 'ic:round-bolt',
    color: '#f59e0b'
  }
}, ]

const Stats = () => (
  <div className="grid grid-cols-3 gap-0.5 w-full rounded-xl overflow-hidden">
    { stats.map(stat => (
      <StatsItem key={ stat.title } title={ stat.title } value={ stat.value } icon={ stat.icon } />
    )) }
  </div>
)

export default Stats