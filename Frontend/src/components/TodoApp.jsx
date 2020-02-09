import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'

class TodoApp extends Component{
    render(){
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/Login"  component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name"  component={WelcomeComponent} />
                            <AuthenticatedRoute path="/todos"  component={ListTodosComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}



// function Showinvalidcredentials(props){
//         if(props.hasLoginFailed){
//             return <div> Invalid Credentials </div>
//         }else{
//             return null
//         }
// }

// function ShowSuccessmsg(props){
//         if(props.showSuccess){
//             return <div> Login Success </div>
//         }else{
//             return null
//         }
// }

export default TodoApp