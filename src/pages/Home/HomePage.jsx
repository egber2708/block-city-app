import './home-page.scss';

import worldImage from '../../assets/world.png';
import pin1 from '../../assets/pin1.png';
import pin2 from '../../assets/pin2.png';
import pin3 from '../../assets/pin3.png';

function HomePage() {
    return (
        <div className="home-page">
            <div className="home-description">
                <h1>Home Page</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis tempora aut dolores. Enim vitae aliquam fuga iusto ex
                    sapiente ad dolorem rem ipsam explicabo consequuntur nostrum harum, saepe quo accusantium?
                </p>
                <button> Connect </button>
            </div>
            <div className="home-image">
                <h1>Home Page</h1>
                <div className="home-image-container">
                    <img className="image-locator locator_top_rigth" src={pin1} width={45} alt="placeholder" />
                    <img className="image-locator locator_middle_right" src={pin2} width={45} alt="placeholder" />
                    <img className="image-locator locator_middle" src={pin3} width={45} alt="placeholder" />
                    <img className="image-locator locator_middle_left" src={pin1} width={45} alt="placeholder" />
                    <img className="image-locator locator_bottom_left" src={pin3} width={45} alt="placeholder" />
                    <img className="image-locator locator_bottom_right" src={pin2} width={45} alt="placeholder" />
                    <img className="image--world" src={worldImage} alt="placeholder" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
