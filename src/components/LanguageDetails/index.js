import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Header from '../Header'

class LanguageDetails extends Component {
  state = {isLoading: true, isFailure: false, languageData: []}

  componentDidMount() {
    this.getLanguage()
  }

  getLanguage = async () => {
    const {params} = this.props
    const {match} = params
    const {id} = match
    const url = `https://apis.ccbp.in/te/courses/:${id}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)

    const data = await response.json()
    if (response.ok === true) {
      const formattedData = data.course_details.map(each => ({
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
        description: each.description,
      }))
      this.setState({languageData: formattedData, isLoading: false})
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
    const {isLoading, isFailure, languageData} = this.state
    return (
      <div>
        {isLoading ? (
          <div className="loader" data-testid="loader">
            <Loader type="ThreeDots" color="blue" width={30} />
          </div>
        ) : (
          <>
            {isFailure ? (
              <div>{this.onFailure()}</div>
            ) : (
              <>
                <Header />
                <ul>
                  {languageData.map(each => (
                    <li className="language-details" key={each.id}>
                      <img src={each.imageUrl} alt={each.name} />
                      <div>
                        <p>{each.name}</p>
                        <p>{each.description}</p>
                      </div>
                    </li>
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

export default LanguageDetails
