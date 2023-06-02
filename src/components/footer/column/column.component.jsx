import classes from './column.module.css'

const Column = (props) => {

    return(
        <div className={classes.column}>
            <h2 className={classes.header}>{props.header}</h2>
            <ul>
                <li>{props.item1}</li>
                <li>{props.item2}</li>
                <li>{props.item3}</li>
                <li>{props.item4}</li>
            </ul>
        </div>
    );
};

export default Column;
