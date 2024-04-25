import Header from './Header';
import '../style/Home.css';

import scandinavianBg from '../images/home/background1.svg'; 
import Dining from '../images/home/dining.svg';
import Living from '../images/home/living.svg';
import Bedroom from '../images/home/bedroom.svg';

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <Header />
        <div className="header-container">
          <img src={scandinavianBg} alt="Imagem de Destaque" />
          <div className="message-overlay">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <h2 className="main-text">Browse The Range</h2>
        <div className="categories-container">
          <div className="category">
            <img src={Dining} alt="Dining" />
            <p>Dining</p>
          </div>
          <div className="category">
            <img src={Living} alt="Living" />
            <p>Living</p>
          </div>
          <div className="category">
            <img src={Bedroom} alt="Bedroom" />
            <p>Bedroom</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
