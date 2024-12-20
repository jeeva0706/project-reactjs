


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import "../Pages/Login.css";

function Login() {
    return (
        <div className="image-book" aria-label="Background image of books">
            <h1 className="h1-about">LOGIN</h1>
            <h6 className="h6-home-to-about">HOME <span><FontAwesomeIcon className="iconright-arrow" icon={faAnglesRight} />
            </span> LOGIN</h6>
        </div>
    )
};

export default Login;
