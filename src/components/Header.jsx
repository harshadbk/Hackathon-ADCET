import { useState } from 'react'

export default function Header({ onNavigate, onQuickDemo, onLogout, user }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNavClick(view) {
    onNavigate(view)
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="brand">
        <div className="logo-mark">📋</div>
        <div className="brand-info">
          <div className="brand-title">RTI Assistant</div>
          <div className="brand-sub">Right to Information Made Easy</div>
        </div>
      </div>

      <button
        className="hamburger-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        title="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <button onClick={() => handleNavClick('dashboard')} title="Home">
          <span>🏠</span> Home
        </button>
        <button onClick={() => handleNavClick('draft')} title="Create new RTI">
          <span>✍️</span> New RTI
        </button>
        <button onClick={() => handleNavClick('tracker')} title="Track requests">
          <span>⏰</span> Track
        </button>
        <button onClick={() => handleNavClick('guide')} title="Guide & Resources">
          <span>📚</span> Guide
        </button>
        <button onClick={() => handleNavClick('faq')} title="FAQ">
          <span>❓</span> FAQ
        </button>
        <button onClick={() => handleNavClick('about')} title="About">
          <span>ℹ️</span> About
        </button>
        <button
          className="demo"
          onClick={() => {
            onQuickDemo()
            setMenuOpen(false)
          }}
          title="Load sample data"
        >
          <span>🎯</span> Demo
        </button>
        {user && (
          <>
            <div className="user-info">
              <span>{user.email}</span>
            </div>
            <button
              className="btn ghost"
              onClick={() => {
                onLogout()
                setMenuOpen(false)
              }}
              title="Logout"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  )
}
