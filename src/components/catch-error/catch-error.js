import { Component } from "react";
import WarningError from "../warning-error";

export default class CatchError extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: false,
        }
    }

    componentDidCatch(){
        this.setState({error: true})
    }
    
    render(){
        const { error } = this.state;
        if(error){
            return <WarningError />
        }
        return this.props.children;
    }
}