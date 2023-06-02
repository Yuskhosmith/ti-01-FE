import classes from './coffee-menu.module.css';
import CoffeeCard from '../../ui/coffee-card/coffee-card.component';
import Cappuccino from '../../../assets/img/Cappuccino.png';
import ChaiLatte from '../../../assets/img/Chai-Latte.png';
import Macchiato from '../../../assets/img/Macchiato.png';
import Expresso from '../../../assets/img/Expresso.png';

const menu = [
    {
        key: "1cm",
        source: Cappuccino,
        name: "Cappuccino",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50"
    },
    {
        key: "2cm",
        source: ChaiLatte,
        name: "Chai Latte",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50"
    },
    {
        key: "3cm",
        source: Macchiato,
        name: "Macchiato",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50"
    },
    {
        key: "4cm",
        source: Expresso,
        name: "Expresso",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50"
    },
    
]
const CoffeeMenu = () => {
    
    const menuList = menu.map((item) => (
        <CoffeeCard {...item}/>
    ));

    return(
        <div className={classes.coffeeMenu}>
            {menuList}
        </div>
    );
};

export default CoffeeMenu;
