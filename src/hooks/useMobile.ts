import { useEffect, useState } from 'react'

const useMobile = () => {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if(window.document.readyState == 'complete') {
      window.addEventListener('resize', (e) => {
        if(window.innerWidth <= 820 ) {
          setIsMobile(true)
        } else {
          setIsMobile(false)
        }
      })
    }
  }, [window.document.readyState])

  return isMobile
}

export default useMobile