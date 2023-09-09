"use client"
import { useEffect, useState } from 'react'

const useMobile = () => {
  if(window.document.readyState != 'complete') {
    console.log('window not ready')
    return
  }

  const [screenSize, setscreenSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setscreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return screenSize <= 850
}

export default useMobile