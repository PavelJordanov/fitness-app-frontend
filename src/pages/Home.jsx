import { useNavigate } from "react-router-dom";
export default function UserProgram() {
    const navigate = useNavigate();
    
    return (
      <div style={{
        padding: '2rem',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '1.5rem'
      }}>
        <h1>Welcome to the Nutra App</h1>
        
        <p>Your personalized fitness and nutrition hub.</p>
  
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button onClick={() => navigate('/phases/1')}>🔥 Continue Workout</button>
            <button onClick={() => navigate('/training')}>📅 View Training Plan</button>
            <button onClick={() => navigate('/nutrition')}>🥗 Log Nutrition</button>
            <button onClick={() => navigate('/profile')}>👤 Profile Settings</button>
        </div>
      </div>
    );
  }
  