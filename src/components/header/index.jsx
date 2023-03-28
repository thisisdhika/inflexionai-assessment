import loadable from '@loadable/component'

export const Header = loadable(({ variant }) => import(`./${variant}/index.jsx`), {
  cacheKey: ({ variant }) => variant,
  fallback: null,
})
