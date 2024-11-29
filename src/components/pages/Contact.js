import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    // TODO: Implement actual form submission
    setTimeout(() => {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Thank you for your message. We'll get back to you soon!" }
      });
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-600">
          We're here to help with any questions about shopping with crypto
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-gray-900">Customer Support</h3>
                <p className="text-gray-600">support@velvetcoin.com</p>
                <p className="text-gray-600">Available 24/7</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Vendor Support</h3>
                <p className="text-gray-600">vendors@velvetcoin.com</p>
                <p className="text-gray-600">Mon-Fri, 9AM-6PM EST</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Press Inquiries</h3>
                <p className="text-gray-600">press@velvetcoin.com</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Office Location</h3>
                <p className="text-gray-600">
                  123 Blockchain Street<br />
                  Crypto Valley, CV 12345<br />
                  United States
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-900 text-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <a href="/faq" className="text-gray-300 hover:text-white">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="/shipping" className="text-gray-300 hover:text-white">Shipping Information</a>
              </li>
              <li>
                <a href="/returns" className="text-gray-300 hover:text-white">Returns & Refunds</a>
              </li>
              <li>
                <a href="/help" className="text-gray-300 hover:text-white">Help Center</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
          
          {status.info.msg && (
            <div className={`mb-6 p-4 rounded-md ${status.info.error ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
              {status.info.msg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full bg-yellow-400 text-gray-900 py-3 px-6 rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;