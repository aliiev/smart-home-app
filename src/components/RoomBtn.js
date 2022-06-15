const RoomBtn = ({ title, image, devices }) => (
  <div className="relative bg-zinc-700 rounded-xl h-40 overflow-hidden">
    <img className="w-full h-full object-cover brightness-50 " src={ image } alt={ title } />
    <div className="absolute bottom-0 left-0 right-0 px-3 py-2">
      <h5 className="text-md font-semibold -mb-2">{ title }</h5>
      <span className="text-xs text-zinc-300">{ devices } devices</span>
    </div>
  </div>
)

export default RoomBtn