//{props.children} will receive the content from opening and closing of the card component

import classes from './Card.module.css'

function Card(props){
    return <div className={classes.card}>{props.children}</div>
}

export default Card;

