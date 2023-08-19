import PropTypes from 'prop-types';
import styles from './ContactForm.module.css'

export default function ContactForm({ name, handleInput, number, handleButton }) {
    return (
        <div className={styles.section}>
        <label className={styles.title}>Name</label>
            <input
                onChange={handleInput}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            />
            <label className={styles.title}>Number</label>
            <input
                onChange={handleInput}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
/>
        <button className={styles.button} type="button" onClick={handleButton}>Add Contact</button>
    </div>
    )
}
ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    handleButton: PropTypes.func,
    handleInput: PropTypes.func,
}