import { useNavigate, useParams } from "react-router-dom";
export default function PhaseSelection() {
    const { phaseId } = useParams(); // pulls the value from the URL
    const navigate = useNavigate();

    const handleWeekClick = (weekId) => {
        navigate(`/phases/${phaseId}/weeks/${weekId}`);
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
            <h2>Phase {phaseId}</h2>

            <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => navigate('/phases/1')}>Phase 1</button>
                <button onClick={() => navigate('/phases/2')}>Phase 2</button>
                <button onClick={() => navigate('/phases/3')}>Phase 3</button>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[1, 2, 3, 4].map((n) => {
                    const weekId = (parseInt(phaseId) - 1) * 4 + n;
                    return (
                        <button key={n} onClick={() => handleWeekClick(weekId)}>
                            Week {weekId}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}