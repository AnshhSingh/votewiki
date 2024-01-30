import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        // Add your sign-up logic here
        console.log('Sign-up button clicked');
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <div className="login-container">
            <h1>Sign Up</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
            />
            {password !== confirmPassword && <p className="error-message">Passwords do not match</p>}
            <button onClick={handleSignUp}>Sign Up</button>
            <p className="login-link">Already have an account? <Link to="/login">Log in</Link></p>
        </div>
    );
};

export default SignUpPage;
