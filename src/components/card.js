import classes from './card.module.css'
function Card (props){
    const customClass =  props.className;
return <div className={classes.card + ' '+customClass} >{props.children}</div>
}

export default Card;