import { useNavigate, useParams } from "react-router-dom";
export default function WeekSelection () {
    const { phaseId } = useParams(); // pulls the value from the URL
    const { weekId } = useParams(); // pulls the value from the URL
    const navigate = useNavigate();

    const handleWorkoutClick = (workoutId) => {
        navigate(`/phases/${phaseId}/weeks/${weekId}/workout/${workoutId}`);
    };

    const handleWeekClick = (weekId) => {
        navigate(`/phases/${phaseId}/weeks/${weekId}`);
    };

    return (
        <div
        style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '1rem',
        }}>
            <h2>Week {weekId}</h2>

            <div style={{ display: 'flex', gap: '1rem' }}>

                {[1, 2, 3, 4].map((n) => {
                        const weekId = (parseInt(phaseId) - 1) * 4 + n;
                        return (
                            <button key={n} onClick={() => handleWeekClick(weekId)}>
                                Week {weekId}
                            </button>
                        );
                })}
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[1, 2, 3, 4].map((n) => {
                    const workoutId = (parseInt(weekId) - 1) * 4 + n;
                    return (
                        <button key={n} onClick={() => handleWorkoutClick(workoutId)}>
                            Workout {workoutId}
                        </button>
                    );
                })}
            </div>
            
            <div>
                <button onClick={() => navigate('/training')}>Phases</button>
            </div>
        </div>
    );
}