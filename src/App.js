import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Amt from './components/Amt'
import Vij from './components/Vij'
import Ssm from './components/Ssm'
import Ttd from './components/Ttd'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/Amt" component={Amt} />
      <Route exact path="/Vij" component={Vij} />
      <Route exact path="/Ssm" component={Ssm} />
      <Route exact path="/Ttd" component={Ttd} />
    </Switch>
  </BrowserRouter>
)

export default App
