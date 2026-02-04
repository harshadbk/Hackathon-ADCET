import RequestCard from './RequestCard'

function computeDaysLeft(createdAt, deadlineDays=30){
  const created = new Date(createdAt)
  const deadline = new Date(created.getTime() + deadlineDays*24*3600*1000)
  return Math.ceil((deadline - new Date())/(24*3600*1000))
}

export default function Tracker({ requests = [], onOpen, onUpdate }) {
  const enriched = requests.map(r => ({...r, daysLeft: computeDaysLeft(r.createdAt, r.deadlineDays)}))
  const overdue = enriched.filter(r => r.daysLeft < 0 && r.status === 'awaiting_response')
  const atRisk = enriched.filter(r => r.daysLeft >= 0 && r.daysLeft <= 5 && r.status === 'awaiting_response')

  function autoAppeal(r) {
    const appealText = `Dear Sir/Madam,\n\nThis is a First Appeal under the RTI Act against the non-response to my RTI request dated ${new Date(r.createdAt).toLocaleDateString()}.\n\nRequest: ${r.title}\n\nDepartment: ${r.department}\n\nThe statutory period of 30 days has elapsed without a response. Please treat this as a formal First Appeal.\n\nThank you,\nCitizen`
    onUpdate(r.id, { 
      status: 'appealed', 
      timeline: [...(r.timeline||[]), { at: new Date().toISOString(), text: 'First Appeal Generated', actor: 'assistant' }], 
      aiAppeal: appealText 
    })
  }

  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',marginBottom:16}}>
        <div>
          <h1 className="h1">Deadline Tracker</h1>
          <div className="small-muted">Monitor deadlines and auto-generate appeals for non-compliance.</div>
        </div>
      </div>

      <div className="grid">
        <div>
          {enriched.length === 0 ? (
            <div className="notice">No requests yet. Start by creating a new RTI.</div>
          ) : (
            <>
              {overdue.length > 0 && (
                <div style={{marginBottom:20}}>
                  <div className="h2" style={{color:'#dc2626',marginBottom:12}}>⚠ Overdue ({overdue.length})</div>
                  <div className="list">
                    {overdue.map(r => (
                      <div key={r.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
                        <div onClick={() => onOpen(r.id)} style={{flex:1,cursor:'pointer'}}>
                          <RequestCard request={r} onOpen={() => onOpen(r.id)} />
                        </div>
                        <div style={{display:'flex',gap:8}}>
                          <button className="btn" onClick={() => autoAppeal(r)}>Appeal</button>
                          <button className="btn ghost" onClick={() => onUpdate(r.id, {status:'closed'})}>Close</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {atRisk.length > 0 && (
                <div style={{marginBottom:20}}>
                  <div className="h2" style={{color:'#ea580c',marginBottom:12}}>⏰ At Risk ({atRisk.length})</div>
                  <div className="list">
                    {atRisk.map(r => (
                      <div key={r.id} onClick={() => onOpen(r.id)} style={{cursor:'pointer'}}>
                        <RequestCard request={r} onOpen={() => onOpen(r.id)} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <div className="h2" style={{marginBottom:12}}>All Requests ({enriched.length})</div>
                <div className="list">
                  {enriched.map(r => (
                    <div key={r.id} onClick={() => onOpen(r.id)} style={{cursor:'pointer'}}>
                      <RequestCard request={r} onOpen={() => onOpen(r.id)} />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <aside>
          <div className="side-panel">
            <div className="h2">Summary</div>
            <div style={{marginTop:12,display:'flex',flexDirection:'column',gap:8}}>
              <div><strong>{requests.length}</strong> <span className="small-muted">Total</span></div>
              <div><strong>{overdue.length}</strong> <span className="small-muted">Overdue</span></div>
              <div><strong>{atRisk.length}</strong> <span className="small-muted">At Risk</span></div>
              <div><strong>{requests.filter(r => r.status === 'responded').length}</strong> <span className="small-muted">Responded</span></div>
            </div>
          </div>

          <div className="ai-box" style={{marginTop:12}}>
            <strong>⚡ Pro Tips</strong>
            <ul style={{marginTop:8,paddingLeft:16,fontSize:'12px',lineHeight:1.6}}>
              <li>Check weekly</li>
              <li>Act on overdue alerts</li>
              <li>Appeal if no response</li>
              <li>Keep records</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}
