import classes from './coffee-card.module.css';
import Button from '../button/button.component';

const CoffeeCard = (props) => {

    return(
        <div className={classes.card}>
            <div className={classes.image}>
                <img src={props.source} alt={props.name} />
            </div>
            <div>
                <h3 className={classes.name}>{props.name}</h3>
                <p className={classes.description}>{props.description}</p>
                <p className={classes.price}>{props.price}</p>
            </div>
            <Button loc="norm-btn">Order Now</Button>
        </div>
    );
};

export default CoffeeCard;
