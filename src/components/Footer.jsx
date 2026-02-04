import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <span className="footer-logo">📋</span>
          <div>
            <div className="footer-title">RTI Assistant</div>
            <div className="footer-sub">
              Empowering citizens with transparency
            </div>
          </div>
        </div>

        <div className="footer-links">
          <span>© {new Date().getFullYear()} RTI Assistant</span>
          <span>•</span>
          <span>Built for Digital Governance</span>
        </div>

      </div>
    </footer>
  )
}
