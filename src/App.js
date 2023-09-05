import './App.css'
import {Switch, Route} from 'react-router-dom'
import Languages from './components/Languages'
import LanguageDetails from './components/LanguageDetails'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Languages} />
    <Route exact path="/courses/:id" component={LanguageDetails} />
    <Route component={NotFound} />
  </Switch>
)

export default App
