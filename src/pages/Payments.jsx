export default function Payments() {
    const payments = [
      {
        paymentId: "pay001",
        userId: "user001",
        amount: 39.99,
        date: "2024-04-01"
      },
      {
        paymentId: "pay002",
        userId: "user001",
        amount: 24.99,
        date: "2024-01-15"
      }
    ];
  
    return (
      <div style={{ padding: '2rem', color: 'white' }}>
        <h1>💳 Payment History</h1>
        <table style={{ width: '100%', maxWidth: '600px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#333' }}>
              <th>Payment ID</th>
              <th>User ID</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.paymentId} style={{ borderBottom: '1px solid #444' }}>
                <td>{p.paymentId}</td>
                <td>{p.userId}</td>
                <td>${p.amount.toFixed(2)}</td>
                <td>{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }