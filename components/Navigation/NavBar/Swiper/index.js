/* eslint-disable */

/******************************************
  Imports
******************************************/
import { useSwipeable } from 'react-swipeable'

/******************************************
  Component
******************************************/
const Swiper = (props) => {
  function toggleMenu(status) {
    props.onChange(status)
  }

  const handlers = useSwipeable({
    trackMouse: false,
    onSwipedLeft: () => toggleMenu(true),
  })

  return (
    <div id="swiper" {...handlers} className="swiper" value={props.value} onChange={toggleMenu} />
  )
}

export default Swiper
