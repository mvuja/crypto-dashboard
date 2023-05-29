import { React } from 'react'
import './_button.scss';

const Button = props => {


    return(
        <button onClick={props.onClickHandler} className={`btn ${props.className}`}>{props.children}</button>
    )
}

export default Button