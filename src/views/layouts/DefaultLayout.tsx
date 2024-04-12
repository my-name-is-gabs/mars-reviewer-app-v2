import { Outlet } from 'react-router-dom'
const DefaultLayout = () => {
  return (
    <>
      <header className="relative top-0 left-0 mx-auto py-4 flex items-center gap-4">
        <img src="/assets/logo.png" alt="Logo" />
        <h1 className="font-sans text-xl antialiased font-bold">
          Mini Application Recognition System
        </h1>
      </header>

      <Outlet />
    </>
  )
}

export default DefaultLayout
