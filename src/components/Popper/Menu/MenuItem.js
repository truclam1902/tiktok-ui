import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, className }) {
    return (
        <Button className={cx('menu-item', className)} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
