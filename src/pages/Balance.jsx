export default function Balance() {
    const balance = {
      balanceId: "bal001",
      userId: "user001",
      amount: 24.50
    };
  
    return (
      <div style={{ padding: '2rem', color: 'white' }}>
        <h1>💰 Your Balance</h1>
        <p><strong>Balance ID:</strong> {balance.balanceId}</p>
        <p><strong>User ID:</strong> {balance.userId}</p>
        <p><strong>Current Balance:</strong> ${balance.amount.toFixed(2)}</p>
      </div>
    );
  }