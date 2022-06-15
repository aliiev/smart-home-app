import ActionBtn from './ActionBtn'

const actions = [{
  title: 'Awakening',
  icon: 'mi:sunrise-alt'
}, {
  title: 'Sleep',
  icon: 'charm:moon'
}, {
  title: 'Party',
  icon: 'bx:party'
}]

const QuickActions = () => (
  <div className="flex gap-3 -mx-4 px-4 overflow-auto">
    { actions.map(action => (
      <ActionBtn key={ action.title } title={ action.title } icon={ action.icon } />
    )) }
  </div>
)

export default QuickActions