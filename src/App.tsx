import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return(
      <>
        <h2>Welcome to Biwagani, a board gaming league hosted by Joe Mercer @TheLodge</h2>
        <div>Next event card here</div>
        <Link to="/notHome">Click here to not go home</Link>
      </>
    )
}

function NotHome() {
  return(
      <>
        <h2>Not the home page</h2>
      </>
    )
}

interface IState {
  logedIn: boolean;
  loginPopupOpen: boolean;
  isAdmin: boolean;
}

interface IProps {}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      logedIn: true,
      loginPopupOpen: false,
      isAdmin: true
    };
}
  render() {
    if(this.state.logedIn === true){
      return <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">Biwagani</Link>
            {this.state.isAdmin === true &&
              <div>Admin Portal</div>
            }
            <div>Profile Page</div>
          </header>

          <Route path="/" exact component={Home} />
          <Route path="/notHome" exact component={NotHome} />
        </div>
      </Router>
    }
    else{
      return <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">Biwagani</Link>
            <div>Login / Register</div>
          </header>

          <Route path="/" exact component={Home} />
          <Route path="/notHome" exact component={NotHome} />
        </div>
      </Router>
    }
  }
}

export default App;
