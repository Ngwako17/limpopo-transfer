'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Matches() {
  const [me, setMe] = useState({ current_district: '', desired_district: '' })
  const [matches, setMatches] = useState([])
  const [searched, setSearched] = useState(false)

  async function findMatches() {
    const { data, error } = await supabase
      .from('teachers')
      .select('*')
      .eq('district', me.desired_district)
      .eq('desired_district', me.current_district)
    if (error) {
      alert('Error: ' + error.message)
    } else {
      setMatches(data || [])
      setSearched(true)
    }
  }

  return (
    <div style={{ padding: 20, maxWidth: 500 }}>
      <h1>Find Matches</h1>
      <input placeholder="Your current district" value={me.current_district}
        onChange={e => setMe({ ...me, current_district: e.target.value })}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <input placeholder="Your desired district" value={me.desired_district}
        onChange={e => setMe({ ...me, desired_district: e.target.value })}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <button onClick={findMatches} style={{ padding: 10 }}>Find Matches</button>

      {searched && matches.length === 0 && <p>No matches found yet.</p>}
      {matches.map(m => (
        <div key={m.id} style={{ border: '1px solid #ccc', padding: 10, marginTop: 10, borderRadius: 5 }}>
           <p><strong>{m.name}</strong> at {m.school}</p>
           <p>Subject: {m.subject}</p>
           <p>Contact: {m.contact}</p>
        </div>
      ))}

      {matches.length > 0 && (
        <div style={{ marginTop: 30, padding: 15, background: '#f7f7f7', borderRadius: 8 }}>
          <h3>What to do next</h3>
          <ol style={{ paddingLeft: 20, lineHeight: 1.8 }}>
            <li>Contact the teacher above and confirm you both want to swap.</li>
            <li>Check that both schools have a suitable vacancy for your subject and phase.</li>
            <li>Speak to your principal and SGB — they may need to support the request.</li>
            <li>Submit a transfer request through your district office (not email).</li>
            <li>Wait for the department's approval before resigning or moving.</li>
          </ol>
          <p style={{ marginTop: 10, fontSize: 13, color: '#555' }}>
            This app only helps you find a partner. The department decides whether the transfer is approved.
          </p>
        </div>
      )}
    </div>
  )
}