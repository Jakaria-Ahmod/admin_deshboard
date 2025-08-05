import React, { useEffect, useState } from 'react';
import ComposeModal from './components/ComposeModel';
import EmailClient from './components/EmailClint';

const Inbox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSendEmail = data => {
    console.log('Send this email:', data);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <EmailClient></EmailClient>
      <div className="p-8">
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Compose
        </button>
        <ComposeModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSend={handleSendEmail}
        />
      </div>
    </div>
  );
};

export default Inbox;
