function daysLeft(createdAt, deadlineDays = 30) {
  const created = new Date(createdAt)
  const deadline = new Date(created.getTime() + deadlineDays * 24 * 3600 * 1000)
  const diff = Math.ceil((deadline - new Date()) / (24 * 3600 * 1000))
  return diff
}

export default function RequestCard({ request, onOpen }) {
  const left = daysLeft(request.createdAt, request.deadlineDays)
  const isLate = left < 0 && request.status === 'awaiting_response'
  const pct = Math.max(6, Math.min(100, Math.round(((request.deadlineDays - Math.max(0, request.deadlineDays - left)) / request.deadlineDays) * 100)))

  return (
    <div className="request-card" onClick={onOpen}>
      <div className="request-meta">
        <div style={{ flex: 1 }}>
          <div className="request-title">{request.title}</div>
          <div className="pio">{request.department}</div>
          <div style={{ fontSize: '12px', color: '#718096', marginTop: '4px' }}>{request.pio}</div>
        </div>
      </div>

      <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:8,minWidth:140}}>
        <div className={isLate ? 'deadline-late' : 'badge'}>
          {request.status === 'responded' ? '✓ Responded' : isLate ? '⚠ Overdue' : `${left}d left`}
        </div>
        <div style={{width:100}}>
          <div className="progress">
            <i style={{width:`${pct}%`}} />
          </div>
        </div>
      </div>
    </div>
  )
}
