import React, { useState } from 'react';
import '../styles/App.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (value === '') {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors({ ...errors, email: 'Invalid email address' });
    } else {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your form submission logic
    console.log('Form submitted:', formData);
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;