import { useNavigate } from 'react-router-dom'
import './Guide.css'

export default function Guide({ onBack }) {
  const navigate = useNavigate()
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',marginBottom:20}}>
        <div>
          <h1 className="h1">📚 RTI Guide & Resources</h1>
          <p className="small-muted">Learn how to file Right to Information requests effectively.</p>
        </div>
        <button className="btn ghost" onClick={() => {
          onBack()
          navigate(-1)
        }}>← Back</button>
      </div>

      <div className="grid">
        <div>
          <div style={{marginBottom:24}}>
            <div className="h2">📋 What is RTI?</div>
            <p style={{marginTop:10,lineHeight:1.8,color:'#1a202c'}}>
              The Right to Information (RTI) Act, 2005 is a powerful tool that empowers every Indian citizen to request information from public authorities. This promotes transparency and accountability in government.
            </p>
          </div>

          <div style={{marginBottom:24}}>
            <div className="h2">✅ Step-by-Step Process</div>
            <div style={{marginTop:12,display:'flex',flexDirection:'column',gap:14}}>
              <div className="side-panel" style={{padding:14}}>
                <div className="h3" style={{color:'#3b82f6'}}>Step 1: Identify the Authority</div>
                <p style={{marginTop:8,fontSize:'13px'}}>Determine which government department or agency has the information you need.</p>
              </div>
              <div className="side-panel" style={{padding:14}}>
                <div className="h3" style={{color:'#3b82f6'}}>Step 2: Prepare Your Request</div>
                <p style={{marginTop:8,fontSize:'13px'}}>Write a clear, specific request in plain language describing the information you need.</p>
              </div>
              <div className="side-panel" style={{padding:14}}>
                <div className="h3" style={{color:'#3b82f6'}}>Step 3: File the RTI</div>
                <p style={{marginTop:8,fontSize:'13px'}}>Submit your application to the Public Information Officer (PIO) by post, email, or in person.</p>
              </div>
              <div className="side-panel" style={{padding:14}}>
                <div className="h3" style={{color:'#3b82f6'}}>Step 4: Track & Follow Up</div>
                <p style={{marginTop:8,fontSize:'13px'}}>Monitor your request. You have the right to appeal if you don't get a response within 30 days.</p>
              </div>
            </div>
          </div>

          <div style={{marginBottom:24}}>
            <div className="h2">⏰ Key Deadlines</div>
            <div className="notice" style={{marginTop:12}}>
              <strong>First Response:</strong> 30 days from submission
            </div>
            <div className="notice" style={{marginTop:8}}>
              <strong>First Appeal:</strong> 30 days after response received or 30 days after original deadline
            </div>
            <div className="notice" style={{marginTop:8}}>
              <strong>Second Appeal:</strong> 30 days after first appeal response
            </div>
          </div>

          <div style={{marginBottom:24}}>
            <div className="h2">💡 Pro Tips for Success</div>
            <ul style={{marginTop:12,paddingLeft:16,lineHeight:1.9}}>
              <li><strong>Be Specific:</strong> Include dates, reference numbers, and specific details</li>
              <li><strong>One Topic Per RTI:</strong> Keep requests focused and narrow</li>
              <li><strong>Simple Language:</strong> Use plain English/regional language, not legal jargon</li>
              <li><strong>Keep Records:</strong> Save all copies and correspondence</li>
              <li><strong>Get Receipts:</strong> Obtain proof of submission with date & time</li>
              <li><strong>Appeal if Needed:</strong> Don't give up if first response is unsatisfactory</li>
            </ul>
          </div>

          <div style={{marginBottom:24}}>
            <div className="h2">❌ Common Mistakes to Avoid</div>
            <ul style={{marginTop:12,paddingLeft:16,lineHeight:1.9,color:'#991b1b'}}>
              <li>Asking for personal information about others</li>
              <li>Vague or too broad requests</li>
              <li>Not mentioning the RTI Act explicitly</li>
              <li>Giving up after first denial</li>
              <li>Submitting to wrong department</li>
            </ul>
          </div>
        </div>

        <aside>
          <div className="side-panel">
            <div className="h2">📞 Useful Links</div>
            <div style={{marginTop:12,display:'flex',flexDirection:'column',gap:8,fontSize:'13px'}}>
              <a href="https://rti.gov.in/" target="_blank" rel="noopener noreferrer" style={{color:'#3b82f6',textDecoration:'none'}}>
                📎 National RTI Portal
              </a>
              <a href="https://www.dopt.gov.in/" target="_blank" rel="noopener noreferrer" style={{color:'#3b82f6',textDecoration:'none'}}>
                📎 Department of Personnel & Training
              </a>
              <a href="https://cic.gov.in/" target="_blank" rel="noopener noreferrer" style={{color:'#3b82f6',textDecoration:'none'}}>
                📎 Central Information Commission
              </a>
            </div>
          </div>

          <div className="ai-box" style={{marginTop:12}}>
            <strong>🤖 Use This Tool To:</strong>
            <ul style={{marginTop:8,paddingLeft:16,fontSize:'12px',lineHeight:1.7}}>
              <li>Draft requests easily</li>
              <li>Find right departments</li>
              <li>Track deadlines</li>
              <li>Generate appeals</li>
            </ul>
          </div>

          <div className="notice" style={{marginTop:12}}>
            <strong>Note:</strong> This is not legal advice. For complex cases, consult an RTI expert or advocate.
          </div>
        </aside>
      </div>
    </div>
  )
}
