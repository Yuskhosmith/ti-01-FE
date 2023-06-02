import classes from './footer.module.css';
import Column from './column/column.component';
import fb from '../../assets/icon/fb.png';
import ig from '../../assets/icon/ig.png';
import yt from '../../assets/icon/yt.png';
import twttr from '../../assets/icon/twttr.png';

const ftr = [
  {
    key: 'f1',
    header: 'About',
    item1: 'Menu',
    item2: 'Features',
    item3: 'News & Blogs',
    item4: 'Help & Supports',
  },
  {
    key: 'f2',
    header: 'Company',
    item1: 'How we work',
    item2: 'Terms of service',
    item3: 'Pricing',
    item4: 'FAQ',
  },
  {
    key: 'f3',
    header: 'Contact Us',
    item1: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
    item2: '+1 202-918-2132',
    item3: 'beanscene@mail.com',
    item4: 'www.beanscene.com',
  },
];

const Footer = () => {
  const ftrNav = ftr.map((item) => <Column {...item} />);

  return (
    <div className={classes.footer}>
      <div className={classes.cont}>
        <div className={classes.info}>
          <h1>Bean Scene</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className={classes.logo}>
            <img
              src={fb}
              alt='Facebook'
            />
            <img
              src={ig}
              alt='Instagram'
            />
            <img
              src={yt}
              alt='YouTube'
            />
            <img
              src={twttr}
              alt='Twitter'
            />
          </div>
        </div>
        {ftrNav}
      </div>
    </div>
  );
};

export default Footer;
