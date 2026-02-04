const KEY = 'rtia.requests.v1'

export function loadRequests() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch (e) {
    console.error('Load error:', e)
    return []
  }
}

export function saveRequests(list) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list))
  } catch (e) {
    console.error('Save error:', e)
  }
}
