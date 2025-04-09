import { useNavigate } from "react-router-dom";
export default function Profile() {
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
        <h1>Profile Management</h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <button onClick={() => navigate('/profile/userinfo')}>User Info</button>
            <button onClick={() => navigate('/profile/plan')}>Plan</button>
            <button onClick={() => navigate('/profile/subscriptions')}>Subscriptions</button>
            <button onClick={() => navigate('/profile/balance')}>Balance</button>
            <button onClick={() => navigate('/profile/payments')}>Payments</button>
        </div>
      </div>
    );
}