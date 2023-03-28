import * as React from 'react'
import clsx from 'clsx'
import { Icon } from '..'
import { useClickOutside } from '@/hooks'
import { NavLink } from 'react-router-dom'

import './style.scss'

export const Sidebar = ({ isVisible, onShouldHide }) => {
  const sidebarRef = React.useRef(null)

  useClickOutside(sidebarRef, () => isVisible && onShouldHide(), [isVisible, onShouldHide])

  return (
    <aside ref={sidebarRef} className={clsx('sidebar', isVisible && '-visible')}>
      <div className="sidebar__brand">
        <a href="#" className="sidebar__brand__logo">
          <Icon name="tid-vandelay-ind" />
          <span>VANDELAY INDUSTRIES</span>
        </a>
      </div>
      <nav className="sidebar__menu">
        <ul className="sidebar__menu__list">
          {Sidebar.menu.map((item, index) => (
            <li key={index} className="sidebar__menu__list__item">
              <NavLink to={item.href} className="sidebar__menu__list__item__link">
                <span className="icon">
                  <Icon name={item.icon} />
                </span>{' '}
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="sidebar__account-menu">
        <h3 className="sidebar__account-menu__ttl">ACCOUNT PAGES</h3>
        <ul className="sidebar__account-menu__list">
          {Sidebar.accountMenu.map((item, index) => (
            <li key={index} className="sidebar__account-menu__list__item">
              <NavLink to={item.href} className="sidebar__account-menu__list__item__link">
                <span className="icon">
                  <Icon name={item.icon} />
                </span>{' '}
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar__info card">
        <div className="card__header">
          <div className="card__header__icon">
            <Icon name="tid-help" />
          </div>
        </div>
        <div className="card__body">
          <h5>Need help?</h5>
          <p>Please check our docs</p>
        </div>
        <div className="card__footer">
          <button className="btn btn--full btn-light">DOCUMENTATION</button>
        </div>
      </div>
    </aside>
  )
}

Sidebar.defaultProps = {
  onShouldHide: () => {},
}

Sidebar.menu = [
  {
    icon: 'tid-home',
    title: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: 'tid-stats',
    title: 'Tables',
    href: '/tables',
  },
  {
    icon: 'tid-card',
    title: 'Billing',
    href: '/',
  },
  {
    icon: 'tid-build',
    title: 'RTL',
    href: '/',
  },
]

Sidebar.accountMenu = [
  {
    icon: 'tid-user',
    title: 'Profile',
    href: '/',
  },
  {
    icon: 'tid-document',
    title: 'Sign In',
    href: '/auth/sign-in',
  },
  {
    icon: 'tid-rocket',
    title: 'Sign Up',
    href: '/auth/sign-up',
  },
]
