import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

const useCBTable = (props) => {
    const { data } = props;

    const [search, setSearch] = useState('');

    const [pageOptions, setPageOptions] = useState({
        currentPage: 1,
        pageSize: 6,
        totalPages: 1,
        totalElements: 0
    });

    const filterData = useMemo(() => {
        return data.filter(
            (item) =>
                item.name.toLowerCase().includes(`${search.toLowerCase()}`) ||
                `${item.age}`
                    .toLowerCase()
                    .includes(`${search.toLowerCase()}`) ||
                item.city.toLowerCase().includes(`${search.toLowerCase()}`)
        );
    }, [data, search]);

    const displayData = useMemo(() => {
        return filterData.slice(
            (pageOptions.currentPage - 1) * pageOptions.pageSize,
            pageOptions.currentPage * pageOptions.pageSize
        );
    }, [filterData, pageOptions.currentPage, pageOptions.pageSize]);

    useEffect(() => {
        const dataLength = filterData?.length || 1;
        setPageOptions((prev) => ({
            ...prev,
            totalPages: Math.max(
                Math.ceil(dataLength / pageOptions.pageSize),
                1
            ),
            currentPage: 1,
            totalElements: dataLength
        }));
    }, [pageOptions.pageSize, filterData]);

    return { displayData, search, setSearch, pageOptions, setPageOptions };
};

useCBTable.propTypes = {
    data: PropTypes.array.isRequired
};

export default useCBTable;
