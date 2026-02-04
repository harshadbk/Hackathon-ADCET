import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './DraftAssistant.css'

const DEPT_MAP = [
  { q: ['school','education','student','teacher'], dept: 'Department of School Education', pio: 'PIO, District Education Office' },
  { q: ['water','sewer','drain','municipal'], dept: 'Municipal Water Department', pio: 'PIO, Municipal Corporation' },
  { q: ['contract','tender','procurement','vendor'], dept: 'Public Works / Procurement', pio: 'PIO, Procurement Cell' },
  { q: ['land','property','revenue'], dept: 'Land Revenue Department', pio: 'PIO, Revenue Office' }
]

function suggestDept(text) {
  const t = text.toLowerCase()
  for (const m of DEPT_MAP) {
    if (m.q.some(k => t.includes(k))) return m
  }
  return { dept: 'State Public Authority', pio: 'PIO (State Authority)' }
}

export default function DraftAssistant({ onSubmit, onBack }) {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [topic, setTopic] = useState('')
  const suggested = useMemo(() => suggestDept(topic || ''), [topic])
  const [department, setDepartment] = useState('')
  const [pio, setPio] = useState('')
  const [draft, setDraft] = useState('')

  function generateDraft() {
    const base = topic || 'Information requested'
    const d = `Dear Sir/Madam,\n\nUnder the Right to Information Act, 2005, I request the following information:\n\n${base}\n\nPlease provide the information in PDF/email format where available. If fees apply, kindly inform me in writing.\n\nThank you,\nCitizen`
    setDraft(d)
    setDepartment(department || suggested.dept)
    setPio(pio || suggested.pio)
    setStep(3)
  }

  function improveDraft() {
    setDraft((s) => s + `\n\n[✓ Improved] Added specific reference to RTI Act sections and requested formats.`)
  }

  function submit() {
    const payload = {
      title: topic.split('\n')[0].substring(0, 60) || 'RTI Request',
      department: department || suggested.dept,
      pio: pio || suggested.pio,
      deadlineDays: 30,
      status: 'awaiting_response',
      aiDraft: draft,
      timeline: [{ at: new Date().toISOString(), text: 'RTI Filed', actor: 'citizen' }]
    }
    onSubmit(payload)
    navigate('/dashboard')
  }

  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:16}}>
        <div>
          <h1 className="h1">RTI Drafting Assistant</h1>
          <div className="small-muted">Step-by-step guidance for writing your RTI request.</div>
        </div>
        <button className="btn ghost" onClick={() => {
          onBack()
          navigate('/dashboard')
        }}>← Back</button>
      </div>

      {step === 1 && (
        <div className="grid">
          <div>
            <label>What information do you want to request? (plain language)</label>
            <textarea 
              className="field" 
              rows={6} 
              value={topic} 
              onChange={(e)=>setTopic(e.target.value)} 
              placeholder="e.g. I want copies of the school budget allocation for 2024..."
            />
            <div style={{display:'flex',gap:8,marginTop:12}}>
              <button className="btn" onClick={generateDraft} disabled={!topic.trim()}>Generate Draft</button>
              <button className="btn ghost" onClick={()=>setTopic('Copy of school development grants and utilization certificates for FY 2024')}>Example</button>
            </div>

            <div style={{marginTop:16}}>
              <div className="ai-box">
                <strong>🤖 AI suggests:</strong>
                <div style={{marginTop:8}}>
                  <div><strong>{suggested.dept}</strong></div>
                  <div style={{fontSize:'12px',marginTop:4}}>{suggested.pio}</div>
                </div>
              </div>
            </div>
          </div>

          <aside>
            <div className="side-panel">
              <div className="h2">Tips for RTI Requests</div>
              <ul style={{marginTop:8,paddingLeft:16,fontSize:'12px',lineHeight:1.8}}>
                <li>Be specific about dates</li>
                <li>Use clear language</li>
                <li>Request specific formats</li>
                <li>One topic per request</li>
              </ul>
            </div>
          </aside>
        </div>
      )}

      {step === 3 && (
        <div className="grid">
          <div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 280px',gap:12,marginBottom:12}}>
              <div>
                <label>Department</label>
                <input className="field" value={department || suggested.dept} onChange={(e)=>setDepartment(e.target.value)} />
              </div>
              <div>
                <label>PIO Name/Office</label>
                <input className="field" value={pio || suggested.pio} onChange={(e)=>setPio(e.target.value)} />
              </div>
            </div>

            <div style={{marginTop:12}}>
              <label>Your RTI Request (editable)</label>
              <textarea className="field" rows={10} value={draft} onChange={(e)=>setDraft(e.target.value)} />
              <div style={{display:'flex',gap:8,marginTop:12}}>
                <button className="btn" onClick={improveDraft}>Improve Wording</button>
                <button className="btn ghost" onClick={() => navigator.clipboard?.writeText(draft)}>Copy</button>
                <button className="btn" onClick={submit}>Submit RTI</button>
              </div>
            </div>

            <div className="notice" style={{marginTop:12}}>
              ℹ️ After submission, the app will track your deadline and alert you if there's no response.
            </div>
          </div>

          <aside>
            <div className="side-panel">
              <div className="h2">Next Steps</div>
              <ol style={{marginTop:8,paddingLeft:16,fontSize:'12px',lineHeight:1.8}}>
                <li>Review your draft</li>
                <li>Print or email to PIO</li>
                <li>Track deadline</li>
                <li>File appeal if needed</li>
              </ol>
            </div>

            <div className="ai-box" style={{marginTop:12}}>
              <strong>📋 You're drafting:</strong>
              <div style={{fontSize:'12px',marginTop:8,fontWeight:'600'}}>{topic.substring(0, 50)}{topic.length > 50 ? '...' : ''}</div>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
