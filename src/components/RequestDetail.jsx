function daysLeft(createdAt, deadlineDays = 30) {
  const created = new Date(createdAt)
  const deadline = new Date(created.getTime() + deadlineDays * 24 * 3600 * 1000)
  const diff = Math.ceil((deadline - new Date()) / (24 * 3600 * 1000))
  return diff
}

export default function RequestDetail({ request, onBack, onUpdate }) {
  if (!request) return <div className="card">No request selected.</div>

  const left = daysLeft(request.createdAt, request.deadlineDays)
  const isLate = left < 0 && request.status === 'awaiting_response'

  function simulatePIOReply() {
    onUpdate(request.id, { 
      status: 'responded', 
      timeline: [...(request.timeline||[]), { at: new Date().toISOString(), text: 'Response Received (Mock)', actor: 'PIO' }] 
    })
  }

  function generateAppeal() {
    const appeal = request.aiAppeal || `Dear Sir/Madam,\n\nThis is a First Appeal under the RTI Act against the non-response to my RTI request dated ${new Date(request.createdAt).toLocaleDateString()}.\n\nRequest: ${request.title}\n\nThe statutory period has elapsed. Please treat this as a formal First Appeal.\n\nThank you,\nCitizen`
    onUpdate(request.id, { 
      status: 'appealed', 
      aiAppeal: appeal, 
      timeline: [...(request.timeline||[]), { at: new Date().toISOString(), text: 'First Appeal Generated', actor: 'assistant' }] 
    })
  }

  function downloadDraft() {
    const content = `RTI Request\n${'='.repeat(50)}\n\nDepartment: ${request.department}\nPIO: ${request.pio}\nDate: ${new Date(request.createdAt).toLocaleDateString()}\n\n${request.aiDraft}`
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `rti-${request.id}.txt`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',marginBottom:16}}>
        <div>
          <h1 className="h1">Request Details</h1>
          <div className="small-muted">Review, download, and manage your RTI request.</div>
        </div>
        <button className="btn ghost" onClick={onBack}>← Back</button>
      </div>

      <div className="grid">
        <div>
          <div style={{background:'linear-gradient(135deg,#f3f4f6 0%,#f9fafb 100%)',padding:14,borderRadius:10,border:'1px solid #e2e8f0',marginBottom:16}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:12}}>
              <div>
                <div className="h2">{request.title}</div>
                <div className="small-muted" style={{marginTop:6}}>{request.department} — {request.pio}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:'24px',fontWeight:'700',color:isLate ? '#dc2626' : '#16a34a'}}>
                  {isLate ? `${Math.abs(left)}d Overdue` : `${left}d Left`}
                </div>
                <div className="small-muted" style={{textTransform:'capitalize'}}>Status: {request.status}</div>
              </div>
            </div>
            <div style={{display:'flex',gap:8}}>
              <div style={{flex:1}}>
                <div className="small-muted">Filed</div>
                <div style={{fontWeight:'600'}}>{new Date(request.createdAt).toLocaleDateString()}</div>
              </div>
              <div style={{flex:1}}>
                <div className="small-muted">Deadline</div>
                <div style={{fontWeight:'600'}}>{new Date(new Date(request.createdAt).getTime() + request.deadlineDays*24*3600*1000).toLocaleDateString()}</div>
              </div>
            </div>
          </div>

          <div style={{marginBottom:16}}>
            <label className="h2" style={{margin:0}}>Your RTI Request</label>
            <div className="ai-box" style={{whiteSpace:'pre-wrap',marginTop:10,fontFamily:'monospace',fontSize:'13px',lineHeight:1.6}}>
              {request.aiDraft}
            </div>
            <div style={{display:'flex',gap:8,marginTop:12,flexWrap:'wrap'}}>
              <button className="btn" onClick={downloadDraft}>📥 Download</button>
              <button className="btn ghost" onClick={() => navigator.clipboard?.writeText(request.aiDraft || '')}>📋 Copy</button>
              {request.status === 'awaiting_response' && <button className="btn" onClick={simulatePIOReply}>Mock Response</button>}
              {isLate && request.status === 'awaiting_response' && <button className="btn" onClick={generateAppeal}>Generate Appeal</button>}
            </div>
          </div>

          {request.aiAppeal && (
            <div style={{marginBottom:16}}>
              <label className="h2" style={{margin:0}}>Generated Appeal</label>
              <div className="ai-box" style={{whiteSpace:'pre-wrap',marginTop:10,fontFamily:'monospace',fontSize:'13px',lineHeight:1.6}}>
                {request.aiAppeal}
              </div>
            </div>
          )}

          <div style={{marginBottom:16}}>
            <label className="h2" style={{margin:0}}>Timeline</label>
            <div className="timeline" style={{marginTop:10}}>
              {(request.timeline || []).map((t, i) => (
                <div className="item" key={i}>
                  <div>
                    <div style={{fontWeight:'600'}}>{t.text}</div>
                    <div className="small-muted">{new Date(t.at).toLocaleString()}</div>
                  </div>
                  <div className="small-muted" style={{fontSize:'12px'}}>{t.actor}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside>
          <div className="side-panel">
            <div className="h2">Actions</div>
            <div style={{display:'flex',flexDirection:'column',gap:8,marginTop:12}}>
              <button className="btn ghost" onClick={() => onUpdate(request.id, {status:'closed'})}>Mark Closed</button>
              <button className="btn ghost" onClick={() => onUpdate(request.id, {title: prompt('Edit title:', request.title) || request.title})}>Edit Details</button>
            </div>
          </div>

          <div className="notice" style={{marginTop:12}}>
            <strong>📌 Remember:</strong> You have {request.deadlineDays} days to receive a response from the PIO.
          </div>

          <div className="ai-box" style={{marginTop:12}}>
            <strong>💡 Next Steps</strong>
            <ol style={{marginTop:8,paddingLeft:16,fontSize:'12px',lineHeight:1.8}}>
              <li>Download & print</li>
              <li>Email to PIO</li>
              <li>Keep copy safe</li>
              <li>Track deadline</li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  )
}
