/******************************************
  Imports
******************************************/
import { Container } from 'react-bootstrap'
// import './styles.scss'

/******************************************
  Styles
******************************************/
const Section = (props) => {
  return (
    <Container {...props} as={'section'} bsPrefix="feature">
      <Container>{(props, props.children)}</Container>
    </Container>
  )
}

export default Section
