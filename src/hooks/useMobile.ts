import { useCallback, useEffect, useState } from 'react'

const useMobile = () => {

  const isClient = typeof window === 'object'
  const getWindowSize = useCallback(() => window.innerWidth <= 820 ? true : false, [isClient])
  
  const [isMobile, setIsMobile] = useState(getWindowSize())

  useEffect(() => {
    const handleResize = () => setIsMobile(getWindowSize())
    window.addEventListener('resize', handleResize)

    return window.removeEventListener('resize', handleResize)
  }, [window.document.readyState])

  return isMobile
}

export default useMobile