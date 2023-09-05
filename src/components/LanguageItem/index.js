import './index.css'
import {Link} from 'react-router-dom'
import {Component} from 'react'

class LanguageItem extends Component {
  render() {
    const {languageItemInfo} = this.props
    return (
      <Link className="link" to={`/courses/${languageItemInfo.id}`}>
        <li className="languageItem">
          <img
            className="img"
            src={languageItemInfo.logoUrl}
            alt={languageItemInfo.name}
          />
          <p>{languageItemInfo.name}</p>
        </li>
      </Link>
    )
  }
}

export default LanguageItem
