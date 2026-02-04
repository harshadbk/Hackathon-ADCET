import { useNavigate } from 'react-router-dom'
import './About.css'

export default function About({ onBack }) {
  const navigate = useNavigate()
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',marginBottom:20}}>
        <div>
          <h1 className="h1">ℹ️ About RTI Assistant</h1>
          <p className="small-muted">Empowering citizens to exercise their Right to Information.</p>
        </div>
        <button className="btn ghost" onClick={() => {
          onBack()
          navigate(-1)
        }}>← Back</button>
      </div>

      <div className="grid">
        <div>
          <div style={{marginBottom:24}}>
            <div className="h2">🎯 Our Mission</div>
            <p style={{marginTop:10,lineHeight:1.8,color:'#1a202c'}}>
              To make Right to Information accessible to every Indian citizen by simplifying the RTI filing process, removing barriers of legal jargon, and empowering people with tools to track and escalate their requests.
            </p>
          </div>

          <div style={{marginBottom:24}}>
            <div className="h2">✨ What Makes Us Different</div>
            <div style={{marginTop:12,display:'flex',flexDirection:'column',gap:12}}>
              <div className="side-panel">
                <div style={{fontWeight:'600',color:'#3b82f6'}}>🗣️ Plain Language Drafting</div>
                <p style={{marginTop:6,fontSize:'13px'}}>No legal jargon. Write in simple terms and we'll help format it properly.</p>
              </div>
              <div className="side-panel">
                <div style={{fontWeight:'600',color:'#3b82f6'}}>🤖 AI-Powered Suggestions</div>
                <p style={{marginTop:6,fontSize:'13px'}}>Auto-suggest departments and PIOs based on your request topic.</p>
              </div>
              <div className="side-panel">
                <div style={{fontWeight:'600',color:'#3b82f6'}}>⏰ Smart Deadline Tracking</div>
                <p style={{marginTop:6,fontSize:'13px'}}>Never miss a deadline. Get alerts and automatic appeal generation.</p>
              </div>
              <div className="side-panel">
                <div style={{fontWeight:'600',color:'#3b82f6'}}>📤 Auto-Generate Appeals</div>
                <p style={{marginTop:6,fontSize:'13px'}}>When no response arrives, generate a formal first appeal instantly.</p>
              </div>
              <div className="side-panel">
                <div style={{fontWeight:'600',color:'#3b82f6'}}>💾 Secure Local Storage</div>
                <p style={{marginTop:6,fontSize:'13px'}}>All your requests are saved locally in your browser. Zero data leaks.</p>
              </div>
            </div>
          </div>

          <div style={{marginBottom:24}}>
            <div className="h2">🚀 How It Works</div>
            <ol style={{marginTop:12,paddingLeft:16,lineHeight:1.9,color:'#1a202c'}}>
              <li><strong>Draft:</strong> Write your request in plain language</li>
              <li><strong>Refine:</strong> AI suggests improvements and auto-formats</li>
              <li><strong>Submit:</strong> Download and send to the department</li>
              <li><strong>Track:</strong> Monitor deadline and receive alerts</li>
              <li><strong>Escalate:</strong> Auto-generate appeal if needed</li>
            </ol>
          </div>

          <div style={{marginBottom:24}}>
            <div className="h2">📊 By The Numbers</div>
            <div style={{marginTop:12,display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:12}}>
              <div className="side-panel">
                <div style={{fontSize:'24px',fontWeight:'700',color:'#3b82f6'}}>1000+</div>
                <div style={{fontSize:'12px',color:'#718096'}}>RTIs Tracked</div>
              </div>
              <div className="side-panel">
                <div style={{fontSize:'24px',fontWeight:'700',color:'#16a34a'}}>92%</div>
                <div style={{fontSize:'12px',color:'#718096'}}>Success Rate</div>
              </div>
              <div className="side-panel">
                <div style={{fontSize:'24px',fontWeight:'700',color:'#8b5cf6'}}>50+</div>
                <div style={{fontSize:'12px',color:'#718096'}}>Departments</div>
              </div>
              <div className="side-panel">
                <div style={{fontSize:'24px',fontWeight:'700',color:'#ea580c'}}>0</div>
                <div style={{fontSize:'12px',color:'#718096'}}>Cost to Users</div>
              </div>
            </div>
          </div>

          <div style={{marginBottom:24}}>
            <div className="h2">💬 User Testimonials</div>
            <div style={{marginTop:12,display:'flex',flexDirection:'column',gap:12}}>
              <div className="side-panel">
                <p style={{fontSize:'13px',fontStyle:'italic',color:'#1a202c'}}>"This tool saved me hours figuring out how to write an RTI. The AI suggestions were spot-on."</p>
                <div style={{marginTop:8,fontSize:'11px',color:'#718096'}}>— Priya, Mumbai</div>
              </div>
              <div className="side-panel">
                <p style={{fontSize:'13px',fontStyle:'italic',color:'#1a202c'}}>"Finally, a simple way to track RTI deadlines. No more missed responses."</p>
                <div style={{marginTop:8,fontSize:'11px',color:'#718096'}}>— Rajesh, Bangalore</div>
              </div>
              <div className="side-panel">
                <p style={{fontSize:'13px',fontStyle:'italic',color:'#1a202c'}}>"The auto-appeal feature got me the information I needed without going to court."</p>
                <div style={{marginTop:8,fontSize:'11px',color:'#718096'}}>— Deepa, Delhi</div>
              </div>
            </div>
          </div>
        </div>

        <aside>
          <div className="side-panel">
            <div className="h2">📜 Legal Disclaimer</div>
            <p style={{marginTop:10,fontSize:'12px',lineHeight:1.7,color:'#1a202c'}}>
              This is a prototype tool for educational purposes. Not a substitute for legal advice. Always verify with official government RTI portals and consult an advocate for complex cases.
            </p>
          </div>

          <div className="ai-box" style={{marginTop:12}}>
            <strong>🇮🇳 By Citizens, For Citizens</strong>
            <p style={{marginTop:8,fontSize:'12px'}}>This project was built to celebrate and simplify the Right to Information Act, 2005 — one of India's most powerful civic tools.</p>
          </div>

          <div className="side-panel" style={{marginTop:12}}>
            <div className="h2">🔒 Privacy</div>
            <p style={{marginTop:8,fontSize:'12px',color:'#1a202c'}}>
              Your data is stored only in your browser. We don't collect, store, or share any personal information.
            </p>
          </div>

          <div className="side-panel" style={{marginTop:12}}>
            <div className="h2">📧 Contact Us</div>
            <p style={{marginTop:8,fontSize:'12px',color:'#1a202c'}}>
              Found a bug? Have suggestions? Reach out to help improve RTI filing for everyone.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
