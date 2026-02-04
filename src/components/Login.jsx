import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login({ onLogin }) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [selectedRole, setSelectedRole] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate()

  function handleLogin() {
    if (!selectedRole || !email.trim()) {
      alert('Please select a role and enter an email')
      return
    }
    
    const userData = {
      role: selectedRole,
      email,
      name: isSignUp ? name : email.split('@')[0],
      loginTime: new Date().toISOString()
    }
    
    localStorage.setItem('rtia.user', JSON.stringify(userData))
    onLogin(userData)
    navigate('/dashboard')
  }

  const roles = [
    { id: 'citizen', label: 'Citizen', icon: '👤', desc: 'File RTI requests & track status', color: '#3b82f6' },
    { id: 'pio', label: 'PIO Officer', icon: '👨‍💼', desc: 'Respond to RTI requests', color: '#8b5cf6' },
    { id: 'authority', label: 'Appellate Authority', icon: '⚖️', desc: 'Review appeals & cases', color: '#ec4899' }
  ]

  return (
    <div className="login-wrapper">
      {/* Hero Section */}
      <div className="login-hero">
        <div className="hero-content">
          <div className="hero-logo">📋</div>
          <h1 className="hero-title">RTI Assistant</h1>
          <p className="hero-subtitle">Right to Information Portal</p>
          <p className="hero-description">
            Your digital companion for filing RTI requests, tracking appeals, and accessing government information with ease.
          </p>
          
          {/* Features */}
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">🤖</span>
              <span>AI-Powered Drafting</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <span>Real-Time Tracking</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Fast Processing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Section */}
      <div className="login-auth">
        <div className="auth-container">
          {/* Toggle Tabs */}
          <div className="auth-tabs">
            <button 
              className={`auth-tab ${!isSignUp ? 'active' : ''}`}
              onClick={() => {
                setIsSignUp(false)
                setName('')
                setPassword('')
              }}
            >
              Sign In
            </button>
            <button 
              className={`auth-tab ${isSignUp ? 'active' : ''}`}
              onClick={() => {
                setIsSignUp(true)
                setPassword('')
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <div className="auth-form">
            {/* Sign Up Extra Fields */}
            {isSignUp && (
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            {/* Email */}
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            {isSignUp && (
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}

            {/* Role Selection */}
            <div className="form-group">
              <label className="form-label">Select Your Role</label>
              <div className="role-grid-login">
                {roles.map((role) => (
                  <div
                    key={role.id}
                    className={`role-card-login ${selectedRole === role.id ? 'selected' : ''}`}
                    onClick={() => setSelectedRole(role.id)}
                    style={{
                      borderColor: selectedRole === role.id ? role.color : undefined,
                      backgroundColor: selectedRole === role.id ? `${role.color}10` : undefined
                    }}
                  >
                    <div className="role-icon-login">{role.icon}</div>
                    <div className="role-name-login">{role.label}</div>
                    <div className="role-desc-login">{role.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="auth-button"
              onClick={handleLogin}
              disabled={!selectedRole || !email.trim()}
            >
              {isSignUp ? 'Create Account' : 'Sign In'} as{' '}
              {selectedRole ? roles.find(r => r.id === selectedRole)?.label : 'User'}
            </button>

            {/* Info Message */}
            <div className="auth-info">
              <span className="info-icon">ℹ️</span>
              <span className="info-text">
                Demo login — no authentication required. Data stored locally for this session.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
