import React from "react";
export default class Username extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.handleChange(e.target.value);
    }
    render(){
        const username = this.props.user;
        const status = this.props.status;
        return(
            <div>
                <input type="text" className={status} placeholder="Username" value={username} onChange={this.handleChange}/>
            </div>
        )
    }
}