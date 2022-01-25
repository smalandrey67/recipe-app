import './modal-ingredients.css'
import {v4 as uuidv4} from 'uuid'; 

function ModalIngredients({ data, closeModal }){
    const elementsOfIngredients = data.map(item => {
        const {text, weight, image, quantity} = item;
        
        return(
            <li key={uuidv4()} className="modal-ingredients">
                <img className="modal-photo" src={image} alt={text} />
                <div key={uuidv4()} className="modal-information modal-list">
                    <p className="modal-text modal-item">{text}</p>
                    <p className="modal-properties modal-item">weight: {weight === 0 ? 'no specific weight' : Math.floor(weight)} grams</p>
                    <p className="modal-properties modal-item">quantity: {quantity === 0 ? 'no specific quantity': quantity}</p>
                </div>
            </li>
        );
    })
    return(
        <div className="modal">
            <div className="modal-body">
                <div className="modal-content" data-simplebar>
                    <div className="modal-top">
                        <h3 className="modal-title">Ingredients</h3>
                        <button onClick={() => closeModal()} className="modal-close">Х</button>
                    </div>
                    <ul className="modal-main">
                        {elementsOfIngredients}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ModalIngredients;