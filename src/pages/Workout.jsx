import { useNavigate, useParams } from 'react-router-dom';

export default function Workout() {
    const { phaseId, weekId, workoutId } = useParams();
    const navigate = useNavigate();

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
            }}
        >
            <h2>Workout {workoutId}</h2>

            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>

            {[1, 2, 3, 4].map((exerciseId) => {
                const completed = JSON.parse(localStorage.getItem('completedExercises') || '{}');
                const key = `workout-${workoutId}-exercise-${exerciseId}`;
                const isComplete = completed[key];
                const progressValue = isComplete ? 100 : 0;

                return (
                    <div key={exerciseId}>
                    <button
                        onClick={() => handleExerciseClick(exerciseId)}
                        style={{
                        width: '200px',
                        padding: '0.5rem',
                        margin: '0.5rem 0',
                        backgroundColor: '#444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        Exercise {exerciseId} <br />
                        <progress value={progressValue} max={100} />
                    </button>
                    </div>
                );
                })}
            </div>

            <button
                onClick={() => navigate(`/phases/${phaseId}/weeks/${weekId}`)}
                style={{
                    marginTop: '1rem',
                    backgroundColor: '#444',
                    color: 'white',
                    padding: '0.5rem 1.5rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                }}
            >
                Back to Workouts
            </button>
        </div>
    );
}
