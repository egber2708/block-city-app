import PropTypes from 'prop-types';
import { voidFunction } from '../../utils/constans';
import Avvvatars from 'avvvatars-react';

import './cbtable.scss';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import Paginator from '../Paginartor/Paginator';
import useCBTable from '../../services/hooks/useCBTable';

const CBTable = ({ data, showDetail = voidFunction, loading = true }) => {
    const { displayData, search, setSearch, pageOptions, setPageOptions } =
        useCBTable({
            data
        });

    return (
        <div className="table-container">
            <div className="table-title">
                <div className="table-search">
                    <input
                        type="search"
                        name=""
                        id=""
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by Name,  Age, City"
                    />
                </div>
            </div>
            <div>
                <div className="tabledata-container">
                    <table className="tables-display">
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>City</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayData.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <Avvvatars value={item.name} />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.age}</td>
                                    <td>{item.city}</td>
                                    <td>
                                        <div onClick={() => showDetail(item)}>
                                            {' '}
                                            View{' '}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Paginator
                    currentPage={pageOptions.currentPage}
                    totalPages={pageOptions.totalPages}
                    onPageChange={(page) =>
                        setPageOptions((prev) => ({
                            ...prev,
                            currentPage: page
                        }))
                    }
                    pageSize={pageOptions.pageSize}
                    setPageSize={(size) =>
                        setPageOptions((prev) => ({ ...prev, pageSize: size }))
                    }
                />
            </div>
            <Modal
                open={loading}
                content={<Loader />}
                size={'sm'}
                title="Loading"
            />
        </div>
    );
};

CBTable.propTypes = {
    data: PropTypes.array.isRequired,
    showDetail: PropTypes.func,
    loading: PropTypes.bool
};

export default CBTable;
