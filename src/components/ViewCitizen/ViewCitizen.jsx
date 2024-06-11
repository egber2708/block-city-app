import PropTypes from 'prop-types';
import Avvvatars from 'avvvatars-react';
import { SCAN_URL } from '../../utils/constans';
import useGetNoteByCitizenId from '../../services/Metamask/useGetNoteByCitizenId';
import Loader from '../Loader/Loader';
import './viewcitizen.scss';
const ViewCitizen = (props) => {
    const {
        citizen: { name, age, city, hash, id },
        web3
    } = props;

    const { loading, note } = useGetNoteByCitizenId({ web3, id });

    return (
        <div className="citizen-view">
            <div className="citizen-card">
                <div className="citizen-avatar">
                    <Avvvatars
                        value={name}
                        borderColor="black"
                        border
                        size={64}
                    />
                </div>

                <div className="citizen-detail">
                    <p>{name}</p>
                    <p>{age} years,</p>
                    <p>{city}</p>
                </div>
            </div>
            <div className="citizen-message">
                <label>Note:</label>
                <div className="citizen-textarea">
                    {loading ? <Loader /> : <p> {note} </p>}
                </div>
            </div>
            <div className="citizen-hash">
                <label>Hash:</label>
                <a className="link" href={SCAN_URL + hash} target="_blank">
                    {hash}
                </a>
            </div>
        </div>
    );
};

ViewCitizen.propTypes = {
    web3: PropTypes.object.isRequired,
    citizen: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        hash: PropTypes.string.isRequired
    }).isRequired
};

export default ViewCitizen;
