import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './FAQ.css'

export default function FAQ({ onBack }) {
  const navigate = useNavigate()
  const [expanded, setExpanded] = useState(null)

  const faqs = [
    {
      q: 'What is the RTI Act?',
      a: 'The Right to Information Act, 2005 is an Indian law that gives every citizen the right to request and obtain information from public authorities.'
    },
    {
      q: 'How much does it cost to file an RTI?',
      a: 'The first two physical copies are free. Additional copies may have a fee as per the RTI rules. Most online requests are free.'
    },
    {
      q: 'What if I don\'t get a response within 30 days?',
      a: 'You can file a First Appeal with the senior official. If unsatisfied, file a Second Appeal with the Information Commission.'
    },
    {
      q: 'Can I ask for any information?',
      a: 'No. Some information is exempt under the RTI Act (national security, privacy of individuals, etc.). You cannot ask for personal information about others.'
    },
    {
      q: 'What if my RTI is rejected?',
      a: 'You have the right to appeal the rejection. Submit a First Appeal explaining why you believe the information should be released.'
    },
    {
      q: 'Who is a PIO (Public Information Officer)?',
      a: 'A PIO is the designated officer in each public authority responsible for responding to RTI requests within the legal timeframe.'
    },
    {
      q: 'Can I request information anonymously?',
      a: 'No. You must provide your name and contact details so the authority can respond to your request.'
    },
    {
      q: 'How do I find the right department?',
      a: 'Think about which agency or ministry likely has the information. The National RTI Portal (rti.gov.in) lists departments and their PIOs.'
    },
    {
      q: 'Can I use this app for official filing?',
      a: 'This is a prototype for drafting and tracking. Always verify with official government RTI portals before submission.'
    },
    {
      q: 'What file formats can I request?',
      a: 'You can request information in various formats: email, PDF, physical documents, spreadsheets, etc. The authority should provide the most accessible format.'
    }
  ]

  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'start',marginBottom:20}}>
        <div>
          <h1 className="h1">❓ Frequently Asked Questions</h1>
          <p className="small-muted">Get answers to common RTI questions.</p>
        </div>
        <button className="btn ghost" onClick={() => {
          onBack()
          navigate(-1)
        }}>← Back</button>
      </div>

      <div style={{maxWidth:'800px'}}>
        {faqs.map((faq, i) => (
          <div key={i} style={{marginBottom:12,borderBottom:'1px solid #e2e8f0',paddingBottom:12}}>
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              style={{
                width:'100%',
                padding:'14px',
                background:'linear-gradient(135deg,#f3f4f6 0%,#f9fafb 100%)',
                border:'1px solid #e2e8f0',
                borderRadius:'8px',
                cursor:'pointer',
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                fontWeight:'600',
                color:'#1a202c',
                transition:'all 0.2s'
              }}
            >
              <span>{faq.q}</span>
              <span style={{fontSize:'20px'}}>{expanded === i ? '−' : '+'}</span>
            </button>
            {expanded === i && (
              <div style={{padding:'14px',background:'#f9fafb',borderRadius:'0 0 8px 8px',marginTop:'2px',lineHeight:1.8,color:'#1a202c',fontSize:'13px'}}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="notice" style={{marginTop:24}}>
        <strong>Still have questions?</strong> Contact the Central Information Commission or your State Information Commission.
      </div>
    </div>
  )
}
