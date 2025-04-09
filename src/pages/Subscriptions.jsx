import { useEffect, useState } from "react";

export default function Subscriptions() {
  // Placeholder for fetched subscription data
  const [subscriptions, setSubscriptions] = useState([]);

  // TEMP: Replace this with actual fetch call later
  useEffect(() => {
    const mockData = [
      {
        subscriptionId: "sub001",
        userId: "user001",
        planId: "planA",
        startDate: "2024-01-01",
        endDate: "2024-04-01",
        price: 49.99
      },
      {
        subscriptionId: "sub002",
        userId: "user001",
        planId: "planB",
        startDate: "2024-05-01",
        endDate: "2024-08-01",
        price: 59.99
      }
    ];

    setSubscriptions(mockData);
  }, []);

  return (
    <div
      style={{
        padding: '2rem',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        minHeight: '100vh'
      }}
    >
      <h1>🔁 Subscription History</h1>

      <table
        style={{
          width: '100%',
          maxWidth: '800px',
          borderCollapse: 'collapse',
          marginTop: '2rem',
          backgroundColor: '#1a1a1a',
          color: 'white',
          borderRadius: '8px',
          overflow: 'hidden'
        }}
      >
        <thead>
          <tr style={{ backgroundColor: '#333' }}>
            <th style={thStyle}>Subscription ID</th>
            <th style={thStyle}>User ID</th>
            <th style={thStyle}>Plan ID</th>
            <th style={thStyle}>Start</th>
            <th style={thStyle}>End</th>
            <th style={thStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((sub) => (
            <tr key={sub.subscriptionId} style={{ borderBottom: '1px solid #444' }}>
              <td style={tdStyle}>{sub.subscriptionId}</td>
              <td style={tdStyle}>{sub.userId}</td>
              <td style={tdStyle}>{sub.planId}</td>
              <td style={tdStyle}>{sub.startDate}</td>
              <td style={tdStyle}>{sub.endDate}</td>
              <td style={tdStyle}>${sub.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: '12px',
  borderBottom: '1px solid #444',
  fontWeight: 'bold'
};

const tdStyle = {
  padding: '12px',
  textAlign: 'center'
};