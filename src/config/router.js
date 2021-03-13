import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import FanPage from '../pages/FanPage/FanPage'

const Routes = () => (
    <Switch>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/Fanpage" component={ FanPage } />
    </Switch>
)

export default Routes