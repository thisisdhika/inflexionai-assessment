import * as React from 'react'
import clsx from 'clsx'
import icons from './icons'
import { has } from 'lodash-es'
import { lazy } from '@loadable/component'

import './style.scss'

export const Icon = React.memo(
  ({ name, className, ...restProps }) => {
    if (!name) return null

    if (has(icons, name)) {
      const Icon = lazy(icons[name])
      const classNames = clsx('tid-icon', name, className)

      return (
        <React.Suspense fallback={<div className={classNames} style={{ minHeight: '1em' }} />}>
          <Icon role="img" className={classNames} {...restProps} />
        </React.Suspense>
      )
    }

    return null
  },
  (prev, next) => {
    if (prev.name !== next.name) return false
    return true
  }
)
