import React from 'react';
import './loginPopUp.css';

interface IState {
    isLogin: boolean;
}
  
interface IProps {
    register: any;
    login: any;
    close: any;
}

class LoginPopUp extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props);
    
        this.state = {
            isLogin: true
        };
    }
    toggleLoginRegister = (value:boolean) =>{
        this.setState({isLogin:value})
    }
    render() {
        return<>
            <div className={'container'}>
                <div>Do you want to login or register</div>
                <div>
                    <button onClick={()=>this.toggleLoginRegister(true)}>Login</button>
                    <button onClick={()=>this.toggleLoginRegister(false)}>Register</button>
                </div>
                {this.state.isLogin === false &&
                    <div className={'fieldContainer'}>
                        <div>email</div><input/>
                    </div>
                }
                <div className={'fieldContainer'}>
                    <div>username</div><input/>
                </div>
                <div className={'fieldContainer'}>
                    <div>password</div><input/>
                </div>
                {this.state.isLogin === false &&
                    <div className={'fieldContainer'}>
                        <div>confirm password</div><input/>
                    </div>
                }
                <div>
                    {this.state.isLogin === true && 
                        <button onClick={this.props.login}>Login</button>
                    }
                    {this.state.isLogin === false && 
                        <button onClick={this.props.register}>Register</button>
                    }
                    <button onClick={this.props.close}>Close</button>
                </div>
            </div>
        </>
          
      }
    }
  
  export default LoginPopUp;
  