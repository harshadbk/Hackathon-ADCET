import { useNavigate } from 'react-router-dom'
import RequestCard from './RequestCard'
import './Tracker.css'

function computeDaysLeft(createdAt, deadlineDays=30){
  const created = new Date(createdAt)
  const deadline = new Date(created.getTime() + deadlineDays*24*3600*1000)
  return Math.ceil((deadline - new Date())/(24*3600*1000))
}

export default function Tracker({ requests = [], onOpen, onUpdate }) {
  const navigate = useNavigate()

  const handleOpenDetail = (id) => {
    onOpen(id)
    navigate(`/detail/${id}`)
  }
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
    <div>
      <div className="card card-header">
        <div>
          <h1 className="h1">⏰ Track Your RTI Requests</h1>
          <p className="small-muted">Monitor the status of your filed RTI requests and receive deadline alerts.</p>
        </div>
      </div>

      <div className="grid" style={{marginTop:20}}>
        <div>
          {overdue.length > 0 && (
            <div style={{marginBottom:20}}>
              <div className="h2" style={{color:'#dc2626',marginBottom:12}}>🚨 Overdue ({overdue.length})</div>
              <div style={{background:'#fef2f2',border:'1px solid #fecaca',borderRadius:10,padding:12,marginBottom:12,fontSize:'12px'}}>
                <strong>⚠️ Action Needed:</strong> These RTI requests have exceeded the 30-day deadline. Consider filing an appeal.
              </div>
              <div className="list">
                {overdue.map(r => (
                  <div key={r.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12}}>
                    <div onClick={() => handleOpenDetail(r.id)} style={{flex:1,cursor:'pointer'}}>
                      <RequestCard request={r} onOpen={() => handleOpenDetail(r.id)} />
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
                  <div key={r.id} onClick={() => handleOpenDetail(r.id)} style={{cursor:'pointer'}}>
                    <RequestCard request={r} onOpen={() => handleOpenDetail(r.id)} />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <div className="h2" style={{marginBottom:12}}>All Requests ({enriched.length})</div>
            <div className="list">
              {enriched.map(r => (
                <div key={r.id} onClick={() => handleOpenDetail(r.id)} style={{cursor:'pointer'}}>
                  <RequestCard request={r} onOpen={() => handleOpenDetail(r.id)} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside style={{display:'flex',flexDirection:'column',gap:12}}>
          <div className="card">
            <strong style={{fontSize:'12px',color:'var(--muted)',textTransform:'uppercase',letterSpacing:'0.5px'}}>Timeline Tips</strong>
            <div style={{fontSize:'12px',lineHeight:1.8,marginTop:12,color:'var(--text)'}}>
              <p>✓ <strong>30 days:</strong> Standard response deadline</p>
              <p>✓ <strong>45 days:</strong> For sensitive info</p>
              <p>✓ <strong>30 more days:</strong> After appeal filed</p>
            </div>
          </div>
          <div className="card" style={{background:'linear-gradient(135deg, #dbeafe, #f0f9ff)',border:'1px solid #bfdbfe'}}>
            <strong style={{fontSize:'12px',color:'#1e40af'}}>💡 Pro Tip</strong>
            <div style={{fontSize:'12px',lineHeight:1.8,marginTop:12,color:'#1e40af'}}>
              File appeals early! Don't wait until the deadline passes. Early appeals show you're proactive.
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
