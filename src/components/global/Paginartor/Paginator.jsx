import PropTypes from 'prop-types';
import { voidFunction } from '@utils/constans';

import './paginator.scss';

const Paginator = (props) => {
    const {
        currentPage,
        totalPages,
        onPageChange,
        pageSize,
        setPageSize = voidFunction
    } = props;

    const PAGE_NUMBER = 3;
    const PAGE_MIN = 1;

    const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

    const onClickPage = (page) => {
        if (!page || page === currentPage) return;
        onPageChange(page);
    };

    const changePageZise = (e) => {
        const value = e?.target?.value;
        setPageSize(+value);
    };

    const options = [6, 10, 20, 50];

    return (
        <div className="paginator-container">
            <div className="paginator-size-selector">
                <label>Page Size:</label>
                <select onChange={changePageZise} defaultValue={pageSize}>
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
            <div className="paginator-current">
                <span>
                    Page {currentPage} of {totalPages}
                </span>
            </div>
            <div className="paginator-actions">
                {currentPage > PAGE_MIN && (
                    <div onClick={() => onClickPage(currentPage - PAGE_MIN)}>
                        prev
                    </div>
                )}
                {currentPage > PAGE_NUMBER && (
                    <div onClick={() => onClickPage(1)}>...</div>
                )}
                {pagesArray
                    .slice(
                        totalPages >= PAGE_NUMBER
                            ? Math.min(
                                  currentPage - PAGE_MIN,
                                  totalPages - PAGE_NUMBER
                              )
                            : 0,
                        Math.max(currentPage + 2, PAGE_NUMBER)
                    )
                    .map((page) => (
                        <div
                            key={page}
                            className={currentPage == page ? 'active' : ''}
                            onClick={() => onClickPage(page)}
                        >
                            {page}
                        </div>
                    ))}
                {currentPage + PAGE_NUMBER < totalPages && (
                    <div onClick={() => onClickPage(totalPages)}>...</div>
                )}
                {currentPage < totalPages && (
                    <div onClick={() => onClickPage(currentPage + PAGE_MIN)}>
                        Next
                    </div>
                )}
            </div>
        </div>
    );
};

Paginator.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    pageSize: PropTypes.number.isRequired,
    setPageSize: PropTypes.func
};

export default Paginator;
