import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './container/Home'
import Addstd from './container/Addstd'
import Request from './container/Request'
import Updatevalue from './container/Updatevalue'
import Deletevalue from './container/Deletevalue'

class App extends Component {

  renderRouter = () => {
    return (
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/addstd" component = {Addstd} />
        <Route exact path = "/search" component = {Request} />
        <Route exact path="/update" component={Updatevalue} />
        <Route exact path="/delete" component={Deletevalue} />

        {/* <Route exact path="" component={} />
      <Route exact path="" component={} /> */}

      </Switch>
    )
  }

  render(){
    return (
      <div>
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      </div>
    )
  }
}


export default App;
