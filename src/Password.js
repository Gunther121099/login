import React from "react";
export default class Password extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: 1,
            type: ["text", "password"],
            icon: ["fa-eye-slash", "fa-eye"] 
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.handleChange(e.target.value);
    }

    toggleVisibility(){
        if (this.state.index === 1){
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: 1
            })
        }
    }

    render(){
        const password = this.props.password;
        const type_text = this.state.type[this.state.index];
        return (
            <div>
                <input type = {type_text} className= {this.props.status} placeholder="Password" value ={password} onChange={this.handleChange}/>
                <i class={"passIcon fas "+this.state.icon[this.state.index]} onClick={this.toggleVisibility}></i>
            </div>
        )
    }
}