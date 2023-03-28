import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.querySelector('[data-js="root"]')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

import '@/scss/main.scss'
import Router from '@/router'

const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Router />
  </StrictMode>
)
