import * as React from 'react'
import clsx from 'clsx'
import { Icon } from '@/components'
import { NavLink, useMatch } from 'react-router-dom'

import './style.scss'
import { useMatchMedia } from '@/hooks'

const HeaderMinimal = React.memo(() => {
  const isSignUpRoute = useMatch('/auth/sign-up')
  const isMobileMode = useMatchMedia('(max-width: 991.98px)')
  const [isOpenMobileMenu, setIsOpenMobileMenu] = React.useState(false)

  const theme = React.useMemo(() => (!!isSignUpRoute ? 'transparent-light' : 'default'), [isSignUpRoute])

  React.useEffect(() => {
    setIsOpenMobileMenu(false)
  }, [isSignUpRoute])

  return (
    <header
      className={clsx(
        'header-minimal',
        `header-minimal--${theme === 'transparent-light' && isOpenMobileMenu ? 'default' : theme}`
      )}
    >
      <div className="container">
        <div className="header-minimal__wrapper">
          <a href="#" className="header-minimal__brand">
            <Icon name="tid-vandelay-ind" />
            <span>VANDELAY INDUSTRIES</span>
          </a>

          {!isMobileMode && (
            <nav className="header-minimal__nav">
              <ul className="header-minimal__nav__list">
                {HeaderMinimal.menu.map((item, key) => (
                  <li key={key} className="header-minimal__nav__list__item">
                    <NavLink to={item.href} className="header-minimal__nav__list__item__link">
                      <Icon name={item.icon} />
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}

          <div className="header-minimal__actions">
            {isMobileMode ? (
              <button
                className={clsx('btn btn-menu-toggle')}
                onClick={() => setIsOpenMobileMenu((prev) => !prev)}
              >
                <div className={clsx('hamburger', isOpenMobileMenu && '-in')}>
                  <span className="line"></span>
                  <span className="line"></span>
                  <span className="line"></span>
                </div>
              </button>
            ) : (
              <button className={clsx('btn btn--rounded', !!isSignUpRoute ? 'btn-light' : 'btn-dark')}>
                Free Download
              </button>
            )}
          </div>
        </div>
        {isMobileMode && (
          <div className={clsx('header-minimal__menu-mobile', isOpenMobileMenu && '-visible')}>
            <nav className="header-minimal__nav">
              <ul className="header-minimal__nav__list">
                {HeaderMinimal.menu.map((item, key) => (
                  <li key={key} className="header-minimal__nav__list__item">
                    <NavLink to={item.href} className="header-minimal__nav__list__item__link">
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <button className={clsx('btn btn--rounded btn-dark')}>Free Download</button>
          </div>
        )}
      </div>
    </header>
  )
})

HeaderMinimal.menu = [
  {
    label: 'Dashboard',
    icon: 'tid-box',
    href: '/dashboard',
  },
  {
    label: 'Profile',
    icon: 'tid-user',
    href: '#',
  },
  {
    label: 'Sign Up',
    icon: 'tid-user-alt',
    href: '/auth/sign-up',
  },
  {
    label: 'Sign In',
    icon: 'tid-key',
    href: '/auth/sign-in',
  },
]

HeaderMinimal.defaultProps = {}

export default HeaderMinimal
