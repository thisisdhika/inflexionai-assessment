import { isEmpty } from 'lodash-es'
import * as React from 'react'
import { useLocation } from 'react-router-dom'

import './style.scss'

export const Breadcrumb = () => {
  const location = useLocation()

  const paths = React.useMemo(
    () => ['pages'].concat(location.pathname.split('/').filter((p) => !isEmpty(p))),
    [location.pathname]
  )

  return (
    <div className="breadcrumb">
      <ul className="breadcrumb__path">
        {paths.map((path) => (
          <li key={path} className="breadcrumb__path__item">
            {path}
          </li>
        ))}
      </ul>
      <div className="breadcrumb__ttl">{paths.at(-1)}</div>
    </div>
  )
}
