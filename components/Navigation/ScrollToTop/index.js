/******************************************
  Imports
******************************************/
import React, { useEffect, useState } from 'react'

import { BsChevronCompactUp } from 'react-icons/bs'
import { animateScroll as Scroll } from 'react-scroll'

/******************************************
  Component
******************************************/
const ScrollToTop = () => {
  const [show, setShow] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!show && window.pageYOffset > 300) {
      setTimeout(() => {
        document.getElementById('scrollTop').style.visibility = 'visible'
        setShow(1)
      }, 300)
    } else if (show && window.pageYOffset <= 300) {
      setShow(0)
      setTimeout(() => {
        document.getElementById('scrollTop').style.visibility = 'hidden'
      }, 300)
    }
  }

  const scrollTop = () => {
    Scroll.scrollToTop({
      duration: 400,
    })
  }

  return (
    <BsChevronCompactUp
      id="scrollTop"
      className="scrollTop d-block d-md-none"
      onClick={scrollTop}
      size={40}
      style={{ opacity: show && 1 }}
    />
  )
}

export default ScrollToTop
