import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f89b316574f8f0ab300e20d4b7ff6a29~c5_100x100.jpeg?x-expires=1663340400&x-signature=rsoD3MDqcci1PHTmIcYCLPKIdUQ%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Dao Le Phuong Hoa</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <span className={cx('username')}>daolephuonghoa</span>
            </div>
        </div>
    );
}

export default AccountItem;
