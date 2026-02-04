import RequestCard from './RequestCard'
import './AuthorityDashboard.css'

export default function AuthorityDashboard({ requests, onOpen, user, onLogout }) {
  const appealedCount = requests.filter(r => r.status === 'appealed').length
  const closedCount = requests.filter(r => r.status === 'closed').length
  const activeAppeals = requests.filter(r => r.status === 'appealed')

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 20 }}>
        <div>
          <h1 className="h1">⚖️ Appellate Authority</h1>
          <p className="small-muted">Review appeals & provide decisions</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, color: '#666', marginBottom: 8 }}>{user.email}</div>
          <button className="btn ghost" onClick={onLogout}>Logout</button>
        </div>
      </div>

      <div className="grid-full" style={{ marginBottom: 20 }}>
        <div className="stat-box">
          <div className="stat-label">Active Appeals</div>
          <div className="stat-value" style={{ color: '#dc2626' }}>{appealedCount}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Decided</div>
          <div className="stat-value">{closedCount}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Total Cases</div>
          <div className="stat-value">{requests.length}</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">Success Rate</div>
          <div className="stat-value">92%</div>
        </div>
      </div>

      <div className="card">
        <h2 className="h2">⚡ Appeals Under Review</h2>
        <div className="list">
          {activeAppeals.length === 0 ? (
            <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>No active appeals</div>
          ) : (
            activeAppeals.map((req) => (
              <RequestCard
                key={req.id}
                request={req}
                onClick={() => onOpen(req.id)}
              />
            ))
          )}
        </div>
      </div>

      <div className="card" style={{ marginTop: 18 }}>
        <h2 className="h2">📋 Appeal Statistics</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 12 }}>
          <div style={{ padding: 12, background: '#f8fafb', borderRadius: 8 }}>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Avg. Resolution Time</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#1e40af' }}>18 days</div>
          </div>
          <div style={{ padding: 12, background: '#f8fafb', borderRadius: 8 }}>
            <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>Approval Rate</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: '#16a34a' }}>78%</div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 18 }}>
        <h2 className="h2">⚙️ Actions</h2>
        <div className="grid-full" style={{ marginTop: 12 }}>
          <div className="feature-card">
            <div style={{ fontSize: 28 }}>✅</div>
            <div style={{ fontWeight: 600 }}>Approve Appeal</div>
            <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>Grant RTI request</div>
          </div>
          <div className="feature-card">
            <div style={{ fontSize: 28 }}>❌</div>
            <div style={{ fontWeight: 600 }}>Reject Appeal</div>
            <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>Uphold PIO decision</div>
          </div>
          <div className="feature-card">
            <div style={{ fontSize: 28 }}>📝</div>
            <div style={{ fontWeight: 600 }}>Add Decision</div>
            <div style={{ fontSize: 12, color: '#666', marginTop: 4 }}>Write judgment order</div>
          </div>
        </div>
      </div>
    </>
  )
}
