import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from './components/AuthLayout';
import { Link, useLocation } from 'react-router-dom';
import { Input } from './components/Input';
import styles from './SignIn.module.css';

const SignIn = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignIn = (e) => {
    e.preventDefault();
  
    if (email === 'user@email.com' && password === 'user123') {
      const userData = { name: 'Maiqis', role: 'user' }; 
      onSignIn(userData); 
      navigate('/');

    } else if (email === 'admin@email.com' && password === 'admin123') {
      const adminData = { name: 'Ms. Najwa', role: 'admin' };
      onSignIn(adminData);
      navigate('/admin-home');

    } else if (email === 'staff@email.com' && password === 'staff123') {
      const staffData = { name: 'Dr. Syaza', role: 'medical-staff' };
      onSignIn(staffData);
      navigate('/appointment-view-ms');
      
    } else {
      setError('Invalid email or password');
    }
  };

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  return (
    <AuthLayout>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.welcome}>
            Welcome to <span className={styles.brandText}>BloodConnect</span>
          </h2>
          <nav className={styles.authNav}>
            <Link to="/sign-in" className={styles.navLink}>
              <button className={`${styles.activeButton} ${location.pathname === '/sign-in' ? styles.active : ''}`}>
                Sign In
              </button>
            </Link>
            <Link to="/sign-up" className={styles.navLink}>
              <button className={`${styles.inactiveButton} ${location.pathname === '/sign-up' ? styles.active : ''}`}>
                Sign Up
              </button>
            </Link>
          </nav>
        </header>
        
        <form className={styles.form} onSubmit={handleSignIn}>
          <Input
            label="Enter your email address"
            placeholder="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Enter your password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <button
            type="submit"
            className={`${styles.submitButton} ${isFormValid ? styles.enabled : styles.disabled}`}
            disabled={!isFormValid}
          >
            Sign In
          </button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
