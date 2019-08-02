import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import MediaQuery from 'react-responsive';

import '../styles/subscribe.scss';

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value
    });

  return (
    <div style={{ marginBottom: '2rem' }}>
      {status === 'sending' && (
        <div style={{ color: '#204969' }}>sending...</div>
      )}
      {status === 'error' && (
        <div
          style={{ color: 'red' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === 'success' && (
        <div
          style={{ color: 'green' }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <MediaQuery minDeviceWidth={700}>
        <input
          style={{
            marginRight: '.5rem',
            padding: '1rem',
            width: '40%',
            fontSize: '1rem'
          }}
          ref={node => (email = node)}
          type="email"
          placeholder="Email Address"
        />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={500}>
        <input
          style={{
            textAlign: 'center',
            padding: '1rem',
            width: '100%',
            fontSize: '1rem'
          }}
          ref={node => (email = node)}
          type="email"
          placeholder="Email Address"
        />
      </MediaQuery>
      <MediaQuery maxDeviceWidth={500}>
        <button
          style={{
            width: '35%',
            padding: '1rem',
            backgroundColor: '#fcfcfd',
            color: '#226597',
            fontSize: '1rem',
            border: '3px solid #226597',
            borderRadius: '.3rem'
          }}
          onClick={submit}
        >
          Subscribe
        </button>
      </MediaQuery>
      <MediaQuery minDeviceWidth={700}>
        <button
          style={{
            width: '30%',
            padding: '1rem',
            backgroundColor: '#fcfcfd',
            color: '#226597',
            fontSize: '1rem',
            border: '3px solid #226597',
            borderRadius: '.3rem'
          }}
          onClick={submit}
        >
          Subscribe
        </button>
      </MediaQuery>
    </div>
  );
};

const Subscribe = () => {
  const url =
    'https://gmail.us3.list-manage.com/subscribe/post?u=d84d7271316e3ca691e873054&amp;id=a8d37823bf';

  return (
    <div className="signup">
      <h2>On Brown Street</h2>
      <p>
        Every Thursday I send out a newsletter containing stories and links I
        found interesting, plus new essays. To make it even better: every week,
        you get a chance to tell me how I can help you.
      </p>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            subscribe={subscribe}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default Subscribe;
