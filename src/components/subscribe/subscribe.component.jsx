import classes from './subscribe.module.css';
import BannerTemp from '../ui/banner/banner.component';
import CupBlastBean from '../../assets/img/cupblastbean.png';

const Subscribe = () => {

    return(
        <BannerTemp>
            <div className={classes.cont}>
                <h1>Subscribe to get the Latest News</h1>
                <p>Don’t miss out on our latest news, updates, tips and special offers</p>
                <div className={classes.subscribe}>
                    <input type="text" placeholder='Enter your mail'/>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className={classes.blast}>
                <img src={CupBlastBean} alt="Cup blast bean" />
            </div>
            <div className={classes.blast2}>
                <img src={CupBlastBean} alt="Cup blast bean" />
            </div>
        </BannerTemp>
    );
};

export default Subscribe;
