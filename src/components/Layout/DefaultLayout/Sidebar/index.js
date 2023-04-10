import Styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(Styles)
function Sidebar(){
    return (
        <div className = {cx('wrapper')}>
            <h2>
                Sidebar
            </h2>
        </div>
    )
}
export default Sidebar