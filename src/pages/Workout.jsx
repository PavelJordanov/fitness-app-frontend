import { useNavigate, useParams } from "react-router-dom";
export default function Workout() {
    const navigate = useNavigate();
    const { phaseId } = useParams(); // pulls the value from the URL
    const { weekId } = useParams(); // pulls the value from the URL
    const {workoutId} = useParams();

    const handleExerciseClick = (exerciseId) => {
        navigate(`/phases/${phaseId}/weeks/${weekId}/workout/${workoutId}/exercise/${exerciseId}`);
    };



    return (
        <div
        style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '1rem',
        }}>
            <h2>Workout {workoutId}</h2>

            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>

                {[1, 2, 3, 4].map((n) => {
                        const exerciseId = (parseInt(workoutId) - 1) * 4 + n;
                        return (
                            <button key={n} onClick={() => handleExerciseClick(exerciseId)}>
                                Exercise {exerciseId} <br />
                                <progress value={75} max={100} />
                            </button>
                        );
                })}
            </div>

            <button onClick={() => navigate(`/phases/${phaseId}/weeks/${weekId}`)}>Back to Workouts</button>

        </div>
    )
}