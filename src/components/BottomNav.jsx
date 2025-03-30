export default function BottomNav() {
    return (
      <nav style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        background: '#eee',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        borderTop: '1px solid #ccc'
      }}>
        <a href="/">🏠 Home</a>
        <a href="/training">🏋️‍♂️ Training</a>
        <a href="/nutrition">🥗 Nutrition</a>
        <a href="/profile">👤 Profile</a>
      </nav>
    );
  }