import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import styles from './Search.module.scss';
import Popper from '../../../components/Popper';
import { useEffect, useRef, useState } from 'react';
import ApiSearchData from '~/components/ApiSearchData';
import { useDebounce } from '~/components/hooks';
import ProductSearch from '~/components/ProductSearch';
import { removeAccent } from '~/components/method';

const cx = classNames.bind(styles);
function Search() {
    const [showResults, setShowResults] = useState([]);
    const [filterValues, setFilterValues] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [clearValue, setClearValue] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debouncedValue = useDebounce(inputValue, 800);

    useEffect(() => {
        const fetchData = async () => {
            const data = await ApiSearchData();
            setShowResults(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        // If debouncedValue is empty after trimming, stop loading and clear results
        if (!debouncedValue.trim()) {
            setFilterValues([]);
            setLoading(false);
            return;
        }

        setLoading(true);
        const filters = showResults.filter((result) =>
            removeAccent(result.name.toLowerCase()).includes(removeAccent(debouncedValue.toLowerCase())),
        );
        setFilterValues(filters);
        setLoading(false);
    }, [debouncedValue, showResults]);

    const handleClearValue = () => {
        setInputValue('');
        setFilterValues([]);
        setLoading(false);
        setClearValue(false);
        inputRef.current.focus();
    };
    const handleClearResult = () => {
        setClearValue(false);
        setFilterValues([]);
    };

    return (
        <div className={cx('wrapper')}>
            <Tippy
                visible={clearValue && filterValues.length > 0}
                interactive={true}
                placement="bottom"
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <Popper className={cx('popper')}>
                            {filterValues.map((result, index) => (
                                <ProductSearch key={index} data={result} />
                            ))}
                        </Popper>
                    </div>
                )}
                onClickOutside={handleClearResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={inputValue}
                        type="text"
                        placeholder="Tìm kiếm..."
                        onChange={(e) => {
                            const trimValue = e.target.value.trimStart();
                            setInputValue(trimValue);

                            if (trimValue) {
                                setLoading(true);
                            } else {
                                setFilterValues([]);
                                setLoading(false);
                            }
                        }}
                        onFocus={() => setClearValue(true)}
                    />

                    {!!inputValue && !loading && (
                        <button className={cx('clear')} onClick={handleClearValue}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />}

                    <Tippy content="Tìm kiếm" placement="right">
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </Tippy>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
