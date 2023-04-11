import { useEffect, useState } from 'react'
import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import images from '../../../../assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Wrapper as PopperWrapper } from '../../../../components/Popper'
const cx = classNames.bind(styles)
function Header() {
    const [searchResult, setSearchResult] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3])
        }, 3000)
    }, [])
    return (
        <header className={cx('wrapper')} >
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt='Loi LoGo' />
                </div>

                <Tippy
                    visible={searchResult.length > 0}
                    render={attrs => {
                        return (
                            <div className={cx('search-result')} tabIndex={-1}>
                            <PopperWrapper>
                                Kết Quả
                            </PopperWrapper>
                            </div>
                        )
                    }}
                >
                    <div className={cx('search')}>
                        <input placeholder='search account or videos' spellCheck={false}>
                        </input>
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}></div>
            </div>
        </header>
    )
}
export default Header