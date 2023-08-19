import PropTypes from 'prop-types';
import styles from './Filter.module.css'

export default function Filter({ value, onChange }) {
    return (
        <div className={styles.section}>
            <h3>Find contacts by name</h3>
            <input type="text" value={value} onChange={onChange}/>
        </div>
    )
    }
Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
}