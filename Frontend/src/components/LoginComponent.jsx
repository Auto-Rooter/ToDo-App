import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            username: 'hadi',
            password: '',
            hasLoginFailed: false,
            showSuccess: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    
    handleChange(event){
        this.setState({ [event.target.name] : event.target.value});
    }

    loginClicked(event){
        // hadi, hadi
        if(this.state.username === "hadi" && this.state.password === "hadi"){
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`);
            // this.setState({ showSuccess : true })
            // this.setState({ hasLoginFailed : false })
        }else{
            this.setState({ hasLoginFailed : true })
            this.setState({ showSuccess : false })
        }

    }



    render(){
      return (
        <div className="LoginComponent">
           
                <div className="container">
                    {/* <Showinvalidcredentials hasLoginFailed={this.state.hasLoginFailed} />
                    <ShowSuccessmsg showSuccess={ this.state.showSuccess }/> */}
                    { this.state.hasLoginFailed &&  <div className="alert alert-warning"> Invalid Credentials </div>}
                    { this.state.showSuccess &&  <div> Login Success </div>}

                    <main class="login-form">
                            <div class="cotainer">
                                <div class="row justify-content-center">
                                    <div class="col-md-8">
                                        <div class="card">
                                            <div class="card-header">Login</div>
                                            <div class="card-body">
                                                    <div class="form-group row">
                                                        <label for="email_address" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                                        <div class="col-md-6">
                                                            <input type="text" name="username" class="form-control" value={this.state.username} onChange={this.handleChange}  required autofocus/>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                                                        <div class="col-md-6">
                                                            <input type="password" name="password" class="form-control" value={this.state.password} onChange={this.handleChange}  required/> 
                                                        </div>
                                                    </div>

                                                    <div class="col-md-6 offset-md-4">
                                                        <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    
                    {/* User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password  : <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/> 
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button> */}
                </div>

        </div>
      )
    }
  }

export default LoginComponent

