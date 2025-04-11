import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ExerciseDetail() {
    const { phaseId, weekId, workoutId, exerciseId } = useParams(); // pulls the value from the URL
    const navigate = useNavigate();

    // Define the state to store the inputs for the exercise
    const [sets, setSets] = useState([
        { set: 1, reps: "", weight: "" },
        { set: 2, reps: "", weight: "" },
        { set: 3, reps: "", weight: "" },
        { set: 4, reps: "", weight: "" }
    ]);
    const [confirmation, setConfirmation] = useState(false); // Handle confirmation state

    const handleInputChange = (index, field, value) => {
        const updatedSets = [...sets];
        updatedSets[index][field] = value;
        setSets(updatedSets);
    };

    const handleConfirm = () => {
        const isConfirmed = window.confirm("Are you sure you want to confirm your workout data?");
        
        if (isConfirmed) {
            // Save data, then confirm
            setConfirmation(true);

            // Simulate moving to the next workout after confirmation
            setTimeout(() => {
                navigate(`/phases/${phaseId}/weeks/${weekId}/workout/${parseInt(workoutId)}`); // Move to next workout
            }, 1500); // Wait 1.5 seconds for transition
        } else {
            // If 'No', reset values to empty
            setSets([
                { set: 1, reps: "", weight: "" },
                { set: 2, reps: "", weight: "" },
                { set: 3, reps: "", weight: "" },
                { set: 4, reps: "", weight: "" }
            ]);
        }
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
            <h2>Workout {workoutId} - Exercise {exerciseId}</h2>

            <div>
                {sets.map((set, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <h3>Set {set.set}</h3>
                        <input
                            type="number"
                            placeholder="Reps"
                            value={set.reps}
                            onChange={(e) => handleInputChange(index, "reps", e.target.value)}
                            style={{ marginRight: '10px' }}
                        />
                        <input
                            type="number"
                            placeholder="Weight (lbs)"
                            value={set.weight}
                            onChange={(e) => handleInputChange(index, "weight", e.target.value)}
                        />
                    </div>
                ))}
            </div>

            {!confirmation ? (
                <button onClick={handleConfirm} style={{ marginTop: '1rem' }}>
                    Confirm
                </button>
            ) : (
                <div style={{ color: 'green', marginTop: '1rem' }}>
                    <p>Progressing to the next workout...</p>
                </div>
            )}

            <button onClick={() => navigate(`/phases/${phaseId}/weeks/${weekId}/workout/${workoutId}`)}>
                Back to Exercises
            </button>
        </div>
    );
}
