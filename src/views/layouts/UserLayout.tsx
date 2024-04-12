import { Outlet, NavLink } from 'react-router-dom'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import LogoutIcon from '@mui/icons-material/Logout'
import DashboardIcon from '@mui/icons-material/Dashboard'
import HomeIcon from '@mui/icons-material/Home'

const UserLayout = () => {
  return (
    <div>
      <nav
        className={`relative top-0 left-0 py-5 mb-7 w-11/12 mx-auto z-10 flex items-center justify-between`}
      >
        <div className="inline-flex items-center gap-2">
          <img src="/assets/logo.png" width={32} alt="Logo" />
          <h2 className="font-semibold">Mini Application Recognition System</h2>
        </div>
        <ul className="flex justify-between items-center gap-7 list-none">
          <li>
            <NavLink
              to="/username"
              className="inline-flex items-center hover:text-primary"
            >
              <HomeIcon /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="inline-flex items-center hover:text-primary"
            >
              <DashboardIcon /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className="inline-flex items-center hover:text-primary"
            >
              <ManageAccountsIcon /> profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="inline-flex items-center hover:text-primary"
            >
              <LogoutIcon /> logout
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default UserLayout
