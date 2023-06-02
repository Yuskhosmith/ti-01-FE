import { Fragment } from 'react';
import './App.css';
import Hero from './components/hero/hero.component';
import Discover from './components/discover/discover.component';
import Banner from './components/banner/banner.component';
import Feedback from './components/feedback/feedback.component';
import Subscribe from './components/subscribe/subscribe.component';
import Footer from './components/footer/footer.component';

function App() {
  return (
    <Fragment>
      <Hero />
      <Discover />
      <Banner />
      <Feedback />
      <Subscribe />
      <Footer />
    </Fragment>
  );
}

export default App;
