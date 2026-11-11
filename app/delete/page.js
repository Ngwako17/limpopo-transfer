'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function DeleteProfile() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleDelete(e) {
    e.preventDefault()
    if (!confirm('Are you sure you want to delete your profile? This cannot be undone.')) return

    const { error } = await supabase
      .from('teachers')
      .delete()
      .eq('contact', email)

    if (error) {
      setMessage('Error: ' + error.message)
    } else {
      setMessage('Your profile has been deleted.')
      setEmail('')
    }
  }

  return (
    <form onSubmit={handleDelete} style={{ padding: 20, maxWidth: 400 }}>
      <h1>Delete My Profile</h1>
      <p style={{ fontSize: 14, color: '#555' }}>
        Enter the contact email or phone you used when you signed up.
      </p>
      <input placeholder="Your contact (email or phone)" value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <button type="submit" style={{ padding: 10, background: '#d9534f', color: 'white', border: 'none', borderRadius: 4 }}>
        Delete My Profile
      </button>
      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </form>
  )
}
