import { Icon } from '@iconify/react'

const Toolbar = () => (
  <div className="flex gap-3">
    <a className="bg-zinc-700 rounded-xl p-3" href="/">
      <Icon icon="akar-icons:bell" width="18" />
    </a>
    <a className="bg-zinc-700 rounded-xl p-3" href="/">
      <Icon icon="akar-icons:person" width="18" />
    </a>
  </div>
)

export default Toolbar