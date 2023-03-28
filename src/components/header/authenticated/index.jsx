import * as React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useMatchMedia } from '@/hooks'
import { Breadcrumb, Icon, Input } from '@/components'

import './style.scss'

const HeaderAuthenticated = ({ isOpenMobileMenu, onOpenMobileMenu }) => {
  const isMobileMode = useMatchMedia('(max-width: 991.98px)')

  return (
    <header className="header-auth">
      <div className="container-fluid">
        <div className="header-auth__wrapper">
          {isMobileMode && (
            <button
              className={clsx('btn btn-menu-toggle')}
              onClick={() => onOpenMobileMenu(!isOpenMobileMenu)}
            >
              <div className={clsx('hamburger', isOpenMobileMenu && '-in')}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </button>
          )}

          <Breadcrumb />

          <div className="header-auth__toolbar">
            {!isMobileMode && (
              <Input
                size="sm"
                id="search"
                type="text"
                name="search"
                placeholder="Type here..."
                controlProps={{ className: 'search-input' }}
                addOnLeft={<Icon name="tid-search" />}
              />
            )}

            <Link to="/auth/sign-in" className="btn btn-link">
              <Icon name="tid-user" /> Sign In
            </Link>
            <Link to="#" className="btn btn-link">
              <Icon name="tid-settings" />
            </Link>
            <Link to="#" className="btn btn-link">
              <Icon name="tid-notifications" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

HeaderAuthenticated.defaultProps = {
  isOpenMobileMenu: false,
  onOpenMobileMenu: () => {},
}

export default HeaderAuthenticated
