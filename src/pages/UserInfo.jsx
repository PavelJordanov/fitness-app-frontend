export default function UserInfo() {
    const user = {
        firstname: "Pavel",
        lastname: "Jordanov",
        dob: "2002-11-24",
        username: "TheTiger",
        weight: 192,
        height: 183,
        fitnessGoal: "Get Stronger For Cheer",
    }

    return (
        <div style={{paddding: '2rem', color: 'white'}}>
            <h1>👤 User Info</h1>
            <ul style={{listStyle:'none', padding: '2rem'}}>
            <li><strong>Name:</strong> {user.firstname} {user.lastname}</li>
            <li><strong>Username:</strong> {user.username}</li>
            <li><strong>DOB:</strong> {user.dob}</li>
            <li><strong>Weight:</strong> {user.weight} lbs</li>
            <li><strong>Height:</strong> {user.height} cm</li>
            <li><strong>Goal:</strong> {user.fitnessGoal}</li>
            </ul>
        </div>
    )
}