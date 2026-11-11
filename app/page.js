import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Limpopo Teacher Transfer</h1>
      <p>Find a teacher to swap schools with.</p>
      <p style={{ fontSize: 13, color: '#555' }}>
        Your contact details are visible to other teachers using this service.
        Do not enter information you are not comfortable sharing.
      </p>
      <div style={{ marginTop: 20, display: 'flex', gap: 10 }}>
        <Link href="/add" style={{ padding: '10px 20px', background: '#0070f3', color: 'white', borderRadius: 5, textDecoration: 'none' }}>
          Add Your Details
        </Link>
        <Link href="/matches" style={{ padding: '10px 20px', background: '#28a745', color: 'white', borderRadius: 5, textDecoration: 'none' }}>
          Find Matches
        </Link>
        <Link href="/delete" style={{ padding: '10px 20px', background: '#d9534f', color: 'white', borderRadius: 5, textDecoration: 'none' }}>
          Delete My Profile
        </Link>
      </div>
    </div>
  )
}
