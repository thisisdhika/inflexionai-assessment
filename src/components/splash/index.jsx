import * as React from 'react'
import { Icon } from '..'

import './style.scss'

export const Splash = React.memo(() => {
  return (
    <div className="splash">
      <div className="splash__logo">
        <Icon name="tid-vandelay-ind" />
        <span>VANDELAY INDUSTRIES</span>
      </div>
    </div>
  )
})
