import React, { Component } from 'react';
import { Route, Switch , BrowserRouter} from 'react-router-dom';
import './scss/style.scss';
import Servics from './Components/Services/page';
import Booking from './Components/Booking/Page';
import ConfirmInformation from './Components/ConfirmInformation/page';
 
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

 

 

class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              
              <Route path="/" name="service" exact component={Servics} />
              <Route path="/booking" name="Booking" exact component={Booking} />
              <Route path="/confirmInformation" name="ConfirmInformation" exact component={ConfirmInformation} />
             
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
