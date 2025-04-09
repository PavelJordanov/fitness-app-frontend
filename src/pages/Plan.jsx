export default function Plan() {
    const plan = {
      planId: "plan123",
      name: "Muscle Builder",
      description: "4-week hypertrophy program",
      lengthWeeks: 4,
      price: 60
    };
  
    return (
      <div style={{ padding: '2rem', color: 'white' }}>
        <h1>📘 Current Plan</h1>
        <p><strong>ID:</strong> {plan.planId}</p>
        <p><strong>Name:</strong> {plan.name}</p>
        <p><strong>Description:</strong> {plan.description}</p>
        <p><strong>Length:</strong> {plan.lengthWeeks} weeks</p>
        <p><strong>Price:</strong> ${plan.price}</p>
      </div>
    );
  }