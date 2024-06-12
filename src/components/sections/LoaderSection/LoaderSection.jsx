import { Loader } from '@global';

import './loadersection.scss';
const LoaderSection = () => {
    return (
        <div className="loader-section-fullpage">
            <div className="loader-section-block">
                <Loader />
            </div>
        </div>
    );
};

export default LoaderSection;
