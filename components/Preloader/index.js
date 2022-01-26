/******************************************
  Imports
******************************************/
import React, { useEffect, useRef } from 'react'

/******************************************
  Component
******************************************/
const Preloader = (props) => {
  const duration = useRef(props.duration)

  useEffect(() => {
    const loaderAnimationDuration = duration.current || 700
    const loader = document.getElementById('preloader')
    loader.style.opacity = 0
    loader.style.transition = loaderAnimationDuration + 'ms'

    loader.style.setProperty(
      ':before',
      'animation: animate-preloader {loaderAnimationDuration} linear infinite'
    )
    setTimeout(() => {
      loader.remove()
    }, loaderAnimationDuration)
  }, [])

  return <div id="preloader" className="preloader" />
}
export default Preloader
