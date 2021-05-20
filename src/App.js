import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import UploadUser from "./components/UploadUser";
import GetUsers from "./components/GetUsers";

function App() {
  return (
      <Router>
        <div className="body">
          <div>
            <div>
              <Toolbar/>
            </div>
          </div>
          <Switch>
            <Route path='/home'>
              <div className='uploadBox'>
                <UploadUser/>
              </div>
            </Route>
            <Route path='/getallusers'>
              <div>
                <GetUsers/>
              </div>
            </Route>

          </Switch>


        </div>
      </Router>
  );
}

export default App;
