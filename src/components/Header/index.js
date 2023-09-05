import './index.css'
import {Link, withRouter} from 'react-router-dom'

const Header = () => (
  <Link to="/">
    <nav>
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png "
        alt="website logo"
      />
    </nav>
  </Link>
)

export default withRouter(Header)
