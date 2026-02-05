import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header({ onNavigate, onQuickDemo, onLogout, user }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleNav = (path, view) => {
    navigate(path)
    onNavigate?.(view)
    setMenuOpen(false)
  }

  return (
    <header className="header-wrapper">
      <div className="header-container">

        {/* LEFT: BRAND */}
        <div className="header-brand" onClick={() => navigate('/dashboard')}>
          <div className="header-logo">📋</div>
          <div>
            <div className="header-title">RTI Assistant</div>
            <div className="header-subtitle">
              Right to Information Made Easy
            </div>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="header-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* NAV */}
        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>

          {/* CENTER NAV */}
          <div className="header-nav-group">
            <button className="header-nav-btn" onClick={() => handleNav('/dashboard', 'dashboard')}>🏠 Home</button>
            <button className="header-nav-btn" onClick={() => handleNav('/draft', 'draft')}>✍️ New RTI</button>
            <button className="header-nav-btn" onClick={() => handleNav('/tracker', 'tracker')}>⏰ Track</button>
            <button className="header-nav-btn" onClick={() => handleNav('/guide', 'guide')}>📚 Guide</button>
            <button className="header-nav-btn" onClick={() => handleNav('/faq', 'faq')}>❓ FAQ</button>
            <button className="header-nav-btn" onClick={() => handleNav('/about', 'about')}>ℹ️ About</button>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="header-nav-actions">

            <button
              className="header-nav-btn primary"
              onClick={() => {
                onQuickDemo?.()
                setMenuOpen(false)
              }}
            >
              🎯 Demo
            </button>

            {user && (
              <div className="header-user">
                <div className="header-user-avatar">
                  {user.name
                    ? user.name.charAt(0).toUpperCase()
                    : user.email.charAt(0).toUpperCase()}
                </div>

                <div className="header-user-info">
                  <div className="header-user-name">
                    {user.name || 'User'}
                  </div>
                  <div className="header-user-email">
                    {user.email}
                  </div>
                </div>

                <button
                  className="header-nav-btn logout"
                  onClick={() => {
                    onLogout?.()
                    setMenuOpen(false)
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}