import worldImage from '@assets/world.png';
import pin1 from '@assets/pin1.png';
import pin2 from '@assets/pin2.png';
import pin3 from '@assets/pin3.png';

import './worldimage.scss';

const WorldImage = () => {
    return (
        <div className="world-image-container">
            <img
                className="image-locator locator_top_rigth"
                src={pin1}
                width={45}
                alt="placeholder"
            />
            <img
                className="image-locator locator_middle_right"
                src={pin2}
                width={45}
                alt="placeholder"
            />
            <img
                className="image-locator locator_middle"
                src={pin3}
                width={45}
                alt="placeholder"
            />
            <img
                className="image-locator locator_middle_left"
                src={pin1}
                width={45}
                alt="placeholder"
            />
            <img
                className="image-locator locator_bottom_left"
                src={pin3}
                width={45}
                alt="placeholder"
            />
            <img
                className="image-locator locator_bottom_right"
                src={pin2}
                width={45}
                alt="placeholder"
            />
            <img className="image--world" src={worldImage} alt="placeholder" />
        </div>
    );
};

export default WorldImage;
