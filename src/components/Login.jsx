import { useState } from 'react'

export default function Login({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState(null)
  const [email, setEmail] = useState('')

  function handleLogin() {
    if (!selectedRole || !email.trim()) {
      alert('Please select a role and enter an email')
      return
    }
    
    const userData = {
      role: selectedRole,
      email,
      loginTime: new Date().toISOString()
    }
    
    localStorage.setItem('rtia.user', JSON.stringify(userData))
    onLogin(userData)
  }

  const roles = [
    { id: 'citizen', label: 'Citizen', icon: '👤', desc: 'File RTI requests & track status' },
    { id: 'pio', label: 'PIO Officer', icon: '👨‍💼', desc: 'Respond to RTI requests' },
    { id: 'authority', label: 'Appellate Authority', icon: '⚖️', desc: 'Review appeals & cases' }
  ]

  return (
    <div className="login-container">
      <div className="login-card">
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📋</div>
          <h1 className="h1">RTI Assistant</h1>
          <p className="small-muted">Right to Information Portal</p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={{ display: 'block', marginBottom: 12, fontWeight: 600, fontSize: 14 }}>
            Select Your Role
          </label>
          <div className="roles-grid">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`role-card ${selectedRole === role.id ? 'selected' : ''}`}
                onClick={() => setSelectedRole(role.id)}
              >
                <div style={{ fontSize: 32, marginBottom: 8 }}>{role.icon}</div>
                <div style={{ fontWeight: 600, marginBottom: 4 }}>{role.label}</div>
                <div style={{ fontSize: 11, color: '#666' }}>{role.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, fontSize: 14 }}>
            Email
          </label>
          <input
            type="email"
            className="field"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
          />
        </div>

        <button
          className="btn"
          onClick={handleLogin}
          style={{ width: '100%', justifyContent: 'center' }}
        >
          Login as {selectedRole ? (roles.find(r => r.id === selectedRole)?.label || 'User') : 'Select Role'}
        </button>

        <div className="notice" style={{ marginTop: 16 }}>
          <span>ℹ️</span>
          <span>Demo login — no backend required. Data stored locally.</span>
        </div>
      </div>
    </div>
  )
}
