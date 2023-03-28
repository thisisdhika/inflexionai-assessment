import * as React from 'react'

import './style.scss'

export const Footer = React.memo(() => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <span className="footer__copy">
          © 2022, Made with ❤️ by <span className="color-primary">Tektorch</span> for a better web
        </span>

        <nav className="footer__nav">
          <ul className="footer__nav__list">
            {Footer.menu.map((item, index) => (
              <li key={index} className="footer__nav__list__item">
                <a href={item.href} className="footer__nav__list__item__link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
})

Footer.menu = [
  {
    label: 'About Us',
    href: '#',
  },
  {
    label: 'Privacy',
    href: '#',
  },
  {
    label: 'Blog',
    href: '#',
  },
  {
    label: 'License',
    href: '#',
  },
]
