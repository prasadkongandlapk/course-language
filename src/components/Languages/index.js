import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageItem from '../LanguageItem'
import Header from '../Header'

class Languages extends Component {
  state = {
    isLoading: true,
    languagesData: [],
    isFailure: false,
  }

  componentDidMount() {
    this.getLanguages()
  }

  retry = () => {
    this.getLanguages()
  }

  getLanguages = async () => {
    const url = 'https://apis.ccbp.in/te/courses'
    const options = {method: 'GET'}

    const response = await fetch(url, options)

    const fetchedData = await response.json()
    if (response.ok === true) {
      const formattedData = fetchedData.courses.map(each => ({
        id: each.id,
        name: each.name,
        logoUrl: each.logo_url,
      }))
      this.setState({languagesData: formattedData, isLoading: false})
    } else {
      this.setState({isFailure: true, isLoading: false})
    }
  }

  onFailure = () => (
    <div className="not-found">
      <Header />
      <img
        className="not-img"
        src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png "
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
      <button onClick={this.retry} type="button" className="retry-btn">
        Retry
      </button>
    </div>
  )

  render() {
    const {isLoading, isFailure, languagesData} = this.state
    return (
      <div className="bg">
        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader width={30} color="blue" type="ThreeDots" />
          </div>
        ) : (
          <>
            {isFailure ? (
              <div>{this.onFailure()}</div>
            ) : (
              <>
                <Header />
                <h1 className="h1">Courses</h1>
                <ul className="order-languages">
                  {languagesData.map(each => (
                    <LanguageItem languageItemInfo={each} key={each.id} />
                  ))}
                </ul>
              </>
            )}
          </>
        )}
      </div>
    )
  }
}

export default Languages
