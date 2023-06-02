import classes from './banner.module.css'

const BannerTemp = (props) => {

    return(
        <div className={classes.banner}>
            <div className={classes.overlay}></div>
            {props.children}
        </div>
    );
};

export default BannerTemp;
