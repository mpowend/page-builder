import { Link } from 'react-router-dom'

const Menu = () => (
  <div className="flex h-[100vh] w-full justify-center">
    <div className="flex h-full w-8/12 min-w-[300px] flex-col justify-center">
      <Link
        className="transition-500 mb-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-800 "
        to="/start"
      >
        <button className="w-full">start</button>
      </Link>
      <Link
        className="transition-500 mb-2 rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-800"
        to="/create"
      >
        <button className="w-full">create</button>
      </Link>
    </div>
  </div>
)

export default Menu
