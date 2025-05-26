import React, { useState } from 'react';

const Contacting = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        message: ''
      });
    }, 2000);
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.header}>
          <h2 style={styles.title}>Get In Touch</h2>
          <p style={styles.subtitle}>We'd love to hear from you. Send us a message!</p>
        </div>
        
        <div style={styles.formContainer}>
          <div style={styles.inputGroup}>
            <div style={{
              ...styles.inputWrapper,
              ...(focusedField === 'name' ? styles.inputWrapperFocused : {}),
              ...(formData.name ? styles.inputWrapperFilled : {})
            }}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
                style={styles.input}
              />
              <label style={{
                ...styles.label,
                ...(focusedField === 'name' || formData.name ? styles.labelFloated : {})
              }}>Name</label>
              <div style={{
                ...styles.inputLine,
                ...(focusedField === 'name' ? styles.inputLineFocused : {})
              }}></div>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <div style={{
              ...styles.inputWrapper,
              ...(focusedField === 'mobile' ? styles.inputWrapperFocused : {}),
              ...(formData.mobile ? styles.inputWrapperFilled : {})
            }}>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                onFocus={() => handleFocus('mobile')}
                onBlur={handleBlur}
                style={styles.input}
              />
              <label style={{
                ...styles.label,
                ...(focusedField === 'mobile' || formData.mobile ? styles.labelFloated : {})
              }}>Mobile Number</label>
              <div style={{
                ...styles.inputLine,
                ...(focusedField === 'mobile' ? styles.inputLineFocused : {})
              }}></div>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <div style={{
              ...styles.inputWrapper,
              ...(focusedField === 'email' ? styles.inputWrapperFocused : {}),
              ...(formData.email ? styles.inputWrapperFilled : {})
            }}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
                style={styles.input}
              />
              <label style={{
                ...styles.label,
                ...(focusedField === 'email' || formData.email ? styles.labelFloated : {})
              }}>Your Email ID</label>
              <div style={{
                ...styles.inputLine,
                ...(focusedField === 'email' ? styles.inputLineFocused : {})
              }}></div>
            </div>
          </div>

          <div style={styles.inputGroup}>
            <div style={{
              ...styles.inputWrapper,
              ...(focusedField === 'message' ? styles.inputWrapperFocused : {}),
              ...(formData.message ? styles.inputWrapperFilled : {})
            }}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                rows="5"
                style={{...styles.input, ...styles.textarea}}
              />
              <label style={{
                ...styles.label,
                ...(focusedField === 'message' || formData.message ? styles.labelFloated : {})
              }}>Type your message here...</label>
              <div style={{
                ...styles.inputLine,
                ...(focusedField === 'message' ? styles.inputLineFocused : {})
              }}></div>
            </div>
          </div>

          <button 
            onClick={handleSubmit}
            style={{
              ...styles.submitBtn,
              ...(submitted ? styles.submitBtnSubmitted : {})
            }}
            disabled={submitted}
          >
            {submitted ? (
              <span style={styles.loading}>
                <span style={styles.loadingSpinner}></span>
                Sending...
              </span>
            ) : (
              'Submit'
            )}
          </button>
        </div>

        <div style={styles.brandIcon}>
          <svg viewBox="0 0 24 24" fill="currentColor" style={styles.icon}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    // background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    // background:'#FFD700',
    background:"white",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  wrapper: {
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
    width: '100%',
    maxWidth: '500px',
    position: 'relative',
    overflow: 'hidden'
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    margin: '0 0 10px 0'
  },
  subtitle: {
    color: '#666',
    fontSize: '16px',
    margin: '0'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  },
  inputGroup: {
    position: 'relative'
  },
  inputWrapper: {
    position: 'relative',
    transition: 'all 0.3s ease'
  },
  inputWrapperFocused: {
    transform: 'translateY(-2px)'
  },
  inputWrapperFilled: {},
  input: {
    width: '100%',
    padding: '15px 0',
    fontSize: '16px',
    border: 'none',
    outline: 'none',
    background: 'transparent',
    color: '#333',
    borderBottom: '2px solid #e0e0e0',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box'
  },
  textarea: {
    resize: 'vertical',
    minHeight: '120px',
    fontFamily: 'inherit'
  },
  label: {
    position: 'absolute',
    left: '0',
    top: '15px',
    fontSize: '16px',
    color: '#999',
    transition: 'all 0.3s ease',
    pointerEvents: 'none',
    transformOrigin: 'left center'
  },
  labelFloated: {
    transform: 'translateY(-25px) scale(0.85)',
    color: '#667eea'
  },
  inputLine: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '0',
    height: '2px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    transition: 'width 0.3s ease'
  },
  inputLineFocused: {
    width: '100%'
  },
  submitBtn: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    border: 'none',
    borderRadius: '12px',
    padding: '18px',
    fontSize: '18px',
    fontWeight: '600',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translateY(0)',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
  },
  submitBtnSubmitted: {
    background: '#4caf50',
    transform: 'scale(1.02)',
    boxShadow: '0 12px 35px rgba(76, 175, 80, 0.4)'
  },
  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px'
  },
  loadingSpinner: {
    width: '20px',
    height: '20px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTop: '2px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    display: 'inline-block'
  },
  brandIcon: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    width: '50px',
    height: '50px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
    transition: 'all 0.3s ease'
  },
  icon: {
    width: '24px',
    height: '24px'
  }
};

// Add keyframes animation for spinner
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @media (max-width: 768px) {
    .form-wrapper {
      padding: 30px 20px !important;
      margin: 10px !important;
    }
    
    .form-title {
      font-size: 28px !important;
    }
  }
  
  @media (max-width: 480px) {
    .form-wrapper {
      padding: 25px 15px !important;
    }
    
    .form-title {
      font-size: 24px !important;
    }
    
    .submit-btn {
      padding: 16px !important;
      font-size: 16px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default Contacting;