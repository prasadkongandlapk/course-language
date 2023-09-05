import './index.css'
import Header from '../Header'

const NotFound = () => (
  <div className="not-found">
    <Header />
    <img
      className="not-img"
      src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png "
      alt="not found"
    />
    <h1>Page Not Found</h1>
    <p>We are sorry, the page you requested could not be found</p>
    <button type="button" className="retry-btn">
      Retry
    </button>
  </div>
)

export default NotFound
