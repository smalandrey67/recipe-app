import { Component } from "react";
import './header.css'

export default class Header extends Component{
    render(){
        const { onSubmit, onChange, name, rules} = this.props
        const elementRules = rules ? <span className="header-rules">You have to write something down</span> : null;

        return(
            <header className="header">
                <div className="container header-container">
                    <div className="header-top">
                        <h1 className="header-title">find your recipe</h1>
                        {elementRules}
                    </div>
                    <form className="header-form form" onSubmit={(e) => onSubmit(e)}>
                        <input className="form-input" 
                            type="text" 
                            placeholder="search something..." 
                            autoComplete="off"
                            onChange={(e) => onChange(e)}
                            value={name}/>
                        <button type="submit" className="form-button">Search</button>
                    </form>
                </div>
            </header>   
        );
    }
}