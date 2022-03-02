import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onSet, showSet }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={showSet ? 'red' : 'green'}
          text={showSet ? 'Close' : 'Set'}
          onClick={onSet}
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Temperture Monitor',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header
