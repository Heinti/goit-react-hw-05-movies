import PropTypes from 'prop-types';
import css from './ButtonBack.module.css';

const { Link } = require("react-router-dom")


const ButtonBack =({path, children}) =>{
    return(
        <>
        <Link className={css.button} to={path}>
        {children}
        </Link>
        </>
    )
}

export default ButtonBack;

ButtonBack.propTypes= {
    path: PropTypes.string,
    children: PropTypes.array
}