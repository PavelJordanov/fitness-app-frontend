import { useNavigate } from "react-router-dom";
export default function UserProgram() {
    const navigate = useNavigate(); // gives the ability to change pages

    // this function gets called when a button is clicked
    const handlePhaseClick = (phaseId) => {
        navigate(`/phases/${phaseId}`); // changes the URL to /phases/1, 2, or 3
    };

    return (
        <div
            style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            }}>
            <div
            style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.5rem',
                textAlign: 'center',
                width: '100%',
            }}>
                <h1 style={{ margin: 0 }}>Let's Get To Work</h1>
                <button onClick={() => handlePhaseClick(1)}>Phase 1</button>
                <button onClick={() => handlePhaseClick(2)}>Phase 2</button>
                <button onClick={() => handlePhaseClick(3)}>Phase 3</button>
            </div>
        </div>
    );
}