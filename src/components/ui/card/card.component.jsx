import classes from './card.module.css'

const Card = (props) => {

    return(
        <div className={classes.card}>
            <div className={classes.icon}>
                <img src={props.source} alt={props.title} />
            </div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default Card;
