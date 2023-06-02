import classes from './feedback.module.css';
import Blast from '../../assets/img/coffee_blast2.png';
import Left from '../../assets/icon/left.png';
import Right from '../../assets/icon/right.png';

const Feedback = () => {

    return(
        <div className={classes.feedback}>
            <h1>Our coffee perfection feedback</h1>
            <p>Our customers has amazing things to say about us</p>
            <div className={classes.feedbackBlock}>
                <h1 className={classes.quote}>“</h1>
                <p className={classes.dummy}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....</p>
                <h2>Jonny Thomas</h2>
                <p className={classes.sml}>Project Manager</p>
                <div className={classes.left}>
                    <img src={Left} alt="Left" />
                </div>
                <div className={classes.right}>
                    <img src={Right} alt="Right" />
                </div>
                <div className={classes.image}></div>
            </div>
            {/* <div className={classes.blast}>
                <img src={Blast} alt="Coffee Blast" />
            </div>
            <div className={classes.blast2}>
                <img src={Blast} alt="Coffee Blast" />
            </div> */}
        </div>
    );
};

export default Feedback;
