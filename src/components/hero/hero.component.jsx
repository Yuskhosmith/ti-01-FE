import classes from './hero.module.css';
import Nav from './nav/nav.component';
import Button from '../ui/button/button.component';

const Hero = () => {

    return(
        <div className={classes.hero}>
            <div className={classes.overlay}>
                <Nav />
                <div className={classes.cont}>
                    <div className={classes['hero-cont']}>
                        <h3>We’ve got your morning covered with</h3>
                        <h1>Coffee</h1>
                        <p>It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</p>
                    </div>
                    <Button loc='norm-btn'>Order Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
