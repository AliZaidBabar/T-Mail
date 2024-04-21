import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Mailbox = ({ mails, fetchSingleMail, refreshMails }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      refreshMails(); // Fetch new emails
    }, 10000); // Refresh every 10 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [refreshMails]);

  return (
    <div className="mailbox-container">
      <h2>Your Inbox</h2>
      <button onClick={refreshMails}>Refresh Emails</button>
      {mails.length === 0 ? (

        <>
          <p>Your inbox is currently empty</p>
          <img src='https://cdn.pixabay.com/photo/2023/06/09/19/37/letter-8052497_640.png' alt="mail box" height={'200px'} width={'200px'}/>

        </>

      ) : (
        <ul>
          {mails.map(mail => (
            <li key={mail.id}>
              <Link to={`/email/${mail.id}`} onClick={() => fetchSingleMail(mail.id)}>
                <div className="mail-item">
                    <strong><span style={{color:'black'}}>From:</span> {mail.from}</strong>
                    <p><span style={{color:'black'}}>Subject:</span> {mail.subject}</p>
                    <p><span style={{color:'black'}}>Date:</span> {mail.date}</p>
                  <button className="view-mail-button">View</button>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Mailbox;
