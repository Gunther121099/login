import React from "react";
export default class StatusMessage extends React.Component{
    render(){
        if (this.props.status === "success"){
        return (
            <div className = {"status " + this.props.status}>
                <p>Access Granted!</p>
            </div>
        )
        } else {
            return (
                <div className = {"status " + this.props.status}>
                    <p>Cannot recognize username and password!</p>
                </div>
            )
        }
    }

    componentDidMount(){
        this.timer = setTimeout(()=>{
            this.props.action();
        }, 3000)
    }
}