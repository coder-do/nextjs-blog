import React from 'react';
import ReactDOM from 'react-dom';
import styles from '@/uiStyle/notification.module.css';


function Notification({ title, message, status }: any): JSX.Element {
    let statusstyles = '';

    if (status === 'success') {
        statusstyles = styles.success;
    }

    if (status === 'error') {
        statusstyles = styles.error;
    }

    const cssstyles = `${styles.notification} ${statusstyles}`;


    return ReactDOM.createPortal(
        <div className={cssstyles}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>,
        document.body
    );
}

export default Notification;