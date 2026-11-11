'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function AddTeacher() {
  const [form, setForm] = useState({
    name: '', school: '', district: '', subject: '',
    desired_district: '', contact: ''
  })
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    const { error } = await supabase.from('teachers').insert([form])
    if (error) {
      setMessage('Error: ' + error.message)
    } else {
      setMessage('Profile saved!')
      setForm({ name: '', school: '', district: '', subject: '', desired_district: '', contact: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20, maxWidth: 400 }}>
      <h1>Add Your Details</h1>
      <input placeholder="Your name" value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <input placeholder="Your current school" value={form.school}
        onChange={e => setForm({ ...form, school: e.target.value })}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <input placeholder="Your current district" value={form.district}
        onChange={e => setForm({ ...form, district: e.target.value })}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <input placeholder="Subject you teach" value={form.subject}
        onChange={e => setForm({ ...form, subject: e.target.value })}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <input placeholder="District you want to move to" value={form.desired_district}
        onChange={e => setForm({ ...form, desired_district: e.target.value })}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <input placeholder="Your contact (email or phone)" value={form.contact}
        onChange={e => setForm({ ...form, contact: e.target.value })}
        style={{ display: 'block', width: '100%', marginBottom: 10, padding: 8 }} />
      <button type="submit" style={{ padding: 10 }}>Save</button>
      {message && <p style={{ marginTop: 10 }}>{message}</p>}
    </form>
  )
}
