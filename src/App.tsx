import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactModal from 'react-modal';
import LoginPopUp from './popUps/loginPopUp'

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
      logedIn: false,
      loginPopupOpen: false,
      isAdmin: true
    };
}
  //Log in button
  loginPress = () => {
    this.setState({loginPopupOpen:true})
  }
  //Login popup functions
  loginClosePress = () => {
    this.setState({loginPopupOpen:false})
  }
  loginSubmitPress = () => {
    this.setState({logedIn:true,loginPopupOpen:false})
    this.loginClosePress()
  }
  //Other
  signOut = () =>{
    this.setState({logedIn:false})
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
            <div onClick={this.signOut}>Sign Out</div>
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
            <div onClick={this.loginPress}>Login / Register</div>
            <ReactModal
            isOpen={this.state.loginPopupOpen}
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)'
              },
              content: {
                position: 'absolute',
                width: '40vw',
                height: '60vh',
                top: '20vh',
                left: '30vw',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px'
              }
            }}
            >
              <LoginPopUp
                register={this.loginSubmitPress}
                login={this.loginSubmitPress}
                close={this.loginClosePress}
              ></LoginPopUp>
            </ReactModal>
          </header>

          <Route path="/" exact component={Home} />
          <Route path="/notHome" exact component={NotHome} />
        </div>
      </Router>
    }
  }
}

export default App;
