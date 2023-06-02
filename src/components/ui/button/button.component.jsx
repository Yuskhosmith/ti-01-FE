import classes from './button.module.css';

const Button = (props) => {
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${classes[`${props.loc}`]}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
