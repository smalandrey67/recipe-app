// imports
import { Component } from 'react';
import {v4 as uuidv4} from 'uuid'; 
import RecipeItems from '../recipe-items';
import Spinner from '../spinner';
import CatchError from '../catch-error';
import Header from '../header';
import NotFound from '../not-found';

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            recipes: [],
            name: '',
            loading: false,
            empty: false,
            rules: false,
        }
    }
    _recipeUrl = 'https://api.edamam.com/api/recipes/v2?';
    _appKey = '33b0ce55575920e7cd74a6cff49962b8';
    _appId = '2b17c6d6';

    async getResource(){
        const request = await fetch(`${this._recipeUrl}type=public&app_key=${this._appKey}&app_id=${this._appId}&q=${this.state.name}`);
        const responce = await request.json();
        if(!request.ok){
             throw new Error(`Could not fetch ${this._recipeUrl}`);
        }
        if(responce.hits.length === 0) {
            this.addChanges()  
            return; 
        }
        this.setState({
            recipes: responce.hits,
            loading: false,
            empty: false,
            rules: false,
            name: '',
        }) 
    }

    addChanges = () => {
        this.setState({
            loading: false,
            empty: true
        }) 
    }

    addRules = () => {
        this.setState({rules: true});
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.name){
            this.addRules();
            return;
        }
      
        this.getResource();
        this.setState({
            loading: true,
        }); 
    }
    onChange = (e) => {
        let value = e.target.value.trim().toLowerCase();
        this.setState({name: value});
    }

    render(){
        console.log('render')
        const { name, recipes, loading, empty, rules } = this.state
    
        const spinnerLoading = loading ? <Spinner /> : null;
        const element = !loading ? <CatchError> <Content data={recipes} empty={empty}/> </CatchError>: null;

        return(
            <>
                <CatchError>
                    <Header onSubmit={this.onSubmit} 
                            onChange={this.onChange} 
                            name={name}
                            rules={rules}
                            /> 
                </CatchError>

                {spinnerLoading}
                {element} 
            </>
        );
    }
}

const Content = ({ data, empty}) => {
    if(empty){
        return <NotFound />
    }

    return(
        <section className="recipes">
            <div className="container recipes-container">
                <ul className="recipe-list">
                    {data !== [] && data.map(item => <RecipeItems key={uuidv4()} recipe={item.recipe}/>)}
                </ul>
            </div>  
        </section>
    );
}