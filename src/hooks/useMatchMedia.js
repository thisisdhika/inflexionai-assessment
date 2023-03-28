import * as React from 'react'

export const useMatchMedia = (breakpoint) => {
  const [isMatched, setIsMatched] = React.useState(false)

  React.useEffect(() => {
    const mediaWatcher = window.matchMedia(breakpoint)

    setIsMatched(mediaWatcher.matches)

    const updateIsMatched = (e) => setIsMatched(e.matches)

    if (!!mediaWatcher.addEventListener) {
      mediaWatcher.addEventListener('change', updateIsMatched)

      return function cleanup() {
        mediaWatcher.removeEventListener('change', updateIsMatched)
      }
    } else {
      mediaWatcher.addListener(updateIsMatched)

      return function cleanup() {
        mediaWatcher.removeListener(updateIsMatched)
      }
    }
  }, [])

  return isMatched
}
