// import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Mailbox from './components/mailbox';
// import Email from './components/email';
// import axios from 'axios';

// function App() {
//   const [mails, setMails] = useState([]);
//   const [selectedMail, setSelectedMail] = useState(null);

//   useEffect(() => {
//     // Generate a new email on initial load
//     generateEmail();
//   }, []);

//   const generateEmail = () => {
//     axios
//       .get('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1')
//       .then(response => {
//         const newEmail = response.data[0];
//         const [login, domain] = newEmail.split('@'); // Splitting the email address
//         setSelectedMail({ login, domain }); // Setting login and domain separately
//         fetchMail(login, domain); // Using login and domain separately
//       })
//       .catch(error => {
//         console.error('Error generating email: ', error);
//       });
//   };

//   const fetchMail = (login, domain) => {
//     axios
//       .get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`)
//       .then(response => {
//         setMails(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching mails: ', error);
//       });
//   };

//   const fetchSingleMail = id => {
//     const { login, domain } = selectedMail; // Retrieving login and domain from selectedMail
//     axios
//       .get(
//         `https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${id}`
//       )
//       .then(response => {
//         setSelectedMail(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching single mail: ', error);
//       });
//   };

//   const refreshMails = () => {
//     const { login, domain } = selectedMail;
//     fetchMail(login, domain);
//   };

//   const copyEmail = () => {
//     // Function to copy the generated email
//     const emailInput = document.createElement('input');
//     emailInput.value = `${selectedMail?.login ?? ''}@${selectedMail?.domain ?? ''}`;
//     document.body.appendChild(emailInput);
//     emailInput.select();
//     document.execCommand('copy');
//     document.body.removeChild(emailInput);
//   };

//   return (

//     <BrowserRouter>
//       <>
//         <h1>Temporary Email Viewer</h1>
//         <div className="email-display">
//           <input
//             type="text"
//             value={`${selectedMail?.login ?? ''}@${selectedMail?.domain ?? ''}`}
//             readOnly
//           />
//           <button onClick={copyEmail}>Copy Email</button>
//           <button onClick={generateEmail}>Refresh Email</button>
//         </div>
//       </>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Mailbox mails={mails} fetchSingleMail={fetchSingleMail} refreshMails={refreshMails} />
//           }
//         />
//         <Route path="/email/:id" element={<Email email={selectedMail} />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;






import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Mailbox from './components/mailbox';
import Email from './components/email';
import axios from 'axios';
import PrivacyPolicy from './components/privatepolicy';
import Contact from './components/contact';
import './App.css';

function App() {
  const [mails, setMails] = useState([]);
  const [selectedMail, setSelectedMail] = useState(null);

  useEffect(() => {
    generateEmail();
  }, []);

  const generateEmail = () => {
    axios
      .get('https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1')
      .then(response => {
        const newEmail = response.data[0];
        const [login, domain] = newEmail.split('@');
        setSelectedMail({ login, domain });
        fetchMail(login, domain);
      })
      .catch(error => {
        console.error('Error generating email: ', error);
      });
  };

  const fetchMail = (login, domain) => {
    axios
      .get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`)
      .then(response => {
        setMails(response.data);
      })
      .catch(error => {
        console.error('Error fetching mails: ', error);
      });
  };

  const fetchSingleMail = id => {
    const { login, domain } = selectedMail;
    axios
      .get(
        `https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${id}`
      )
      .then(response => {
        setSelectedMail(response.data);
      })
      .catch(error => {
        console.error('Error fetching single mail: ', error);
      });
  };

  const refreshMails = () => {
    const { login, domain } = selectedMail;
    fetchMail(login, domain);
  };

  const copyEmail = () => {
    const emailInput = document.createElement('input');
    emailInput.value = `${selectedMail?.login ?? ''}@${selectedMail?.domain ?? ''}`;
    document.body.appendChild(emailInput);
    emailInput.select();
    document.execCommand('copy');
    document.body.removeChild(emailInput);
  };

  return (
    // <BrowserRouter>
    //   <div className="email-display">
    //     <input
    //       type="text"
    //       value={`${selectedMail?.login ?? ''}@${selectedMail?.domain ?? ''}`}
    //       readOnly
    //     />
    //     <button onClick={copyEmail}>Copy Email</button>
    //     <button onClick={generateEmail}>Refresh Email</button>
    //   </div>

    //   <div className="sidebar">
    //     <div className="logo">
    //       <h2>Logo</h2>
    //     </div>
    //     <div className="sidebar-navigation">
    //       <button onClick={''}>Inbox</button>
    //       <button onClick={refreshMails}>Refresh Inbox</button>
    //     </div>
    //   </div>

    //   <div className="mailbox">
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <Mailbox mails={mails} fetchSingleMail={fetchSingleMail} refreshMails={refreshMails} />
    //         }
    //       />
    //       <Route path="/email/:id" element={<Email email={selectedMail} />} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>





    <BrowserRouter>
      <div className="top-section">
        <div style={{ display: 'flex' }}>
          <div className="logo">
            <img src='./logo.png' alt="mail box" height={'auto'} width={'250px'} />
          </div>
        </div>
        <div className="email-display">
          <input
            type="text"
            value={`${selectedMail?.login ?? ''}@${selectedMail?.domain ?? ''}`}
            readOnly
          />
          <button onClick={copyEmail}>Copy Email</button>

        </div>

        <div className="email-display">
          <button onClick={generateEmail}>Refresh Email</button>
        </div>
      </div>

      <div className="container">
        <div className="sidebar">
          <div className="sidebar-navigation">
            <Link to="/">Inbox</Link>
            <Link to="/privatepolicy">Private Policy</Link>
            <Link to="/contact">Contact</Link>
            {/* <div style={{ height: '450px', width: '200px', backgroundColor: 'grey' }}>Ads: height:450px,width:200px</div> */}

          </div>
        </div>

        <div className="mailbox">
          <Routes>
            <Route
              path="/"
              element={
                <Mailbox mails={mails} fetchSingleMail={fetchSingleMail} refreshMails={refreshMails} />
              }
            />
            <Route path="/email/:id" element={<Email email={selectedMail} />} />
            <Route path="/privatepolicy" element={<PrivacyPolicy />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>

          {/* <div style={{ height: '200px', width: '750px', backgroundColor: 'grey' }}>Ads:<br />height:200px,width:750px</div> */}


        </div>
        {/* <div style={{ height: '500px', width: '200px', backgroundColor: 'grey' }}>Ads:<br />height:500px,width:200px</div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
