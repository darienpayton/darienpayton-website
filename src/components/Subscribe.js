import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

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
      <input
        style={{
          marginRight: '.5rem',
          padding: '1rem',
          width: '40%',
          fontSize: '1rem'
        }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <button
        style={{
          width: '20%',
          padding: '1rem',
          backgroundColor: '#fcfcfd',
          color: '#226597',
          fontSize: '1rem',
          borderRadius: '.3rem'
        }}
        onClick={submit}
      >
        Subscribe
      </button>
    </div>
  );
};

const Subscribe = () => {
  const url =
    'https://gmail.us3.list-manage.com/subscribe/post?u=d84d7271316e3ca691e873054&amp;id=a8d37823bf';

  return (
    <div className="signup">
      <h2>Newsletter</h2>
      <p>
        Every Thursday I send out a newsletter containing stories and links I
        found interesting. It's a great chance for us to get to know each other
        better - I ask how I can help you and I (infrequently) ask your help.
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
