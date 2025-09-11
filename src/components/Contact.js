import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // generic change handler for all inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Basic client-side validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      window.alert('Please fill in all fields before submitting.');
      return;
    }

    // Show submitted data (placeholder for real backend)
    window.alert(
      `Submitted!\n\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`
    );

    // Optionally clear the form after submit
    setForm({ name: '', email: '', message: '' });
  }

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your name"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message..."
            rows="5"
            required
          />
        </div>

        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
