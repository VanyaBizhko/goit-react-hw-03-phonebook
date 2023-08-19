import PropTypes from 'prop-types';
import styles from './ContactList.module.css'

export default function ContactList({ contacts, contactDelete }) {
    return (
        <div>
            <ul>
                {contacts.map((contact) => (
                    <li className={styles.item} key={contact.id}>
                        {contact.name}: <br />
                        {contact.number}
                        <button className={styles.button} onClick={() => contactDelete(contact.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
ContactList.propTypes={
    contacts: PropTypes.array,
    contactDelete: PropTypes.func,
}