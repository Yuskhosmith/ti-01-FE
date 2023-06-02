import classes from './banner.module.css';
import Button from '../ui/button/button.component';
import Cup from '../../assets/img/cup.png';
import Beans from '../../assets/img/coffee_bean.png';
import BannerTemp from '../ui/banner/banner.component';

const Banner = () => {

    return(
        <BannerTemp>
            <div className={classes.cont}>
                <div className={classes.bannerCont}>
                    <h1>Get a chance to have an Amazing morning</h1>
                    <p>We are giving you are one time opportunity to experience a better life with coffee.</p>
                    <Button loc='norm-btn'>Order Now</Button>
                </div>
                <div className={classes.cup}>
                    <img src={Cup} alt="Coffee Cup" />
                </div>
            </div>
            <div className={classes.beans}>
                <img src={Beans} alt="Coffee Beans" />
            </div>
        </BannerTemp>
    );
};

export default Banner;
