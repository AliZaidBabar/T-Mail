import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Email = ({ email }) => {
  const navigate = useNavigate();

  if (!email) {
    return <div>Loading...</div>; // You can add a loading state or handle errors here
  }

  const { from, subject, date, attachments, body, textBody, htmlBody } = email;

  const goBack = () => {
    navigate(-1); // Navigate back one step in the history
  };

  return (
    <div className="email-details-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Email Details</h2>
        <button className="view-mail-button" onClick={goBack}>Back</button>
        <button className="view-mail-button" onClick={goBack}>Home</button>

      </div>
      <p>From: {from}</p>
      <p>Subject: {subject}</p>
      <p>Date: {date}</p>
      <p>Body: {textBody}</p>
      {attachments && attachments.length > 0 && (
        <div className="attachments">
          <h3>Attachments:</h3>
          <ul>
            {attachments.map(attachment => (
              <li key={attachment.filename}>
                {attachment.filename} - {attachment.contentType} - {attachment.size} bytes
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Email;
