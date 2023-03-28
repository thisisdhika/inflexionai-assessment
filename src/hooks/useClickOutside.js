import * as React from 'react'

export const useClickOutside = (ref, onClickOutside, deps = []) => {
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) onClickOutside(event)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, ...deps])
}
