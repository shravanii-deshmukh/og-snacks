import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = true;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) newErrors.email = true;

    if (!formData.subject) newErrors.subject = true;
    if (!formData.message.trim()) newErrors.message = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success response
    alert(`✉️ Thank you, ${formData.name}! Your message regarding our topic has been received. Our team will contact you shortly.`);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setErrors({});
  };

  return (
    <div className="container section-padding">
      <div className="contact-layout">
        
        {/* Contact Form Column */}
        <section className="contact-form-section" aria-labelledby="contact-form-title">
          <div className="form-container-card">
            <h2 id="contact-form-title" className="form-card-title">Send Us a Message</h2>
            <p className="form-card-desc">We will get back to you within 24 business hours.</p>

            <form id="contact-us-form" onSubmit={handleFormSubmit} noValidate>
              <div className="form-row-split">
                <div className={`floating-input-group ${errors.name ? 'invalid' : ''}`}>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                    placeholder=" " 
                  />
                  <label htmlFor="contact-name">Your Full Name</label>
                  <span className="error-msg" id="name-error">Please enter your name.</span>
                </div>

                <div className={`floating-input-group ${errors.email ? 'invalid' : ''}`}>
                  <input 
                    type="email" 
                    id="contact-email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    placeholder=" " 
                  />
                  <label htmlFor="contact-email">Email Address</label>
                  <span className="error-msg" id="email-error">Please enter a valid email address.</span>
                </div>
              </div>

              <div className={`floating-input-group ${errors.subject ? 'invalid' : ''}`} style={{ marginBottom: '28px' }}>
                <select 
                  id="contact-subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                  className="custom-select-input"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: 'var(--radius-md)',
                    border: 'var(--border-thin)',
                    backgroundColor: 'var(--color-cream)',
                    color: formData.subject ? 'var(--color-text)' : 'var(--color-text-muted)',
                    cursor: 'pointer'
                  }}
                >
                  <option value="" disabled hidden>Select Inquiry Topic</option>
                  <option value="general">General Inquiry</option>
                  <option value="wholesale">Wholesale & Distribution</option>
                  <option value="feedback">Product Feedback</option>
                  <option value="collab">Partnership / Influencer Collaboration</option>
                </select>
                <span className="error-msg" id="subject-error" style={{ display: errors.subject ? 'block' : 'none' }}>Please choose a topic.</span>
              </div>

              <div className={`floating-input-group ${errors.message ? 'invalid' : ''}`}>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  placeholder=" " 
                  rows="5"
                />
                <label htmlFor="contact-message">Your Message</label>
                <span className="error-msg" id="message-error">Please write a message.</span>
              </div>

              <button type="submit" className="btn btn-primary btn-block" id="contact-submit-btn">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        </section>

        {/* Contact details side pane */}
        <aside className="contact-info-sidebar" aria-label="Contact Details">
          {/* Details Card */}
          <div className="info-card">
            <h3>Contact Details</h3>

            <div className="info-link-item">
              <div className="info-icon"><Phone size={20} /></div>
              <div className="info-text">
                <span className="info-lbl">Call Us</span>
                <a href="tel:+918596721369" className="info-val">+91 8596721369</a>
              </div>
            </div>

            <div className="info-link-item">
              <div className="info-icon"><Mail size={20} /></div>
              <div className="info-text">
                <span className="info-lbl">Email Us</span>
                <a href="mailto:hello@ogsnacks.com" className="info-val">hello@ogsnacks.com</a>
              </div>
            </div>

            <div className="info-link-item">
              <div className="info-icon"><MapPin size={20} /></div>
              <div className="info-text">
                <span className="info-lbl">Office Address</span>
                <span className="info-val">3rd Floor, Shivarpan Heights, Jaripatka Nagar, Nagpur 440014</span>
              </div>
            </div>

            <div className="info-link-item">
              <div className="info-icon"><Clock size={20} /></div>
              <div className="info-text">
                <span className="info-lbl">Working Hours</span>
                <span className="info-val">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Illustrated Map Widget */}
          <div className="mock-map-card">
            <div className="map-illustration">
              <div className="map-circle-glow"></div>
              <div className="map-marker-pin">
                <MapPin size={32} />
              </div>
            </div>
            <h4 style={{ fontFamily: 'var(--font-headers)', fontWeight: 800, fontSize: '1.2rem', marginBottom: '8px' }}>Bakery Location</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted-dark)' }}>Nagpur Headquarters, Maharashtra, India</p>
          </div>
        </aside>

      </div>
    </div>
  );
}
