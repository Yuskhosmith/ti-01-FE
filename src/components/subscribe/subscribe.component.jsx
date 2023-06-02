import classes from './subscribe.module.css';
import BannerTemp from '../ui/banner/banner.component';

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
        </BannerTemp>
    );
};

export default Subscribe;
