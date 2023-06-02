import classes from './nav.module.css';
import Button from '../../ui/button/button.component';

const Nav = () => {

    return(
        <nav className={classes.nav}>
            <div className={classes.logo}>Bean Scene</div>
            <div className={classes['nav-cont']}>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={classes.buttons}>
                <button className={classes.btn}>Sign In</button>
                <Button loc="nav-btn">SignUp</Button>
            </div>
        </nav>
    );
};

export default Nav;
