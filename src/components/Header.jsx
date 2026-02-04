import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header({ onNavigate, onQuickDemo, onLogout, user }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleNav = (path, view) => {
    navigate(path)
    onNavigate(view)
    setMenuOpen(false)
  }

  return (
    <header className="header-wrapper">
      <div className="header-container">

        {/* Brand */}
        <div className="header-brand" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
          <div className="header-logo">📋</div>
          <div className="header-text">
            <div className="header-title">RTI Assistant</div>
            <div className="header-subtitle">
              Right to Information Made Easy
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="header-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${menuOpen ? 'active' : ''}`}>
          <button onClick={() => handleNav('/dashboard', 'dashboard')} className="header-nav-btn">
            🏠 Home
          </button>
          <button onClick={() => handleNav('/draft', 'draft')} className="header-nav-btn">
            ✍️ New RTI
          </button>
          <button onClick={() => handleNav('/tracker', 'tracker')} className="header-nav-btn">
            ⏰ Track
          </button>
          <button onClick={() => handleNav('/guide', 'guide')} className="header-nav-btn">
            📚 Guide
          </button>
          <button onClick={() => handleNav('/faq', 'faq')} className="header-nav-btn">
            ❓ FAQ
          </button>
          <button onClick={() => handleNav('/about', 'about')} className="header-nav-btn">
            ℹ️ About
          </button>

          <button
            className="header-nav-btn primary"
            onClick={() => {
              onQuickDemo()
              setMenuOpen(false)
            }}
          >
            🎯 Demo
          </button>

          {user && (
            <div className="header-user-menu">
              <div className="header-user-avatar">
                {user.email.charAt(0).toUpperCase()}
              </div>
              <button
                className="header-nav-btn"
                onClick={() => {
                  onLogout()
                  setMenuOpen(false)
                }}
              >
                Logout
              </button>
            </div>
          )}
        </nav>

      </div>
    </header>
  )
}
