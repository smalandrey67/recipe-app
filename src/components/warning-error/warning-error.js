import './warning-error.css'

function WarningError(){
    return(
        <div className="error">
            <div className="container error-container">
                <div className="error-body">
                    <img className="error-image" src="/images/error.png" alt="" />
                    <div className="error-description">Something went wrong</div>
                </div>
            </div>
        </div>
    );
}
export default WarningError;