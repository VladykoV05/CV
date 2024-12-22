// components/Contacts/Contacts.jsx
import React from 'react';
import styles from './Contacts.module.css'; // Стили для Contacts

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <h2>Contacts</h2>
      <div className={styles.contactList}>
        <a href="mailto:vnek345@example.com" className={styles.contactItem}>Email: vnek345@example.com</a>
        <a href="tel:+1234567890" className={styles.contactItem}>Phone: +1234567890</a>
        <a href="https://t.me/example" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>Telegram: @example</a>
      </div>
    </section>
  );
};

export default Contacts;
