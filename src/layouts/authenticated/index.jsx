import * as React from 'react'
import { useMatchMedia } from '@/hooks'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer, Header, Sidebar } from '@/components'

import './style.scss'

export const AuthenticatedLayout = () => {
  const location = useLocation()
  const isMobileMode = useMatchMedia('(max-width: 991.98px)')
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false)

  React.useEffect(() => {
    if (isOpenSidebar) setIsOpenSidebar(false)
  }, [location.key])

  return (
    <main className="auth-layout">
      <Sidebar
        {...(isMobileMode
          ? { isVisible: isOpenSidebar, onShouldHide: () => setIsOpenSidebar(false) }
          : { isVisible: true })}
      />
      <div className="auth-layout__wrapper">
        <Header
          variant="authenticated"
          isOpenMobileMenu={isOpenSidebar}
          onOpenMobileMenu={setIsOpenSidebar}
        />
        <div className="container-fluid">
          <Outlet />
          <Footer />
        </div>
      </div>
    </main>
  )
}
