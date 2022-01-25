import './resipe-items.css'
// imports
import { Component } from 'react';
import ModalIngredients from '../modal-ingredients';

export default class RecipeItems extends Component{
    constructor(props){
        super(props)
        this.state = {
            active: false,
        }
    }

    showIngredients = () => {
        document.body.classList.add('body-hidden');
        this.setState({active: true})
    }
    closeModal = () => {
        document.body.classList.remove('body-hidden');
        this.setState({active: false}) 
    }

    render(){
        const { recipe: { label, url, image, ingredients } } = this.props;
        const { active } = this.state
        
        return(
            <li className="recipe-item">
                <div className="recipe-body">
                    <div className="recipe-top">
                        <img className="recipe-image" src={image} alt={label} />
                    </div>
                    <div className="recipe-main">
                        <h2 className="recipe-title">{label}</h2>
                    </div>
                    <div className="recipe-bottom">
                        <a className="recipe-details" 
                           href={url} target="_blank" 
                           rel="noopener noreferrer">more details</a>
                        <button onClick={this.showIngredients} className="recipe-ingredients">ingredients</button>
                    </div>
                    {active && <ModalIngredients closeModal={this.closeModal} data={ingredients}/>}
                </div>
            </li>
        );
    }
}
