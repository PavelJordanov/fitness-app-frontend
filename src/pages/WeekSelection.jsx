import { useParams } from "react-router-dom";

export default function WeekSelection() {
  const { phaseId, weekId } = useParams();

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        gap: "1rem",
      }}
    >
      <h2>Phase {phaseId}</h2>
      <h3>Week {weekId}</h3>
      <p>This is where you'll list the workouts for this week!</p>
    </div>
  );
}
