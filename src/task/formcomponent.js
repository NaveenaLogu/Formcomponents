import React, { useState } from 'react';

const Formcomponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    else if (!/^[A-Za-z\s]+$/.test(formData.name.trim())) {
      errors.name = 'Name must contain only letters and spaces';
    }

    const emailRegex = /^[^\s@]+@gmail\.com$/;
    if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Invalid email address';
    }
    const phoneRegex = /^\d+$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      errors.phone = 'Phone number must contain only numerical digits';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newSubmission = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };
      setSubmittedData([...submittedData, newSubmission]);

      console.log('Form submitted:', formData);
      setSuccessMessage('Form submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.name ? 'border-red-500' : ''
              }`}
          />
          {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.email ? 'border-red-500' : ''
              }`}
          />
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block font-medium text-gray-700">Phone Number</label>
          <input
            type="number"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.phone ? 'border-red-500' : ''
              }`}
          />
          {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className={`mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 ${errors.message ? 'border-red-500' : ''
              }`}
          ></textarea>
          {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-4"
          >
            Submit
          </button>

        </div>
      </form>
      {successMessage && (
        <div>
          <p className="mt-4 text-green-600">{successMessage}</p>
          <ul>
            {submittedData.map((data, index) => (
              <li key={index}>
                <p>Name: {data.name}</p>
                <p>Email: {data.email}</p>
                <p>Phone Number: {data.phone}</p>
                <p>Message: {data.message}</p>
                {index !== submittedData.length - 1 && <br />}
              </li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
};

export default Formcomponent;


