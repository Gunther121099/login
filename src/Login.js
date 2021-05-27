import React from "react";
import Password from "./Password";
import Username from "./Username";
import StatusMessage from "./StatusMessage";

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status: "neutral",
            username: "",
            password:"",
            isAlive: false
        }
        this.onPasswordChange = this.onPasswordChange.bind(this)
        this.onUsernameChange = this.onUsernameChange.bind(this)
        this.submitCredentials = this.submitCredentials.bind(this)
        this.closeStatusMessage = this.closeStatusMessage.bind(this)
    }

    closeStatusMessage(){
        this.setState({isAlive: false, status: "neutral"});
    }

    onPasswordChange(current_pass){
        this.setState({
            password: current_pass
        });
    }

    onUsernameChange(current_username){
        this.setState({
            username: current_username
        });
    }

    submitCredentials(){
        if(this.state.username === "ShanenLang" && this.state.password === "SapatNa"){
            this.setState({
                status: "success",
                isAlive: true
            });
        } else {
            this.setState({
                status: "failed",
                isAlive: true
            });
        }
    }

    render(){
        const status = this.state.status;
        const alive = this.state.isAlive;
        return (
            <div className="container">
                <h2>Login</h2>
                <Username status={status} user={this.state.user} handleChange={this.onUsernameChange}/>
                <Password status={this.state.status} password = {this.state.password} handleChange={this.onPasswordChange}/>
                {status === "failed" && alive &&
                    <StatusMessage status={status} action={this.closeStatusMessage}/>}
                {status === "success" && alive &&
                    <StatusMessage status={status} action={this.closeStatusMessage}/>}
                <button onClick={this.submitCredentials}>Submit</button>
            </div>
        )
    }
}