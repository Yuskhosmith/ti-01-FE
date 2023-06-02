import classes from './difference.module.css';
import Card from '../../ui/card/card.component';
import supremeBeans from '../../../assets/icon/sb.png';
import highQuality from '../../../assets/icon/hq.png';
import extraordinary from '../../../assets/icon/ext.png';
import AP from '../../../assets/icon/ap.png';

const itemList = [
    {
        key: "1d",
        source: supremeBeans,
        title: "Supreme Beans",
        description: "Beans that provides great taste"
    },
    {
        key: "2d",
        source: highQuality,
        title: "High Quality",
        description: "We provide the highest quality"
    },
    {
        key: "3d",
        source: extraordinary,
        title: "Extraordinary",
        description: "Coffee like you have never tasted"
    },
    {
        key: "4d",
        source: AP,
        title: "Supreme Beans",
        description: "Our Coffee prices are easy to afford"
    }
]

const Difference = () => {
    const cont = itemList.map((item) => (
        <Card {...item}/>
    ));

    return(
        <div className={classes.difference}>
            {cont}
        </div>
    );
};

export default Difference;
