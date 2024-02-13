// Icon Imports
import { MdHome, MdOutlineShoppingCart, MdBarChart } from 'react-icons/md'

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/dashboard',
    icon: <MdHome className="h-6 w-6" />
  },
  {
    name: 'Market Place',
    layout: '/admin',
    path: '/marketplace',
    icon: <MdOutlineShoppingCart className="h-6 w-6" />
  },
  {
    name: 'Data Tables',
    layout: '/admin',
    path: '/datatables',
    icon: <MdBarChart className="h-6 w-6" />
  }
]
export default routes
