import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-semibold text-center">Contact Us</h1>
      <form className="mt-4">
        <input type="email" placeholder="Your email" className="p-2 rounded border"/>
        <button className="bg-blue-500 text-white rounded px-4 py-2 mt-2 hover:bg-blue-600 transition">Send</button>
      </form>
    </div>
  );
};

export default Contact;