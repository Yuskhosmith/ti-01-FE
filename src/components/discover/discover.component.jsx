import classes from './discover.module.css';
import { Fragment } from 'react';
import Button from '../ui/button/button.component';
import CoffeeCup from '../../assets/img/coffee-cup.png';
import CoffeeMenu from './coffee-menu/coffee-menu.component';
import Difference from './difference/difference.component';
import Blast from '../../assets/img/coffee_blast.png';

const Discover = () => {
  return (
    <Fragment>
    <div className={classes.discover}>
      <div>
        <h1>Discover the best coffee</h1>
        <p>
          Bean Scene is a coffee shop that provides you with quality coffee that
          helps boost your productivity and helps build your mood. Having a cup
          of coffee is good, but having a cup of real coffee is greater. There
          is no doubt that you will enjoy this coffee more than others you have
          ever tasted.
        </p>
        <Button loc="norm-btn">Learn More</Button>
      </div>
      <div className={classes.cupbeans}>
      <img
          src={CoffeeCup}
          alt='A Bunch of Coffee grain styled as a cup!'
        />
      </div>
      <div className={classes.blast}>
          <img src={Blast} alt="Coffee Blast" />
      </div>
    </div>
    <div className={classes.enjoy}>
        <h1 className={classes.headingOne}>Enjoy a new blend of coffee style</h1>
        <p className={classes.pNorm}>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
        <CoffeeMenu />
        
        <div className={classes.blast2}>
          <img src={Blast} alt="Coffee Blast" />
        </div>
    </div>
    <div className={classes.why}>
        <h1 className={classes.headingOne}>Why are we different?</h1>
        <p className={classes.pNorm}>We don’t just make your coffee, we make your day!</p>
        <Difference />
        <p className={classes.pSmall}>Great ideas start with great coffee, Lets help you achieve that</p>
        <h2 className={classes.headingTwo}>Get started today.</h2>
        <Button loc="norm-btn">Join Us</Button>
    </div>
    </Fragment>
  );
};

export default Discover;
