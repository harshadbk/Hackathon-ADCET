import RequestCard from './RequestCard'

export default function Dashboard({ requests = [], onNew, onOpen, onTrack }) {
  const recent = requests.slice(0, 6)
  const responded = requests.filter(r => r.status === 'responded').length
  const pending = requests.filter(r => r.status === 'awaiting_response').length
  const overdue = requests.filter(r => {
    const left = Math.ceil((new Date(new Date(r.createdAt).getTime() + r.deadlineDays*24*3600*1000) - new Date())/(24*3600*1000))
    return left < 0 && r.status === 'awaiting_response'
  }).length

  return (
    <div>
      <div className="card card-header">
        <div>
          <h1 className="h1">🏛️ RTI Assistant Dashboard</h1>
          <p className="small-muted">File, draft and track Right to Information requests with AI guidance. Empower yourself with transparency.</p>
        </div>
        <div className="flex-row" style={{gap:8,marginTop:0}}>
          <button className="btn" onClick={onNew}>
            <span>✍️</span> New RTI
          </button>
          <button className="btn ghost" onClick={onTrack}>
            <span>⏰</span> Track
          </button>
        </div>
      </div>

      <div className="grid-full" style={{marginTop:20}}>
        <div className="stat-box">
          <div className="stat-value">{requests.length}</div>
          <div className="stat-label">Total Requests</div>
        </div>
        <div className="stat-box">
          <div className="stat-value" style={{color:'#16a34a'}}>{responded}</div>
          <div className="stat-label">Responded ✓</div>
        </div>
        <div className="stat-box">
          <div className="stat-value" style={{color:'#dc2626'}}>{pending}</div>
          <div className="stat-label">Pending</div>
        </div>
        <div className="stat-box">
          <div className="stat-value" style={{color:'#ea580c'}}>{overdue}</div>
          <div className="stat-label">Overdue ⚠️</div>
        </div>
      </div>

      <div className="grid" style={{marginTop:24}}>
        <div>
          <div style={{marginBottom:20}}>
            <div className="h2">📋 Recent Requests</div>
            {recent.length === 0 ? (
              <div className="notice" style={{marginTop:12}}>
                <span>📌</span>
                <span>No RTIs yet. Click <strong>✍️ New RTI</strong> to start or load demo data.</span>
              </div>
            ) : (
              <div className="list">
                {recent.map(r => (
                  <RequestCard key={r.id} request={r} onOpen={() => onOpen(r.id)} />
                ))}
              </div>
            )}
          </div>

          <div className="card">
            <div className="h2">🎯 Key Features</div>
            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">✍️</div>
                <div className="h3">Plain Language</div>
                <div style={{fontSize:'11px',color:'#718096'}}>Write in simple terms</div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <div className="h3">AI Suggestions</div>
                <div style={{fontSize:'11px',color:'#718096'}}>Auto-suggest departments</div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⏰</div>
                <div className="h3">Deadline Track</div>
                <div style={{fontSize:'11px',color:'#718096'}}>Never miss a deadline</div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📤</div>
                <div className="h3">Auto-Appeals</div>
                <div style={{fontSize:'11px',color:'#718096'}}>Generate on non-response</div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <div className="h3">Analytics</div>
                <div style={{fontSize:'11px',color:'#718096'}}>Track all requests</div>
              </div>
              <div className="feature-card">
                <div className="feature-icon">💾</div>
                <div className="h3">Secure Storage</div>
                <div style={{fontSize:'11px',color:'#718096'}}>Safe local backup</div>
              </div>
            </div>
          </div>
        </div>

        <aside>
          <div className="side-panel">
            <div className="h2">💡 Why This Tool?</div>
            <ul style={{marginTop:10,paddingLeft:16,lineHeight:1.8,fontSize:'13px',color:'#1a202c'}}>
              <li>📝 No legal knowledge needed</li>
              <li>🎯 AI-powered suggestions</li>
              <li>🔔 Smart deadline alerts</li>
              <li>⚡ Auto-generate appeals</li>
              <li>📱 Works offline</li>
            </ul>
          </div>

          <div className="ai-box">
            <strong>🚀 Quick Start</strong>
            <ol style={{marginTop:8,paddingLeft:16,fontSize:'12px',lineHeight:1.7}}>
              <li>Click "New RTI"</li>
              <li>Describe what you need</li>
              <li>Review the draft</li>
              <li>Submit & track</li>
            </ol>
          </div>

          <div className="side-panel">
            <div className="h2">📚 Resources</div>
            <div style={{fontSize:'12px',lineHeight:1.8}}>
              <p><strong>RTI Act 2005</strong> — Right to Information for all citizens</p>
              <p style={{marginTop:8}}>30-day response deadline • Free for first 2 copies</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
