import { useEffect, useState } from 'react'
import './styles/rtia.css'
import './styles/responsive.css'
import Login from './components/Login'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import DraftAssistant from './components/DraftAssistant'
import Tracker from './components/Tracker'
import RequestDetail from './components/RequestDetail'
import Guide from './components/Guide'
import FAQ from './components/FAQ'
import About from './components/About'
import PIODashboard from './components/PIODashboard'
import AuthorityDashboard from './components/AuthorityDashboard'
import { loadRequests, saveRequests } from './utils/storage'
import mockRequests from './data/mockRequests'

export default function App() {
  const [user, setUser] = useState(null)
  const [view, setView] = useState('dashboard')
  const [requests, setRequests] = useState([])
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    // Check for existing login
    const stored = localStorage.getItem('rtia.user')
    if (stored) {
      try {
        setUser(JSON.parse(stored))
      } catch (e) {
        console.error('Failed to parse user data')
      }
    }

    // Load requests
    const storedReqs = loadRequests()
    if (!storedReqs || storedReqs.length === 0) {
      saveRequests(mockRequests)
      setRequests(mockRequests)
    } else {
      setRequests(storedReqs)
    }
  }, [])

  useEffect(() => saveRequests(requests), [requests])

  function openDetail(id) {
    setSelectedId(id)
    setView('detail')
  }

  function addRequest(r) {
    const newReq = { id: Date.now().toString(), createdAt: new Date().toISOString(), ...r }
    setRequests((s) => [newReq, ...s])
    setSelectedId(newReq.id)
    setView('detail')
  }

  function updateRequest(id, patch) {
    setRequests((s) => s.map((r) => (r.id === id ? { ...r, ...patch } : r)))
  }

  function handleLogout() {
    localStorage.removeItem('rtia.user')
    setUser(null)
    setView('dashboard')
  }

  // Show login if not authenticated
  if (!user) {
    return (
      <div className="app-root">
        <Login onLogin={setUser} />
      </div>
    )
  }

  // Role-specific UI
  const isCitizens = user.role === 'citizen'
  const isPIO = user.role === 'pio'
  const isAuthority = user.role === 'authority'

  return (
    <div className="app-root">
      {isAuthority ? (
        // Appellate Authority UI (no Header nav, different layout)
        <>
          <div className="header">
            <div className="brand">
              <div className="logo-mark">⚖️</div>
              <div className="brand-info">
                <div className="brand-title">RTI Appellate Authority</div>
                <div className="brand-sub">Appeal Review System</div>
              </div>
            </div>
            <button className="btn ghost" onClick={handleLogout}>Logout</button>
          </div>
          <main className="container">
            <AuthorityDashboard
              requests={requests}
              onOpen={openDetail}
              user={user}
              onLogout={handleLogout}
            />
            {view === 'detail' && selectedId && (
              <RequestDetail
                request={requests.find((r) => r.id === selectedId)}
                onBack={() => setView('dashboard')}
                onUpdate={updateRequest}
              />
            )}
            <footer className="footer-note">
              RTI Appellate Authority © 2024 — Ensuring fair RTI implementation 🇮🇳
            </footer>
          </main>
        </>
      ) : isPIO ? (
        // PIO Officer UI (no Header nav, different layout)
        <>
          <div className="header">
            <div className="brand">
              <div className="logo-mark">👨‍💼</div>
              <div className="brand-info">
                <div className="brand-title">RTI Management System</div>
                <div className="brand-sub">PIO Portal</div>
              </div>
            </div>
            <button className="btn ghost" onClick={handleLogout}>Logout</button>
          </div>
          <main className="container">
            <PIODashboard
              requests={requests}
              onOpen={openDetail}
              user={user}
              onLogout={handleLogout}
            />
            {view === 'detail' && selectedId && (
              <RequestDetail
                request={requests.find((r) => r.id === selectedId)}
                onBack={() => setView('dashboard')}
                onUpdate={updateRequest}
              />
            )}
            <footer className="footer-note">
              RTI Management System © 2024 — Streamlining RTI processes 🇮🇳
            </footer>
          </main>
        </>
      ) : (
        // Citizen UI (original with Header nav)
        <>
          <Header
            onNavigate={(v) => setView(v)}
            onLogout={handleLogout}
            user={user}
            onQuickDemo={() => {
              saveRequests(mockRequests)
              setRequests(mockRequests)
              setView('dashboard')
            }}
          />
          <main className="container">
            {view === 'dashboard' && (
              <Dashboard
                requests={requests}
                onNew={() => setView('draft')}
                onOpen={openDetail}
                onTrack={() => setView('tracker')}
              />
            )}

            {view === 'draft' && (
              <DraftAssistant
                onSubmit={(payload) => addRequest(payload)}
                onBack={() => setView('dashboard')}
              />
            )}

            {view === 'tracker' && (
              <Tracker
                requests={requests}
                onOpen={openDetail}
                onUpdate={updateRequest}
              />
            )}

            {view === 'detail' && selectedId && (
              <RequestDetail
                request={requests.find((r) => r.id === selectedId)}
                onBack={() => setView('dashboard')}
                onUpdate={updateRequest}
              />
            )}

            {view === 'guide' && <Guide onBack={() => setView('dashboard')} />}
            {view === 'faq' && <FAQ onBack={() => setView('dashboard')} />}
            {view === 'about' && <About onBack={() => setView('dashboard')} />}

            <footer className="footer-note">
              RTI Assistant © 2024 — Empowering citizens to exercise their Right to Information 🇮🇳
            </footer>
          </main>
        </>
      )}
    </div>
  )
}
